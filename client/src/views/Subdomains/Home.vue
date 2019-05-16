<template>
  <div class="home">

  <!--Banner-->
  <section class="hero banner_box">
    <figure class="image is-3by1">
      <img v-bind:src="org.images[0].url" alt="org.name">
    </figure>
    <div class="bottom-text-section">
    <router-link class="bottom-text is-size-6-mobile" to="/shop/0" exact-active-class="is-active">
        <span class="highlight-text side-space">Shop</span>
      </router-link>
    </div>
    
  </section>

  <!--Grid View-->
  <section>
    <div class="grid-boxes">
      <div class="columns">
        <div class="column is-onequarter grid-box"  v-for="(occ, index) in occasions" v-bind:key="index" v-bind:value="occ">

          <!--<div v-for="(occ, index) in occasions" v-bind:key="index" v-bind:value="occ">-->
            <router-link v-bind:to="'/shop/' +index">
              <figure class='image grid-box-image '>
              <img v-bind:src="occ.images[0].url" />
              </figure>
               <!--<p class="bottom-left-text is-size-1-mobile">{{occ.name}}</p> -->
               <p class="bottom-left-text is-size-1-mobile">
                 <span class="highlight-text">{{occ.name}}</span>
              </p>  
            </router-link>  
          <!--</div> -->
        </div>
      </div>

    </div>
  </section>
   
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import { Component, Vue, Prop , Watch} from "vue-property-decorator";
import axios, {AxiosError, AxiosResponse} from "axios";
import { APIConfig } from "@/utils/api.utils";
import { iOrganization, iEvent, iOccasion} from "@/models";

@Component
export default class Home extends Vue {

    //pass subomain here
    //@Prop() org_name! : String;
    //@Prop(String) org_name! : string;
    @Prop() org! : iOrganization;
    @Prop() event! : iEvent;
    @Prop() occasions! : iOccasion[];
    error : string | boolean = false;

    //occasions : iOccasion[] = [];

    //load the organization
    mounted(){}

}
</script>

<style lang='scss' scoped>

//@import '~/assets/css/popshopUIhomepage.css';
//banner size (doesn't even work)
.banner_box {
  position: relative;
  height: 30%;
}

//shop button text
.bottom-text {
  position: absolute;
  z-index:1;
  width: 100%;
  bottom: 5%;
  text-align: center;
  color:black;
  font-weight: bold;
  //text-decoration: underline;
  font-size: 40px;
}

.bottom-text:hover{
  color:grey
}

.highlight-text {
  background-color:#f9f9f9;
  margin-left: 5%;
  margin-right: 5%;
  border-radius: 1px;
  padding-left:1em ;
  padding-right: 1em;
  opacity: 0.7;
}

//grid container size
.grid-boxes {
  display: flex;
  position: relative;
  padding: 5%;
  justify-content: center;
  height: 40%;
  margin-left: 5%;
  margin-right: 5%;
}

//individual boxes
.grid-box {
  position: relative;
  height: 100%;
}

.grid-box-image {
  width: 100%;
  //height: 450px;
  object-fit: cover;
  overflow: hidden;

  img {
    height: 25vw;
    width: auto;
  }

  :hover {
    opacity: 0.8;
  }
}

//box text
.bottom-left-text {
  position: absolute;
  margin-bottom:auto;
  bottom: 8%;
  //left: 8%;
  text-align:center;
  color: black;
  font-weight: bold;
  //text-decoration: underline;
  font-size: 25px;
  z-index:1;
  width: 100%;

  :hover {
    color:grey
  }
}
<<<<<<< HEAD
=======
/*comment*/
>>>>>>> 4168594ddfc0685d5f55168d32dd7d580b563649

</style>
