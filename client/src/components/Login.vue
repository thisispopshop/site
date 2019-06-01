<template>
  <modal
    v-bind:is-showing="isShowing"
    title="Login"
    success-button="Login"
    v-on:success="success"
    v-on:cancel="cancel"
  >
    <form v-on:submit.prevent="onSubmit">
      <p v-if="error">{{ error }}</p>
      <div class="field">
        <label class="label">Email Address</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="email address"
            v-model="login.emailAddress"
          >
        </div>
      </div>
      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input class="input" type="password" placeholder="password" v-model="login.password">
        </div>
      </div>
    </form>
  </modal>
</template>

<script lang="ts">
import axios, { AxiosError, AxiosResponse } from "axios";
import { APIConfig } from "../utils/api.utils";
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import Modal from "./Modal.vue";

@Component({
  components: {
    Modal
  }
})
export default class Login extends Vue {
  login: LoginForm = {
    emailAddress: "",
    password: ""
  };
  error: string | boolean = false;
  @Prop(Boolean) isShowing: boolean = false;

  @Watch("isShowing")
  handleShowing(isShowingStart: boolean, isShowingEnd: boolean) {
    if (!isShowingStart && isShowingEnd) {
      this.login = {
        emailAddress: "",
        password: ""
      };
    }
  }

  success() {
    this.error = false;
    axios
      .post(APIConfig.buildUrl("/login"), {
        emailAddress: this.login.emailAddress,
        password: this.login.password
      })
      .then((response: AxiosResponse<LoginResponse>) => {
        this.$store.dispatch("login", {
          token: response.data.token,
          userid: response.data.userId
        });
        this.$emit("success");
      })
      .catch((res: AxiosError) => {
        this.error = res.response && res.response.data.error;
      });
  }

  cancel() {
    this.$emit("cancel");
  }
}

interface LoginResponse {
  token: string;
  userId: number;
}

export interface LoginForm {
  emailAddress: string;
  password: string;
}
</script>
