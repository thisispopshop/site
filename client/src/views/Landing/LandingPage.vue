<template>
    <div class="LandingPage">

        <!--whatever this thing is called-->
        <section class="hero is-fullheight">

            <!--Put the Logo in the top right corner-->
            <div class="hero-head logo">
                <!--<div class="logo">-->
                    <img alt="PopShop Logo" src="@/assets/popshop_logo.png">
                <!--</div>-->
            </div>
      
            <!--content-->
            <div class="hero-body more-right">
                <section class="section">
                    <div class="container">

                        <!--Header-->
                        <h1 class="title is-size-1 is-size-4-mobile has-text-black" style="letter-spacing: 1px;">
                            RUSH, REDESIGNED.
                        </h1>

                        <!--Description is-size-3-->
                        <h2 class="body-content is-size-3 is-hidden-mobile has-text-black ">
                            Say goodbye to countless hours spent shopping, creating lookbooks and approving outfits. 
                            Let us handle your wardrobe so you can focus on what really matters: 
                            <br>
                            <span class="special-text">Welcoming your newest sisters home.</span>
                        </h2>  
                        <!--mobile version-->
                        <h2 class="body-content-mobile is-size-6 is-hidden-desktop is-hidden-tablet has-text-black is-fullwidth">
                            Say goodbye to countless hours spent shopping, creating lookbooks and approving outfits. 
                            Let us handle your wardrobe so you can focus on what really matters: 
                            <br>
                            <span class="special-text-mobile is-fullwidth">Welcoming your newest sisters home.</span>
                        </h2>  

                        <!--Add you email desktop-->
                        <div class="email-field is-hidden-mobile" id="mc_embed_signup">
                            <form action="https://thisispopshop.us20.list-manage.com/subscribe/post?u=1b710cfbce51379fff004977c&amp;id=9af8420170" 
                             method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form">

                                <div class="field is-grouped ">

                                    <!--email input form-->
                                    <div class="control is-expanded">
                                        <input class="input is-medium custom-input" type="email" name="EMAIL" id="mce-EMAIL" placeholder="enter email address" aria-required="true" >
                                        <p v-if="error" class="help is-danger">{{error}}</p>
                                    </div>

                                    <!-- VALIDATION? add style:"display:none"-->
                                    <div id="mce-responses" class="clear">
                                        <div class="response" id="mce-error-response" ></div>
                                        <div class="response" id="mce-success-response" ></div>
                                    </div>

                                    <!--prevents bots from signing up-->
                                    <div style="position: absolute; left: -5000px;" aria-hidden="true">
                                        <input type="text" name="b_1b710cfbce51379fff004977c_9af8420170" tabindex="-1" value="">
                                    </div>

                                    <!--submit email-->
                                    <div class="control">
                                        <input type="submit" value="Be the First to Know" name="subscribe" id="mc-embedded-subscribe" class="button is-hoverable is-medium custom-button">
                                    </div>

                                </div>
                            </form>
                        </div> 

                        <!--Add you email-->
                        <div class="email-field-mobile is-hidden-desktop is-hidden-tablet" id="mc_embed_signup">
                            <form action="https://thisispopshop.us20.list-manage.com/subscribe/post?u=1b710cfbce51379fff004977c&amp;id=9af8420170" 
                             method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form">

                                <div class="field is-grouped ">

                                    <!--email input form-->
                                    <div class="control is-expanded">
                                        <input class="input is-small custom-input" type="email" name="EMAIL" id="mce-EMAIL" placeholder="enter email address" aria-required="true">
                                        <p v-if="error" class="help is-danger">{{error}}</p>
                                    </div>

                                    <!-- VALIDATION? add style:"display:none"-->
                                    <div id="mce-responses" class="clear">
                                        <div class="response" id="mce-error-response" ></div>
                                        <div class="response" id="mce-success-response" ></div>
                                    </div>

                                    <!--prevents bots from signing up-->
                                    <div style="position: absolute; left: -5000px;" aria-hidden="true">
                                        <input type="text" name="b_1b710cfbce51379fff004977c_9af8420170" tabindex="-1" value="">
                                    </div>

                                    <!--submit email-->
                                    <div class="control">
                                        <input type="submit" value="Be the First to Know" name="subscribe" id="mc-embedded-subscribe" class="button is-hoverable is-small custom-button">
                                    </div>

                                </div>
                            </form>
                        </div> 

                    </div>
                </section>
            </div>

            <div id="toast" v-show="isShowing">
                <div id="desc" >thanks for subscribing!</div>
            </div>
            
        </section>

    </div>
</template>

<script lang="ts">
/* eslint-disable */
import Vue from "vue";
import { Component, Prop} from "vue-property-decorator";

@Component
export default class LandingPage extends Vue {

    @Prop(String) id!: string | null;

    error: string | boolean = false;
    isShowing : Boolean = false;

    mounted(){
        if (this.id == "thanks") {
           setTimeout(this.showThankYou, 500);
        }
        this.isShowing=false;
    }

    showThankYou(){
        this.isShowing = true;
    }

}
</script>

<!--"scoped" means these styles only apply to THIS page-->
<style scoped>

/*fixed alignment of logo*/
.logo{
  position: absolute;
  right: 0%;
  width: 17%;
}

/*spacing the body content*/

.body-content {
    width: 85%;
    line-height: 50px;
    padding-top: 0%;
    padding-bottom: 3%;
    letter-spacing: 1px;
}


.body-content-mobile {
    width: 100%;
    padding-top: 0%;
    padding-bottom: 3%;
    letter-spacing: 1px;
}

/*special sentence style */
.special-text {
    font-weight: bold;
    line-height: 80px;
    letter-spacing: 1px;
}
.special-text-mobile {
    font-weight: bold;
    //line-height: 40px;
    letter-spacing: 1px;
}

/*fixed sizing and alignment of email field*/
.email-field {
    width: 470px;
    float: left;
}

/*pushing content to the right*/
.more-right {
    margin: auto;
    padding-top: 15%;
    left: 2%;
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
    background-color:#FAE4E9;
    border-radius: 3px;
}



/*toast notification*/
#toast {
    max-width: 0px;
    height: 45px;
    /*margin-left: -125px;*/
    margin: auto;
    background-color: #FAE4E9;
    color: black;
    text-align: center;
    border-radius: 3px;
    position: fixed;
    /*z-index: 1;*/
    left: 0;
    right: 0;
    bottom: 30px;
    font-size: 17px;
    white-space: nowrap;

    -webkit-animation: fadein 0.5s, expand 0.5s 0.5s,stay 3s 1s, shrink 0.5s 2s, fadeout 0.5s 2.5s;
    animation: fadein 0.5s, expand 0.5s 0.5s,stay 3s 1s, shrink 0.5s 4s, fadeout 0.5s 4.5s;
}

#toast #desc{
    color: black;
    padding: 5%;
    overflow: hidden;
	white-space: nowrap;
}

/*
#toast.show {
    visibility: visible;
    -webkit-animation: fadein 0.5s, expand 0.5s 0.5s,stay 3s 1s, shrink 0.5s 2s, fadeout 0.5s 2.5s;
    animation: fadein 0.5s, expand 0.5s 0.5s,stay 3s 1s, shrink 0.5s 4s, fadeout 0.5s 4.5s;
}*/

@-webkit-keyframes fadein {
    from {bottom: 0; opacity: 0;} 
    to {bottom: 30px; opacity: 1;}
}

@keyframes fadein {
    from {bottom: 0; opacity: 0;}
    to {bottom: 30px; opacity: 1;}
}

@-webkit-keyframes expand {
    from {min-width: 0px} 
    to {min-width: 200px}
}

@keyframes expand {
    from {min-width: 0px}
    to {min-width: 200px}
}
@-webkit-keyframes stay {
    from {min-width: 200px} 
    to {min-width: 200px}
}

@keyframes stay {
    from {min-width: 200px}
    to {min-width: 200px}
}
@-webkit-keyframes shrink {
    from {min-width: 200px;} 
    to {min-width: 0px;}
}

@keyframes shrink {
    from {min-width: 200px;} 
    to {min-width: 0px;}
}

@-webkit-keyframes fadeout {
    from {bottom: 30px; opacity: 1;} 
    to {bottom: 60px; opacity: 0;}
}

@keyframes fadeout {
    from {bottom: 30px; opacity: 1;}
    to {bottom: 60px; opacity: 0;}
}

</style>