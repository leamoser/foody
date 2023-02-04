<template>
  <main>
    <div class="ct-head">
      <logo :title="route.meta.pagetitle" />
      <img :src="userIcon" alt="Icon User" />
      <button @click="signOut">logout</button><br />
    </div>
    <section class="ct-app">
      <router-view />
    </section>
    <app-navigation-bar />
  </main>
</template>

<script setup lang="ts">
import { useAuth } from "@/composables/useAuth";
import Logo from "@/components/layout/Logo.vue";
import { useRoute } from "vue-router";
import userIcon from "@/assets/icons/user.svg";
import AppNavigationBar from "@/components/layout/AppNavigationBar.vue";
const route = useRoute();
const { signOut } = useAuth();
</script>

<style lang="scss" scoped>
.ct-head {
  @include flex(row, space-between, center);
}
</style>
