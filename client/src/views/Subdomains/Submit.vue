<template>
  <div class="submit">

    <!--header-->
  <section class="hero is-small">
    <div class="hero-head">

      <nav v-show="isTaylor" class="breadcrumb is-size-4 my-breadcrumb is-hidden-mobile" aria-label="breadcrumbs">
        <ul>
          <li class="is-active crumb" v-for="(o, index) in occasions" v-bind:key="index" v-bind:value="o"  v-on:click="chooseOccasion(o,index)">
            <a>{{o.name}}</a>
          </li>
        </ul>
      </nav>
    </div>
    
    <div class="hero-body">
      <div class="title is-size-1 page-title"><strong>Ask Me a Question</strong></div>
      <!--<div class="title is-size-1 page-title"><strong>Submit Your Outfit</strong>
        <p class="subtitle is-size-3">{{occasions[0].name}}</p>
        </div>-->
    </div>

    </section>

    <!--content-->
    <section class="section form-section">
        <!--<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfJEpOLsiD3AWMQFY6jhac9NVcd3SCnpPrR_RwX-hGidlch2Q/viewform?embedded=true" width="640" height="2780" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>-->
        <!--<p class="subtitle"> 
          No forms are available for this page. <br>
        </p>-->
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScocUNo6Ednov6ZkgmKCBY46ytWtkvhE6CEHv-HIadliIPXug/viewform?embedded=true" width="640" height="527" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
    </section>

  </div>

</template>


<script lang="ts">
/* eslint-disable */
import { Component, Vue, Prop } from "vue-property-decorator";
import {iProduct,iImage, iOccasion, iOrganization, iEvent} from "@/models";

@Component
export default class Submit extends Vue {

  @Prop() org!: iOrganization;
  @Prop() event!: iEvent;
  @Prop() occasions! : iOccasion[];

  /*
  @Prop() oid!: string;
  @Watch("oid")
  update(){
    this.selectedOccasion = this.occasions[this.oid];
  }
  selectedOccasion = this.occasions[this.oid];*/

  get isTaylor(){
    return this.org.subdomain != "taylorvo"
  }

  chooseOccasion(occasion:iOccasion, ind:number){}

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
    justify-content: center;
    justify-items: center;
    margin:auto;
}

.form-section {
    //margin-left: 32%;
    text-align:center;

}
<<<<<<< HEAD

</style>
=======
/*comment*/
</style>
>>>>>>> 4168594ddfc0685d5f55168d32dd7d580b563649
