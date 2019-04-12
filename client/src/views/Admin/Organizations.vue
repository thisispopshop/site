<template>
    <div class="organizations">

        <!--page head-->
        <section class="hero is-dark">
            <div class="hero-body">
                <div class="container">
                <h1 class="title is-size-1">
                    <strong>Manage Sites</strong>
                </h1>
                <h2 class="subtitle is-size-3">
                    Manage subdomains and collections.
                </h2>
                </div>
            </div>
        </section>

        <!--all info-->
        <section class="section">
            <div class="container">
                <div class="columns">
                    <div class="column is-one-quarter">
                        <div class="buttons">
                            <button class="button is-small is-link is-outlined" v-on:click="showCreateOrganization">Create New Organization</button><br>
                        </div>

                        <p class='subtitle'>Organizations</p>
                        <div class="select is-multiple is-fullwidth is-hoverable">
                            <select size="4" multiple>
                                <option v-for="(org, index) in org_list" v-bind:key="index" v-bind:value="org" v-on:click="selectOrg(org)">{{org.name}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="column is-one-quarter">
                        <div class="buttons">
                            <button class="button is-small is-link is-outlined" v-on:click="showCreateEvent">Create New Event</button><br>
                        </div>
                        <p class='subtitle'>Events</p>
                        <div v-show="showEvents" class="select is-multiple is-fullwidth is-striped">
                            <select size="4" multiple>
                                <option v-for="(e,index) in event_list" v-bind:key="index" v-bind:value="e" v-on:click="selectEvent(e)">{{e.name}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="column is-one-quarter">
                        <div class="buttons">
                            <button class="button is-small is-link is-outlined" v-on:click="showCreateOccasion">Create New Occasion</button>
                        </div>

                        <p class='subtitle'>Occasions</p>
                        <div v-show="showOccasions" class="select is-multiple is-fullwidth is-hoverable">
                            <select size="4"  multiple>
                                <option v-for="(o,index) in occasion_list" v-bind:key="index" v-bind:value="o" v-on:click="selectOccasion(o)">{{o.name}}</option>
                            </select>
                        </div>
                    </div>


                    <div class="column is-one-quarter">
                        <div class="buttons">
                            <button class="button is-small is-link is-outlined" v-on:click="createCollection">Create New Collection</button><br>
                        </div>

                        <p class='subtitle'>Collection</p>
                        <div v-show="showCollection" class="select is-multiple is-fullwidth is-hoverable">
                            <select  size="4"  multiple>
                                <option  v-for="(c,index) in collection_list" v-bind:key="index" v-bind:value="c" v-on:click="selectCollection(c)">{{c.name}}</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </section>



        <!--forms-->
        <section class="section">
            <div class="container my-form" v-show="showOrganizationForm">
                <p class="my-form-title title">Create Organization</p>
                <div class="columns">
                    <div class="column is-one-half">
                        <label class="label">Organization Name</label>
                        <input class="input" type="text" placeholder="Occasion Name" v-model="newOrganization.name">
                        <label class="label">Subdomain</label>
                        <input class="input" type="text" placeholder="Occasion Description" v-model="newOrganization.description">
                    </div>
                    <div class="column">
                        <label class="label">Select Event: </label>
                        <div class="select is-multiple is-fullwidth">
                            <select size="2" v-model="selectedEventForm" multiple>
                                <option v-for="(ev,index) in eventsForm" v-bind:key="index" v-bind:value="ev">{{ev.name}}</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="buttons is-centered">
                        <button class="button is-success" v-on:click="submitOrganization">submit</button> 
                        <button class="button is-danger" v-on:click="cancelOrganization">cancel</button>
                    </div>
                </div>
            </div>
            <div class="container my-form" v-show="showEventForm">
                <p class="my-form-title title">Create Event</p>
                <div class="columns">
                    <div class="column is-one-half">
                        <label class="label">Event Name</label>
                        <input class="input" type="text" placeholder="Occasion Name" v-model="newEvent.name">
                        <label class="label">Event Description</label>
                        <input class="input" type="text" placeholder="Occasion Description" v-model="newEvent.description">
                    </div>
                    <div class="column">
                        <label class="label">Select Occasion(s): </label>
                        <div class="select is-multiple is-fullwidth">
                            <select size="2" v-model="selectedOccasionForm" multiple>
                                <option v-for="(occ,index) in occasionsForm" v-bind:key="index" v-bind:value="occ">{{occ.name}}</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="buttons is-centered">
                        <button class="button is-success" v-on:click="submitEvent">submit</button> 
                        <button class="button is-danger" v-on:click="cancelEvent">cancel</button>
                    </div>
                </div>
            </div>
            <div class="container my-form" v-show="showOccasionForm">
                <p class="my-form-title title">Create Occasion</p>
                <div class="columns">
                    <div class="column is-onehalf">
                        <label class="label">Occasion Name</label>
                        <input class="input" type="text" placeholder="Occasion Name" v-model="newOccasion.name">
                        <label class="label">Occasion Description</label>
                        <input class="input" type="text" placeholder="Occasion Description" v-model="newOccasion.description">
                        <label class="label">Occasion Form Link</label>
                        <input class="input" type="text" placeholder="Form Embed Link" v-model="newOccasion.submitForm">
                    </div>
                    <div class="column">
                        <label class="label">Select Collection: </label>
                        <div class="select is-multiple is-fullwidth" >
                            <select size="4" multiple v-model="selectedCollectionForm">
                                <option  v-for="(col,index) in collectionsForm" v-bind:key="index" v-bind:value="col" >{{col.name}}</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="buttons is-centered">
                        <button class="button is-success" v-on:click="submitOccasion">submit</button> 
                        <button class="button is-danger" v-on:click="cancelOccasion">cancel</button>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script lang="ts">
/* eslint-disable */
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import axios, {AxiosError, AxiosResponse} from "axios";
import { APIConfig } from "@/utils/api.utils";
import { iCollection, iOccasion ,iProduct, iOrganization, iEvent} from "@/models";

@Component
export default class Collections extends Vue {

    error : string | boolean = false;

    /*lists */
    org_list : iOrganization[] = [];        // display all the organizations
    event_list : iEvent[] = [];             // display events for selected org
    occasion_list : iOccasion[] = [];       // display occasions for selected event
    collection_list : iCollection[] = [];   // display collection for selected occasion

    /* show vars */
    showOrganizationForm : boolean = false;
    showEvents : boolean = false;
    showEventForm : boolean = false;
    showOccasions: boolean = false;
    showOccasionForm : boolean = false;
    showCollection: boolean = false;

    /*selections */
    selectedOrg: iOrganization | boolean = false;
    selectedEvent: iEvent | boolean = false;
    selectedOccasion: iOccasion | boolean = false;
    selectedCollection: iCollection | boolean = false;

    /* form variables */
    eventsForm: iEvent[] = [];
    occasionsForm: iOccasion[] = [];
    collectionsForm: iCollection[] = [];
    selectedCollectionForm : iCollection[] = [{name:"", status: "", approvedBy:-1, description:"", products: [], categories: []}];
    selectedOccasionForm : iOccasion[] = [{id:0, name:"", description:"", submitForm:"", collection:this.selectedCollectionForm[0]}];
    selectedEventForm : iEvent[] = [{id:0, name:"", description:"",occasions:this.selectedOccasionForm}];

    mounted(){
        //get all organizations
        this.error = false;
        axios.get(APIConfig.buildUrl('/api/organization'))
            .then((response:AxiosResponse) => {
                this.org_list = response.data.organizations;
            })
            .catch((res:AxiosError) => {
                this.error = res.response && res.response.data.reason;
            });

        //get all events
        this.error = false;
        axios.get(APIConfig.buildUrl('/api/event'))
            .then((response:AxiosResponse) => {
                this.eventsForm = response.data.events;
            })
            .catch((res:AxiosError) => {
                this.error = res.response && res.response.data.event;
            })

        //get all occasions
        this.error=false;
         axios.get(APIConfig.buildUrl("/api/occasion"))
            .then((response:AxiosResponse) => {
                this.occasionsForm = response.data.occasions;
            })
            .catch((res:AxiosError) => {
                this.error = res.response && res.response.data.reason;
            })

        //get all collections
        this.error = false;
        axios.get(APIConfig.buildUrl("/api/collection"))
            .then((response:AxiosResponse) => {
                this.collectionsForm = response.data.collections;
            })
            .catch((res:AxiosError) => {
                this.error = res.response && res.response.data.reason;
            })
        

    }

    /* VIEWING */
    selectOrg(o:iOrganization){
        this.selectedOrg = o;
        this.showEvents = true;
        this.event_list = o.events;
    }
    selectEvent(e:iEvent){
        this.selectedEvent = e;
        this.showOccasions = true;
        this.occasion_list = e.occasions;
    }
    selectOccasion(o:iOccasion) {
        this.selectedOccasion = o;
        this.showCollection = true;
        this.collection_list = [o.collection];
    }
    selectCollection(c){
        this.selectedCollection = c;
       // console.log(this.selectedCollection);
    }

    /*CREATION FUNCTIONS*/

    /**HANDLE ORGANIZATIONS */
    showCreateOrganization(){
        this.showOrganizationForm = !this.showOrganizationForm;
    }
    newOrganization : iOrganization = {
        id: 0,
        name: "",
        subdomain: "",
        events: this.selectedEventForm,
    }
    submitOrganization(org: iOrganization) {
        this.error = false;
        axios.post(APIConfig.buildUrl("/api/organization"), {
            name: this.newOrganization.name,
            subdomain: this.newOrganization.subdomain,
            events: this.selectedEventForm,
        }).then((response: AxiosResponse) => {
            alert("Successfully created Organization " + response.data.organization.name);
            this.showOrganizationForm = false;
        }).catch((res:AxiosError) => {
            alert("Failed to create Organization");
        })
    }
    cancelOrganization() {
        this.showOrganizationForm = !this.showOrganizationForm;
    }

    /*HANDLE EVENTS */
    showCreateEvent() {
        this.showEventForm = !this.showEventForm;
    }
    newEvent : iEvent = {
        id: 0,
        name: "",
        description: "",
        occasions: this.selectedOccasionForm,
    }
    submitEvent(event: iEvent) {
        this.error = false;
        axios.post(APIConfig.buildUrl("/api/event"), {
            name: this.newEvent.name,
            description: this.newEvent.description,
            occasions: this.selectedOccasionForm,
        }).then((response: AxiosResponse) => {
            alert("Successfully Created Event " + response.data.event.name);
            this.showEventForm = false;
        }).catch((res:AxiosError) => {
            alert("Failed to create Event");
        })
    }
    cancelEvent() {
        this.showEventForm = !this.showEventForm;
    }

    /* HANDLE OCCASIONS */
    showCreateOccasion(){
        this.showOccasionForm = !this.showOccasionForm;
    }
    newOccasion : iOccasion = {
        id: 0,
        name: '',
        description: '',    
        submitForm: "",
        collection: this.selectedCollectionForm[0],
    }
    submitOccasion() {
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
            collection: this.selectedCollectionForm,
        }).then((response:AxiosResponse) => {
            console.log(response.data.occasion);
            alert("Successfully Created Occasion " + response.data.occasion.name);
            this.showOccasionForm = false;
        }).catch((res:AxiosError) => {
            alert("Failed to Create Occasion :(");
            console.log(res.response);
        })
        this.showOccasionForm =false;
    }
    cancelOccasion() {
        this.showOccasionForm = false;
    }
    
    /*HANDLE COLLECTIONS */
    createCollection(){
        this.$router.push("/curate");
    }

}
</script>

<style lang="scss" scoped>

my-form {
    //trying to add padding to top and bottom????
    &-title {
        padding-bottom: 2%;
    }
}

</style>