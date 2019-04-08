<template>
  <div class="info">

        <!--header-->
    <section class="hero is-small">
      
      <div class="hero-body">
        <div class="title is-size-1 page-title-info"><strong>{{org.name}}</strong></div>
      </div>

    </section>

    <!--content-->
    <section class="parent-container">
        <div class="container" >

      <!--content-->
      <div class="content-body" >

        <div class="columns">
          <div class="column is-one-third"> 
              <img style="float:right;" src="https://makeupbytaylorvo.files.wordpress.com/2018/03/img_4257.jpg?w=414&#038;h=552"  >
               <!--<img src="https://makeupbytaylorvo.files.wordpress.com/2018/03/screen-shot-2018-03-30-at-2-01-42-pm.png?w=327&#038;h=408">-->
              <div style="display:block; float:right"> 
                <a href="https://makeupbytaylorvo.wordpress.com/aboutme/" target=_blank>https://makeupbytaylorvo.wordpress.com/aboutme/</a>
              </div>
              
              
          </div>
          <div class="column" style="margin-left: 5%"> 
            <p class="subtitle" style="display:inline; justify-content:center">
                Taylor Vo is a young makeup artist located in San Jose, Bay Area. She was born and raised in the Bay Area, and moved to Southern California for a little over a year, but eventually moved back to the Bay Area to pursue her career in makeup.
                Her favorite things to do consists of: reading books (self motivation and self improvement kinds), shopping, putting on makeup just to take off, and she loves just laying in bed and watching Netflix shows.
                She has been a self taught artist all her life, and started playing with makeup as young as 10 years old. That is when she learned the power of eyeliner and has been interested in makeup ever since. 
                Imagine a 10 year old, watching YouTube tutorials on how to create a black smoky eye and then looking in the mirror only to find that they look like they got beat up. That was her. Now, her favorite looks are warm halo eyes, 
                and soft, natural-ish looks but she also tries to go out of her comfort zone with colors and dark eye looks as well.
                <br><br>
                She is a (occasional) YouTuber, and she likes to post makeup tutorials, and vlogs featuring her four year old son, Jason. She has hosted a &#8220;Taylor Does My Makeup&#8221; event, 
                where she asks girls from all over Southern California to submit themselves for a chance to get their makeup done by her for free. She travelled to them, recorded the makeup application, and had fun and asked them self confidence 
                questions throughout. The purpose of this was to help build confidence in other girls, and she knows that whenever she needs a 
                confidence booster, it was always her go-to to put on some makeup, and take lots of selfies. She wanted to bring this to other girls, and to make them feel good in their own skin.
                <br><br>
                On a day-to-day basis, she is a mother to her little boy and newborn baby girl, Jaemi Vo-Shin. She spends a lot of her time on social media to create posts and projects, 
                and she also has an aspiring passion in fashion. She loves to go thrifting for the purpose of reworking a piece and making it even better.
                Her long-term life goal is to be able to provide for her family, and to have her own home where she can teach all of her kids her makeup artistry skills. 
                She is and will continue to build her online presence and social media following. She also hopes to be able to pursue her career with YouTube in the future and to have her own business in makeup and fashion.
                <br><br>
            </p>
        </div>
      </div>
    

      </div>
      </div>
    </section>

  </div>

</template>


<script lang="ts">
/* eslint-disable */
import { Component, Vue, Prop } from "vue-property-decorator";
import { iOrganization, iEvent, iOccasion } from "@/models";

@Component
export default class Info extends Vue {

  @Prop() org! : iOrganization;
  @Prop() event! : iEvent;
  @Prop() occasions! : iOccasion[];

}
</script>

<style lang="scss" scoped>

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
.page-title-info {
  padding-top: 5%;
  text-align: center;
  padding-bottom: 1%;
  margin:auto;
  //padding-left: 10%;
 // margin-left: 17%;
  //text-align: center;
}

/*parent container*/
.parent-container {
  display: flex;
  padding-top: 1%;
  margin-left: 4%
}

/*side navigation box*/
.side-nav {
  padding-top: 1%;
  margin-left: 4%;
  //width: 800px;
  width: 15%;
  overflow: hidden;
  font-size: 25px;
}
.crumb:hover {
  font-weight: bold;
}

.content-body {
  width: 100%;
}
.content-box {
  font-size: 30px;
  padding-bottom: 3%;
}
.content-box-title {
  font-weight: bold;
  font-size: 35px;
}

</style>