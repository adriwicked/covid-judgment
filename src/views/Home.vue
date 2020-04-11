<template>
  <div class="home">
    <h1>Número de muertos en España: {{deaths}}.</h1>
    <div class="chartContainer">
      <spain-total-deaths
        v-if="totalDeathsData"
        :chart-data="totalDeathsData"
      ></spain-total-deaths>
      <br>
      <spain-daily-deaths
        v-if="totalDeathsData"
        :chart-data="dailyDeathsData"
      ></spain-daily-deaths>
    </div>
  </div>
</template>

<script>
import { getSpainTotalDeaths } from "../services/covid19"
import spainTotalDeaths from "../components/spainTotalDeaths"
import spainDailyDeaths from "../components/spainDailyDeaths"

export default {
  name: "Home",
  components: {
    spainTotalDeaths,
    spainDailyDeaths
  },
  data() {
    return {
      deaths: {
        type: Number,
        default: 0
      },
      totalDeathsData: null,
      dailyDeathsData: null
    }
  },
  created() {
    getSpainTotalDeaths().then(({ data: days }) => {
      this.deaths = days[days.length - 1].Cases

      days = days.filter(day => day.Cases > 0)
      const dates = days.map(day => this.parseDate(day.Date))
      const deaths = days.map(day => day.Cases)
      this.totalDeathsData = {
        labels: dates,
        datasets: [{
          label: "Total deaths in Spain",
          borderColor: 'rgb(216, 34, 34, 0.5)',
          backgroundColor: 'rgb(216, 34, 34, 0.2)',
          lineTension: 0.3,
          data: deaths
        }]
      }

      const dailyDeaths = deaths.map((accumulated, i, deaths) => accumulated - deaths[i - 1])
      this.dailyDeathsData = {
        labels: dates,
        datasets: [{
          label: "Daily deaths in Spain",
          backgroundColor: 'rgb(17, 150, 233, 1)',
          lineTension: 0.3,
          data: dailyDeaths
        }]
      }
    })
  },
  methods: {
    parseDate(dateString) {
      const date = new Date(dateString)
      return `${date.getDate()}/${date.getMonth() + 1}`
    }
  }
}
</script>