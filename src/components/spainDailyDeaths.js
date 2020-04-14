import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

const TOOLTIPS = {
  mode: 'index',
  axis: 'x',
  intersect: false,
  xPadding: 10,
  yPadding: 10,
  titleFontColor: '#000',
  titleFontSize: 16,
  bodyFontColor: '#000',
  bodyFontSize: 12,
  backgroundColor: '#fff'
}

export default {
  extends: Line,
  mixins: [reactiveProp],
  data: () => ({
    options: {
      responsive: true,
      maintainAspectRatio: false,
      tooltips: TOOLTIPS,
      legend: { 
        position: 'bottom',
        labels: {
          fontSize: 14,
          fontColor: '#fff',
          fontStyle: 'bold',
          boxWidth: 15,
          padding: 20
        }
      },
      elements: {
        point: {
          radius: 4,
          backgroundColor: 'rgb(220, 176, 0)',
          borderWidth: 0
        },
        line: {
          borderColor: '#e8bd13',
          tension: 0
        }
      },
      scales: {
        yAxes: [{
          ticks: {
            fontColor: "#fff",
            fontSize: 14,
            fontStyle: 'bold'
          },
          gridLines: {
            color: '#333',
            zeroLineWidth: 3,
            zeroLineColor: '#fff'
          }
        }],
        xAxes: [{
          ticks: {
            fontColor: "#fff",
            fontSize: 14,
            fontStyle: 'bold'
          },
          gridLines: {
            color: '#333',
            zeroLineWidth: 3,
            zeroLineColor: '#fff'
          }
        }]
      }
    }
  }),
  mounted() {
    this.renderChart(this.chartData, this.options)
  }
}