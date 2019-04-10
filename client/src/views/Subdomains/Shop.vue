<template>
  <div class="shop">

    <section class="hero is-small">
        <div class="hero-head">
          <nav class="breadcrumb is-size-4 my-breadcrumb is-hidden-mobile" aria-label="breadcrumbs">
            <ul>
              <li class="is-active crumb" v-for="(o, index) in occasions" v-bind:key="index" v-bind:value="o"  v-on:click="chooseOccasion(o,index)">
                <a>{{o.name}}</a>
              </li>
            </ul>
          </nav>
        </div>
         <div class="title is-size-1 page-title"><strong>{{selectedOccasion.name}}</strong></div>
    </section>

    <ShopOccasion v-bind:collection="selectedOccasion.collection"/>

  </div>
</template>


<script lang="ts">
/* eslint-disable */
import { Component, Vue ,Prop, Watch} from "vue-property-decorator";
import axios, {AxiosError, AxiosResponse} from "axios";
import { APIConfig } from "@/utils/api.utils";
import {iProduct,iImage, iOccasion, iOrganization, iEvent} from "@/models";
import ShopOccasion from "@/components/ShopOccasion.vue";

@Component({
  components: {
    ShopOccasion
  }
})
export default class Shop extends Vue {

  //@Prop() org!: iOrganization;
  //@Prop() event!: iEvent;
  //@Prop() occasions! : iOccasion[];
  //@Prop() selectedOccasion! : iOccasion;

  public org! : iOrganization;
  public event!: iEvent;
  public occasions! : iOccasion[];
  public error : string | boolean = false;
  public selectedOccasion!: iOccasion;
  error : string | boolean = false;

  @Prop() oid!: string;
  @Watch("oid")
  update(){
    this.selectedOccasion = this.occasions[this.oid];
  }
  selectedOccasion = this.occasions[this.oid];

  mounted(){
      console.log("starting navigation to subdomain: " + this.org_name);
      this.error = false;
      axios.get(APIConfig.buildUrl("/api/organization?subdomain=" + this.org_name))
        .then((response:AxiosResponse) => {
          this.org = response.data.organizations[0];
          this.event = this.org.events[0];
          this.occasions = this.event.occasions;
          this.selectedOccasion = this.occasions[0];
          console.log(this.org);
          console.log(this.event);
          console.log(this.occasions);
        })
        .catch((res:AxiosError) => {
          console.log("couldn't find organization?");
          this.error = res.response && res.response.data.reason;
        })
  }

  chooseOccasion(occasion:iOccasion, ind:number) {
    //this.selectedOccasion = occasion;
    this.$router.push("/shop/"+ind);
  }
}
</script>

<style lang="scss">

/*breadcrumb style*/
.my-breadcrumb {
  float: right;
  margin-right: 4%;
  margin-top: 1%;
}
.crumb:hover {
  font-weight: bold;
}

/*page title style*/
.page-title {
  padding-top: 3%;
  //padding-left: 10%;
  margin-left: 20%;
  text-align: left;
}


</style>
