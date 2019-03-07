<template>
  <div>
    <h2 class="title is-2">My Profile</h2>
    <div class="container">
      <Profile v-if="user" v-bind:user="user"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

import axios, { AxiosResponse } from "axios";
import { APIConfig } from "@/utils/api.utils";
import { iUser } from "@/models/user.interface";

import Profile from "@/components/Profile.vue";

@Component({ components: { Profile } })
export default class MyProfile extends Vue {
  get user() {
    return this.$store.state.user;
  }
  mounted() {
    if (!this.$store.state.user) {
      this.$router.push({ name: "home" });
    }
  }
}
</script>
