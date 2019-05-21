<template>
    <div>
        <section id="section1" class="hero is-fullheight has-bg-img-1" >

            <div class="hero-head center">
                <img id="logo" class="logo-top" src="@/assets/popshop_logo.png" alt="logo" >
            </div>
                    
            <div class="hero-body center">
                    <div class="big-hero-text-one">
                        <p>Stree free style for every occasion.</p>
                        <div class="big-hero-text-one-space-between"></div>
                        <button class="button custom-button">Create a Popshop</button>
                    </div>
            </div>
        </section>

        <section id="section2" >
            <div class="standard-container">
                <div class="center section2-title">Say Goodbye To</div>
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
              <div class="center section4-text">welcoming your newest sisters home.</div>
        </section>

        <section id="section5">
            <div class="section5-title center">How It Works</div>
            <div id="howitworks-step1" class="section5-steps">
                <div class="section5-step">
                    <img class="section5-step-img" src="@/assets/images/howitworks_step1.png" alt="how it works 1">
                    <div class="section5-step-content">
                        <h1>Step 1: Curate Your Collections</h1>
                        <p>Easily build custom shopping collections for your events from our wide variety of products.</p>
                    </div>
                </div>
                <div id="howitworks-step2" class="section5-step">
                    <img class="section5-step-img" src="@/assets/images/howitworks_step2.png" alt="how it works 2">
                    <div class="section5-step-content">
                        <h1>Step 2: Customize Your Site</h1>
                        <p>Customize your Popshop with your event information, submission forms, and more.</p>
                    </div>
                </div>
                <div id="howitworks-step3" class="section5-step">
                    <img class="section5-step-img" src="@/assets/images/howitworks_step3.png" alt="how it works 3">
                    <div class="section5-step-content">
                        <h1>Step 3: Publish and Share</h1>
                        <p>Publish your Popshop so your friends can shop all the brands they love in one place.</p>
                    </div>
                </div>
            </div>
        </section>


         <img src="@/assets/images/whatpeoplearesaying_maggy.png" alt="maggy">
    </div>
</template>

<script lang="ts">
/* eslint-disable */
import Vue from "vue";
import { Component, Prop} from "vue-property-decorator";

@Component
export default class NewLandingPage extends Vue {
    error: string | boolean = false;
}
</script>

<style lang="scss" scoped>

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

.center {
    //position:relative;
    display:flex;
    justify-content: center;
    //flex-direction:column;
    //align-items: center;
}

.logo-top {  
    //height: 23v;
    width:24vw;
    position: absolute;
}

.custom-button {
    background-color:#FAE4E9;
    border-radius: 3.5px;
    border: none;
    box-shadow: 0.5px 0.5px rgb(224, 223, 223);
    font-weight: bold;
    font-size: 1.5vw;
    width: 15vw;
}

.big-hero-text {
    //position: relative;

    &-one {
        position: absolute;
        width: 35%;
        text-align:center;
        padding-top: 20vh;

        p {
            font-size: 4vw;
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

.standard-container {
    padding: 10%;
}

.section2 {
    &-title{
        font-size: 4vw;
        font-weight: bold;
        font-family: 'Brandon Grotesque Thick';
        padding-bottom: 5%;
    }

    &-list{
        width: 50vw;
        margin:auto;
    }

    &-item {
        display: flex;
        font-size: 2vw;
        padding-bottom: 5%;

        &-icon {
            width:6vw;
            padding-right: 3%;
            //padding-top: 1%;

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
            margin-bottom:0px
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
    &-text2 {
        font-weight: bold
    }
}

.section4 {
    &-text {
        font-weight: bold;
        font-family: 'Brandon Grotesque Thick';
        font-size: 4vw;
        padding: 20%;
    }
}

.section5 {
    
    &-title{
        font-weight: bold;
        font-family: 'Brandon Grotesque Thick';
        font-size: 4vw;   
        padding-top: 5%;     
    }

    &-steps {
        padding:7%;
    }

    &-step {
        display:flex;
        padding-bottom: 5%;

        &-img {
            //padding-right: 5%;
        }

        &-content {
            padding-left: 5%;
            font-size: 2.5vw;
            h1{
                font-family: "Brandon Grotesque Thin";
                font-style: italic
            }
            p {
                font-family: "Brandon Grotesque"
            }
        }
    }
}

</style>