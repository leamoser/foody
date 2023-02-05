<template>
  <view-title title="Mahlzeit<br>eintragen" :icon="mealIconUrl" />
  <div class="form">
    <div class="form-field">
      <label for="title">Titel der Mahlzeit</label>
      <input type="text" id="title" v-model="title" :readonly="isProcessing" />
    </div>
    <div class="form-line form-mono">
      <div class="form-field">
        <label for="day">Tag</label>
        <input type="date" id="day" v-model="day" :readonly="isProcessing" />
      </div>
      <div class="form-field form-mono">
        <label for="time">Uhrzeit</label>
        <input type="time" id="time" v-model="time" :readonly="isProcessing" />
      </div>
    </div>
    <div class="form-field">
      <label for="fooditem">Lebensmittel</label>
      <div class="form-line">
        <input
          type="text"
          id="fooditem"
          v-model="fooditem"
          @keydown.enter="addItem"
          :readonly="isProcessing"
        />
        <div class="add">
          <img
            :src="checkIconUrl"
            alt="Icon Lebensmittel hinzufügen"
            @click="addItem"
            :class="{ disabled: !fooditem.length || isProcessing }"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="ct-foods">
    <div
      class="food"
      v-for="(item, index) in food"
      :key="`fooditem-${item}-${index}`"
    >
      <p class="typo-text typo-accent" v-text="item" />
      <img :src="crossIconUrl" alt="Icon Löschen" @click="removeItem(item)" />
    </div>
  </div>
  <div class="ct-submit">
    <action-button @click="insertFood" :disabled="!formValid || isProcessing">
      eintragen
    </action-button>
  </div>
</template>

<script setup lang="ts">
import mealIconUrl from "@/assets/icons/meal_extended.svg";
import crossIconUrl from "@/assets/icons/cross.svg";
import checkIconUrl from "@/assets/icons/check.svg";
import ViewTitle from "@/components/layout/ViewTitle.vue";
import { computed, onMounted, ref } from "vue";
import ActionButton from "@/components/ActionButton.vue";
import { create, format } from "datenow-ts";
import { useUser } from "@/composables/useUser";
import { useSupabase } from "@/composables/useSupabase";
import { useRouter } from "vue-router";
const { uid } = useUser();
const { addMeal, isProcessing, wasSuccessful } = useSupabase();
const router = useRouter();
const title = ref<string>("");
const day = ref<string>("");
const time = ref<string>("");
const fooditem = ref<string>("");
const food = ref<string[]>([]);
const formValid = computed<boolean>(() => {
  return !!title.value && !!day.value && !!time.value && !!food.value.length;
});
const addItem = (): void => {
  if (!fooditem.value.length) return;
  food.value.push(fooditem.value);
  fooditem.value = "";
};
const removeItem = (item: string): void => {
  if (isProcessing) return;
  const indexOfItem = food.value.indexOf(item);
  food.value.splice(indexOfItem, 1);
};
const insertFood = async (): Promise<void> => {
  if (!uid.value) return;
  await addMeal({
    uid: uid.value,
    created_at: create.dateByDatestring(`${day.value} ${time.value}`),
    food: JSON.stringify(food.value),
    title: title.value,
  });
  if (wasSuccessful.value) {
    await router.push({ name: "home" });
  }
};
onMounted(() => {
  const date = create.dateNow();
  day.value = format.toDate("Y-m-d", date);
  time.value = format.toTime("H:i", date);
});
</script>

<style lang="scss" scoped>
.form {
  margin-top: $gap_inner-big;
  .add {
    img.disabled {
      pointer-events: none;
      opacity: 0.5;
    }
  }
}
.ct-foods {
  padding-top: $gap_inner-small;
  @include flex(row, flex-start, center, $gap_inner-small);
  flex-wrap: wrap;
  .food {
    display: block;
    border: 1px solid $color_accentdark;
    @include flex();
    padding: $gap_inner-small;
  }
}
.ct-submit {
  position: fixed;
  bottom: px(65);
  left: 0;
  width: 100vw;
  @include flex();
}
</style>
