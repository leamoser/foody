<template>
  <main>
    <div class="ct-head">
      <logo :title="route.meta.pagetitle" />
      <router-link to="profile">
        <img :src="userIcon" alt="Icon User" />
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
import { useRoute } from "vue-router";
import userIcon from "@/assets/icons/user.svg";
import AppNavigationBar from "@/components/layout/AppNavigationBar.vue";
const route = useRoute();
</script>

<style lang="scss" scoped>
.ct-head {
  @include flex(row, space-between, center);
}
</style>
