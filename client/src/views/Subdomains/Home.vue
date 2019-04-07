<template>
  <div class="home">

  <!--Banner-->
  <section class="hero banner_box" >
    <img src='@/assets/images/img0.jpg'>
    <router-link class="bottom-text is-size-6-mobile" to="/shop" exact-active-class="is-active">Shop</router-link>
  </section>

  <!--Grid View-->
  <section>
    <div class="grid-boxes">
      <div class="columns">
        <div class="column is-onequarter grid-box">
          <router-link to="/shop">
            <img src='@/assets/images/img3.jpg' class="grid-box-image">
            <p class="bottom-left-text is-size-1-mobile">House Tours</p> 
          </router-link>
        </div>
        <div class="column is-onequarter grid-box">
          <router-link to="/shop">
            <img src='@/assets/images/img1.png' class="grid-box-image"> 
            <p class="bottom-left-text is-size-1-mobile">Sisterhood</p>  
          </router-link>     
        </div>
        <div class="column is-onequarter grid-box">
           <router-link to="/shop">
            <img src='@/assets/images/img2.png' class="grid-box-image">
            <p class="bottom-left-text is-size-1-mobile">Philanthropy</p>  
           </router-link>
        </div>
        <div class="column is-onequarter grid-box">
          <router-link to="/shop">
            <img src='@/assets/images/img2.png' class="grid-box-image">
            <p class="bottom-left-text is-size-1-mobile">Preference</p> 
          </router-link>       
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
.grid-boxes {
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
  height: 450px;
  object-fit: cover;
  overflow: hidden;
}

.grid-box:hover {
  opacity: 0.8;
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
