<template>
    <div class="product_details">
        <section class="section">
            <p class="title">hi</p>
        </section>
        <section class="section">
            {{product}}
        </section>
    </div>
</template>

<script lang="ts">
/* eslint-disable */
import Vue from "vue";
import { Component, Prop} from "vue-property-decorator";
import axios, {AxiosError, AxiosResponse} from "axios";
import { APIConfig } from "@/utils/api.utils";
import {iProduct} from "@/models";

@Component
export default class ProductDetails extends Vue{

    error: boolean | String = false;
    @Prop() id!: String;
    product! : iProduct;

    // get the product you want to view
    mounted(){
        console.log("here?")
        this.error = false;
        axios
            .get(APIConfig.buildUrl("/product/" + this.id))
            .then((response: AxiosResponse) => {
                this.product = response.data.product;
            })
            .catch((res:AxiosError) => {
                this.error = res.response && res.response.data.reason;
                console.log(this.error)
            })
    }
}

</script>

<style lang="scss" scoped></style>