<template>
    <div class="dashboard">
        <p class="title">yay it works!!!!</p>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios, {AxiosError, AxiosResponse} from "axios";
import { APIConfig } from "@/utils/api.utils";
import { iCollection} from "@/models";
import auth from "@/Auth";

@Component
export default class Dashboard extends Vue {

}
</script>