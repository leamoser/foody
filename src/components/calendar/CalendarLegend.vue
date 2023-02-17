<template>
  <div class="ct-legend">
    <div
      class="ct-legenditem"
      v-for="(legend, index) in legendItems"
      :key="`legenditem-${legend.title}-${index}`"
    >
      <div
        class="icon"
        :data-bg="legend.background"
        :data-border="legend.border"
        :data-form="legend.form"
      />
      <p class="typo-info">{{ legend.title }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const legendItems = [
  {
    title: "Nichts eingetragen",
    border: "dark",
    background: "light",
    form: "square",
  },
  {
    title: "Beschwerden eingetragen",
    border: "accent",
    background: "accent",
    form: "square",
  },
  {
    title: "Mahlzeiten eingetragen",
    border: "dark",
    background: "dark",
    form: "square",
  },
  {
    title: "Mahlzeit & Beschwerden eingetragen",
    border: "accent",
    background: "dark",
    form: "square",
  },
  {
    title: "Heute",
    border: "dark",
    background: "light",
    form: "circle",
  },
];
</script>

<style lang="scss" scoped>
.ct-legend {
  padding-top: $gap_around;
  @include grid(repeat(2, 1fr), $gap: $gap_inner-small);
}
.ct-legenditem {
  @include flex(row, flex-start, center, px(5));
  .icon {
    flex-shrink: 0;
    width: px(17);
    aspect-ratio: 1/1;
    // -> backgrounds
    &[data-bg="dark"] {
      background: $color_dark-20;
    }
    &[data-bg="accent"] {
      background: $color_accentdark-20;
    }
    &[data-bg="light"] {
      background: $color_light-20;
    }
    // -> borders
    &[data-border="dark"] {
      border: 1px solid $color_dark;
    }
    &[data-border="accent"] {
      border: 1px solid $color_accentdark;
    }
    // -> form
    &[data-form="circle"] {
      border-radius: 50%;
    }
  }
}
</style>
