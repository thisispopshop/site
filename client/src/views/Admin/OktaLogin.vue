<template>
  <div class="oktalogin">
    <section class="section">
      <h2 class="title">Login</h2>
      <p v-if="$route.query.redirect">
        You need to login first.
      </p>
    </section>
    <section class="section">
      <form v-on:submit.prevent="login">
        <p v-if="error" class="is-danger error">Bad login information</p>
        <div class="field">
          <p class="control has-icons-left has-icons-right">
            <input class="input" type="email" placeholder="Email" v-model="email">
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <input class="input" type="password" placeholder="Password" v-model="pass">
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control">
            <button class="button is-success" type="submit">
              Login
            </button>
          </p>
        </div>
              <!--
        <label><input v-model="email" placeholder="email"></label>
        <label><input v-model="pass" placeholder="password" type="password"></label> (hint: password1)<br>
        <button type="submit">login</button>
        <p v-if="error" class="error">Bad login information</p>
        -->
      </form>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import auth from "@/Auth";

@Component
export default class OktaLogin extends Vue{

    email : string = ""
    pass : string = ""
    public error : Boolean | string = false

    login () {
        auth.login(this.email, this.pass, loggedIn => {
          if (!loggedIn) {
            this.error = true
          } else {
            //this.$router.replace(this.$route.query.redirect || '/')
            this.$router.replace("/dashboard")
          }
        })
      }
}


</script>

<style>
  .error {
    color: red;
  }
</style>