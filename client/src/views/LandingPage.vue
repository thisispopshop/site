<template>
    <div class="LandingPage">

        <!--tab title thing-->
        <vue-headful
            title="Popshop"
        />

        <!--whatever this thing is called-->
        <section class="hero is-fullheight">

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
                                        <input type="submit" value="be the first to know" name="subscribe" id="mc-embedded-subscribe" class="button is-hoverable is-medium custom-button" on-click="submitEmail">
                                        <input type="hidden" name="mc_signupsource" value="hosted">
                                    </div>

                                </div>
                            </form>

                        </div> 

                    </div>
                </section>
            </div>

        </section>

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

        //importnat info
        var email = (<HTMLFormElement>document.getElementById('mce-EMAIL')).value;
        var u = (<HTMLFormElement>document.getElementById('u')).value;
        var list_id = (<HTMLFormElement>document.getElementById('id')).value;
        var apikey = "0add730ed2afe84be3bb8ff58b0c8611-us20";
        var dc = apikey.split("-")[1];

        //post url by api
        let url = "https://"  + dc + ".api.mailchimp.com/3.0/lists/" + list_id + "/members/";

        //headers for post 
        let axios_config = {
            headers: {
                'Authorization': 'Basic ' + btoa('any:' + apikey),
                "Access-Control-Allow-Origin": "*",
                'Content-Type': 'application/json;charset=UTF-8',
            }
        };

        let post_data = {
            'id' : u,
            'email_address': email,
            'status' : 'subscribed',
        }

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
  width: 350px;
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
    background-color:#ffeaed;
    border-radius: 3px;
}

</style>