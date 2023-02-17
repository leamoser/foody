<template>
  <div class="ct-nutrition-mode">
    <div
      v-for="mode in nutritionModes"
      :key="`mode-${mode.type}`"
      class="mode typo-info"
      :class="{ active: currentMode === mode.type }"
      @click="changeMode(mode.type)"
    >
      {{ mode.title }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NutritionModeStorageKey, NutritionTypes } from "../../../types";
import { onMounted, ref } from "vue";
import { useLocalStorage } from "@vueuse/core";
import NutritionMode from "@/components/elements/NutritionMode.vue";
import { useRouter } from "vue-router";
const nutritionModes: { title: string; type: NutritionTypes }[] = [
  {
    title: "Allesfresser",
    type: "meat",
  },
  {
    title: "Vegetarisch",
    type: "vegi",
  },
  {
    title: "Vegan",
    type: "vegan",
  },
];
const storageKey: NutritionModeStorageKey = "nutrition-mode";
const currentMode = ref<NutritionMode | "">("");
const router = useRouter();

const changeMode = (mode: NutritionTypes) => {
  localStorage.setItem(storageKey, mode);
  currentMode.value = mode;
  router.go(0);
};

onMounted(() => {
  const storedMode = localStorage.getItem(storageKey);
  if (!storedMode) localStorage.setItem(storageKey, "meat");
  currentMode.value = storedMode ? storedMode : "meat";
});
</script>

<style lang="scss" scoped>
.ct-nutrition-mode {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  @include flex(row, flex-end, center, px(5));
}
.mode {
  border: 1px solid $color_dark;
  padding: px(5) px(10);
  &.active {
    background: $color_dark-20;
  }
}
</style>
