<template>
  <div id="app">
    <header-app></header-app>
    <router-view />
  </div>
</template>

<script>
import HeaderApp from './components/HeaderApp'

export default {
  name: 'App',
  components: {
    HeaderApp
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;  
}

html, body, div, span, object, iframe,
h1, h2, h3, h4, h5, h6, p, 
form, label, legend,
table, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, 
footer, header, menu, nav, section, summary {
  margin:0;
  padding:0;
  border:0;
  outline:0;
  font-size:100%;
  vertical-align:baseline;
  background:transparent;
  color: #fff;
}

body {
  line-height: 1;
  background-color: #1e1e24;
}

h1 {
  font-size: 24px;
}

nav ul {
  list-style:none;
}

a {
  margin:0;
  padding:0;
  font-size:100%;
  vertical-align:baseline;
  background:transparent;
}

table {
    border-collapse:collapse;
    border-spacing:0;
}

hr {
    display:block;
    height:1px;
    border:0;  
    border-top:1px solid #cccccc;
    margin:1em 0;
    padding:0;
}

input, select {
    vertical-align:middle;
}
</style>
