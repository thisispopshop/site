<template>
  <div class="home">

  <!--Banner-->
  <section class="hero banner_box" >
    <img src='@/assets/images/img0.jpg'>
    <router-link class="bottom-text" to="/home" exact-active-class="is-active">shop</router-link>
  </section>

  <!--Grid View-->
  <section>
    <div class="container grid_box">
      <div class="columns">
        <div class="column is-onequarter st0">
          <img src='@/assets/images/img3.jpg'>
          <div class="bottom-left-text">House Tours</div>
        </div>
        <div class="column is-onequarter st0">
          <img src='@/assets/images/img1.png'>
          <div class="bottom-left-text">Sisterhood</div>
        </div>
        <div class="column is-onequarter st0">
          <img src='@/assets/images/img2.png'>
          <div class="bottom-left-text">Philanthropy</div>
        </div>
        <div class="column is-onequarter st0">
          <img src='@/assets/images/img2.png'>
          <div class="bottom-left-text">Preference</div>
        </div>
      </div>
    </div>
  </section>
   
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {


}
</script>

<style lang='scss' scoped>

@import '~/assets/css/popshopUIhomepage.css';

//banner size (doesn't even work)
.banner_box {
  height: 20%
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
  font-size: 20px;
}

//shop button text
.bottom-text {
  position: absolute;
  bottom: 25%;
  left: 50%;
  color: white;
  font-weight: bold;
  text-decoration: underline;
  font-size: 40px;
}

.bottom-text:hover {
  color:black;
}


</style>
