<template>
  <nav>
    <div
      class="navitem"
      role="menuitem"
      v-for="item in navitems"
      :key="`navitem-${item.name}`"
      @click="navigateTo(item.name)"
      :class="{ active: route.name === item.name }"
    >
      <icon-loader :icon="item.icon" is-reduced :nutrition-type="nutrition" />
      <p class="typo-info">{{ item.title }}</p>
    </div>
  </nav>
</template>

<script setup lang="ts">
import IconLoader from "@/components/elements/IconLoader.vue";
import { useRoute, useRouter } from "vue-router";
import type { IconNames } from "@/ts/types";
import { useUser } from "@/composables/useUser";
// -> misc
const router = useRouter();
const route = useRoute();
const { nutrition } = useUser();
// -> items
interface NavItem {
  title: string;
  name: string;
  icon: IconNames;
}
const navitems: NavItem[] = [
  {
    title: "Mahlzeit",
    name: "meal",
    icon: "meal",
  },
  {
    title: "Beschwerden",
    name: "issues",
    icon: "issues",
  },
  {
    title: "Kalender",
    name: "calendar",
    icon: "calendar",
  },
  {
    title: "Korrelation",
    name: "correlation",
    icon: "correlations",
  },
];
// -> navigation
const navigateTo = (name: string) => {
  router.push({ name: name });
};
</script>

<style lang="scss" scoped>
nav {
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  @include grid(repeat(4, 1fr), $gap: 0);
  border-top: 1px solid $color_dark;
  .navitem {
    padding: 0 0 px(6) 0;
    height: 100%;
    background: $color_light;
    @include flex(column, flex-end, center, px(4));
    svg {
      object-fit: contain;
    }
    &:not(:last-of-type) {
      border-right: 1px solid $color_dark;
    }
    &.active {
      background: $color_accentlight;
    }
  }
}
</style>
