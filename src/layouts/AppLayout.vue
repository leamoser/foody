<template>
  <main>
    <div class="ct-head">
      <logo :title="route.meta.pagetitle" />
      <router-link to="profile">
        <icon-loader icon="user" />
      </router-link>
    </div>
    <section class="ct-content">
      <router-view />
    </section>
    <app-navigation-bar />
  </main>
</template>

<script setup lang="ts">
import Logo from "@/components/layout/Logo.vue";
import AppNavigationBar from "@/components/layout/AppNavigationBar.vue";
import IconLoader from "@/components/elements/IconLoader.vue";
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<style lang="scss" scoped>
main {
  padding-bottom: px(150);
}
.ct-head {
  @include flex(row, space-between, center);
}
</style>
