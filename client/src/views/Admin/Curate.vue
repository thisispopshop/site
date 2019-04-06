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
                <p class="notification is-danger" v-if="errors" >
                    <button class="delete" v-on:click="closeErrors"></button>
                    <b>Please correct the following error(s):</b>
                    <ul style="list-style-type: initial; padding-left: 2%" >
                        <li v-for="(err,index) in errors" v-bind:key="index" v-bind:value="err" v-on:click="closeErrors">{{err}}</li>
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
                <div class="buttons is-full-width button-section">
                    <button class="button is-dark is-small" v-on:click="selectAll">SELECT ALL</button>
                    <button class="button is-dark is-small" v-on:click="selectNone">SELECT NONE</button>

                    <div class="field" >
                        <ul style="width:20%; display:inline-block">
                            <li v-for="(cat,index) in categories" >
                                <input type="checkbox" v-bind:value="cat" v-model="selected_categories">{{cat.name}}
                            </li>
                        </ul>
                        <div style="width:20%; display:inline-block">
                            <p v-for="(c,index) in selected_categories">{{c.name}}</p>
                        </div>
                    </div>

                    <div class="field has-addons search-field" >
                        <div class="control">
                            <input class="input is-dark" type="search" placeholder="tag, tag, tag, etc">
                        </div>
                        <div class="control">
                            <button class="button is-dark">
                                <font-awesome-icon class="fa-xs is-right" :icon="{ prefix: 'fas', iconName: 'search' }"/> 
                            </button>
                        </div>
                    </div>

                    <p class="is-size-5"> <strong>{{my_products.length}} out of {{all_products.length}} Products Selected</strong></p>
                </div>

                <!--product grid-->
                <div class="product-container" v-show="!error">
                    <div class="product" v-for="(p, index) in all_products" v-bind:key="index" v-bind:value="p">
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
                            <div class="product-middle">
                                <p style="display:inline-block">
                                    <label class="check-label">
                                        <input class="checkbox" type="checkbox" v-bind:value="p" v-model="my_products" style="display:none"/>
                                        <span class="checkmark-span checked"><font-awesome-icon class="checkmark" :icon="{ prefix: 'far', iconName: 'check-circle' }"/></span>
                                        <span class="checkmark-span unchecked"><font-awesome-icon class="checkmark" :icon="{ prefix: 'far', iconName: 'circle' }"/></span>
                                    </label>
                                    <br>                                    
                                    <span class="eye"><font-awesome-icon class="eye" :icon="{ prefix: 'fas', iconName: 'eye' }" v-on:click="goToProduct(p)"/></span>
                                </p>
                            </div>
                    </div>
                </div>

                <p v-if="error"> There are No Products to Show :(</p>

            </div>
        </section>

    </div>
</template>

<script lang="ts">
/* eslint-disable */
import { Component, Vue } from "vue-property-decorator";
import axios, {AxiosError, AxiosResponse} from "axios";
import { APIConfig } from "@/utils/api.utils";
import { iCollection, iProduct, iCategory} from "@/models";

@Component
export default class Curate extends Vue {

    error : string | boolean = false;
    errors : string[] | boolean = false;

    all_products: iProduct[] = [];  //list of all products
    my_products : iProduct[] = [];  //list of selected products

    categories : iCategory[] = [];
    selected_categories : iCategory[] = [];

    mounted(){
        //get all products
        this.error = false;
        axios
        .get(APIConfig.buildUrl("/api/product"))
        .then((response: AxiosResponse) => {
            this.all_products = response.data.products;
        })
        .catch((res:AxiosError) => {
            this.error = res.response && res.response.data.reason;
        })

        //get all categories
        this.error = false;
        axios   
            .get(APIConfig.buildUrl("/api/category"))
            .then((response:AxiosResponse) => {
                //console.log(response.data.categories);
                this.categories = response.data.categories;
            })
            .catch((res:AxiosError) => {
                this.error = res.response && res.response.data.reason;
            })
    }

    goToProduct(p: iProduct){
        window.open(p.url, '_blank');
    }

    selectAll(){
        this.my_products = this.all_products;
    }
    selectNone(){
        this.my_products = [];
    }

    new_collection : iCollection = {
        name : "",
        status: "unapproved",
        approvedBy : null,
        description: "",
        products: this.my_products,
        categories: this.selected_categories,
    }

    //submit the new collection
    submitCollection(){
        this.errors = [];
        if (this.new_collection.name.length < 1)
            this.errors.push("Collection Name is Required");
        if (this.my_products.length < 1)
            this.errors.push("0 products are selected");

        //no errors -submit collection
        if (this.errors.length == 0)
        {
            this.errors = false;
            this.error = false;
            axios.post(APIConfig.buildUrl("/api/collection"), 
                {
                    name : this.new_collection.name,
                    description: this.new_collection.description,
                    products: this.my_products,
                    categories: this.selected_categories,
                })
                .then((response:AxiosResponse) => {
                    alert("You Collection was Successfully Created.")
                    this.$router.push("/admin");
                })
                .catch((res:AxiosError)=> {
                    this.error = res.response && res.response.data.reason;
                    this.errors = ["Didn't work!"];
                })
            
        }      
    }

    //cancel the new collection
    cancelCollection(){
        this.error = false;
        this.$router.push("/admin");
    }

}

</script>

<style lang="scss" scoped>

/*product selection button container*/
.button-section {
    display: inline-block;
    width: 100%;
}
/*
.search-field {
    justify-content: flex-end;
}*/

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
  margin-bottom: 5%;
  width: 100%
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
    //transition: .5s ease;
    opacity: 1;
    position: relative;
    margin: auto;
    left: 40%;
    bottom: 75%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: right;
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

//check mark icon size
.checkmark {
    width: 15%;
    height: 15%;

    *-span:hover{
        opacity: 0.5;
    }
}

.check-label input[type="checkbox"],
.check-label .checked {
    display: none;
}
.check-label input[type="checkbox"]:checked ~ .checked {
    display: inline-block;
}
.check-label input[type="checkbox"]:checked ~ .unchecked {
    display:none;
}
  

//eye icon size
.eye {
    width: 15%;
    height: 15%;

    :hover {
        opacity: 0.5;
    }
}

//item hover style
.product:hover {
    .product-image {
        opacity: 0.8
    }
    .product-middle {
        z-index:1;
        opacity: 1;
    }
}

//not working yet
.input[type="checkbox"]:checked + label {
    //opacity: 0.5
    //display: none
    color: red;
    opacity: 1;
}

</style>