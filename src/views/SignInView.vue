<template>
  <section class="ct-sign-in-view">
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
      @click="signIn(email)"
      :disabled="!formValid || isProcessing"
    >
      {{ isProcessing ? "wird gesendet..." : "Zugangslink anfordern" }}
    </action-button>
    <p class="typo-info" v-if="wasSuccessful">
      Du hast auf die eingegebene Mailadresse den Zugangslink erhalten. Checke
      deine E-Mails. Dieses Fenster kannst du schliessen.
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
const { signIn, wasSuccessful, isProcessing } = useAuth();
</script>

<style lang="scss" scoped>
.ct-sign-in-view {
  position: absolute;
  top: $gap_around;
  left: $gap_around;
  height: calc(100vh - multiply($gap_around, 2));
  width: calc(100vw - multiply($gap_around, 2));
  @include flex(column, center, center, $gap_inner-big);
}
</style>
