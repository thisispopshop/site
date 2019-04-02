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
            <button class="button is-medium is-inverted" v-on:click="createCollection">
                Create a Collection
            </button>
        </section>

        <!--display all collections-->
        <section class='section'>
            <h1 class="subtitle"> Active Collections </h1>
            <table class="table is-fullwidth is-hoverable">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>description?</th>
                        <th>length</th>
                        <th>status</th>
                        <th>cancel</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>0</td>
                        <td>Sample Collection</td>
                        <td>sample Description</td>
                        <td>1000</td>
                        <td>unapproved</td>
                        <td><span aria-label="Close">X</span></td>
                    </tr>
                </tbody>
            </table>
        </section>

    </div>
</template>

<script lang="ts">
/* eslint-disable */
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Collections extends Vue {

    //load all collections
    mounted(){

    }

    //create a new collection
    createCollection(){
        this.$router.push("/curate");
    }
}
</script>

<style lang="scss" scoped>

</style>