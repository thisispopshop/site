<!--The main page of your site-->

<template>
  <div id="app">

    <!--tab title thing-->
    <vue-headful
        title="Popshop"
    />

      <RouterView/>

      <footer class="footer my-footer" style="padding-bottom: 2%">
          
            <div class="content has-text-centered">
              <b style="font-size: 23px; padding-bottom: 10px">© Popshop 2019</b> <br>

              <!--social media-->
              <a id="mail" class="social-media-icon" href="mailto:thepopshopteam@gmail.com">
                <img src="@/assets/icons/footer_mail.png" alt="mail logo">
              </a>
              <a id="instagram" class="tab-space social-media-icon" href="https://www.instagram.com/thisispopshop/" target="_blank">
                <img src="@/assets/icons/footer_instagram.png" alt="instagram logo">
              </a>
              <a id="facebook" class="tab-space social-media-icon" href="https://www.facebook.com/Popshop-384434792395944/" target="_blank">
                <img src="@/assets/icons/footer_facebook.png" alt="facebook logo">
              </a>
              <a id="linkedin" class="tab-space social-media-icon" href="https://www.linkedin.com/company/thisispopshop/about/" target="_blank">
                <img src="@/assets/icons/footer_linkedin.png" alt="linkedin logo">
              </a>
              <a id="github" class="tab-space social-media-icon" href="https://github.com/thisispopshop/site" target="_blank">
                <img src="@/assets/icons/footer_github.png" alt="github logo">
              </a>
              <!--<font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }"/>-->
              <!--<font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }"/>-->

            </div>
      </footer>
  </div>
</template>

<script lang="ts">
/* eslint-disable */

//import axios from "axios";
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

$navbar-dropdown-boxed-radius: 0px;
//$navbar-height:  6.25rem;
$navbar-item-img-max-height: 8rem;

$dropdown-item-active-background-color: none;
$family-primary: 'Brandon Grotesque', sans-serif;

@import "~bulma/css/bulma.css";
@import "bulma/sass/utilities/_all.sass";
@import "bulma/sass/grid/columns.sass";
@import "bulma/bulma.sass";
@import url('https://fonts.googleapis.com/css?family=Homemade+Apple&display=swap');

@font-face {
  font-family: "Brandon Grotesque";
  src: url('./assets/fonts/Brandon_light.otf');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Brandon Grotesque";
  src: url('./assets/fonts/Brandon_reg.otf');
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: "Brandon Grotesque Thin";
  src: url('./assets/fonts/Brandon_thin.otf');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "Brandon Grotesque Thin";
  src: url('./assets/fonts/Brandon_thin_it.otf');
  font-weight: normal;
  font-style: italic;
}

@font-face {
  font-family: "Brandon Grotesque Thick";
  src: url('./assets/fonts/Brandon_bld.otf');
  font-weight: bold;
  font-style: normal;
}

@font-face{
  font-family: "Homemade Apple", cursive;
  src: url('https://fonts.googleapis.com/css?family=Homemade+Apple&display=swap');
  font-weight: normal;
  font-style:normal;
}

#app {
  font-family: "Brandon Grotesque", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

//add slight tabbing
.tab-space {
  //padding-left:1em 
  padding-left:0.5em
}

//change link color to none
a:link {
  color:black;
}

.social-media-icon {
  color:black
}

body {
  background: #fcfcfc
}

.my-footer {
  background: none;
  margin-bottom: 0%;
}
/*comment*/
</style>
