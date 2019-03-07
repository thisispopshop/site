<template>
  <div class="modal" v-bind:class="{'is-active': isShowing}" >
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{title}}</p>
        <button class="delete" aria-label="close" v-on:click="cancelHandler()"></button>
      </header>
      <section class="modal-card-body">
        <slot/>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success" v-on:click="successHandler()">{{ successButton }}</button>
        <button class="button" v-on:click="cancelHandler()">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Modal extends Vue {
  @Prop(String) title!: string;
  @Prop(Boolean) isShowing!: boolean;
  @Prop({ type: String, default: "Save" })
  successButton: string | undefined;

  successHandler(): void {
    this.$emit("success");
  }

  cancelHandler(): void {
    this.$emit("cancel");
  }
}
</script>
