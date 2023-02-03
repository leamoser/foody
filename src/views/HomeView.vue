<template>
  <p>Hallo {{ email }}</p>
</template>

<script setup lang="ts">
import { useUser } from "@/composables/useUser";
const { email } = useUser();
</script>

<style lang="scss" scoped></style>
