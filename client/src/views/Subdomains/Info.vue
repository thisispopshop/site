<template>
  <div class="info">

    <!--header-->
  <section class="hero is-small">
    <div class="hero-head is-hidden-mobile">
      <nav class="breadcrumb is-size-4 my-breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li class="is-active crumb"><a>House Tours</a></li>
          <li class="is-active crumb"><a>Sisterhood</a></li>
          <li class="is-active crumb"><a>Philanthropy</a></li>
          <li class="is-active crumb"><a>Preference</a></li>
        </ul>
      </nav>
    </div>
    <!--
    <div class="hero-body">
      <p class="title is-size-1" style="padding-left: 20%"><strong>Sisterhood</strong></p>
    </div>-->
      <div class="title is-size-1 page-title"><strong>Rush Information</strong></div>
    </section>

    <!--content-->
    <section class="parent-container">
      
      <!--side navigation bar-->
      <div class="side-nav is-hidden-mobile">
        <ul>
          <li class='crumb'>Conversations</li>
          <li class='crumb'>Fines</li>
          <li class='crumb'>Schedule</li>
          <li class='crumb'>Option</li>
        </ul>
      </div>

      <!--content-->
      <div class="content-body" >
        <div class="content-box">
          <p class="content-box-title" id="section-c">Conversations</p>
          <span style="display:inline-block; border:3px dotted black; width:800px;height:500px;"></span>
        </div>
        <div class="content-box">
          <p class="content-box-title">Fines</p>
          <span style="display:inline-block; border:3px dotted black; width:800px;height:500px;"></span>
        </div>
        <div class="content-box">
          <p class="content-box-title">Schedule</p>
          <iframe src="https://calendar.google.com/calendar/embed?src=kbs54jf5tb3g6cjnirg6fbd7e0%40group.calendar.google.com&ctz=America%2FLos_Angeles" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
        </div>
        <div class="content-box" >
          <p class="content-box-title">Option</p>
          <span style="display:inline-block; border:3px dotted black; width:800px;height:500px;"></span>
        </div>
      </div>


    </section>

  </div>

</template>


<script lang="ts">
/* eslint-disable */
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Info extends Vue {

}
</script>

<style lang="scss" scoped>

/*breadcrumb style*/
.my-breadcrumb {
  float: right;
  margin-right: 4%;
  margin-top: 1%;
}
.crumb:hover {
  font-weight: bold;
}

/*page title style*/
.page-title {
  padding-top: 3%;
  //padding-left: 10%;
  margin-left: 17%;
  text-align: left;
}

/*parent container*/
.parent-container {
  display: flex;
  padding-top: 1%;
}

/*side navigation box*/
.side-nav {
  padding-top: 1%;
  margin-left: 4%;
  //width: 800px;
  width: 15%;
  overflow: hidden;
  font-size: 25px;
}
.crumb:hover {
  font-weight: bold;
}

.content-body {
  width: 100%;
}
.content-box {
  font-size: 30px;
  padding-bottom: 3%;
}
.content-box-title {
  font-weight: bold;
  font-size: 35px;
}

</style>