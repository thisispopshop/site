<template>
  <div class="shop">

    <section class="hero is-small">
        <div class="hero-head">
          <nav class="breadcrumb is-size-4 my-breadcrumb is-hidden-mobile" aria-label="breadcrumbs">
            <ul>
              <li class="is-active crumb" v-for="(o, index) in occasions" v-bind:key="index" v-bind:value="o"  v-on:click="chooseOccasion(o,index)">
                <a>{{o.name}}</a>
              </li>
            </ul>
          </nav>
        </div>
    </section>


    <!--Products-->
    <section class="section">
    <div class="columns">

      <div class="column is-one-fifth">
        <ShopFilterBox
          v-bind:collection="selectedOccasion.collection"
        />
      </div>

      <div class="column">
        <ShopOccasion 
          v-bind:occasion_name = "selectedOccasion.name" 
          v-bind:collection="selectedOccasion.collection"
        />     
      </div>
    </div>
    </section>

  </div>
</template>


<script lang="ts">
/* eslint-disable */
import { Component, Vue ,Prop, Watch} from "vue-property-decorator";
import axios, {AxiosError, AxiosResponse} from "axios";
import { APIConfig } from "@/utils/api.utils";
import {iProduct,iImage, iOccasion, iOrganization, iEvent} from "@/models";
import ShopOccasion from "@/components/ShopOccasion.vue";
import ShopFilterBox from "@/components/ShopFilterBox.vue";

@Component({
    components: {
      ShopFilterBox,
      ShopOccasion
    }
})

export default class Shop extends Vue {
  @Prop() org!: iOrganization;
  @Prop() event!: iEvent;
  @Prop() occasions! : iOccasion[];
  //@Prop() selectedOccasion! : iOccasion;
  error : string | boolean = false;
  @Prop() oid!: string;
  
  @Watch("oid")
  update(){
    this.selectedOccasion = this.occasions[this.oid];
  }
  selectedOccasion = this.occasions[this.oid];
  mounted(){}
  chooseOccasion(occasion:iOccasion, ind:number) {
    //this.selectedOccasion = occasion;
    this.$router.push("/shop/"+ind);
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

</style>