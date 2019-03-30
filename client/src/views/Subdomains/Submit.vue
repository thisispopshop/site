<template>
  <div class="info">

    <!--header-->
  <section class="hero is-small">
    <div class="hero-head">
      <nav class="breadcrumb is-size-4 my-breadcrumb is-hidden-mobile" aria-label="breadcrumbs">
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
      <div class="title is-size-1 page-title"><strong>Submit Your Outfit</strong></div>
    </section>

    <!--content-->
    <section class="section form-section">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfJEpOLsiD3AWMQFY6jhac9NVcd3SCnpPrR_RwX-hGidlch2Q/viewform?embedded=true" width="640" height="2780" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
    </section>

  </div>

</template>


<script lang="ts">
/* eslint-disable */
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Submit extends Vue {

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
  //margin-left: 17%;
 // text-align: left;
    text-align: center;
}

.form-section {
    margin-left: 32%;
}

</style>