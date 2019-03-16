<!--The main page of your site-->

<template>
  <div id="app">

     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

      <RouterView/>

      <footer class="footer">
            
            <div class="content has-text-centered">
                <p>
                  <b>© Popshop 2019</b> 
                  <br>
                  <a class="tab-space" href="https://www.facebook.com/Popshop-384434792395944/" target="_blank">
                    <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }"/>
                  </a>
                  <span class="tab-space"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }"/></span>
                  <span class="tab-space"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }"/></span>
                </p>
            </div>
      </footer>
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



//custom bulma variables
//we can create the theme here!

$input-focus-border-color:transparent;
$input-focus-box-shadow-color:transparent;
$input-shadow: none;
$input-border-color: transparent;
//$button-border-color: #b7a3a6;
//$button-focus-border-color: #b7a3a6;
//$button-active-border-color:  #b7a3a6;
$family-primary: 'Brandon Grotesque', sans-serif;

@import "~bulma/css/bulma.css";
@import "bulma/sass/utilities/_all.sass";
@import "bulma/sass/grid/columns.sass";
@import "bulma/bulma.sass";

@font-face {
  font-family: "Brandon Grotesque";
  src: url('./assets/fonts/Brandon_light.otf');
      font-weight: normal;
      font-style: normal;
}

#app {
  font-family: "Brandon Grotesque", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

//add slight tabbing
.tab-space {
  padding-left:1em 
}

//change link color to none
a:link {
  color:none;
}

</style>
