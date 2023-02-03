<script setup lang="ts">
const env = import.meta.env.VITE_TEST
</script>

<template>
  <main>
    <h1>Home</h1>
    <p>Test Variable .env: {{ env }}</p>
  </main>
</template>
