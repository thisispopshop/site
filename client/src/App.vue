<!--The main page of your site-->

<template>
  <div id="app">

     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

      <RouterView/>

      <footer class="footer">
            
            <div class="content has-text-centered">
                <p><b>© Popshop 2019</b></p>
                <!--<font-awesome-icon icon="coffee" />-->
                  <i class="fas fa-instagram"></i>
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
$family-primary: 'Josefin Sans', sans-serif;

@import "~bulma/css/bulma.css";
@import "bulma/sass/utilities/_all.sass";
@import "bulma/sass/grid/columns.sass";
@import "bulma/bulma.sass";

//imports the font
@import url("https://fonts.googleapis.com/css?family=Josefin+Sans:300,300i");
//@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");

#app {
  //font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-family: 'Josefin Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}


</style>
