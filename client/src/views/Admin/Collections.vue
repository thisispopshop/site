<template>
    <div class="collections">

        <!--page head-->
        <section class="hero is-dark">
            <div class="hero-body">
                <div class="container">
                <h1 class="title is-size-1">
                    <strong>Collections</strong>
                </h1>
                <h2 class="subtitle is-size-3">
                    List of Active Collections
                </h2>
                </div>
            </div>
        </section>

        <!--create new collection-->
        <section class="section">
            <div class="container">
                <button class="button is-medium is-inverted" v-on:click="createCollection">
                    Create a Collection
                </button>
            </div>
        </section>

        <!--display all collections-->
        <section class='section'>

            <div class="container">

                <button class="button is-small is-inverted" v-on:click="createCollection">
                    Create a Collection
                </button>

                <!--Show Collections-->
                <p v-if="error">There are no unassigned collections.</p>
                <div v-show="!error">
                    <h1 class="subtitle"> <br>Unassigned Collections </h1>
                    <table class="table is-fullwidth  is-hoverable">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>name</th>
                                <th>length</th>
                                <th>status</th>
                                <th>cancel</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(c,index) in collection_list" v-bind:key="index" v-bind:value="c">
                                <td>{{c.id}}</td>
                                <td>{{c.name}}</td>
                                <td>{{c.products.length}}</td>
                                <td>{{c.status}}</td>
                                <td><span aria-label="Close">X</span></td>                  
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </section>

    </div>
</template>

<script lang="ts">
/* eslint-disable */
import { Component, Vue } from "vue-property-decorator";
import axios, {AxiosError, AxiosResponse} from "axios";
import { APIConfig } from "@/utils/api.utils";
import { iCollection} from "@/models";

@Component
export default class Collections extends Vue {

    error : string | boolean = false;
    collection_list : iCollection[] = [];

    //load all collections
    mounted(){
        this.error = false;
        axios.get(APIConfig.buildUrl("/api/collection"))
            .then((response:AxiosResponse) => {
                this.collection_list = response.data.collections;
            })
            .catch((res:AxiosError) => {
                this.error = res.response && res.response.data.reason;
            })
    }

    //create a new collection
    createCollection(){
        this.$router.push("/curate");
    }
}
</script>

<style lang="scss" scoped>

</style>