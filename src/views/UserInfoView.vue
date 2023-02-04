<template>
  <section class="ct-user-info-view">
    <p class="typo-text">Salü {{ email }},<br />schön bist du hier!</p>
    <p class="typo-text">
      Um die App korrekt nutzen zu können, musst du zuerst dein Profil
      aufsetzen. Dazu brauchen wir einige Infos von dir.
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
    </div>
    <p class="typo-text">
      Wir wissen nun alles das über dich, was wichtig ist um dein Essverhalten
      zu tracken und Schlüsse daraus zu ziehen.
    </p>
    <action-button :disabled="!formValid || isProcessing" @click="addUserInfo">
      {{ isProcessing ? "wird gespeichert..." : "loslegen" }}
    </action-button>
  </section>
</template>

<script setup lang="ts">
import { useUser } from "@/composables/useUser";
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { create } from "datenow-ts";
import { supabase } from "@/services/supabase";
import ActionButton from "@/components/ActionButton.vue";
import { useSupabase } from "@/composables/useSupabase";
const router = useRouter();
const { email, uid } = useUser();
const name = ref<string>("");
const birthday = ref<string>("");
const weight = ref<number>(0);
const formValid = computed<boolean>(
  () => !!name.value && !!birthday.value && !!weight.value && !!uid.value
);
const { addPeople, isProcessing, wasSuccessful } = useSupabase();
const addUserInfo = async (): Promise<void> => {
  if (!uid.value) return;
  await addPeople({
    uid: uid.value,
    name: name.value,
    birthday: create.dateByDatestring(birthday.value),
    weight: weight.value,
  });
  if (wasSuccessful.value) {
    await router.push({ name: "home" });
  }
};

onMounted(async () => {
  let { data: people } = await supabase.from("people").select("uid");
  people?.length
    ? await router.push({ name: "home" })
    : await router.push({ name: "user-info" });
});
</script>

<style lang="scss" scoped>
.ct-user-info-view {
  width: 100%;
  padding-top: px(50);
  @include flex(column, center, center, $gap_inner-big);
  > * {
    width: 100%;
  }
}
</style>
