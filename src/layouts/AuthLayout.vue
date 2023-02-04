<template>
  <main>
    <logo :title="route.meta.title" />
    <router-view />
  </main>
</template>

<script lang="ts" setup>
import Logo from "@/components/layout/Logo.vue";
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<style lang="scss" scoped></style>
