<template>
  <div class="home">
    <h1>Número de muertos en España: {{deaths}}.</h1>
    <div class="chartContainer">
      <spain-deaths-chart
        v-if="chartData"
        :chart-data="chartData"
      ></spain-deaths-chart>
    </div>
  </div>
</template>

<script>
import { getSpainDeathsTotal } from "../services/covid19"
import spainDeathsChart from "../components/spainDeathsChart"

export default {
  name: "Home",
  components: {
    spainDeathsChart
  },
  data() {
    return {
      deaths: {
        type: Number,
        default: 0
      },
      chartData: null,
      options: {
        type: Object,
        default: () => ({
          responsive: true
        })
      }
    }
  },
  created() {
    getSpainDeathsTotal().then(({ data: days }) => {
      this.deaths = days[days.length - 1].Cases

      days = days.filter(day => day.Cases > 0)
      const dates = days.map(day => this.parseDate(day.Date))
      const deaths = days.map(day => day.Cases)
      this.chartData = {
        labels: dates,
        datasets: [{
          label: "Deaths in Spain",
          borderColor: 'rgb(216, 34, 34, 0.5)',
          backgroundColor: 'rgb(216, 34, 34, 0.2)',
          lineTension: 0.3,
          data: deaths
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