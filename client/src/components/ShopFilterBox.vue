 <template>
 <div>

     
    <section class="parent-container-title">
      <div class="title is-size-1 clear-page-title"><strong>Hi</strong></div>
    </section>

    <section class="parent-container-head">
      <div class="title is-size-1 clear-page-title"><strong>Hi</strong></div>
    </section>

    <section class="parent-container-body">
      
      <!--side navigation bar-->
      <div class="side-nav">

        <!--Browse by box-->
        <div class="side-nav-box">
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
            <!--<button class="dropdown-btn side-nav-content" v-on:click="toggleMenu('size')">
              Size
              <span class="plus-icon"><font-awesome-icon class="fa-xs" icon="plus"/></span>
            </button>
            <div class="dropdown-container" v-show="showMenuSize">
              <p v-for="(size, index) in sizes" v-bind:key="index">
                <input type="checkbox" class="styled-checkbox">
                <label>{{size}}</label>
              </p>
            </div>-->
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
export default class ShopFilterBox extends Vue {

    //@Prop() occasion! : iOccasion;
    @Prop() collection! :iCollection;
    product_list : iProduct[] = this.collection.products; 
    error : string| boolean = false;

    @Watch("collection")
    update(){
      if (this.collection.products){
        this.product_list = this.collection.products;
      } else{
        console.log("error");
        this.error = "No Products to Show";
        this.product_list = [];
      }
    }

  browseByCategory(filter:string){}
}
</script>

<style lang="scss" scoped>

.clear-page-title {
    color: transparent;
}

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
      margin-left: 15%
    }
}
/*side navigation box*/
.side-nav {
  width: 100%;
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
/*comment*/
</style>