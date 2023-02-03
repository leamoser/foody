<template>
  <main>
    <h1>Home</h1>
    <label for="mail">E-Mailadresse</label>
    <input type="email" id="mail" v-model="mail"><br>
    <button @click="getMagicLink">Magic Link anfordern</button>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";

const mail = ref<string>('')
const getMagicLink = async (): Promise<void> => {
  console.log('get magic link', mail.value);
}
</script>

<style scoped lang="scss">
main{
  h1{
    font-size: 2rem;
    color: $variable;
  }
}
</style>
