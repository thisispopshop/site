<template>
    <div class="curate">

        <!--page head-->
        <section class="hero is-dark">
            <div class="hero-body">
                <div class="container">
                <h1 class="title is-size-1">
                    <strong>Curate</strong>
                </h1>
                <h2 class="subtitle is-size-3">
                    Create a Collection
                </h2>
                </div>
            </div>
        </section>

        <!--display all products-->
        <section class='section'>

            <div class="container">
                <!--display an error-->
                <p class="notification is-danger" v-if="error" >
                    <button class="delete" v-on:click="closeErrors"></button>
                    <b>Please correct the following error(s):</b>
                    <ul style="list-style-type: initial; padding-left: 2%" >
                        <li v-for="(err,index) in error" v-bind:key="index" v-bind:value="err">{{err}}</li>
                    </ul>
                </p>

                <!--Buttons-->
                <div class="buttons is-right">
                    <button class="button is-success" v-on:click="submitCollection">
                        Create
                    </button>
                    <button class="button is-danger" v-on:click="cancelCollection">
                        Cancel
                    </button>
                </div>
            </div>

            <!--begin creating collection-->
            <div class="container">
                <div class="field">
                    <label class="label">Name</label>
                    <div class="control">
                        <input class="input is-dark" type="text" placeholder="Collection Name" v-model="new_collection.name">
                    </div>
                </div>
                <br>
                <div class="field">
                    <label class="label">Description (Optional)</label>
                    <div class="control">
                        <input class="input textarea is-dark" type="text" placeholder="Collection Description" v-model="new_collection.description">
                    </div>
                </div>
            </div>

            <!--select products-->
            <div class="container">
                <br>
                <label class="label">Products</label>
         
                <!--select options and filters-->
                <div class="buttons">
                    <button class="button is-dark" >SELECT ALL</button>
                    <button class="button is-dark" >SELECT NONE</button>
                    <div class="field has-addons">
                        <div class="control">
                            <input class="input is-dark" type="search" placeholder="tag, tag, tag, etc">
                        </div>
                        <div class="control">
                            <button class="button is-dark">
                                <font-awesome-icon class="fa-xs is-right" :icon="{ prefix: 'fas', iconName: 'search' }"/> 
                            </button>
                        </div>
                    </div>
                </div>

                <p > {{my_products.length}} Products Selected</p>

                <!--product grid-->
                <div class="product-container">

                    <div class="product">
                        <figure class="product-image" >
                            <img src='@/assets/images/img2.png'>
                        </figure>
                        <div class="product-name" >
                            <p>Product Name 1 blah blah blah blahblahblah</p>
                        </div>
                        <div class="product-price">
                            <p> $100</p>
                        </div>
                        <div class="product-retailer" >
                            <p>RetailerName</p>
                        </div>
                        <div class="product-middle">
                            <font-awesome-icon class="checkmark" :icon="{ prefix: 'far', iconName: 'check-circle' }"/>
                        </div>
                    </div>

                    <label class="product" v-for="(p, index) in all_products" v-bind:key="index" v-bind:value="p">
                        <input class="checkbox" type="checkbox" v-bind:value="p" v-model="my_products" style="display:none"/>
                        <figure class="product-image" >
                            <img src='@/assets/images/img3.jpg'>
                        </figure>
                        <div class="product-name" >
                            <p>{{p.name}}</p>
                        </div>
                        <div class="product-price">
                            <p> ${{p.price}}</p>
                        </div>
                        <div class="product-retailer" >
                            <p>{{p.retailer}}</p>
                        </div>
                        <div class="product-middle">
                            <font-awesome-icon class="checkmark" :icon="{ prefix: 'far', iconName: 'check-circle' }"/>
                        </div>
                    </label>

                </div>
            </div>
        </section>

    </div>
</template>

<script lang="ts">
/* eslint-disable */
import { Component, Vue } from "vue-property-decorator";
import { iCollection, iProduct} from "@/models";

@Component
export default class Curate extends Vue {

    mounted(){
        //load all products
    }

    error : string[] | boolean = false;
    closeErrors(){
        this.error = false;
    }

    temp_product : productInterface = {
        name : "Product 1 Title Name",
        retailer : "Example Retailer",
        price : 59.99,
        image : "img2.png",
        link : "http://thisisaurl/com",
    }
    temp_product_2 : productInterface = {
        name : "Product 2 Title Name",
        retailer : "Example Retailer 2",
        price : 30.00,
        image : "img3.png",
        link : "http://thisisaurl/com",
    }

    all_products : productInterface[] = [ this.temp_product, this.temp_product_2, this.temp_product, 
        this.temp_product_2,this.temp_product, this.temp_product_2, this.temp_product, this.temp_product_2, 
        this.temp_product, this.temp_product_2, this.temp_product 
    ]

    //all_products: iProduct[] = [];  //list of all products
    my_products : iProduct[] = [];  //list of selected products

    new_collection : iCollection = {
        name : "",
        status: "unapproved",
        approvedBy : null,
        description: "",
        products: this.my_products,
    }

    //submit the new collection
    submitCollection(){
        this.error= [];
        if (this.new_collection.name.length < 1)
            this.error.push("Collection Name is Required");
        if (this.my_products.length < 1)
            this.error.push("0 products are selected")
        else{
            this.error = false;
            this.$router.push("/collections");
        }      
    }

    //cancel the new collection
    cancelCollection(){
        this.$router.push("/collections");
    }

}

interface productInterface {
  name: string,
  retailer: string,
  price: number,
  image: string,
  link: string,
}
</script>

<style lang="scss" scoped>

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
  margin-bottom: 5%
}

.product {
  height: 100%;
  //padding-bottom: 10%;

  &-image {
    display: block;
    overflow:hidden;
    width: 100%;
    //height: 425px;
    height: 80%;

    opacity: 1;
    transition: .5s ease;
    backface-visibility: hidden;
  }

  &-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
  }

  &-middle {
    transition: .5s ease;
    opacity: 0;
    position: relative;
    margin: auto;
    left: 60%;
    bottom: 73%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
  }

  &-name {
    float: left;
    position: relative;
    padding-top: 0%;
    width: 70%;
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

//check mark size
.checkmark {
    width: 15%;
    height: 15%;
}

//item hover style
.product:hover {
    .product-image {
        opacity: 0.5
    }
    .product-middle {
        z-index:1;
        opacity: 1;
    }
}

//not working yet
input:checked + label {
    .product-image {
        opacity: 0.5
    }
    .product-middle {
        z-index:1;
        opacity: 1;
    }
}

</style>