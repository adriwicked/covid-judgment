import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Line,
  mixins: [reactiveProp],
  data: () => ({
    options: {
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        mode: 'nearest',
        intersect: false
      }
    }
  }),
  mounted() {
    this.renderChart(this.chartData, this.options)
  }
}