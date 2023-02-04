<template>
  <section class="ct-sign-up-view">
    <div class="form-field">
      <label for="email">Deine Mailadresse</label>
      <input
        type="email"
        id="email"
        v-model="email"
        :readonly="wasSuccessful || isProcessing"
      /><br />
    </div>
    <action-button
      v-if="!wasSuccessful"
      :disabled="!formValid || isProcessing"
      @click="signUp(email)"
    >
      {{ isProcessing ? "wird gesendet..." : "Mailadresse bestätigen" }}
    </action-button>
    <p class="typo-info" v-if="wasSuccessful">
      Du hast auf die eingegebene Mailadresse den Registrier-Link erhalten.
      Checke deine E-Mails. Dieses Fenster kannst du schliessen.
    </p>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useAuth } from "@/composables/useAuth";
import ActionButton from "@/components/ActionButton.vue";
import { useFormValidation } from "@/composables/useFormValidation";
const email = ref<string>("");
const { matchesRegex } = useFormValidation();
const formValid = computed<boolean>(() => {
  return matchesRegex(email.value, "mail");
});
const { signUp, isProcessing, wasSuccessful } = useAuth();
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
