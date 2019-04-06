<template>
  <div >
    <!--change this to be dynamic soon-->
    
    <!--customer navigation bar-->
    <!--add "is-fixed-top" for sticky-->
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
              <router-link class="mynavbaritem" to="/shop" exact-active-class="is-active">shop</router-link>
            </div>
            <div class="navbar-dropdown mynavmenu mydropdownmenu is-hidden-touch" >
              <div class="navbar-item"><router-link class="mydropdown" to="/shop" exact-active-class="is-active">House Tours</router-link></div>
              <div class="navbar-item"><router-link class="mydropdown" to="/shop" exact-active-class="is-active">Sisterhood</router-link></div>
              <div class="navbar-item"><router-link class="mydropdown" to="/shop" exact-active-class="is-active">Philanthropy</router-link></div>
              <div class="navbar-item"><router-link class="mydropdown" to="/shop" exact-active-class="is-active">Preference</router-link></div>
            </div>
          </div>
          <div class="navbar-item">
            <router-link class="mynavbaritem" to="/info" exact-active-class="is-active">info</router-link> 
          </div>
          <div class="navbar-item">
            <router-link class="mynavbaritem" to="/submit" exact-active-class="is-active">submit</router-link> 
          </div>
        </div>

        <!--logo-->
        <!--current menu padding causing it to be off center-->
        <div class="navbar-item is-hidden-mobile"  style="justify-content: center;">
            <router-link to="/home"><img src="@/assets/popshop_logo.png" alt="logo" ></router-link>
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
export default class AdminNavigation extends Vue {

  public showNav : Boolean = false;

  //toggle menu
  showMenu(){
    this.showNav = !this.showNav;
  }

}

</script>
 
<style lang="scss">

//navbar spacing
.mynavmenu {
  padding-left: 5%;
  padding-right: 5%;
  font-size: 30px;
  color:black;
}

.mydropdownmenu {
  border-radius: 1px;
  opacity: 0.9;
  padding: 30%;
  box-shadow: none;
  border: none;
  outline: none;
}

//navbar color
.mynavbaritem {
  color:black;
}
.mynavbaritem:hover {
  font-weight: bold;
}

//navbar dropdown color
.mydropdown {
  color:black;
  font-weight: normal;
  font-size: 25px;
  box-shadow: 0px;
}

//navbar enbolden upon hover
.navbar-item:hover .mydropdown:hover{
  font-weight: bold;
}

</style>