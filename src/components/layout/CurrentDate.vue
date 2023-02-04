<template>
  <div class="ct-current-date">
    <p>{{ date.weekday }}</p>
    <p>{{ date.day }}</p>
    <p>{{ date.month }}</p>
    <p>{{ date.year }}</p>
  </div>
</template>

<script setup lang="ts">
import { create, get } from "datenow-ts";
import { computed } from "vue";
const date = computed<{
  weekday: string;
  day: string;
  month: string;
  year: number;
}>(() => {
  const today = create.dateNow();
  return {
    weekday: get.weekdayObject(today, "de").short,
    day: get.day(today) > 9 ? `${get.day(today)}` : `0${get.day(today)}`,
    month:
      get.monthObject(today).number > 9
        ? `${get.monthObject(today).number}`
        : `0${get.monthObject(today).number}`,
    year: get.year(today),
  };
});
</script>

<style lang="scss" scoped>
.ct-current-date {
  @include flex(row, flex-start, center, $gap_inner-small);
  p {
    border: 1px solid $color_accentdark;
    padding: px(7);
    @include f-mono(px(14), $color: $color_accentdark);
    &:first-of-type {
      font-family: "Inter", sans-serif;
    }
    &:nth-of-type(2) {
      border-radius: px(50);
    }
  }
}
</style>
