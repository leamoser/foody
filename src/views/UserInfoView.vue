<template>
  <p>Salü {{ email }},</p>
  <p>schön bist du hier!</p>
  <br /><br />
  <p>
    Um die App korrekt nutzen zu können, musst du zuerst dein Profil aufsetzen.
    Dazu brauchen wir einige Infos von dir.
  </p>
  <label for="name">Dein Name</label>
  <input type="text" id="name" v-model="name" /><br />
  <label for="birthday">Dein Geburtsdatum</label>
  <input type="date" id="birthday" v-model="birthday" /><br />
  <label for="weight">Dein Gewicht (in kg)</label>
  <input type="number" id="weight" v-model="weight" /><br />
  <p>
    Wir wissen nun alles das über dich, was wichtig ist um dein Essverhalten zu
    tracken und Schlüsse daraus zu ziehen.
  </p>
  <button @click="addUserInfo">loslegen</button>
</template>

<script setup lang="ts">
import { useUser } from "@/composables/useUser";
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { create } from "datenow-ts";
import { supabase } from "@/services/supabase";

const router = useRouter();
const { email, uid } = useUser();

const name = ref<string>("");
const birthday = ref<string>("");
const weight = ref<string>("");

const formValid = computed<boolean>(
  () => !!name.value && !!birthday.value && !!weight.value
);

const addUserInfo = async (): Promise<void> => {
  if (formValid.value) {
    const { status } = await supabase.from("people").insert([
      {
        uid: uid.value,
        name: name.value,
        birthday: create.dateByDatestring(birthday.value),
        weight: weight.value,
      },
    ]);
    if (status === 201) {
      await router.push({ name: "home" });
    }
  }
};

onMounted(async () => {
  let { data: people } = await supabase.from("people").select("uid");
  people?.length
    ? await router.push({ name: "home" })
    : await router.push({ name: "user-info" });
});
</script>

<style lang="scss" scoped></style>
