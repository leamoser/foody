<template>
  <main>
    <logo :title="route.meta.pagetitle" />
    <section class="ct-content-auth">
      <router-view />
    </section>
  </main>
</template>

<script lang="ts" setup>
import Logo from "@/components/layout/Logo.vue";
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<style lang="scss" scoped></style>
