<template>
  <view-title title="Dein<br>Kalender" icon="calendar" />
  <div class="ct-calendar">
    <!-- month indicator -->
    <div class="ct-month">
      <div class="ct-icon" @click="goToPrevMonth">
        <icon-loader icon="prev" />
      </div>
      <p>{{ activeMonthString }}</p>
      <div class="ct-icon" @click="goToNextMonth">
        <icon-loader icon="next" />
      </div>
    </div>
    <!-- backlink -->
    <div class="ct-back" v-if="!activeMonthIsCurrentMonth">
      <p @click="goTocurrentMonth" class="typo-info">
        zurück zum {{ currentMonthString }}
      </p>
    </div>
    <!-- weekdays -->
    <div class="ct-days">
      <p
        v-for="(weekday, index) in weekdays"
        :key="`weekday-${weekday}-${index}`"
        v-text="weekday"
      />
    </div>
    <!-- days -->
    <div class="ct-grid">
      <p
        v-for="(dayObject, index) in calendarizedMonth"
        :key="`weekday-${dayObject.day}-${index}-${activeMonthString}`"
        v-text="dayObject.paddedDay"
        class="typo-mono"
        :class="{
          filler: dayObject.filler,
          today: dayIsToday(dayObject.day),
          issues: dayHasIssue(dayObject.day),
          meals: dayHasMeal(dayObject.day),
        }"
        @click="goToDay(dayObject.day)"
      />
    </div>
    <!-- legend -->
    <calendar-legend />
  </div>
</template>

<script setup lang="ts">
import ViewTitle from "@/components/layout/ViewTitle.vue";
import CalendarLegend from "@/components/calendar/CalendarLegend.vue";
import IconLoader from "@/components/elements/IconLoader.vue";
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { format, create, modify, get, helper, compare } from "datenow-ts";
import type { CalendarizedDate, Day, Month, Year } from "datenow-ts/lib/types";
import { useSupabase } from "@/composables/useSupabase";
// -> helpers
const router = useRouter();
const weekdays = helper.weekdaysShort("de");
const loadMealsAndIssuesPerMonth = (): void => {
  getMealsByUserAndMonth(activeMonthNumber.value, activeYear.value);
  getIssuesByUserAndMonth(activeMonthNumber.value, activeYear.value);
};

// -> depending on activeDate
const activeDate = ref<Date>(create.dateNow());
const activeMonthString = computed<string>(() => {
  return format.toDate("F Y", activeDate.value, "de");
});
const activeMonthNumber = computed<Month>(() => {
  return (get.monthObject(activeDate.value).number as Month) || 1;
});
const activeYear = computed<Year>(() => {
  return get.year(activeDate.value) || 2020;
});
const activeMonthIsCurrentMonth = computed<boolean>(() => {
  return compare.isSameExactMonth(activeDate.value);
});
const currentMonthString = format.toDate("F Y", create.dateNow(), "de");
const calendarizedMonth = computed<CalendarizedDate[]>(() => {
  return get.calendarizedMonth(activeDate.value, "de");
});
const {
  mealsByUserAndMonth,
  getMealsByUserAndMonth,
  getIssuesByUserAndMonth,
  issuesByUserAndMonth,
} = useSupabase();

// -> navigation
const goToNextMonth = (): void => {
  const setToFirst = modify.day.changeTo(activeDate.value, 1);
  activeDate.value = modify.month.add(setToFirst, 1);
  loadMealsAndIssuesPerMonth();
};
const goToPrevMonth = (): void => {
  const setToFirst = modify.day.changeTo(activeDate.value, 1);
  activeDate.value = modify.month.subtract(setToFirst, 1);
  loadMealsAndIssuesPerMonth();
};
const goTocurrentMonth = (): void => {
  activeDate.value = create.dateNow();
  loadMealsAndIssuesPerMonth();
};
const goToDay = (day: Day): void => {
  const clickedDay = modify.day.changeTo(activeDate.value, day);
  const dateFormatted = format.toDate("Y-m-d", clickedDay, "de");
  router.push(`calendar/${dateFormatted}`);
};

// -> labeling days
const dayIsToday = (day: Day): boolean => {
  return compare.isSameExactDay(
    create.dateByParams({
      year: activeYear.value,
      month: activeMonthNumber.value,
      day,
    })
  );
};
const dayHasIssue = (day: Day): boolean => {
  if (!issuesByUserAndMonth.value) return false;
  return issuesByUserAndMonth.value.some((issue) => {
    const dateIssue = create.dateByDatestring(issue.created_at || "");
    const dateActive = create.dateByParams({
      year: activeYear.value,
      month: activeMonthNumber.value,
      day,
    });
    return !!compare.isSameExactDay(dateIssue, dateActive);
  });
};
const dayHasMeal = (day: Day): boolean => {
  if (!mealsByUserAndMonth.value) return false;
  return mealsByUserAndMonth.value.some((meal) => {
    const dateMeal = create.dateByDatestring(meal.created_at || "");
    const dateActive = create.dateByParams({
      year: activeYear.value,
      month: activeMonthNumber.value,
      day,
    });
    return !!compare.isSameExactDay(dateMeal, dateActive);
  });
};

onMounted(() => {
  loadMealsAndIssuesPerMonth();
});
</script>

<style lang="scss" scoped>
.ct-month {
  @include flex(row, space-between, center);
}
.ct-back {
  margin: px(5) 0;
  @include flex();
}
.ct-calendar {
  margin-top: px(30);
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
    &.issues {
      border: 1px solid $color_accentdark;
      background: $color_accentdark-20;
    }
    &.meals {
      background: $color_dark-20;
    }
  }
}
</style>
