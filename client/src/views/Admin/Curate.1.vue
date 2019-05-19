 <template>
 <div>

     <section class="section" style="padding-bottom: 0%">
        <!--Buttons-->
        <div class="split-screen">
            <span><font-awesome-icon  :icon="{ prefix: 'fas', iconName: 'arrow-left' }"/>   <span class="tab-space"><b>Back</b></span></span>
        
            <div class="buttons is-right">
                <button class="button is-hoverable is-medium custom-button" >Create</button>
            </div>
        </div>

        <div class="title is-size-1 page-title"><strong>Create a Collection</strong></div>

        <!--begin creating collection-->
        <!--<div class="container is-fullwidth" style="margin-left:20.5%">-->
            <div class="field is-horizontal is-fullwidth" style="margin-left:20.5%; display:flex; justify-content: space-between;">
                <div class="control is-expanded" style="padding-right: 50px">
                    <input class="input custom-input" style="font-size: 35px; font-weight:bold" type="text" placeholder="Collection Name">
                    <label class="label" style="padding-left:1.5em ">Name</label>
                </div>

                <div class="control is-expanded" style="margin-right: 3.5%">
                    <input class="input custom-input "  style="font-size: 35px; font-weight:bold; width: 100px; text-align: right" type="text" v-model="product_list.length" disabled/>
                    <label class="label tab-space">No. Products</label>
                </div>
                <!--<div class="control is-expanded">
                    <input class="input custom-input" style="font-size: 25px" type="text" placeholder="Collection Description">
                    <label class="label tab-space">Description</label>
                </div>     -->    
            </div>
        <!--</div>-->
     </section>

     
 <!--Sort By Feature-->
    <section class="parent-container-head">
      <div class="dropdown is-active sort-menu-container">
          <!--<p class="is-size-5"> <strong>{{product_list.length}} out of {{product_list.length}} Products Selected</strong></p>-->
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
            <p class="dropdown-item is-size-5" v-on:click="sortByPriceDesc">Price high to low</p>
            <p class="dropdown-item is-size-5" v-on:click="sortByPriceAsc">Price low to high</p>
          </div>
        </div>
      </div>
    </section>

    <section class="parent-container-body">
      
      <!--side navigation bar-->
      <div class="side-nav">

        <!--Browse by box-->
        <div class="side-nav-box">

            <div class="field has-addons search-field" >
                <div class="control">
                    <font-awesome-icon class="fa-lg is-left" :icon="{ prefix: 'fas', iconName: 'search' }"/> 
                </div>
                <div class="control">
                    <input class="input custom-input" type="search" placeholder="Search">
                </div>  
            </div>
            <br>
            <br>

          <p class="side-nav-title"><strong>Browse By:</strong></p>
          <ul class="side-nav-checklist">
            <li>
              <input id="checkbox_1" type="checkbox" class="styled-checkbox">
              <label for="checkbox_1" class="side-nav-content">Apparel</label>
            </li>
            <li>
              <input id="checkbox_2" type="checkbox" class="styled-checkbox">
              <label for="checkbox_2" class="side-nav-content">Shoes</label>
            </li>
            <li>
              <input id="checkbox_3" type="checkbox" class="styled-checkbox">
              <label for="checkbox_3" class="side-nav-content">Accessories</label>
            </li>
          </ul>
        </div>

        <!--Filter by box-->
        <div class="side-nav-box">
          <p class="side-nav-title"><strong>Filter By:</strong></p>
          <div class="side-nav-dropdown">
            <button class="dropdown-btn side-nav-content" v-on:click="toggleMenu('size')">
              Size
              <span class="plus-icon"><font-awesome-icon class="fa-xs" icon="plus"/></span>
            </button>
            <div class="dropdown-container" v-show="showMenuSize">
              <p v-for="(size, index) in sizes" v-bind:key="index">
                <input type="checkbox" class="styled-checkbox">
                <label>{{size}}</label>
              </p>
            </div>
            <button class="dropdown-btn side-nav-content"  v-on:click="toggleMenu('brand')">
              Brand
              <span class="plus-icon"><font-awesome-icon class="fa-xs" icon="plus"/></span>
            </button>
            <div class="dropdown-container" v-show="showMenuBrand">
              <p v-for="(brand, index) in brands" v-bind:key="index">
                <input type="checkbox" class="styled-checkbox">
                <label>{{brand}}</label>
              </p>
            </div>
          </div>
        </div>
      </div>

      <!--product grid-->
      <div class="product-container" v-if="!error">
          <div class="product" v-for="(p, index) in product_list" v-bind:key="index" v-bind:value="p" v-on:click="goToProduct(p)">
              <figure class="product-image" >
                  <img v-bind:src='p.images[0].url'>
              </figure>
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
import {iProduct,iImage,iCollection} from "@/models";

@Component
export default class Curate1 extends Vue {

    //@Prop() occasion! : iOccasion;
    //@Prop() collection! :iCollection;
    product_list : iProduct[] = []; 
    error : boolean | string = false;


   mounted(){
        this.error = false;
        axios
        .get(APIConfig.buildUrl("/product"))
        .then((response: AxiosResponse) => {
            this.product_list = response.data.products;
            this.product_list = this.product_list.reverse()
        })
        .catch((res:AxiosError) => {
            this.error = res.response && res.response.data.reason;
        })
   }

  goToProduct(p: iProduct){
     window.open(p.url, '_blank');
  }

  //side bar menu stuff
  showSortMenu : Boolean = false;

  toggleSortMenu() {
    this.showSortMenu = !this.showSortMenu;
  }

  sizes: string[] = ["xs","sm","m","l","xl","xxl"];
  brands : string[] = ["brand1","brand2","brand3","brand4","brand5"];

  showMenuSize : Boolean = false;
  showMenuBrand : Boolean = false;

  toggleMenu(menuId:string){
    if (menuId=='size') 
      this.showMenuSize = !this.showMenuSize;
    if (menuId == 'brand')
      this.showMenuBrand = !this.showMenuBrand;
  }

  /* FILTERS AND SORTING FUNCTIONS */
  sortByPriceAsc(){
    this.product_list.sort((p1,p2) => p1.price < p2.price ? -1 : p1.price > p2.price ? 1 : 0);
  }
  sortByPriceDesc(){
    this.product_list.sort((p1,p2) => p1.price > p2.price ? -1 : p1.price < p2.price ? 1 : 0);
  }
  sortByRecent(){
    //this.product_list.sort((p1,p2) => p1.dateCreated < p2.dateCreated ? -1 : p1.dateCreated > p2.dateCreated ? 1 : 0);
  }
  browseByCategory(filter:string){}
}
</script>

<style lang="scss" scoped>

/*page title style*/
.page-title {
  padding-top: 3%;
  //padding-left: 10%;
  margin-left: 17%;
  text-align: left;
}

/*flex containers*/
.parent-container-head {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: 5%;
}
.parent-container-body {
  display: flex;
  padding-top: 1%;
}

/*side navigation box*/
.side-nav {
  margin-left: 4%;
  width: 400px;
  //width: 15%;
  overflow: hidden;

  &-box {
    padding-bottom: 20%;
  }

  &-title {
    font-size: 25px;
    font-weight: bold;
  }

  &-content {
    font-size: 25px;
  }

  &-checklist {
    padding-top: 5%;
  }

  &-dropdown {
    padding-left: 0%;
    padding-top: 5%;
    width: 60%;
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
  padding-top: 2%;
  float: right;
  width: 250px;
  margin-right: 4%;
  display: block
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
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 3%;
  grid-template-columns: repeat(4, 1fr);
  position: relative;
  margin-right: 4%;
}
.product {
  //height: 25%;
  padding-bottom: 10%;
  background-color: transparent;
  :hover {
    opacity: 0.8;
  }
  &-image {
    max-height: 85%;
    object-fit: cover;
    overflow: hidden;
  }
  &-name {
    float: left;
    position: relative;
    padding-top: 0%;
    width: 60%;
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
    width: 60%;
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

/*altering the email field*/
.custom-input {
  border:  transparent;
  border-color: transparent;
  background: transparent;
  border-bottom: 1px solid #8c8c8c;
  border-radius: 0px;
  box-shadow: 0;
  width: 100%;
}

.custom-button {
    background-color:#FAE4E9;
    border-radius: 3px;
}

.split-screen {
  display: flex;
  justify-content: space-between;
  margin-left: 3%;
  margin-right: 3%
}
//add slight tabbing
.tab-space {
  padding-left:1em 
}
.page-title {
  padding-top: 0%;
  //padding-left: 10%;
  margin-left: 20%;
  text-align: left;
}
</style>