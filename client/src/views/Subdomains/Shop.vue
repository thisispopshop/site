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
          @selectedCategories="updateCategoryFilters"
          @selectedBrands= "updateBrandFilters"
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
import {iProduct,iImage, iOccasion, iOrganization, iEvent, iCategory, iBrand} from "@/models";
import ShopOccasion from "@/components/ShopOccasion.vue";
import ShopFilterBox from "@/components/ShopFilterBox.vue";

@Component({
    components: {
      ShopFilterBox,
      ShopOccasion
    }
})
export default class Shop extends Vue {
  error : string | boolean = false;

  @Prop() org!: iOrganization;
  @Prop() event!: iEvent;
  @Prop() occasions! : iOccasion[];
  @Prop() oid!: string;
  
  //filters = {"categories": Array(),"brands": Array()};
  filters_c : iCategory[] = [];
  filters_b : iBrand[] = [];
  filter_query: String = "";

  selectedOccasion = this.occasions[this.oid];
  selectedCollection = this.selectedOccasion.collection;
  collectionCategories = this.selectedCollection.categories;
  collectionBrands = this.selectedCollection.brands;
  
  @Watch("oid")
  updateOccasion(){
    this.selectedOccasion = this.occasions[this.oid];
    this.collectionCategories = this.selectedOccasion.collection.categories;
    this.collectionBrands = this.selectedOccasion.collection.brands;
    this.clearFilters()
  }

  @Watch("selectedOccasion")
  updateCollection(){
    this.selectedCollection = this.selectedOccasion.collection;
    this.collectionCategories = this.selectedCollection.categories;
    this.collectionBrands = this.selectedCollection.brands;
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
    this.filters_c = [];
    this.filters_b = [];
    this.filter_query = ""
  }

  updateCategoryFilters(event){
    this.filters_c = event
    /*
    const c_length = this.filters_c.length;
    if (c_length > 0){
        this.filter_query += "?categories="
        for (let c=0; c< c_length; c++){
          this.filter_query = this.filter_query + event[c].id + ","
        };
        this.filter_query = this.filter_query.slice(0,-1);
    } */
    this.filter_query = this.updateFilters()
  }

  updateBrandFilters(event){
    this.filters_b = event
    /*
    const b_length = this.filters_b.length;
    if (b_length > 0){
        this.filter_query += "?brands="
        for (let b=0; b< b_length; b++){
          this.filters["brands"].push(event[b].id)
          this.filter_query = this.filter_query + event[b].id + ","
        };
        this.filter_query = this.filter_query.slice(0,-1);
        console.log(this.filters)
        //console.log(this.filter_query)
    } else this.filter_query = ""  */
    this.filter_query = this.updateFilters()
  }

  updateFilters(){

    this.filter_query = ""
    let temp_filter_query = '?'

    let c_length = this.filters_c.length
    let b_length = this.filters_b.length

     //categories
    if (c_length > 0){
      temp_filter_query += "categories="
      for (let c=0; c< c_length; c++){
        temp_filter_query = temp_filter_query + this.filters_c[c].id + ","
      };
      temp_filter_query = temp_filter_query.slice(0,-1);
    } 

    //brands
    if (b_length > 0){
      if (temp_filter_query.length > 1) temp_filter_query += "&"
      temp_filter_query += "brands="
      for (let b=0; b< b_length; b++){
        temp_filter_query = temp_filter_query + this.filters_b[b].id + ","
      };
      temp_filter_query = temp_filter_query.slice(0,-1);
    } 

    if (temp_filter_query.length == 1) return ""
    return temp_filter_query
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