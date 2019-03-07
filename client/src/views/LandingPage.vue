<template>
    <div class="LandingPage">

        <!--whatever this thing is called-->
        <!--https://cdn.vox-cdn.com/thumbor/BWaT3_PNCAHTsWlAJ0vLgGcbOAk=/0x0:2000x1333/1920x0/filters:focal(0x0:2000x1333):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/9136689/OH6A8388.jpg-->
        <section class="hero is-light is-fullheight has-bg-img ">
            <div class="hero-body">

                <!--content-->
                <section class="section ">
                    <div class="container">
                        <h1 class="title is-size-1 has-text-black">
                            Rush, Redesigned.
                        </h1>
                        <h2 class="subtitle is-size-3 has-text-black">
                            <br> Say goodbye to countless hours spent shopping, creating lookbooks and approving 
                            <br> outfits. Let us handle your wardrobe so you can focus on what really matters: 
                            <br> welcoming your newest sisters home. 
                            <br>
                            <br>
                        </h2>

                        <!--Add you email-->
                        <!--<label class="label">Statement?</label>-->
                        <div class="field has-addons">
                            <div class="control is-expanded">
                                <input class="input" type="text" placeholder="Enter your email">
                            </div>
                            <div class="control is-expanded">
                                <a class="button is-success">Learn More</a>
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
import Vue from "vue";
import { Component} from "vue-property-decorator";
import { APIConfig } from "@/utils/api.utils";

@Component
export default class LandingPage extends Vue {
}
</script>

<style scoped>
.has-bg-img { 
    background: url('https://cdn.vox-cdn.com/thumbor/BWaT3_PNCAHTsWlAJ0vLgGcbOAk=/0x0:2000x1333/1920x0/filters:focal(0x0:2000x1333):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/9136689/OH6A8388.jpg')center center; 
    background-size:cover;
}



</style>