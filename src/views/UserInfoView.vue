<template>
  <p class="typo-text">Salü {{ email }},<br />schön bist du hier!</p>
  <p class="typo-text">
    Um die App korrekt nutzen zu können, musst du zuerst dein Profil aufsetzen.
    Dazu brauchen wir einige Infos von dir.
  </p>
  <div class="form">
    <div class="form-field">
      <label for="name">Dein Name</label>
      <input
        type="text"
        id="name"
        v-model="name"
        :readonly="isProcessing"
      /><br />
    </div>
    <div class="form-line">
      <div class="form-field form-mono">
        <label for="birthday">Dein Geburtsdatum</label>
        <input
          type="date"
          id="birthday"
          v-model="birthday"
          :readonly="isProcessing"
        /><br />
      </div>
      <div class="form-field form-mono">
        <label for="weight">Dein Gewicht (in kg)</label>
        <input
          type="number"
          id="weight"
          v-model="weight"
          :readonly="isProcessing"
        /><br />
      </div>
    </div>
    <div class="form-field">
      <label for="nutrition">Deine Ernährungsweise</label>
      <select name="nutrition" id="nutrition" v-model="nutrition">
        <option disabled :value="false">Bitte wähle aus...</option>
        <option :value="NutritionTypes.meat">Alles</option>
        <option :value="NutritionTypes.vegetarian">Vegetarisch</option>
        <option :value="NutritionTypes.vegan">Vegan</option>
      </select>
    </div>
    <div class="form-field">
      <label for="nutrition">Deine Periode</label>
      <select name="nutrition" id="nutrition" v-model="period">
        <option disabled :value="false">Bitte wähle aus...</option>
        <option :value="PeriodTypes.noperiod">Ich habe keine Periode</option>
        <option :value="PeriodTypes['period-noissues']">
          Ich habe keine Verdauungsprobleme aufgrund meiner Periode
        </option>
        <option :value="PeriodTypes['period-issues']">
          Ich habe Verdauungsprobleme aufgrund meiner Periode
        </option>
      </select>
    </div>
  </div>
  <p class="typo-text">
    Wir wissen nun alles das über dich, was wichtig ist um dein Essverhalten zu
    tracken und Schlüsse daraus zu ziehen.
  </p>
  <action-button :disabled="!formValid || isProcessing" @click="addUserInfo">
    {{ isProcessing ? "wird gespeichert..." : "loslegen" }}
  </action-button>
</template>

<script setup lang="ts">
import { useUser } from "@/composables/useUser";
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { create } from "datenow-ts";
import { supabase } from "@/services/supabase";
import ActionButton from "@/components/elements/ActionButton.vue";
import { useSupabase } from "@/composables/useSupabase";
import { NutritionTypes, PeriodTypes } from "../../types";
// -> misc
const router = useRouter();
const { email, uid } = useUser();
// -> form fields
const name = ref<string>("");
const birthday = ref<string>("");
const weight = ref<number>(0);
const nutrition = ref<NutritionTypes | false>(false);
const period = ref<PeriodTypes | false>(false);
// -> validation
const formValid = computed<boolean>(
  () =>
    !!name.value &&
    !!birthday.value &&
    !!weight.value &&
    !!uid.value &&
    !!nutrition.value &&
    !!period.value
);
// -> adding data
const { addPeople, isProcessing, wasSuccessful } = useSupabase();
const addUserInfo = async (): Promise<void> => {
  if (!uid.value) return;
  await addPeople({
    uid: uid.value,
    name: name.value,
    birthday: create.dateByDatestring(birthday.value),
    weight: weight.value,
    nutrition_type: nutrition.value || NutritionTypes.meat,
    period_type: period.value || PeriodTypes.noperiod,
  });
  if (wasSuccessful.value) {
    await router.push({ name: "home" });
  }
};
onMounted(async () => {
  let { data: people } = await supabase
    .from("people")
    .select("*")
    .eq("uid", uid.value);
  people?.length
    ? await router.push({ name: "home" })
    : await router.push({ name: "user-info" });
});
</script>

<style lang="scss" scoped>
* {
  width: 100%;
}
</style>
