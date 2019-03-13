<template>
    <div class="LandingPage">

        <!--tab title thing-->
        <vue-headful
            title="Popshop"
        />

        <!--whatever this thing is called-->
        <section class="hero is-fullheight is-light">

            <!--Put the Logo in the top right corner-->
            <div class="hero-head">
                <div class="logo">
                    <img alt="PopShop Logo" src="../assets/popshop_logo.png">
                </div>
            </div>
      
            <!--content-->
            <div class="hero-body more-right">
                <section class="section ">
                    <div class="container">

                        <!--Header-->
                        <h1 class="title is-size-1 has-text-black">
                            RUSH, REDESIGNED.
                        </h1>

                        <!--Description-->
                        <h2 class="subtitle is-size-3 has-text-black">
                            <br> Say goodbye to countless hours spent shopping, creating lookbooks and approving outfits. 
                            <br> Let us handle your wardrobe so you can focus on what really matters: 
                            <br> <b>welcoming your newest sisters home.</b>
                            <br>
                            <br>
                        </h2>             


                        <!--Add you email-->
                        <div class="email-field" id="mc_embed_signup">

                            <!--will post to mail chimp-->
                            <form v-on:submit.prevent="submitEmail"
                            id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form">

                                <input type="hidden" name="u" id="u" value="1b710cfbce51379fff004977c&amp;">
                                <input type="hidden" name="id" id="id" value="9af8420170">

                                <div class="field is-grouped ">

                                    <!--email input form-->
                                    <div class="control is-expanded">
                                        <input class="input is-medium custom-input" type="email" name="EMAIL" id="mce-EMAIL" placeholder="enter email address" value = "" aria-required="true">
                                        <p v-if="error" class="help is-danger">{{error}}</p>
                                    </div>

                                    <!--submit email-->
                                    <div class="control">
                                        <input type="submit" value="be the first to know" name="subscribe" id="mc-embedded-subscribe" class="button is-hoverable is-medium is-black custom-button" on-click="submitEmail">
                                        <input type="hidden" name="mc_signupsource" value="hosted">
                                    </div>

                                </div>
                            </form>

                            <!--will post to mail chimp
                            <form action="https://thisispopshop.us20.list-manage.com/subscribe/post?u=1b710cfbce51379fff004977c&amp;id=9af8420170" 
                             method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>

                                <div class="field is-grouped ">

                                    <!--email input form
                                    <div class="control is-expanded">
                                        <input class="input is-medium custom-input" type="email" name="EMAIL" id="mce-EMAIL" placeholder="enter email address" aria-required="true">
                                        <p v-if="error" class="help is-danger">{{error}}</p>
                                    </div>

                                    <!-- VALIDATION? add style:"display:none"
                                    <div id="mce-responses" class="clear">
                                        <!--<div class="response" id="mce-error-response" ></div>
                                        <div class="response" id="mce-success-response" ></div>
                                    </div>

                                    <!--prevents bots from signing up
                                    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_1b710cfbce51379fff004977c_9af8420170" tabindex="-1" value=""></div>

                                    <!--submit email
                                    <div class="control">
                                        <input type="submit" value="be the first to know" name="subscribe" id="mc-embedded-subscribe" class="button is-hoverable is-medium is-black custom-button" >
                                    </div>

                                </div>
                            </form>-->

                        </div> 

                    </div>
                </section>
            </div>

        </section>

        <footer class="footer">
            
            <div class="content has-text-centered">
                <p><b>© Popshop 2019</b></p>
            </div>
        </footer>

    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component} from "vue-property-decorator";
import axios, { AxiosError, AxiosResponse } from "axios";
import * as EmailValidator from "email-validator";

@Component
export default class LandingPage extends Vue {

    error: string | boolean = false;

    submitEmail(){
        //EmailValidator.validate("test@email.com");

        console.log("submitting email...");

        var email = (<HTMLFormElement>document.getElementById('mce-EMAIL')).value;
        var u = (<HTMLFormElement>document.getElementById('u')).value;
        var list_id = (<HTMLFormElement>document.getElementById('id')).value;
        var apikey = "0add730ed2afe84be3bb8ff58b0c8611-us20";
        var dc = apikey.split("-")[1];

        //post body
        let post_data = {
            "id": u,
            "email_address": email,
            "unique_email_id": "",
            "email_type": "html",
            "status": "subscribed",
            "merge_fields": {
                "FNAME": "",
                "LNAME": "",
                "ADDRESS": "",
                "PHONE": "",
                "BIRTHDAY": ""
            },
            "stats": {
                "avg_open_rate": 0,
                "avg_click_rate": 0
            },
            "ip_signup": "",
            "timestamp_signup": "",
            "ip_opt": "75.128.12.209",
            "timestamp_opt": "2019-03-10T01:11:52+00:00",
            "member_rating": 2,
            "last_changed": "2019-03-10T01:11:52+00:00",
            "language": "en",
            "vip": false,
            "email_client": "",
            "location": {
                "latitude": 35.2595,
                "longitude": -120.652,
                "gmtoff": -8,
                "dstoff": -7,
                "country_code": "US",
                "timezone": "America/Los_Angeles"
            },
            "tags_count": 0,
            "tags": [],
            "list_id": "9af8420170",
            "_links": [
                {
                    "rel": "self",
                    "href": "https://us20.api.mailchimp.com/3.0/lists/9af8420170/members/0d6564c51abb1f670cbf000e8b1b387a",
                    "method": "GET",
                    "targetSchema": "https://us20.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"
                },
                {
                    "rel": "parent",
                    "href": "https://us20.api.mailchimp.com/3.0/lists/9af8420170/members",
                    "method": "GET",
                    "targetSchema": "https://us20.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
                    "schema": "https://us20.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json"
                },
                {
                    "rel": "update",
                    "href": "https://us20.api.mailchimp.com/3.0/lists/9af8420170/members/0d6564c51abb1f670cbf000e8b1b387a",
                    "method": "PATCH",
                    "targetSchema": "https://us20.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
                    "schema": "https://us20.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"
                },
                {
                    "rel": "upsert",
                    "href": "https://us20.api.mailchimp.com/3.0/lists/9af8420170/members/0d6564c51abb1f670cbf000e8b1b387a",
                    "method": "PUT",
                    "targetSchema": "https://us20.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
                    "schema": "https://us20.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"
                },
                {
                    "rel": "delete",
                    "href": "https://us20.api.mailchimp.com/3.0/lists/9af8420170/members/0d6564c51abb1f670cbf000e8b1b387a",
                    "method": "DELETE"
                },
                {
                    "rel": "activity",
                    "href": "https://us20.api.mailchimp.com/3.0/lists/9af8420170/members/0d6564c51abb1f670cbf000e8b1b387a/activity",
                    "method": "GET",
                    "targetSchema": "https://us20.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"
                },
                {
                    "rel": "goals",
                    "href": "https://us20.api.mailchimp.com/3.0/lists/9af8420170/members/0d6564c51abb1f670cbf000e8b1b387a/goals",
                    "method": "GET",
                    "targetSchema": "https://us20.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"
                },
                {
                    "rel": "notes",
                    "href": "https://us20.api.mailchimp.com/3.0/lists/9af8420170/members/0d6564c51abb1f670cbf000e8b1b387a/notes",
                    "method": "GET",
                    "targetSchema": "https://us20.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"
                },
                {
                    "rel": "delete_permanent",
                    "href": "https://us20.api.mailchimp.com/3.0/lists/9af8420170/members/0d6564c51abb1f670cbf000e8b1b387a/actions/delete-permanent",
                    "method": "POST"
                }
            ]
        }

        //post url by api
        let url = "https://"  + dc + ".api.mailchimp.com/3.0/lists/" + list_id + "/members/";

        //authorization by api key
        let auth = {
            auth: {
                username: 'anystring',
                password: apikey,
            }
        }

        //headers for post - NOT WORKING
        let axios_config = {
            headers: {
                'Authorization': auth,
                "Access-Control-Allow-Origin": "*",
                'Content-Type': 'application/json;charset=UTF-8',
                'Access-Control-Allow-Methods': 'POST',
                'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
            }
        };

        this.error = false;
        axios.post(url, post_data, axios_config)
        .then((response) => {
            console.log("success");
            console.log(response);
        })
        .catch((res) => {
            console.log("error");
            console.log(res);
        })
    }


}
</script>



<!--"scoped" means these styles only apply to THIS page-->
<style scoped>

/*for banner background image*/
.has-bg-img { 
    background: url('https://cdn.vox-cdn.com/thumbor/BWaT3_PNCAHTsWlAJ0vLgGcbOAk=/0x0:2000x1333/1920x0/filters:focal(0x0:2000x1333):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/9136689/OH6A8388.jpg')center center; 
    background-size:cover;
}

/*to change color*/
.has-bg-color {
    background-color: #DDC9CC;
}

/*fixed alignment of logo*/
.logo {
  position: absolute;
  right: 0px;
  width: 200px;
  padding: 10px;
}

/*fixed sizing and alignment of email field*/
.email-field {
    width: 475px;
    align: left;
}


/*pushing content to the right*/
.more-right {
    margin: auto;
    padding-top: 15%;
    left: 5%;
    position: absolute;
}

input {
    border:none;
}

/*altering the email field*/
.custom-input {
  border:  transparent;
  border-color: transparent;
  background: transparent;
  border-bottom: 1px solid #8c8c8c;
  border-radius: 0px;
  box-shadow: 0;
}

.custom-button {
    //background-color: #d8c9cb;
    border-radius: 3px;
}

</style>