<template>
  <div >
      
    <nav class="navbar " role="navigation" aria-label="dropdown navigation">

      <!--toggle menu for mobile-->
      <div class="navbar-brand">
        <div class="navbar-item" >
            <router-link to="/home"><img src="@/assets/popshop_logo.png" alt="logo" ></router-link>
        </div>
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" 
          v-bind:class="{'is-active': showNav}" data-target="navBarMenu" v-on:click="showMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div> 

      <!--links-->
      <div class="navbar-menu" id="navBarMenu"  v-bind:class="{'is-active': showNav}">  

        <!--left side-->
        <div class="navbar-start">
          <div class="navbar-item is-hoverable" >
          <div class="navbar-item">
            <router-link class="mynavbaritem" to="/admin" exact-active-class="is-active">Home</router-link> 
          </div>
          <div class="navbar-item">
            <router-link class="mynavbaritem" to="/admin/collections" exact-active-class="is-active">Collections</router-link> 
          </div>
          <div class="navbar-item">
            <router-link class="mynavbaritem" to="/admin/curate" exact-active-class="is-active">Curate</router-link> 
          </div>
        </div>
      </div>
      </div>

        <!--right side-->
        <div class="navbar-end is-hidden-mobile">
          <div class="navbar-item">
              <router-link class="mynavbaritem" to="/home" exact-active-class="is-active">
                <font-awesome-icon :icon="{ prefix: 'far', iconName: 'heart' }"/>
              </router-link>
          </div>
          <div class="navbar-item">
              <router-link class="mynavbaritem" to="/home" exact-active-class="is-active">
                <font-awesome-icon :icon="{ prefix: 'far', iconName: 'user' }"/>
              </router-link>
          </div>
        </div>

    </nav>

  <!--Need this in here if you want other pages to show!!!-->
  <router-view/>

  </div>
</template>

<script lang="ts">
/* eslint-disable */
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Navigation extends Vue {

  public showNav : Boolean = false;

  //toggle menu
  showMenu(){
    this.showNav = !this.showNav;
  }

}
</script>