<template>
  <main>
    <div class="ct-head">
      <logo :title="route.meta.pagetitle" />
      <router-link to="profile">
        <div class="ct-profile">
          <p class="typo-info" v-text="userShortName" />
        </div>
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
import { useUser } from "@/composables/useUser";
import { computed } from "vue";
const route = useRoute();
const { userdata } = useUser();
const userShortName = computed<string>(() => {
  if (!userdata.value) return "?";
  if (!userdata.value.name) return "?";
  return userdata.value.name.substring(0, 2);
});
</script>

<style lang="scss" scoped>
main {
  padding-bottom: px(150);
}
.ct-head {
  @include flex(row, space-between, center);
}
:deep(a) {
  text-decoration: none;
}
.ct-profile {
  width: px(30);
  aspect-ratio: 1/1;
  background: $color_dark-20;
  border: 1px solid $color_dark;
  border-radius: 50%;
  @include flex();
  text-transform: uppercase;
}
</style>
