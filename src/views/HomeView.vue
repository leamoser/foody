<template>
  <p>Hallo NAME</p>
</template>

<script setup lang="ts">
import { useUser } from "@/composables/useUser";

const { id } = useUser();
console.log(id.value);
</script>

<style lang="scss" scoped></style>
