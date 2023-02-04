<template>
  <section class="ct-entry">
    <div class="ct-entrylogo">
      <img :src="MealIcon" alt="Icon Mahlzeit" />
      <div class="ct-logo">
        <p>{{ appname }}</p>
      </div>
    </div>
    <h2 class="typo-accent">Mahlzeitentracker für eine gesunde Verdauung</h2>
    <div class="ct-buttons">
      <action-button link="sign-up">neu hier</action-button>
      <action-button link="sign-in">einloggen</action-button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import ActionButton from "@/components/ActionButton.vue";
import MealIcon from "@/assets/icons/meal_extended.svg";
const appname = import.meta.env.VITE_BASE_APPNAME;
</script>

<style lang="scss" scoped>
.ct-entry {
  @include flex(column, center, center, px(20));
  height: calc(100vh - multiply($gap_around, 2));
  text-align: center;
  width: calc(100vw - multiply($gap_around, 2));
}
.ct-entrylogo {
  @include flex(column, center, center, 0);
  img {
    width: px(100);
    margin-bottom: negative(px(15));
    z-index: 2;
  }
}
.ct-logo {
  display: inline-block;
  background: $color_dark;
  border-radius: px(100);
  padding: px(12) px(33) px(18) px(30);
  p {
    @include f-mono(px(48), $color: $color_light);
  }
}
.ct-buttons {
  @include flex();
}
</style>
