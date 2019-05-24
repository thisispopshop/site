<template>
    <div class="LandingPage">

        <div class="is-hidden-desktop is-hidden-tablet">
            <LandingMobile v-bind:id="id"/>
        </div>

        <div class="is-hidden-mobile">
            <!--desktop-->
            <section id="navbar" class="my-nav">
                <div class="my-nav-menu">
                    <button class="my-nav-item" v-scroll-to="'#section2'">About</button> 
                    <button class="my-nav-item" v-scroll-to="'#section5'">How It Works</button> 
                    <button class="my-nav-item" v-scroll-to="'#section6'">Team</button> 
                </div>
                <div class="my-nav-middle">
                    <img src="@/assets/popshop_logo.png" alt="logo" v-scroll-to="'#section1'">
                </div>
                <div class="my-nav-end">
                    <button class="my-nav-end-button" v-scroll-to="'#section8'">Create a Popshop</button>
                </div>
            </section>

            <!--Hero Landing Page-->
            <section id="section1" class="hero is-fullheight has-bg-img-1" >
                <div class="hero-head center">
                    <img id="logo" class="logo-top" src="@/assets/popshop_logo.png" alt="logo" >
                </div>    
                <div class="hero-body center">
                    <div class="big-hero-text-one ">
                        <p>Stress free style for every occasion.</p>
                        <div class="big-hero-text-one-space-between"></div>
                        <button class="button big-hero-button" v-scroll-to="'#section8'">Create a Popshop</button>
                    </div>
                </div>
            </section>

            <section id="section2" >
                <div class="standard-container">
                    <div class="center section-title">Say Goodbye To</div>
                    <div class='center'>
                        <ul class="section2-list">
                            <li class='section2-item'>
                                <div class="section2-item-icon">
                                    <img src="@/assets/icons/Goodbye_clock.png" alt="mail logo">
                                </div>
                                <div class="section2-item-text">Countless hours spent shopping</div>
                            </li>
                            <li class='section2-item'> 
                                <div class="section2-item-icon">
                                <img src="@/assets/icons/goodbye_lookbook.png" alt="mail logo">
                                </div>
                                <div class="section2-item-text">Creating Lookbooks</div>
                            </li>
                            <li class='section2-item'> 
                                <div class="section2-item-icon">
                                <img src="@/assets/icons/goodbye_person.png" alt="mail logo">
                                </div>
                                <div class="section2-item-text">Approving outfits in person</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="section3" class='section3'>
                <div class="standard-container">
                    <div class="center section3-text1">Let us handle your wardrobe</div>
                    <div class="center section3-text2">so you can focus on</div>
                    <div class="center section3-text3">what really matters ...</div>
                </div>
            </section>

            <section id="section4" class="section4 has-bg-img-2">
                <div class="center section4-text section-title">welcoming your newest sisters home.</div>
            </section>
            
            <section id="section5" >
                <div class="standard-container">
                <div class="center section-title">How It Works</div>
                <div  class="section5-steps ">
                    <div id="howitworks-step1" class="section5-step">
                        <div class="section5-step-img">
                            <img src="@/assets/images/howitworks_step1.png" alt="how it works 1">
                        </div>
                        <div class="section5-step-content">
                            <h1>Step 1: Curate Your Collections</h1>
                            <p>Easily build custom shopping collections for your events from our wide variety of products.</p>
                        </div>
                    </div>
                    <div id="howitworks-step2" class="section5-step">
                        <div class="section5-step-img">
                            <img src="@/assets/images/howitworks_step2.png" alt="how it works 2">
                         </div>
                        <div class="section5-step-content">
                            <h1>Step 2: Customize Your Site</h1>
                            <p>Customize your Popshop with your event information, submission forms and more.</p>
                        </div>
                    </div>
                    <div id="howitworks-step3" class="section5-step">
                        <div class="section5-step-img">
                            <img src="@/assets/images/howitworks_step3.png" alt="how it works 3">
                         </div>
                        <div class="section5-step-content">
                            <h1>Step 3: Publish and Share</h1>
                            <p>Publish your Popshop so your friends can shop all the brands they love in one place.</p>
                        </div>
                    </div>
                </div>
                </div>
            </section>

            <section id="section6">
                <div class="center section-title">Team</div>
                <div class="section6-grid">
                    <div id="tiffany" class="section6-grid-item" style="background-color:#FAE4E9">
                        <h1 >Tiffany Yeung</h1>
                        <img src="@/assets/team/team_tiffany.png" alt="tiffany">
                        <p>Tiffany is your ultimate, savvy business gal always executing on her next greatest business idea.  First in the office
                            and the last to go. At 5:01 PM, you’ll see her at the office changing into her PJ’s and getting ready for a long night! 
                        </p>
                    </div>
                    <!--<div id="team" class="section6-grid-item">-->
                        <div class="section6-grid-big-photo">
                            <img src="@/assets/team/team_teampic.png" alt="team">
                       </div>
                    <!--</div>-->
                    <div id="rutu" class="section6-grid-item">
                        <h1>Rutu Samai</h1>
                        <img src="@/assets/team/team_rutu.png" alt="rutu">
                        <p>Rutu is our beloved  Product Pro. As driven as she is talented, she is always ready to tackle her next challenge head on!
                            In her downtime, she’s doing one of two things - napping or cracking another one of her infamous puns.  
                        </p>
                    </div>
                    <div id="makena" class="section6-grid-item" style="background-color:#FAE4E9">
                        <h1>Makena Kong</h1>
                        <img src="@/assets/team/team_makena.png" alt="makena">
                        <p>Makena is your resident, amazingly talented hacker. When she’s not on her couch building new algorithms for Popshop, 
                            you’ll find her petting the nearest dog and asking for chicken nuggets.
                        </p>
                    </div>
                </div>
            </section>

            <section id="section7">
                <div class="section7 standard-container">
                    <div class="section-title center">
                        What People Are Saying
                    </div>
                    <div class="section7-content">
                        <div class="section7-content-img">
                            <img src="@/assets/images/whatpeoplearesaying_cayla.jpg" alt="maggy">
                        </div>
                        <p>
                            <span class="section7-content-quote">“I love using pop shop because it makes my job as our recruitment chair so much easier and it is super convenient for all of my sisters to use!”</span>
                            <br><br>
                            <span class="section7-content-quote-author">Cayla Quinn, Cal Poly AOII Recruitment Officer</span>
                        </p>
                    </div>
                </div>
            </section>

            <section id="section8">
                <div class="standard-container">
                    <div class="section8-title center">
                        Your personal event wardrobe awaits.
                    </div>
                    <div class="email-field is-hidden-mobile" id="mc_embed_signup">
                        <form action="https://thisispopshop.us20.list-manage.com/subscribe/post?u=1b710cfbce51379fff004977c&amp;id=9af8420170" 
                        method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form">

                            <div class="custom-field">

                                <!--email input form-->
                                <div class="control is-expanded">
                                    <input class="input is-medium custom-input" type="email" name="EMAIL" id="mce-EMAIL" placeholder="Enter email address" aria-required="true" >
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
                                    <input type="submit" value="Let's Get Started" name="subscribe" id="mc-embedded-subscribe" class="button is-hoverable is-medium custom-button-form">
                                </div>

                            </div>
                        </form>
                    </div> 
                    <!--<div v-show="isShowing" class="section8-toast">
                        YAY, You've been added to our mailing list! 
                    </div>-->
                </div>
            </section>

            <div id="toast" v-show="isShowing" >
                <div id="desc" >YAY, You've been added to our mailing list!</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
/* eslint-disable */
import Vue from "vue";
import { Component, Prop} from "vue-property-decorator";
import LandingMobile from "@/mobile/Landing/LandingMobile.vue";

@Component({
    components: {
        LandingMobile
    }
})
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

<style lang="scss" scoped>

// STANDARD STYLE

.center {
    display:flex;
    justify-content: center;
}

.logo-top {  
    margin-top: 8vh;
    width:15vw;
    position: absolute;
}

.section-title{
    font-size: 4vw;
    font-weight: bold;
    font-family: 'Brandon Grotesque Thick';
    padding-bottom: 3%;
}

.standard-container {
    padding: 10%;
    padding-top: 5%;
    padding-bottom: 5%;
}

// BACKGROUND JERO IMAGES
.has-bg-img {
    &-1 {
        background: url("https://i.ibb.co/jDsWcSm/Hero-Image.png")center center; 
        background-size:cover;
    }
    &-2{
        background: url("https://i.ibb.co/dGd6449/welcoming-pink-sratgirls.png")center center; 
        background-size:cover;
    }
}

.big-hero {
    &-text {
        &-one {
            position: absolute;
            width: 35%;
            text-align:center;
            padding-top: 20vh;
            p {
                font-size: 4.5vw;
                margin-top:0%;
            }
            &-space-between {
                height: 15vh;
            }
            button {
                margin-bottom: 0%;
            }
        }   
    }
    &-button {
        background-color:black;
        border-radius: 3.5px;
        border: none;
        box-shadow: 0.5px 0.5px rgb(224, 223, 223);
        font-weight: bold;
        font-size: 1.5vw;
        color: white;
        width: 15vw;

        &:hover {
            background-color: #FAE4E9;
            color: black;
        }
    }
}

.my-nav {
    display: flex;
    justify-content: space-between;
    opacity: 0.8;
     //sticky
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #f7f4f4;

    &:hover {
        opacity:1
    }

    &-menu{
        width: 47%;
        padding: 0.5%;
        padding-left:1.5%;
        display: flex;
        justify-content: flex-start;

        button {
            background-color: transparent;
            border: none;
            font-size: 1.5vw;
            color:black;
        }
    }

    &-item {
        padding-left: 3%;
        padding-right: 3%;
        white-space: nowrap;

        &:hover {
            font-weight: bold;
        }
    }

    &-middle {
        img {
            width: 6vw;
        }
    }
    
    &-end {
        margin:auto;
        margin-right: 0%; 
        padding-right:1.5%;
        padding: 2%;
        &-button {
            background-color:#FAE4E9;
            border-radius: 3.5px;
            border: none;
            box-shadow: 0.5px 0.5px rgb(224, 223, 223);
            font-weight: bold;
            font-size: 1.25vw;
            width: 12vw;  
            padding: 1%;

            &:hover {
                background-color: black;
                color: white
            }
        }
    }
}

.section2 {
    &-list{
        width: 60%;
        margin:auto;
    }
    &-item {
        display: flex;
        font-size: 2vw;
        padding-bottom: 5%;
        &-icon {
            width:6vw;
            //padding-right: 3%;
            padding-top: 2%;
            img{
                display:block;
                margin-left:auto;
                margin-right: auto;
            }
        }
        &-text {
            padding-left: 6%;
            font-size: 3vw;
            margin-top:0px;
            margin-bottom:0px;
            width: auto;
            white-space: nowrap;
        }
    }
}

.section3 {
    background-color : #FAE4E9;
    font-size: 3.5vw;
    &-text1 {
        padding-bottom:3%;
        font-weight: bold
    }
    &-text2 {
        padding-bottom:3%;
        font-family: 'Brandon Grotesque Thin';
        font-style: italic;
    }
    &-text3 {
        font-weight: bold;
        font-family: 'Homemade Apple';
        font-size: 3vw;
    }
}

.section4 {
    &-text {
        padding: 20%;
    }
}

.section5 {
    // &-steps{}
    &-step {
        display:flex;
        padding-bottom: 5%;
        &-img {
            width: 50%;
            img {
                display: block;
                width: 100%;
                height: auto;
            }
        }
        &-content {
            width: 50%;
            padding-left: 5%;
            font-size: 2.5vw;
            h1{
                font-weight: bold;
                font-style: italic;
            }
            p {
                font-family: "Brandon Grotesque Thin";
            }
        }
    }
}

.section6 {
    &-grid {
        display:flex;
        flex-wrap: wrap;
        &-item {
            padding: 3%;
            width: 50%;
            text-align: center;
            h1 {
                font-weight: bold;
                font-family: 'Brandon Grotesque Thick';
                font-size: 2.5vw;  
            }
            img {
                display:block;
                margin-left: auto;
                margin-right:auto;
                margin-top: 3%;
                margin-bottom: 3%;
                max-width: 100%;
                height: auto;
            }
            p {
                font-size: 1.75vw;
            }
        }
        &-big-photo {
            object-fit: cover;
            width: 50%;
            img {
                width: auto;
                height: 100%;
                min-height: 100%;
                min-width: 100%;
                object-fit: cover;
            }
        }
    }
}

.section7 {
    background-color: #F8F8F8;
    &-content {
        display: flex;
        text-align: center;
        padding: 5%;
        img{
            display: block;
            margin-left: auto;
            margin-right:auto;
            width: 80%;
        }
        &-quote {
            font-family: 'Brandon Grotesque Thin';
            font-style: italic;
            font-size: 2.5vw;
            padding-top: 5%;
            padding-left: 5%;

            &-author {
                font-size: 1.5vw;
            }
        }
    }
}

.section8 {
    &-title{
        font-weight: bold;
        font-family: 'Homemade Apple';
        font-size: 2vw; 
    }
    &-toast {
        text-align: center;
        font-size: 1.5vw;

    }
}

.email-field {
    width: 70%;
    margin-left: auto;
    margin-right:auto;
    display:block;
}

.custom {
    &-field {
        display: flex;
        justify-content:space-between;
        padding-top: 10%;
    }
    &-input {
        border:  transparent;
        border-color: transparent;
        background: transparent;
        border-bottom: 1px solid #8c8c8c;
        border-radius: 0px;
        box-shadow: 0;
        width: 38vw;
    }
    &-button-form {
        background-color:#FAE4E9;
        font-weight: bold;
        font-family: "Brandon Grotesque";
        border-radius: 3px;
        //font-size: 1vw;
        width: 15vw;
        padding: 1%;
        margin-bottom: 0%;
    }
}

/*toast notification*/
#toast {
    max-width: 0px;
    height: 3vw;
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
    font-size: 1vw;
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
    to {min-width: 20vw}
}

@keyframes expand {
    from {min-width: 0px}
    to {min-width: 20vw}
}
@-webkit-keyframes stay {
    from {min-width: 20vw} 
    to {min-width: 20vw}
}

@keyframes stay {
    from {min-width: 20vw}
    to {min-width: 20vw}
}
@-webkit-keyframes shrink {
    from {min-width: 20vw;} 
    to {min-width: 0px;}
}

@keyframes shrink {
    from {min-width: 20vw;} 
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