<template>
  <view-title title="Dein<br>Kalender" :icon="CalendarIconUrl" />
  <div class="ct-calendar">
    <div class="ct-month">
      <img :src="PrevIconUrl" alt="Icon Previous" @click="prevMonth" />
      <p>{{ activeMonth }}</p>
      <img :src="NextIconUrl" alt="Icon Next" @click="nextMonth" />
    </div>
    <div class="ct-days">
      <p
        v-for="(weekday, index) in weekdays"
        :key="`weekday-${weekday}-${index}`"
        v-text="weekday"
      />
    </div>
    <div class="ct-grid">
      <p
        v-for="(dayObject, index) in calendarizedMonth"
        :key="`weekday-${dayObject.day}-${index}-${activeMonth}`"
        v-text="dayObject.day"
        class="typo-mono"
        :class="{ filler: dayObject.filler, today: dayIsToday(dayObject) }"
      />
    </div>
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
  </div>
</template>

<script setup lang="ts">
import CalendarIconUrl from "@/assets/icons/calendar_extended.svg";
import NextIconUrl from "@/assets/icons/next.svg";
import PrevIconUrl from "@/assets/icons/prev.svg";
import ViewTitle from "@/components/layout/ViewTitle.vue";
import { computed, ref } from "vue";
import { format, create, modify, get, helper } from "datenow-ts";
import type { CalendarizedDate } from "datenow-ts/lib/types";

const weekdays = helper.weekdaysShort("de");
const activeDate = ref<Date>(create.dateNow());
const activeMonth = computed<string>(() => {
  return format.toDate("F Y", activeDate.value, "de");
});
const calendarizedMonth = computed<CalendarizedDate[]>(() => {
  return get.calendarizedMonth(activeDate.value, "de");
});
const dayIsToday = (day: CalendarizedDate): boolean => {
  const today = create.dateNow();
  const dayToday = get.day(today);
  const monthToday = get.monthIndex(today);
  const yearToday = get.year(today);
  const monthActive = get.monthIndex(activeDate.value);
  const yearActive = get.year(activeDate.value);
  return (
    day.day === dayToday &&
    monthActive === monthToday &&
    yearActive === yearToday
  );
};
const nextMonth = (): void => {
  const setToFirst = modify.day.changeTo(activeDate.value, 1);
  activeDate.value = modify.month.add(setToFirst, 1);
};
const prevMonth = (): void => {
  const setToFirst = modify.day.changeTo(activeDate.value, 1);
  activeDate.value = modify.month.subtract(setToFirst, 1);
};
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
.ct-calendar {
  margin-top: px(30);
}
.ct-month {
  @include flex(row, space-between, center);
}
.ct-days {
  @include grid(repeat(7, 1fr), repeat(7, 1fr), $gap_inner-small);
  text-align: center;
  padding-top: $gap_inner-big;
}
.ct-grid {
  @include grid(repeat(7, 1fr), repeat(7, 1fr), $gap_inner-small);
  text-align: center;
  padding-top: $gap_inner-big;
  p {
    display: block;
    width: 100%;
    aspect-ratio: 1/1;
    border: 1px solid $color_dark;
    @include flex();
    &.filler {
      pointer-events: none;
      opacity: 0.1;
    }
    &.today {
      border-radius: 50%;
    }
  }
}
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
