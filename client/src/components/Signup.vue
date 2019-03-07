<template>
  <modal v-bind:is-showing="isShowing" title="Signup" success-button="Signup" v-on:success="success" v-on:cancel="cancel">
    <form v-on:submit.prevent="onSubmit">
      <p v-if="error" class="is-danger">
        {{ error }}
      </p>
      <div class="field">
        <label class="label">First Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="first name" v-model="signup.firstName"/>
        </div>
      </div>
      <div class="field">
        <label class="label">Last Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="last name" v-model="signup.lastName"/>
        </div>
      </div>
      <div class="field">
        <label class="label">Email Address</label>
        <div class="control">
          <input class="input" type="text" placeholder="email address" v-model="signup.emailAddress"/>
        </div>
      </div>
      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input class="input" type="password" placeholder="password" v-model="signup.password"/>
        </div>
      </div>
    </form>
  </modal>
</template>



<script lang="ts">
import axios, { AxiosResponse } from "axios";
import { APIConfig } from "../utils/api.utils";
import { Component, Prop, Vue } from "vue-property-decorator";
import Modal from "./Modal.vue";
import { iUser } from "../models/user.interface";

@Component({
  components: { Modal }
})
export default class Signup extends Vue {
  @Prop(Boolean) isShowing: boolean = false;
  signup: SignupForm = {
    firstName: "",
    lastName: "",
    emailAddress: "",
    password: ""
  };
  error: string | boolean = false;

  success() {
    this.error = false;
    // this.signup.firstName = "done";
    console.log("hello");
    axios
      .post(APIConfig.buildUrl("/users"), {
        ...this.signup
      })
      .then((response: AxiosResponse<iUser>) => {
        this.$emit("success");
      })
      .catch((errorResponse: any) => {
        this.error = errorResponse.response.data.reason;
      });
  }

  cancel() {
    this.$emit("cancel");
  }
}

export interface SignupForm {
  firstName: string;
  lastName: string;
  emailAddress: string;
  password: string;
}
</script>
