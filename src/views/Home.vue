<template>
  <div class="home">
    <section class="title">
      <h1>Muertos en España por COVID19: <span>{{deaths}}</span></h1>
    </section>
    <div class="chartContainer">
      <spain-daily-deaths v-if="dailyDeathsData" :chart-data="dailyDeathsData"></spain-daily-deaths>
    </div>
  </div>
</template>

<script>
import { getSpainTotalDeaths } from "../services/covid19";
import spainTotalDeaths from "../components/spainTotalDeaths";
import spainDailyDeaths from "../components/spainDailyDeaths";

export default {
  name: "Home",
  components: {
    spainTotalDeaths,
    spainDailyDeaths
  },
  data() {
    return {
      deaths: Number,
      totalDeathsData: null,
      dailyDeathsData: null
    };
  },
  created() {
    getSpainTotalDeaths().then(({ data: days }) => {
      this.deaths = days[days.length - 1].Cases;

      days = days.filter(day => day.Cases > 0);

      const dates = days.map(day => this.parseDate(day.Date));
      const deaths = days.map(day => day.Cases);

      const dailyDeaths = deaths.map(
        (accumulated, i, deaths) => accumulated - deaths[i - 1]
      );
      this.dailyDeathsData = {
        labels: dates,
        datasets: [
          {
            label: "Muertos diarios en España",
            data: dailyDeaths
          }
        ]
      };
    });
  },
  methods: {
    parseDate(dateString) {
      const date = new Date(dateString);
      return `${date.getDate()}/${date.getMonth() + 1}`;
    }
  }
};
</script>

<style lang="scss">
.title {
  margin-bottom: 2rem;

  span {
    color: #e8bd13;
  }
}

.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.chartContainer {
  width: 80%;
  padding: 3rem 2rem;
  background-color: #252429;
  border-radius: 10px;
}
</style>