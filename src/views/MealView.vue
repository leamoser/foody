<template>
  <view-title title="Mahlzeit<br>eintragen" :icon="mealIconUrl" />
  <div class="form">
    <div class="form-field">
      <label for="title">Titel der Mahlzeit</label>
      <input type="text" id="title" v-model="title" />
      <!-- :readonly="wasSuccessful || isProcessing" -->
    </div>
    <div class="form-line form-mono">
      <div class="form-field">
        <label for="day">Tag</label>
        <input type="date" id="day" v-model="day" />
      </div>
      <div class="form-field form-mono">
        <label for="time">Uhrzeit</label>
        <input type="time" id="time" v-model="time" />
      </div>
    </div>
    <div class="form-field">
      <label for="fooditem">Lebensmittel</label>
      <input type="text" id="fooditem" v-model="fooditem" />
    </div>
  </div>
</template>

<script setup lang="ts">
import mealIconUrl from "@/assets/icons/meal_extended.svg";
import ViewTitle from "@/components/layout/ViewTitle.vue";
import { ref } from "vue";
const title = ref<string>("");
const day = ref<string>("");
const time = ref<string>("");
const fooditem = ref<string>("");
const food = ref<string[]>([]);
</script>

<style lang="scss" scoped>
.form {
  margin-top: $gap_inner-big;
}
</style>
