<template>
  <div class="home">
    <h1>Número de muertos en España: {{deaths}}.</h1>
  </div>
</template>

<script>
import { getSpainDeathsTotal } from "../services/covid19";

export default {
  name: "Home",
  data() {
    return {
      deaths: {
        type: Number,
        default: 0
      }
    };
  },
  created() {
    getSpainDeathsTotal()
      .then(({ data: days }) => this.deaths = days[days.length - 1].Cases)
  }
};
</script>
