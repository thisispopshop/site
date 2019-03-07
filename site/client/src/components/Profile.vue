<template>
  <div class="profile columns">
    <div class="profilePhoto column">
      <form enctype="multipart/form-data" novalidate>
        <div class="profilePhoto">
          <img :src="profileUrl"/>
        </div>
        <div class="file">
          <label class="file-label">
            <input
              type="file"
              name="profilePhoto"
              :disabled="isSaving"
              v-on:change="filesChanged"
              accept="image/*"
              class="input-file file-input"
            >
            <span class="file-cta">
              <span class="file-icon">
                <font-awesome-icon icon="upload"/>
              </span>
              <span class="file-label">
                Choose a profile image…
              </span>
            </span>
          </label>
          <p v-if="isSaving">Uploading file...</p>
        </div>
      </form>
    </div>
    <div class="profileInfo column">
      <div class="field">
        <label class="label">First Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="first name" v-model="user.firstName">
        </div>
      </div>
      <div class="field">
        <label class="label">Last Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="last name" v-model="user.lastName">
        </div>
      </div>
      <div class="field">
        <label class="label">Email Address</label>
        <div class="control">
          <input class="input" type="text" placeholder="email address" v-model="user.emailAddress">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios, { AxiosResponse } from "axios";
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { APIConfig } from "@/utils/api.utils";
import { iUser } from "@/models/user.interface";

const STATUS_INITIAL = 0;
const STATUS_SAVING = 1;
const STATUS_SUCCESS = 2;
const STATUS_FAILED = 3;

@Component
export default class Profile extends Vue {
  fileCount: number = 0;
  currentStatus: number | null = null;
  uploadError: string | null = null;
  uploadedFile: any = null;

  @Prop({ default: null })
  user!: iUser | null;

  upload(formData: FormData) {
    if (this.user) {
      const url = `${APIConfig.url}/users/${this.user.id}`;
      return axios
        .post(url, formData, {
          headers: { token: this.$store.state.userToken }
        })
        .then((res: AxiosResponse<{ user: iUser }>) => {
          this.$store.dispatch("fetchUser", { userid: res.data.user.id });
        });
    }
    return Promise.reject({ response: "no user logged in" });
  }

  save(formData: FormData) {
    // upload data to the server
    this.currentStatus = STATUS_SAVING;
    this.upload(formData)
      .then(() => {
        this.currentStatus = STATUS_SUCCESS;
      })
      .catch(err => {
        this.uploadError = err.response;
        this.currentStatus = STATUS_FAILED;
      });
  }

  filesChanged(event: any) {
    const name = event.target.name;
    const files = event.target.files;
    this.fileCount = event.target.files.length;
    // handle file changes
    const formData = new FormData();

    if (!files.length) return;

    // append the files to FormData
    Array.from(Array(files.length).keys()).map(x => {
      formData.append(name, files[x], files[x].name);
    });

    // save it
    this.save(formData);
  }

  reset() {
    // reset form to initial state
    this.currentStatus = STATUS_INITIAL;
    this.uploadError = null;
  }

  mounted() {
    this.reset();
  }

  //computed
  get isInitial() {
    return this.currentStatus === STATUS_INITIAL;
  }

  get isSaving() {
    return this.currentStatus === STATUS_SAVING;
  }

  get isSuccess() {
    return this.currentStatus === STATUS_SUCCESS;
  }

  get isFailed() {
    return this.currentStatus === STATUS_FAILED;
  }

  get profileUrl(): string {
    if (this.user) {
      return APIConfig.buildUrl(`/${this.user.profileUrl}`);
    }
    return "";
  }
}
</script>
<style scoped>
</style>
