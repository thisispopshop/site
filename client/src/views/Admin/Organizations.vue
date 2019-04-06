<template>
    <div class="organizations">

        <!--page head-->
        <section class="hero is-dark">
            <div class="hero-body">
                <div class="container">
                <h1 class="title is-size-1">
                    <strong>Organizations</strong>
                </h1>
                <h2 class="subtitle is-size-3">
                    Show events and occasions. 
                </h2>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <div class="columns">
                    <div class="column is-one-quarter">
                        <table class="table is-fullwidth is-hoverable">
                            <thead>
                                <th>Subdomains</th>
                            </thead>
                            <tbody>
                                <tr><td>Subdomain 1</td></tr>
                                <tr><td>Subdomain 1</td></tr>
                                <tr><td>Subdomain 1</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="column is-one-quarter">
                        <table class="table is-fullwidth is-hoverable">
                            <thead>
                                <th>Events</th>
                            </thead>
                            <tbody>
                                <tr><td>Event 1</td></tr>
                                <tr><td>Event 1</td></tr>
                                <tr><td>Event 1</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="column is-one-quarter">
                        <table class="table is-fullwidth is-hoverable">
                            <thead>
                                <th >Occasions</th>
                            </thead>
                            <tbody>
                                <tr v-for="(o,index) in occasion_list">
                                    <td>{{o.name}}

                                        <div>
                                            <p>Update Occasion</p>
                                            <input class="input is-small" type="text" v-model="o.name">
                                            <input class="input is-small" type="text" v-model="o.description">
                                            <input class="input is-small" type="text" v-model="o.submitForm">
                                            <p v-if='o.collection' class="is-size-7">{{o.collection.name}}</p>
                                            <p v-else class="is-size-7">{{selectedCollection.name}}</p>
                                            <button class="button is-small" v-on:click="updateOccasion(o)" >Update</button>
                                        </div>
                                        

                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="column is-one-quarter">
                        <table class="table is-fullwidth is-hoverable">
                            <thead>
                                <th>Collection</th>
                            </thead>
                            <tbody>
                                <tr v-for="(c,index) in collection_list" v-on:click="selectCollection(c)">
                                    <td>{{c.name}}</td>
                                </tr>
                                <tr><button class="button is-small" v-on:click="createCollection">Create New Collection</button><br></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>

        <section class="section">
            <p><button class="button is-small" v-on:click="showCreateOccasion">Create New Occasion</button><br></p>
            <div class="Container" v-show="showOccasion">
                <p>Create new Occasion</p>
                <label class="label is-small">Occasion Name</label>
                <input class="input is-small" type="text" placeholder="Occasion Name" v-model="newOccasion.name">
                <label class="label is-small">Occasion Description</label>
                <input class="input is-small" type="text" placeholder="Occasion Description" v-model="newOccasion.description">
                <label class="label is-small">Occasion Form Link</label>
                <input class="input is-small" type="text" placeholder="Form Embed Link" v-model="newOccasion.submitForm">
                <label class="label is-small">Select Collection: </label>
                <p class="is-size-7">{{selectedCollection.name}}</p><br>
                <button class="button is-small is-small" v-on:click="testCreateOccasion">create occasion</button> 
            </div>
        </section>

    </div>
</template>

<script lang="ts">
/* eslint-disable */
import { Component, Vue } from "vue-property-decorator";
import axios, {AxiosError, AxiosResponse} from "axios";
import { APIConfig } from "@/utils/api.utils";
import { iCollection, iOccasion ,iProduct} from "@/models";

@Component
export default class Collections extends Vue {

    error : string | boolean = false;
    collection_list : iCollection[] = [];
    occasion_list : iOccasion[] = [];
    selectedCollection: iCollection = {name:"temp", status: "temp", approvedBy:-1, description:"", products: []};

    mounted(){

        //get all collections
        this.error = false;
        axios.get(APIConfig.buildUrl("/api/collection"))
            .then((response:AxiosResponse) => {
                this.collection_list = response.data.collections;
            })
            .catch((res:AxiosError) => {
                this.error = res.response && res.response.data.reason;
            })

        //get all occasions
        this.error=false;
         axios.get(APIConfig.buildUrl("/api/occasion"))
            .then((response:AxiosResponse) => {
                this.occasion_list = response.data.occasions;
            })
            .catch((res:AxiosError) => {
                this.error = res.response && res.response.data.reason;
            })
    }

    //create a new collection
    createCollection(){
        this.$router.push("/curate");
    }

    selectCollection(c){
        this.selectedCollection = c;
        console.log(this.selectedCollection);
    }

    newOccasion : iOccasion = {
        id: 0,
        name: '',
        description: '',    
        submitForm: "",
        collection: this.selectedCollection,
    }

    testCreateOccasion() {
        this.error = false;
        if (this.newOccasion.name.length <1) {
            this.error = "Must Have a name";
            return;
        }
        axios.post(APIConfig.buildUrl("/api/occasion"), 
        {
            name: this.newOccasion.name,
            description: this.newOccasion.description,
            submitForm: this.newOccasion.submitForm,
            collection: this.selectedCollection,
        }).then((response:AxiosResponse) => {
            console.log(response.data.occasion);
        }).catch((res:AxiosError) => {
            console.log(res.response);
        })
        this.showOccasion=false;
    }

    showOccasion: boolean = false;
    showCreateOccasion(){
        this.showOccasion = !this.showOccasion;
    }

    updateOccasion(o){
        this.error = false;
        axios.put(APIConfig.buildUrl("/api/occasion/"+ o.id), {
            name: o.name,
            description: o.description,
            submitForm: o.submitForm,
            collection: this.selectedCollection
        }).then((response:AxiosResponse) => {
            console.log(response.data.occasion);
            alert("Succesfully Updated Occasion!");
        }).catch((res:AxiosError) => {
            console.log( res.response);
        })
    }
}
</script>

<style lang="scss" scoped>

</style>