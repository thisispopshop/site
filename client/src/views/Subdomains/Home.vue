<template>
  <div class="home">

  <!--Banner-->
  <section class="hero banner_box" >
    <img src='@/assets/images/img0.jpg'>
    <router-link class="bottom-text is-size-6-mobile" to="/shop" exact-active-class="is-active">shop</router-link>
  </section>

  <!--Grid View-->
  <section>
    <div class="container grid_box">
      <div class="columns">
        <div class="column is-onequarter st0">
          <img class="full-img-size" src='@/assets/images/img3.jpg'>
          <router-link class="bottom-left-text is-size-1-mobile" to="/shop" exact-active-class="is-active">House Tours</router-link>
        </div>
        <div class="column is-onequarter st0">
          <img src='@/assets/images/img1.png'>
          <router-link class="bottom-left-text is-size-1-mobile" to="/shop" exact-active-class="is-active">Sisterhood</router-link>          
        </div>
        <div class="column is-onequarter st0">
          <img src='@/assets/images/img2.png'>
          <router-link class="bottom-left-text is-size-1-mobile" to="/shop" exact-active-class="is-active">Philanthropy</router-link>
        </div>
        <div class="column is-onequarter st0">
          <img src='@/assets/images/img2.png'>
          <router-link class="bottom-left-text is-size-1-mobile" to="/shop" exact-active-class="is-active">Preference</router-link>          
        </div>
      </div>
    </div>
  </section>
   
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {



}
</script>

<style lang='scss' scoped>

//@import '~/assets/css/popshopUIhomepage.css';
//banner size (doesn't even work)
.banner_box {
  position: relative;
  height: 20%;
}

//shop button text
.bottom-text {
  position: absolute;
  z-index:1;
  width: 100%;
  bottom: 5%;
  text-align: center;
  color: white;
  font-weight: bold;
  text-decoration: underline;
  font-size: 40px;
}

.bottom-text:hover{
  color:black
}

//grid container size
.grid_box {
  padding: 5%;
  justify-content: center;
  height: 30%;
}

//individual boxes
.st0 {
  position: relative;
  height: 100%;
}

//box text
.bottom-left-text {
  position: absolute;
  bottom: 8%;
  left: 8%;
  color: white;
  font-weight: bold;
  text-decoration: underline;
  font-size: 25px;
}


</style>
