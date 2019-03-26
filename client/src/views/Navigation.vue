<template>
  <div>
  <!--<div class="home">-->
    
    <!--change this to be dynamic soon-->
    
    <!--customer navigation bar-->
    <nav class="navbar" role="navigation" aria-label="dropdown navigation">

      <!--links-->
      <div class="navbar-menu">

        <!--<div class="navbar-brand"></div>-->
        
        <!--left side-->
        <div class="navbar-start" >
          <div class="navbar-item has-dropdown is-hoverable" > 
            <router-link class="navbar-item" to="/" exact-active-class="is-active">Shop</router-link>
            <div class="navbar-dropdown" >
              <router-link class="navbar-item"  to="/" exact-active-class="is-active">House Tours</router-link>
              <router-link class="navbar-item"  to="/" exact-active-class="is-active">Sisterhood</router-link>
              <router-link class="navbar-item"  to="/" exact-active-class="is-active">Philanthropy</router-link>
              <router-link class="navbar-item"  to="/" exact-active-class="is-active">Preference</router-link>
            </div>
          </div>
          <router-link class="navbar-item " to="/" exact-active-class="is-active">Info</router-link> 
          <router-link class="navbar-item" to="/" exact-active-class="is-active">Submit</router-link>
        </div>


        <!--logo-->
        <div class="navbar-item"  style="justify-content: center;">
            <img src="@/assets/popshop_logo.png" alt="logo" >
        </div>

        <!--right side-->
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <router-link class="navbar-item" to="/" exact-active-class="is-active">
                <font-awesome-icon :icon="{ prefix: 'far', iconName: 'heart' }"/>
              </router-link>
              <router-link class="navbar-item" to="/" exact-active-class="is-active">
                <font-awesome-icon :icon="{ prefix: 'far', iconName: 'user' }"/>
              </router-link>
            </div>
          </div>
        </div>

      </div>
    </nav>

  </div>

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Navigation extends Vue {


}
</script>
