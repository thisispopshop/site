<template>
    <section class="section">
    <div class="title error-container" >
        Oops! Seems like this organization doesn't exist yet
            <br>
        Email <u>thepopshopteam@gmail.com</u> to sign up.
    </div>
    </section>
</template>

<script lang="ts">
/* eslint-disable */
import { Component, Vue,} from "vue-property-decorator";

@Component
export default class ErrorPage extends Vue {

    host = window.location.host;
    url = this.host.split('.');
    subdomain = this.url[0];

}

</script>

<style lang="scss">

.error-container {
    height: 35vw;
    text-align: center; 
    padding: 10%; 
    word-spacing: 0.1em;
}

</style>