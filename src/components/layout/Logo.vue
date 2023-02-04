<template>
  <div class="ct-logotitle">
    <router-link :to="userLoggedIn ? '/home' : '/'">
      <div class="ct-logo">
        <p>{{ appname }}</p>
      </div>
    </router-link>
    <p v-if="title" class="typo-info">{{ title }}</p>
  </div>
</template>

<script setup lang="ts">
import { useUser } from "@/composables/useUser";

const { userLoggedIn } = useUser();
const appname = import.meta.env.VITE_BASE_APPNAME;
const props = defineProps({
  title: { type: String, required: false, default: "" },
});
</script>

<style lang="scss" scoped>
.ct-logotitle {
  @include flex(row, flex-start, center, 10px);
  z-index: 5;
}
.ct-logo {
  display: inline-block;
  background: $color_accentdark;
  padding: px(2) px(15) px(7) px(13);
  border-radius: px(50);
  p {
    font-family: "antarctican-mono", monospace;
    font-size: 1.625rem;
    color: $color_light;
  }
}
</style>
