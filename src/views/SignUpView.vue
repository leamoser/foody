<template>
  <section class="ct-sign-up-view">
    <div class="form-field">
      <label for="email">Email</label>
      <input type="email" id="email" v-model="email" /><br />
    </div>
    <action-button @click="signUp(email)">Mailadresse bestätigen</action-button>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAuth } from "@/composables/useAuth";
import ActionButton from "@/components/ActionButton.vue";
const email = ref<string>("");
const { signUp } = useAuth();
</script>

<style lang="scss" scoped>
.ct-sign-up-view {
  position: absolute;
  top: $gap_around;
  left: $gap_around;
  height: calc(100vh - multiply($gap_around, 2));
  width: calc(100vw - multiply($gap_around, 2));
  @include flex(column, center, center, $gap_inner-big);
}
</style>
