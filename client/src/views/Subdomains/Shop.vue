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
        <!--FilterBy/BrowseBy-->
        <ShopFilterBox
          v-bind:categories="collectionCategories"
          v-bind:brands = "collectionBrands"
          @filters="updateFilters"
        />
      </div>

      <!--SortBy/Products-->
      <div class="column">
        <ShopOccasion 
          v-bind:occasion_name = "selectedOccasion.name" 
          v-bind:collection="selectedCollection"
          v-bind:filters_display="this.filter_query"
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
import {iProduct,iImage, iOccasion, iOrganization, iEvent, iCategory} from "@/models";
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
  error : string | boolean = false;
  @Prop() oid!: string;
  filters : iCategory[] = [];
  filter_query: String = "";

  selectedOccasion = this.occasions[this.oid];
  selectedCollection = this.selectedOccasion.collection;
  collectionCategories = this.selectedCollection.categories;
  
  @Watch("oid")
  updateOccasion(){
    this.selectedOccasion = this.occasions[this.oid];
    this.collectionCategories = this.selectedOccasion.collection.categories;
    this.clearFilters()
  }

  @Watch("selectedOccasion")
  updateCollection(){
    this.selectedCollection = this.selectedOccasion.collection;
    this.collectionCategories = this.selectedCollection.categories;
    this.clearFilters()
  }

  @Watch("filter_query")
  updateCollectionByFilter(){
    this.error = false;
    const collectionId = this.selectedCollection.id;
    axios
      .get(APIConfig.buildUrl("/collection/" + collectionId + this.filter_query))
      .then((response:AxiosResponse) => {
        this.selectedCollection = response.data.collection;
      })
      .catch((res:AxiosError) => {
         this.error = res.response && res.response.data.reason;
      })
  }

  chooseOccasion(occasion:iOccasion, ind:number) {
    //this.selectedOccasion = occasion;
    this.clearFilters()
    this.$router.push("/shop/"+ind);
  }

  clearFilters(){
    this.filters = []
    this.filter_query = ""
  }

  updateFilters(event){
    this.filters = event;
    const q_length = this.filters.length;
    if (q_length > 0){
        this.filter_query = "?categories="
        for (let q=0; q< q_length; q++){
          this.filter_query = this.filter_query + event[q].id + ","
        };
        this.filter_query = this.filter_query.slice(0,-1);
        //console.log(this.filter_query)
    } else this.filter_query = ""
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

/*comment*/
</style>