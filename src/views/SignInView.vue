<template>
  <label for="email">Email</label>
  <input type="email" id="email" v-model="email" /><br />
  <button @click="signUp">Magic Link senden</button>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { supabase } from "@/services/supabase";

const email = ref<string>("");
const signUp = async (): Promise<void> => {
  const { error, data } = await supabase.auth.signInWithOtp({
    email: email.value,
  });
  console.log("magic link sent", email.value, error, data);
};
</script>

<style lang="scss" scoped></style>
