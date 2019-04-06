<template>
  <div class="shop">

    <section class="hero is-small">
        <div class="hero-head">
          <nav class="breadcrumb is-size-4 my-breadcrumb is-hidden-mobile" aria-label="breadcrumbs">
            <ul>
              <li class="is-active crumb" v-for="(o, index) in occasions" v-bind:key="index" v-bind:value="o"  v-on:click="chooseOccasion(o)">
                <a>{{o.name}}</a>
              </li>
            </ul>
          </nav>
        </div>
         <div class="title is-size-1 page-title"><strong>{{selectedOccasion.name}}</strong></div>
    </section>

    <ShopOccasion v-bind:collection="selectedOccasion.collection"/>

  </div>
</template>


<script lang="ts">
/* eslint-disable */
import { Component, Vue } from "vue-property-decorator";
import axios, {AxiosError, AxiosResponse} from "axios";
import { APIConfig } from "@/utils/api.utils";
import {iProduct,iImage, iOccasion} from "@/models";
import ShopOccasion from "@/components/ShopOccasion.vue";

@Component({
  components: {
    ShopOccasion
  }
})
export default class Shop extends Vue {

  error : string | boolean = false;
  occasions : iOccasion[] = [];
  selectedOccasion : iOccasion = {
    id: 0,
    name: "temp",
    description: "temp",
    submitForm: "temp",
    collection: {name:"temp", status: "temp", approvedBy:-1, description:"", products: [], categories:[]},
  };

  mounted(){
    this.error = false;

    //get the events and their occasions
    axios.get(APIConfig.buildUrl("/api/occasion"))
      .then((response:AxiosResponse) => {
        //console.log(response.data.occasions);
        this.occasions = response.data.occasions;
        this.selectedOccasion = this.occasions[0];
      })
      .catch((res:AxiosError) => {
        //console.log(res.response);
        this.error =res.response && res.response.data;
      })
  }

  chooseOccasion(occasion:iOccasion) {
    this.selectedOccasion = occasion;
    //console.log(this.selectedOccasion);
  }
}
</script>

<style lang="scss">

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


</style>
