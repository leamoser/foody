<template>
  <label for="email">Email</label>
  <input type="email" id="email" v-model="email" /><br />
  <button @click="signIn(email)">Magic Link senden</button>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAuth } from "@/composables/useAuth";
const email = ref<string>("");
const { signIn } = useAuth();
</script>

<style lang="scss" scoped></style>
