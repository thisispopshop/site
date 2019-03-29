<template>
  <div class="shop">
    <section class="section">
      <a href="https://www.urbanoutfitters.com/womens-clothing" target=_blank>https://www.urbanoutfitters.com/womens-clothing</a>
    </section>

    <section class="hero is-small is-light" >
        <div class="hero-head">
          <p class="is-size-4" style="float:right">Breadcrumbs / Breadcrumbs / Breadcrumbs / Breadcrumbs</p>
        </div>
        <div class="hero-body">
          <p class="title is-size-1" style="padding-left: 20%">Siternhood </p>
          <p class="is-size-4" style="float:right">Sort by Feature:</p>
        </div>
    </section>

    <section class="section">

      <!--dynamic or static????-->
      <div class="side-nav">

        <!--css for each section-->
        <p class="subtitle"><strong>Browse by:</strong></p>
        <label class="checkbox">
          <input type="checkbox"> Dresses
        </label>
        <br>
        <label class="checkbox">
          <input type="checkbox"> Shoes
        </label>
        <br>
        <label class="checkbox">
          <input type="checkbox"> Accessories
        </label>
        <br><br>

        <p class="subtitle"><strong>Filter by:</strong></p>
        <p>Size</p>
        <p>Brand</p>
        <p>Rating</p>

      </div>


    </section>
      
  </div>

</template>


<script lang="ts">
/* eslint-disable */
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Shop extends Vue {

}
</script>

<style lang="scss" scoped>

/*side navigation box*/
.side-nav {
  margin-left: 5%;
  position: relative;
}
</style>
