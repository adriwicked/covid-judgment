import axios from 'axios';

export function getSpainDeathsTotal() {
  return axios.get('https://api.covid19api.com/total/dayone/country/spain/status/deaths')
}