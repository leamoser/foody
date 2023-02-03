<template>
  <main>
    <h1>Home</h1>
    <label for="mail">E-Mailadresse</label>
    <input type="email" id="mail" v-model="mail"><br>
    <button @click="getMagicLink">Magic Link anfordern</button>
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { supabase } from "@/services/supabase";

const mail = ref<string>('')
const getMagicLink = async (): Promise<void> => {
  const { error, data } = await supabase.auth.signInWithOtp({
    email: mail.value
  })
}
const loadProfile = async (): Promise<void> => {
  const { error, data } = await supabase.auth.getUser();
  console.log(data.user);
}
onMounted(() => {
  loadProfile();
})
</script>

<style scoped lang="scss">
main{
  h1{
    font-size: 2rem;
    color: $variable;
  }
}
</style>
