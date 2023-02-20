<template>
  <view-title title="Mahlzeit<br>eintragen" icon="meal" />
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
          list="fooditemlist"
          v-model="fooditem"
          @keydown.enter="addItem"
          :readonly="isProcessing"
        />
        <datalist id="fooditemlist">
          <option
            v-for="food in foodsByUser"
            :key="`food-${food}`"
            :value="food"
            v-text="food"
          />
        </datalist>
        <div class="ct-icon add" @click="addItem">
          <icon-loader
            icon="check"
            :disabled="!fooditem.length || isProcessing"
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
      <div class="ct-icon" @click="removeItem(item)">
        <icon-loader icon="cross" color="accentdark" />
      </div>
    </div>
  </div>
  <div class="ct-submit">
    <action-button @click="insertFood" :disabled="!formValid || isProcessing">
      eintragen
    </action-button>
  </div>
</template>

<script setup lang="ts">
import ViewTitle from "@/components/layout/ViewTitle.vue";
import ActionButton from "@/components/elements/ActionButton.vue";
import IconLoader from "@/components/elements/IconLoader.vue";
import { computed, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { create, format } from "datenow-ts";
import { useUser } from "@/composables/useUser";
import { useSupabase } from "@/composables/useSupabase";

// -> misc
const { uid } = useUser();
const { addMeal, foodsByUser, getFoodsByUser, isProcessing, wasSuccessful } =
  useSupabase();
const router = useRouter();
const route = useRoute();
// -> form fields
const title = ref<string>("");
const day = ref<string>("");
const time = ref<string>("");
const fooditem = ref<string>("");
const food = ref<string[]>([]);
// -> validation
const formValid = computed<boolean>(() => {
  return !!title.value && !!day.value && !!time.value && !!food.value.length;
});
// -> array
const addItem = (): void => {
  if (!fooditem.value.length) return;
  food.value.push(fooditem.value);
  fooditem.value = "";
};
const removeItem = (item: string): void => {
  if (isProcessing.value) return;
  const indexOfItem = food.value.indexOf(item);
  food.value.splice(indexOfItem, 1);
};
// -> data
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
  getFoodsByUser();
  const date = route.query.day
    ? create.dateByDatestring(route.query.day.toString() + "T12:00:00")
    : create.dateNow();
  day.value = format.toDate("Y-m-d", date);
  time.value = format.toTime("H:i", date);
});
</script>

<style lang="scss" scoped>
.form {
  margin-top: $gap_inner-big;
  .add {
    :deep(svg.disabled) {
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
