<template>
  <div >
    <nav class="navbar " role="navigation" aria-label="dropdown navigation">

      <!--toggle menu for mobile-->
      <div class="navbar-brand">
        <div class="navbar-item is-hidden-desktop is-hidden-tablet" >
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
      <div class="navbar-menu mynavmenu" id="navBarMenu"  v-bind:class="{'is-active': showNav}">  

        <!--left side-->
        <div class="navbar-start">
          <div class="navbar-item has-dropdown is-hoverable" > 
            <div class="navbar-item">
              <router-link class="mynavbaritem" to="/dashboard" exact-active-class="is-active">home</router-link> 
            </div>
            <!--<div class="navbar-item">
              <router-link class="mynavbaritem" to="/collections" exact-active-class="is-active">Collections</router-link> 
            </div>-->
            <div class="navbar-item">
              <router-link class="mynavbaritem" to="/curate" exact-active-class="is-active"><strong>curate</strong></router-link> 
            </div>
            <div class="navbar-item">
              <router-link class="mynavbaritem" to="/dashboard" exact-active-class="is-active">submissions</router-link>
            </div>
          </div>
        </div>

        <!--logo-->
        <!--current menu padding causing it to be off center-->
        <div class="navbar-item is-hidden-mobile logo-size">
            <router-link to="/home"><img  src="@/assets/popshop_logo.png" alt="logo" ></router-link>
        </div>

        <!--right side-->
        <div class="navbar-end is-hidden-mobile">
          <span style="margin-left:100px"></span>
          <div class="navbar-item">
              <router-link class="mynavbaritem" to="/dashboard" exact-active-class="is-active">
                <font-awesome-icon :icon="{ prefix: 'far', iconName: 'heart' }"/>
              </router-link>
          </div>
          <span style="width:33px"></span>
          <div class="navbar-item">
              <router-link class="mynavbaritem" to="/dashboard" exact-active-class="is-active">
                <font-awesome-icon :icon="{ prefix: 'far', iconName: 'user' }"/>
              </router-link>
          </div>
          <div class='navbar-item'>
            <router-link v-if="loggedIn" to="/logout">Log out</router-link>
            <router-link v-if="!loggedIn" to="/login">Log in</router-link>
          </div>
          <span style="padding-right:33px"></span>
        </div>

      </div>
    </nav>

  <!--Need this in here if you want other pages to show!!!-->
  <!--<router-view/>-->

  <template v-if="$route.matched.length">
      <router-view></router-view>
    </template>
    <template v-else>
      <p>You are logged {{ loggedIn ? 'in' : 'out' }}</p>
    </template>

  </div>
</template>

<script lang="ts">
/* eslint-disable */
import { Component, Vue } from "vue-property-decorator";
import auth from "@/Auth";

@Component
export default class AdminNavigation extends Vue {

  public showNav : Boolean = false;
  public loggedIn : Boolean = false;

  created() {
    auth.onChange = loggedIn => {
      this.loggedIn = loggedIn
    }
  }
  mounted(){
    this.loggedIn = auth.loggedIn()
  }

  //toggle menu
  showMenu(){
    this.showNav = !this.showNav;
  }

}
</script>