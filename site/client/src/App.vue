<!--The main page of your site-->

<template>
  <div id="app">
      <RouterView/>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import Vue from "vue";
import { Component }  from "vue-property-decorator";

@Component
export default class App extends Vue {}
</script>


<style lang="scss">
@import "~bulma/css/bulma.css";
@import "bulma/sass/utilities/_all.sass";
@import "bulma/sass/grid/columns.sass";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
