<template>
  <view-title v-if="name" :title="`${name}'s<br>Profil`" icon="user" />
  <div class="ct-infos">
    <p>
      Dein Name ist <span class="typo-accent">{{ name }}</span
      >, du bist <span class="typo-accent">{{ age }} Jahre</span> alt und wiegst
      momentan <span class="typo-accent">{{ weight }} Kilo</span>. Du ernährst
      dich <span class="typo-accent">{{ nutritionModeString }}</span> und hast
      <span v-html="periodModeString" />
    </p>
  </div>
  <div class="ct-buttons-floating">
    <action-button>Profil bearbeiten</action-button>
    <action-button @click="signOut">Abmelden</action-button>
  </div>
</template>

<script setup lang="ts">
import ViewTitle from "@/components/layout/ViewTitle.vue";
import { useUser } from "@/composables/useUser";
import { useAuth } from "@/composables/useAuth";
import ActionButton from "@/components/elements/ActionButton.vue";
import { computed } from "vue";
import { NutritionTypes, PeriodTypes } from "@/ts/enums";

const { signOut } = useAuth();
const { name, age, weight, nutrition, period } = useUser();
const nutritionModeString = computed<string>(() => {
  if (nutrition.value === NutritionTypes.vegetarian) return "vegetarisch";
  else if (nutrition.value === NutritionTypes.vegan) return "vegan";
  else return "mit Fleisch";
});
const periodModeString = computed<string>(() => {
  if (period.value === PeriodTypes["period-noissues"]) {
    return 'eine <span class="typo-accent">Periode</span>, während welcher du aber <span class="typo-accent">keine Verdauungs-Beschwerden</span> hast.';
  } else if (period.value === PeriodTypes["period-issues"]) {
    return 'eine <span class="typo-accent">Periode</span>, während welcher du <span class="typo-accent">Verdauungs-Beschwerden</span> hast.';
  } else {
    return '<span class="typo-accent">keine Periode</span>.';
  }
});
</script>

<style lang="scss" scoped>
.ct-infos {
  padding-top: $gap_inner-big;
}
</style>
