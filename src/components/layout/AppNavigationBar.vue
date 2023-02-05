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
      <img :src="item.icon" :alt="`Icon ${item.title}`" />
      <p class="typo-info">{{ item.title }}</p>
    </div>
  </nav>
</template>

<script setup lang="ts">
import iconMeal from "@/assets/icons/meal_minimized.svg";
import iconIssues from "@/assets/icons/issues_minimized.svg";
import iconCalendar from "@/assets/icons/calendar_minimized.svg";
import iconCorrelation from "@/assets/icons/correlations_minimized.svg";
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();
const navitems = [
  {
    title: "Mahlzeit",
    name: "meal",
    icon: iconMeal,
  },
  {
    title: "Beschwerden",
    name: "issues",
    icon: iconIssues,
  },
  {
    title: "Kalender",
    name: "calendar",
    icon: iconCalendar,
  },
  {
    title: "Korrelation",
    name: "correlation",
    icon: iconCorrelation,
  },
];
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
    img {
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
