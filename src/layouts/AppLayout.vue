<template>
  <main>
    <button @click="signOut">logout</button><br />
    <router-view />
  </main>
</template>

<script setup lang="ts">
import { useAuth } from "@/composables/useAuth";
const { signOut } = useAuth();
</script>

<style lang="scss" scoped></style>
