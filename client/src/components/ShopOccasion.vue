 <template>
 <div>

    <section class="parent-container-title">
      <div class="title is-size-1 "><strong>{{occasion_name}}</strong></div>
    </section>

    <!--Sort By Feature-->
    <section class="parent-container-head">
      <div class="dropdown is-active sort-menu-container">
        <div class="dropdown-trigger">
          <button class="button sort-menu-btn" aria-haspopup="true" aria-controls="dropdown-menu" v-on:click="toggleSortMenu">
            Sort By Feature:  
            <span style="padding-left: 1.5em"></span>
            <font-awesome-icon class="fa-sm angle-icon" icon="angle-down"/>
          </button>
        </div>
        <div class="dropdown-menu sort-menu" id="dropdown-menu" role="menu" v-show="showSortMenu">
          <div class="dropdown-content sort-menu">
            <!--<p class="dropdown-item is-size-5" v-on:click="sortByRecent">Newest first</p>-->
            <button class="dropdown-item is-size-5" v-on:click="sortByPriceDesc">Price high to low</button>
            <button class="dropdown-item is-size-5" v-on:click="sortByPriceAsc">Price low to high</button>
          </div>
        </div>
      </div>
    </section>

    <section class="parent-container-body">

      <!--product grid-->
      <div class="product-container" v-if="!error">
          <div class="product" v-for="(p, index) in product_list" v-bind:key="index" v-bind:value="p" v-on:click="goToProduct(p)">
              <div class="product-image" >
                  <img v-bind:src='p.images[0].url'>
              </div>
              <div class="product-details">
                <div class="product-name" >
                    <p>{{p.name}}</p>
                </div>
                <div class="product-price">
                    <p> ${{p.price}}</p>
                </div>
                <div class="product-retailer" >
                    <p>{{p.merchant}}</p>
                </div>
              </div>
          </div>
      </div>
      <div v-show="error">
        <p>{{error}}</p>
      </div>

    </section>
</div>
</template>
     
<script lang="ts">
/* eslint-disable */
import { Component, Vue, Prop ,Watch} from "vue-property-decorator";
import axios, {AxiosError, AxiosResponse} from "axios";
import { APIConfig } from "@/utils/api.utils";
import {iProduct,iImage,iCollection, iCategory} from "@/models";

@Component
export default class ShopOccasion extends Vue {

    //@Prop() occasion! : iOccasion;
    error : string| boolean = false;
    @Prop() occasion_name!: String;
    @Prop() collection! :iCollection;
    @Prop() filters_display! : String;

    product_list : iProduct[] = this.collection.products; 
    filters = this.filters_display;

    @Watch("filters_display")
    updateFilters(){
      this.filters = this.filters_display;
    }

    @Watch("collection")
    update(){
      if (this.collection.products){
        this.product_list = this.collection.products;
      } else{
        console.log("error");
        this.error = "No Products to Show";
        this.product_list = [];
      }
      //this.filters_display  = ""
    }

  goToProduct(p: iProduct){
     window.open(p.url, '_blank');
  }

  //side bar menu stuff
  showSortMenu : Boolean = false;
  toggleSortMenu() {
    this.showSortMenu = !this.showSortMenu;
  }

  /* FILTERS AND SORTING FUNCTIONS */

  sortByPriceAsc(){
    this.product_list.sort((p1,p2) => p1.price < p2.price ? -1 : p1.price > p2.price ? 1 : 0);
    this.showSortMenu = !this.showSortMenu;
  }
  sortByPriceDesc(){
    this.product_list.sort((p1,p2) => p1.price > p2.price ? -1 : p1.price < p2.price ? 1 : 0);
    this.showSortMenu = !this.showSortMenu;
  }
  sortByRecent(){
    //this.product_list.sort((p1,p2) => p1.dateCreated < p2.dateCreated ? -1 : p1.dateCreated > p2.dateCreated ? 1 : 0);
  }
  
}
</script>

<style lang="scss" scoped>


/*flex containers*/
.parent-container {

    &-title {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      height: 10%; 
    }

    &-head {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      height: 5%;
    }

    &-body {
      display: flex;
      padding-top: 1%;
      margin-bottom: 5%;
      margin-right: 5%;
    }
}

ul li { 
 padding: 8px 0px; 
}

.dropdown-btn {
 padding: 6px 0px 6px 0px;
 display: block;
 border: none;
 border-top: 1px solid #F8F8F8;
 border-bottom: 1px solid darkgrey;
 background: none;
 width: 100%;
 text-align: left;
 cursor: pointer;
 outline: none;

 :hover {
   font-weight:bold
 }
}
.active {
 font-weight: bold;
}
.plus-icon {
 float: right;
 padding-right: 8px;
 opacity: 0.8;
}
.dropdown-container {
 background-color: none;
 padding-left: 8px;
}

// pretty checkbox
.styled-checkbox {
 display: none;

 &:checked + label::before{
   background-color: #000
 }
 &:disabled {
   &:hover + label {
       color: grey;
       cursor: default;
   }
   + label {
     opacity: 0.2;

     &::before{
       opacity: 0.2
     }
   } 
 } 
 + label {
   position: relative;
   display: flex;
   align-items: center;

   &::before {
     content: '';
     width: 15px;
     height: 15px;
     margin-right: 10px;
     padding: 2px;
     border: 2px solid grey;
     background-clip: content-box
   }

   &:hover, &:focus{
     color: grey;
   }
 }
}

/*sort by menu*/
.sort-menu-container {
 float: right;
 width: 250px;
 margin-right: 4%;
}
.sort-menu {
 width: 100%;
 background: #F8F8F8;
 opacity: 0.9;
 border-radius: 1px;
 outline: none;
 border: none;
 box-shadow: none;
}

.dropdown-item {
 outline: none;
 background: none;
 border: none;
 box-shadow: none;
}

.dropdown-item {
  outline: none;
  background: none;
  border: none;
  box-shadow: none;
}
.dropdown-item:hover{
 font-weight: bold;
}
.sort-menu-btn {
 width: 100%;
 text-align: left;
 font-size: 25px;
 font-weight: bold;
 outline: none;
 background: none;
 border: none;
 box-shadow: none;
 border-radius: 1px;

 :hover{
   border:black
 }
}
.angle-icon {
 float: right;
 padding-right: 0%;
}

/*product container*/

/*product container*/
.product-container {
  display: grid;
  grid-auto-columns: max-content;
  grid-auto-flow: dense;
  //grid-auto-rows: minmax(100px, auto);
  grid-auto-rows: min-content;
  grid-gap: 2%;
  grid-template-columns: repeat(4, 1fr);
  position: relative;
}

.product {
  //height: 25%;
  background-color: transparent;
  position: relative;
  //display:flex;
  //flex-direction: column;
  //align-items: stretch;

  :hover {
    opacity: 0.8;
  }
  
   &-image {
    position: relative;
    /*min-height: 80%;
    max-height: 100%;
    min-width: 100%;*/
    object-fit: cover;
    overflow: hidden;
    display: flex;
    justify-content: center;

    img {
      height:23vw;
      width: 20vw;
    }
  }

  &-details {
    position: relative;
    //height: 25%;
    padding-top: 2%;
    margin-bottom: auto;
    z-index: 1;
  }

  &-name {
    float: left;
    position: relative;
    padding-top: 0%;
    width: 75%;
    p {
      font-size: 20px;
      font-weight: bold;
      a {
        color: #000000;
        text-decoration: none;
      }
    }
  }
  &-retailer {
    float: left;
    position: relative;
    padding-top: 0%;
    width: 75%;
    p {
      font-size: 15px;
      a {
        color: #000000;
        text-decoration: none;
      }
    }
  }
  &-price {
    float: right;
    position: relative;
    padding-top: 0%;   
    p {
      font-size: 20px;
      font-weight: bold;
    }
  }
  &-button {
    padding-top:7%;
  }
}
/*comment*/
</style>