<template>
  <div class="home">    
    <div class="chartContainer">
      <spain-daily-deaths
        v-if="dailyDeathsData"
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

      const dailyDeaths = deaths.map((accumulated, i, deaths) => accumulated - deaths[i - 1])
      this.dailyDeathsData = {
        labels: dates,
        datasets: [{
          label: "Daily deaths in Spain",       
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

<style lang="scss">
  .home {
    display: flex;
    justify-content: center;
  }

.chartContainer {
  width: 80%;
}
</style>