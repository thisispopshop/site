<template>
    <div class="LandingMobile">
        <div class="is-hidden-desktop is-hidden-tablet">

            <!--mobile-->
            <!--CHANGE THIS TO HAMBURGER?-->
            <section id="navbar" class="my-nav">
                <div class="my-nav-menu-mobile">
                    <div class="my-nav-item-mobile" v-scroll-to="'#section2-mobile'">About</div> 
                    <div class="my-nav-item-mobile" v-scroll-to="'#section5-mobile'">How It Works</div> 
                    <div class="my-nav-item-mobile" v-scroll-to="'#section6-mobile'">Team</div> 
                </div>
                <div class="my-nav-end">
                    <button class="button my-nav-end-button-mobile">Create a Popshop</button>
                </div>
            </section>

            <!--Hero Landing Page-->
            <section id="section1-mobile" class="hero is-fullheight has-bg-img-1" >

                <!--logo=-->
                <div class="hero-head center">
                    <img id="logo" class="logo-top" src="@/assets/popshop_logo.png" alt="logo" >
                </div>
                        
                <div class="hero-body center">
                    <div class="big-hero-text-one">
                        <p>Stress free style for every occasion.</p>
                        <div class="big-hero-text-one-space-between"></div>

                        <!--Button-->
                        <button class="button big-hero-button">Create a Popshop</button>
                    </div>
                </div>
            </section>

            <section id="section2-mobile" >
                <div class="standard-container">
                    <div class="center section-title">Say Goodbye To</div>
                    <div class='center'>
                        <ul class="section2-list">
                            <li class='section2-item'> 
                                <div class="section2-item-icon" style="margin-top:1%;">
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

            <section id="section3-mobile" class='section3'>
                <div class="standard-container">
                    <div class="center section3-text1">Let us handle your wardrobe</div>
                    <div class="center section3-text2">so you can focus on</div>
                    <div class="center section3-text3">what really matters ...</div>
                </div>
            </section>

            <section id="section4-mobile" class="section4 has-bg-img-2">
                <div class="center section4-text section-title">welcoming your newest sisters home.</div>
            </section>

            <section id="section5-mobile" >
                    <div class="section5-title center section-title">How It Works</div>
                    <div class="section5-steps">
                        <div id="howitworks-step1" class="section5-step">
                            <div class="section5-step-content">
                                <h1>Step 1: Curate Your Collections</h1>
                                <p>Easily build custom shopping collections for your events from our wide variety of products.</p>
                            </div>
                            <div class="section5-step-img">
                                <img src="@/assets/images/howitworks_step1.png" alt="how it works 1">
                            </div>                        
                        </div>

                        <div id="howitworks-step2" class="section5-step">
                            <div class="section5-step-content">
                                <h1>Step 2: Customize Your Site</h1>
                                <p>Customize your Popshop with your event information, submission forms, and more.</p>
                            </div>
                            <div class="section5-step-img">
                                <img src="@/assets/images/howitworks_step2.png" alt="how it works 2">
                            </div>
                        </div>

                        <div id="howitworks-step3" class="section5-step">
                            <div class="section5-step-content">
                                <h1>Step 3: Publish and Share</h1>
                                <p>Publish your Popshop so your friends can shop all the brands they love in one place.</p>
                            </div>    
                            <div class="section5-step-img">
                                <img src="@/assets/images/howitworks_step3.png" alt="how it works 3">
                            </div>                
                        </div>
                    </div>
            </section>

            <section id="section6-mobile">
                <div class="center section-title">Team</div>
                <div class="section6-grid">
                    <div id="tiffany" class="section6-grid-item" style="background-color:#FAE4E9">
                        <h1 >Tiffany Yeung</h1>
                        <img src="@/assets/team/team_tiffany.png" alt="tiffany">
                        <p>Tiffany is your ultimate, savvy business gal always executing on her next greatest business idea.  First in the office
                            and the last to go. At 5:01 PM, you’ll see her at the office changing into her PJ’s and getting ready for a long night! 
                        </p>
                    </div>
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
                    <div id="team" class="section6-grid-item">
                        <br><br>
                        <img src="@/assets/team/team_teampic.png" alt="team">
                    </div>
                </div>
            </section>

            <section id="section7-mobile">
                <div class="section7 standard-container">
                    <div class="section-title center">
                        What People Are Saying
                    </div>
                    <div class="section7-content">
                        <p>
                            <span class="section7-content-quot">“I love using pop shop because it makes my job as our recruitment chair so much easier and it is super convenient for all of my sisters to use!”</span>
                            <img class="section7-content-img-mobile" src="@/assets/images/whatpeoplearesaying_cayla.jpg" alt="maggy">
                            <span class="section7-content-quote-author">Cayla Quinn <br> Cal Poly AOII Recruitment Officer</span>
                        </p>
                    </div>
                </div>
            </section>

             <section id="section8-mobile">
                <div class="standard-container">
                    <div class="section8-title center">
                        Your personal event wardrobe awaits.
                    </div>
              
                    <div class="email-field " id="mc_embed_signup">
                        <form action="https://thisispopshop.us20.list-manage.com/subscribe/post?u=1b710cfbce51379fff004977c&amp;id=9af8420170" 
                        method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form">
                            <div class="custom-field">

                                <!--email input form-->
                                <div class="control is-expanded">
                                    <input class="input is-small custom-input" type="email" name="EMAIL" id="mce-EMAIL" placeholder="Enter email address" aria-required="true">
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
                                    <input type="submit" value="Let's Get Started" name="subscribe" id="mc-embedded-subscribe" class="button is-hoverable custom-button-form">
                                </div>
                            </div>
                        </form>
                    </div> 
                    <!--<div v-show="isShowing" class="section8-toast">
                        YAY, You've been added to our mailing list! 
                    </div>-->
                </div>
            </section>

        </div>
    </div>
</template>

<script lang="ts">
/* eslint-disable */
import Vue from "vue";
import { Component, Prop} from "vue-property-decorator";

@Component
export default class LandingMobile extends Vue {

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

//hero page background images
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

//standard styles

.center {
    display:flex;
    justify-content: center;
}

.logo-top {  
    margin-top: 8vh;
    width:35vw;
    position: absolute;
}

.section-title{
    font-size: 5vw;
    font-weight: bold;
    font-family: 'Brandon Grotesque Thick';
    padding-bottom: 3%;
}

.standard-container {
    padding: 5%;
}

//nav bar
.my-nav {
    display: flex;
    justify-content: space-between;
    opacity: 0.7;

     //sticky
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #f7f4f4;

    &-menu{
        width: 70%;
        padding: 1%;
        padding-left:1.5%;
        font-size: 1.3vw;
        color:black;
        display: flex;
        justify-content: flex-start;

        &-mobile{
            width: 70%;
            padding: 2%;
            padding-left:1.5%;
            font-size: 2.5vw;
            color:black;
            display: flex;
            justify-content: flex-start; 
        }
    }

    &-item {
        padding-left: 1.5%;
        padding-right: 1.5%;

        &-mobile{
            padding-left: 5%;
            padding-right: 5%;
        }
    }
    
    &-item:hover {
        font-weight: bold;
    }

    &-end {
        margin-right: 0%; 
        padding-right:1.5%;
        padding: 1%;

        &-button {
            background-color:#FAE4E9;
            border-radius: 3.5px;
            border: none;
            box-shadow: 0.5px 0.5px rgb(224, 223, 223);
            font-weight: bold;
            font-size: 1vw;
            width: 10vw;  

            &-mobile{
                background-color:#FAE4E9;
                border-radius: 3.5px;
                border: none;
                box-shadow: 0.5px 0.5px rgb(224, 223, 223);
                font-weight: bold;
                font-size: 2.5vw;
                width: 25vw;        
            }
        }
    }
}

.my-nav:hover{
    opacity:1;
}

.big-hero {
    &-text {
        &-one {
            position: absolute;
            width: 90%;
            text-align:center;
            padding-top: 20vh;
            p {
                font-size: 10vw;
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
        font-size: 5vw;
        color:white;
        width: 50vw;

        :hover {
            background-color: #FAE4E9;
            color: white;
        }
    }
}


.section2 {
    &-list{
        width: 55%;
        margin:auto;
    }
    &-item {
        display: flex;
        font-size: 2vw;
        padding-bottom: 5%;
        &-icon {
            width:6vw;
            padding-right: 3%;
            padding-top: 1%;
            img{
                display:block;
                margin-left:auto;
                margin-right: auto;
            }
        }
        &-text {
            padding-left: 3%;
            font-size: 3vw;
            margin-top:0px;
            margin-bottom:0px;
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
        text-align:center;
    }
}

.section5 {
    &-title{
        padding-top: 5%;
    }
    &-steps {
        padding:7%;
        padding-bottom: 0%;

    }
    &-step {
        display:flex;
        flex-wrap: wrap;
        padding-bottom: 5%;

        &-img {
            width: 100%;
            height: auto;
            padding-top: 3%; 
            margin-left:auto; 
            margin-right:auto;

            img {
                display: block;
                width: 100%;
                height: auto;
            }
        }

        &-content {
            width:90%; 
            text-align:center;
            font-size: 3vw;
            h1{
                font-family: "Brandon Grotesque Thin";
                font-style: italic
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
            width: 100%;
            text-align: center;
            h1 {
                font-weight: bold;
                font-family: 'Brandon Grotesque Thick';
                font-size: 3vw;  
            }
            img {
                display:block;
                margin-left: auto;
                margin-right:auto;
                margin-top: 3%;
                margin-bottom: 3%;
            }
            p {
                padding-left: 5%;
                padding-right:5%;
                font-size: 3vw;
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

        &-img-mobile {
            padding-top: 5%;
            padding-bottom:5%;
            width: 100%;
            
            img{
                display: block;
                margin-left: auto;
                margin-right:auto;
                width: 15vw;
            }
        }

        &-quote {
            font-family: 'Brandon Grotesque Thin';
            font-style: italic;
            font-size: 2.5vw;
            padding-top: 5%;
            padding-left: 5%;
            font-size: 3.5vw;

            &-author {
                font-size:2.5vw;
                text-align:center;
            }
        }
    }
}

.section8 {
    &-title{
        font-weight: bold;
        font-family: 'Homemade Apple';
        font-size: 3vw; 
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
    padding: 5%;
}

.custom {
    &-field {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10%;
    }
    &-input {
        border:  transparent;
        border-color: transparent;
        background: transparent;
        border-bottom: 1px solid #8c8c8c;
        border-radius: 0px;
        box-shadow: 0;
        width: 50vw;
        //padding-bottom: 5%;
        margin-bottom: 10%;
        text-align: center;
    }
    &-button-form {
        //padding-top: 5%;
        margin-top: 10%;
        background-color:#FAE4E9;
        font-weight: bold;
        font-family: "Brandon Grotesque";
        border-radius: 3px;
        font-size: 3vw;
        width: 25vw;
    }
}

</style>