<template>
<div>
  <div v-if="loading" style="height:90vh">
      <div class="cool-loader"></div>
  </div>
  <div v-else>
    <!--change this to be dynamic soon-->
    
    <!--customer navigation bar-->
    <nav class="navbar is-fixed-top" style="height:8vw" role="navigation" aria-label="dropdown navigation">

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
              <router-link class="mynavbaritem" to="/shop/0" exact-active-class="is-active">Shop</router-link>
            </div>
            <div class="navbar-dropdown mynavmenu mydropdownmenu is-hidden-touch" >
              <!--
              <div class="navbar-item"><router-link class="mydropdown" to="/shop" exact-active-class="is-active">House Tours</router-link></div>
              <div class="navbar-item"><router-link class="mydropdown" to="/shop" exact-active-class="is-active">Sisterhood</router-link></div>
              <div class="navbar-item"><router-link class="mydropdown" to="/shop" exact-active-class="is-active">Philanthropy</router-link></div>
              <div class="navbar-item"><router-link class="mydropdown" to="/shop" exact-active-class="is-active">Preference</router-link></div>
              -->
              <div class="navbar-item" v-for="(o,index) in occasions" v-bind:key="index" v-bind:value="o">
                <router-link class="mydropdown" v-bind:to="'/shop/'+index" exact-active-class="is-active" v-on:click="chooseOccasion(o,index)">{{o.name}}</router-link>
              </div>
            </div>
          </div>
          <div class="navbar-item">
            <router-link class="mynavbaritem" to="/info" exact-active-class="is-active">Info</router-link> 
          </div>
          <div class="navbar-item">
            <router-link class="mynavbaritem" to="/submit" exact-active-class="is-active">Submit</router-link> 
          </div>
        </div>

        <!--logo-->
        <!--current menu padding causing it to be off center-->
        <div class="navbar-item is-hidden-mobile is-hidden-touch logo-size" style="padding-right:45%">
            <router-link to="/home"><img  src="@/assets/popshop_logo.png" alt="logo" ></router-link>
        </div>

        <!--right side
        <div class="navbar-end is-hidden-mobile">
          <span style="margin-left:33px"></span>
          <div class="navbar-item">
              <router-link class="mynavbaritem" to="/home" exact-active-class="is-active">
                <font-awesome-icon :icon="{ prefix: 'far', iconName: 'heart' }"/>
              </router-link>
          </div>
          <span style="width:33px"></span>
          <div class="navbar-item">
              <router-link class="mynavbaritem" to="/home" exact-active-class="is-active">
                <font-awesome-icon :icon="{ prefix: 'far', iconName: 'user' }"/>
              </router-link>
          </div>
          <span style="padding-right:33px"></span>
        </div>-->

      </div>
    </nav>

  <div style="height:8vw"></div>

  <!--Need this in here if you want other pages to show!!!-->
  <router-view v-bind:org="org" v-bind:event="event" v-bind:occasions="occasions" />

  </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import axios, {AxiosError, AxiosResponse} from "axios";
import { APIConfig } from "@/utils/api.utils";
import { iOrganization, iEvent, iOccasion} from "@/models";

@Component
export default class Navigation extends Vue {

    //declare organization's info
    public org_name!: String;
    public org! : iOrganization;
    public event!: iEvent;
    public occasions! : iOccasion[];
    public error : string | boolean = false;
    public selectedOccasion!: iOccasion;

    public loading: boolean = false;

    created(){
      setTimeout(() => {
        this.loading = false;
      },1700);
      this.loading = true;
    }

    //load data
    mounted(){

      const host = window.location.host;
      const url = host.split('.');
      this.org_name = url[0];
      
      this.error = false;
      axios.get(APIConfig.buildUrl("/api/organization?subdomain=" + this.org_name))
        .then((response:AxiosResponse) => {
          this.org = response.data.organizations[0];
          this.event = this.org.events[0];
          this.occasions = this.event.occasions;
          this.selectedOccasion = this.occasions[0];
          console.log(this.org);
          console.log(this.event);
          console.log(this.occasions);
          //this.loading = true;
        })
        .catch((res:AxiosError) => {
          console.log("couldn't find organization?");
          this.error = res.response && res.response.data.reason;
          this.$router.push("/error");
        })
    }

    @Watch("loading")
    update(){
      //this.mounted();
    }

  getDomainName(){
      const host = window.location.host;
      const url = host.split('.');
      const subdomain = url[0];
      const domain = "localhost:8080";
      //const domain = "thisispopshop"
     
      // redirect to home page or not
      if (subdomain === "www" || subdomain === domain){
        if (url.length == 2)
          this.$router.push("/");
        else if (url.length > 2){
          const firstPage = url[2];
          //const firstPage = url[3];
          if (firstPage === "/thanks")
            this.$router.push({name:"ThanksLandingPage", params:{id:"thanks"}});
          else 
            this.$router.push("/");
        }
      } else if (subdomain === "admin"){
        this.$router.push({name: "organizations"});
      }
      else {
        this.$router.push({path:"sub_home"});
      }

  }

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
  //opacity: 0.9;
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
  font-size: 24px;
  box-shadow: 0px;
}

//navbar enbolden upon hover
.navbar-item:hover .mydropdown:hover{
  font-weight: bold;
}

//make centered logo bigger
.logo-size {
  //width: 135px;
  //height: 96.44px;
  overflow: hidden;
  justify-content: center;
  padding-right: 33px;
  
  & img {
    object-fit: cover;
    min-height: 96px;
    min-width: 100%;
  }
}

//cool loader
.cool-loader{
    border:10px solid;
    width:200px;
    height:200px;
    border-radius:50%;
    border-color:#FAE4E9 transparent transparent;
    animation:spin 2s linear infinite;
    position:fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    margin:auto;
  }
  
  @keyframes spin{
    100%{transform:rotate(360deg);filter: #FAE4E9}
    //filter:hue-rotate(360deg)}
    
  }

</style>