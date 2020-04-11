import axios from 'axios'

export function getSpainTotalDeaths() {
  return axios.get('https://api.covid19api.com/total/dayone/country/spain/status/deaths')
}

export function getSpainDailyDeaths() {
  return axios.get('https://api.covid19api.com/total/dayone/country/spain/status/deaths')
}