<template>
    <div class="title" style="text-align: center; padding: 10%">
        This organization doesn't exist!!!!!!
            <br><br>
        Email thepopshopteam@gmail.com to sign up!

        <br><br>

    </div>
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