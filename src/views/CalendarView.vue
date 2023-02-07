<template>
  <view-title title="Dein<br>Kalender" :icon="CalendarIconUrl" />
  <div class="ct-calendar">
    <div class="ct-month">
      <img :src="PrevIconUrl" alt="Icon Previous" />
      <p>{{ activeMonth }}</p>
      <img :src="NextIconUrl" alt="Icon Next" />
    </div>
  </div>
</template>

<script setup lang="ts">
import CalendarIconUrl from "@/assets/icons/calendar_extended.svg";
import NextIconUrl from "@/assets/icons/next.svg";
import PrevIconUrl from "@/assets/icons/prev.svg";
import ViewTitle from "@/components/layout/ViewTitle.vue";
import { computed, ref } from "vue";
import { format, create } from "datenow-ts";

const activeDate = ref<Date>(create.dateNow());
const activeMonth = computed<string>(() => {
  return format.toDate("F Y", activeDate.value, "de");
});
</script>

<style lang="scss" scoped>
.ct-calendar {
  margin-top: px(30);
  background: orange;
}
.ct-month {
  @include flex(row, space-between, center);
}
</style>
