<template>
    <div class="LandingPage">

        <!--whatever this thing is called-->
        <section class="hero is-light is-fullheight">

            <!--Put the Logo in the top right corner-->
            <div class="hero-head">
                <div class="logo">
                    <img alt="PopShop Logo" src="../assets/popshop_logo.png">
                </div>
            </div>

            <div class="hero-body">

                <!--content-->
                <section class="section ">
                    <div class="container">

                        <!--Header-->
                        <h1 class="title is-size-1 has-text-black">
                            RUSH, REDESIGNED.
                        </h1>

                        <!--Description-->
                        <h2 class="subtitle is-size-3 has-text-black">
                            <br> Say goodbye to countless hours spent shopping, creating lookbooks and approving 
                            <br> outfits. Let us handle your wardrobe so you can focus on what really matters: 
                            <br> welcoming your newest sisters home. 
                            <br>
                            <br>
                        </h2>

                        <!--Add you email-->
                        <div class="email_field">

                            <!--email address form control-->
                            <div class="field" >
                                <div class="control is-exanded">
                                    <input class="input is-medium" type="text" placeholder="enter email address" style="text-align:center;">
                                </div>
                            </div>

                            <!--submit email address-->
                            <div class="field">
                                <div class="control is-expanded">
                                    <button class="button is-dark is-medium is-fullwidth">learn more</button>
                                </div>
                            </div>
                        </div>  
                    
                    </div>
                </section>

            </div>
        </section>

        <section class="section">
            <div class="container has-text-centered">
                <h2 class="title">The Band</h2>
                <p>words</p>
                <div class="columns is-centered" style="padding: 2rem">
                    <div class="column">
                        <div class="card">
                            <div class="card-image">
                                <figure class="image is-2by1">
                                    <img src="https://images.pexels.com/photos/167635/pexels-photo-167635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Placeholder image">
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-content">
                                        <p class="title is-4">John Smith</p>
                                    </div>
                                </div>

                                <div class="content">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="card">
                            <div class="card-image">
                                <figure class="image is-2by1">
                                    <img src="https://images.pexels.com/photos/167635/pexels-photo-167635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Placeholder image">
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-content">
                                        <p class="title is-4">John Smith</p>
                                    </div>
                                </div>

                                <div class="content">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="card">
                            <div class="card-image">
                                <figure class="image is-2by1">
                                    <img src="https://images.pexels.com/photos/167635/pexels-photo-167635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Placeholder image">
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-content">
                                        <p class="title is-4">John Smith</p>
                                    </div>
                                </div>

                                <div class="content">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script lang="ts">
import axios from "axios";
import { APIConfig } from "@/utils/api.utils";

import Vue from "vue";
import { Component} from "vue-property-decorator";

@Component
export default class LandingPage extends Vue {
}
</script>

<style scoped>
/*for banner background image*/
.has-bg-img { 
    background: url('https://cdn.vox-cdn.com/thumbor/BWaT3_PNCAHTsWlAJ0vLgGcbOAk=/0x0:2000x1333/1920x0/filters:focal(0x0:2000x1333):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/9136689/OH6A8388.jpg')center center; 
    background-size:cover;
}

/*fixed alignment of logo*/
.logo {
  position: absolute;
  right: 0px;
  width: 200px;
  padding: 10px;
}

/*fixed sizing and alignment of email field*/
.email_field {
    width:500px;
    align: left;
}


</style>