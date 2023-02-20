<template>
  <view-title :title="activeDateTitle" icon="day" />
  <!-- entries -->
  <div class="ct-entries" v-if="entriesSortedByTime.length">
    <p class="typo-info">Vorhandene Einträge</p>
    <div
      v-for="(entry, index) in entriesSortedByTime"
      :key="`entry-${index}`"
      class="ct-entry"
      :data-type="entry.type"
      :class="{ 'typo-accent': entry.type === 'issue' }"
    >
      <div class="ct-infos">
        <p class="typo-mono">{{ entry.time }}</p>
        <p>{{ entry.title }}</p>
      </div>
      <div class="ct-icon">
        <icon-loader icon="edit" :color="entry.color" />
      </div>
      <div class="ct-icon" @click="deleteEntry(entry.type, entry.id)">
        <icon-loader icon="cross" :color="entry.color" />
      </div>
    </div>
  </div>
  <!-- period entry -->
  <div
    class="ct-period typo-danger"
    v-if="needsPeriodTracking && periodByUserAndDay?.length"
  >
    <div
      class="ct-periodentry"
      v-for="period in periodByUserAndDay"
      :key="`period-${period.uid}`"
    >
      <p>Periode eingetragen</p>
      <p class="typo-info" @click="deleteEntry('period', period.id)">löschen</p>
    </div>
  </div>
  <!-- fallback -->
  <div class="ct-noentries" v-else>
    <p class="typo-info">Noch keine Einträge vorhanden</p>
  </div>
  <!-- buttons -->
  <div class="ct-buttons-floating">
    <action-button link="meal" :query="activeDateQuery">
      Mahlzeit eintragen
    </action-button>
    <action-button link="issues" :query="activeDateQuery">
      Beschwerden eintragen
    </action-button>
    <action-button
      @click="insertPeriod"
      v-if="needsPeriodTracking && !periodByUserAndDay?.length"
    >
      Periode eintragen
    </action-button>
  </div>
</template>

<script setup lang="ts">
import ViewTitle from "@/components/layout/ViewTitle.vue";
import ActionButton from "@/components/elements/ActionButton.vue";
import IconLoader from "@/components/elements/IconLoader.vue";
import { computed, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { create, format } from "datenow-ts";
import { useSupabase } from "@/composables/useSupabase";
import { useUser } from "@/composables/useUser";
import { IconColors, PeriodTypes } from "@/ts/enums";

// -> misc
const {
  getMealsByUserAndDay,
  mealsByUserAndDay,
  getIssuesByUserAndDay,
  issuesByUserAndDay,
  deleteMealById,
  wasSuccessful,
  deleteIssueById,
  getPeriodByUserAndDay,
  periodByUserAndDay,
  deletePeriodById,
  addPeriod,
} = useSupabase();
const route = useRoute();
const router = useRouter();
// -> period
const { period, uid } = useUser();
const needsPeriodTracking = computed<boolean>(() => {
  return period.value ? period.value !== PeriodTypes.noperiod : false;
});
const insertPeriod = async (): Promise<void> => {
  if (!uid.value || !activeDate.value) return;
  await addPeriod({
    uid: uid.value,
    created_at: activeDate.value,
  });
  if (wasSuccessful.value) {
    await getPeriodByUserAndDay(activeDate.value);
  }
};
// -> active date
const activeDate = ref<Date | false>(false);
const activeDateTitle = computed<string>(() => {
  if (!activeDate.value) return "";
  const day = format.toDate("l", activeDate.value, "de");
  const date = format.toDate("d F Y", activeDate.value, "de");
  return `${day}<br>${date}`;
});
const activeDateQuery = computed<{ [key: string]: string } | {}>(() => {
  if (!activeDate.value) return {};
  if (activeDateIsToday.value) return {};
  const date = format.toDate("Y-m-d", activeDate.value, "de") || false;
  return date ? { day: date } : {};
});
const activeDateIsToday = computed<boolean>(() => {
  if (!activeDate.value) return false;
  const today = create.dateNow();
  return (
    today.getFullYear() === activeDate.value.getFullYear() &&
    today.getMonth() === activeDate.value.getMonth() &&
    today.getDate() === activeDate.value.getDate()
  );
});
// -> entries
type EntryType = "meal" | "issue" | "period";
interface ListEntry {
  id: string;
  time: string;
  title: string;
  type: EntryType;
  color: keyof typeof IconColors;
}
const entriesSortedByTime = computed<ListEntry[]>(() => {
  if (!issuesByUserAndDay.value && !mealsByUserAndDay.value) return [];
  const combinedEntries = [] as ListEntry[];
  if (issuesByUserAndDay.value) {
    issuesByUserAndDay.value.forEach((issue) => {
      const date = create.dateByDatestring(issue?.created_at || "2022");
      combinedEntries.push({
        id: issue?.id || "",
        time: format.toTime("H:i", date),
        title: "Beschwerden",
        type: "issue",
        color: "accentdark",
      });
    });
  }
  if (mealsByUserAndDay.value) {
    mealsByUserAndDay.value.forEach((meal) => {
      const date = create.dateByDatestring(meal?.created_at || "2022");
      combinedEntries.push({
        id: meal?.id || "",
        time: format.toTime("H:i", date),
        title: meal?.title || "Mahlzeit",
        type: "meal",
        color: "dark",
      });
    });
  }
  return combinedEntries.sort((a, b) => {
    return a.time.localeCompare(b.time);
  });
});
const deleteEntry = async (type: EntryType, id: string) => {
  if (type === "meal") {
    await deleteMealById(id);
    if (wasSuccessful.value && activeDate.value) {
      await getMealsByUserAndDay(activeDate.value);
    }
  }
  if (type === "issue") {
    await deleteIssueById(id);
    if (wasSuccessful.value && activeDate.value) {
      await getIssuesByUserAndDay(activeDate.value);
    }
  }
  if (type === "period") {
    await deletePeriodById(id);
    if (wasSuccessful.value && activeDate.value) {
      await getPeriodByUserAndDay(activeDate.value);
    }
  }
};
onMounted(() => {
  activeDate.value = create.dateByDatestring(route.params.day.toString());
  getMealsByUserAndDay(activeDate.value);
  getIssuesByUserAndDay(activeDate.value);
  getPeriodByUserAndDay(activeDate.value);
});
</script>

<style lang="scss" scoped>
.ct-entries,
.ct-noentries {
  padding-top: $gap_inner-big;
}
.ct-entry {
  margin-top: $gap_inner-small;
  @include grid(1fr px(40) px(40), $gap: 0);
  border: 1px solid $color_dark;
  .ct-infos {
    padding-left: $gap_inner-big;
    @include flex(row, flex-start, center);
    > :first-child {
      margin-top: negative(px(5));
    }
  }
  .ct-icon {
    aspect-ratio: 1/1;
    @include flex();
    border-left: 1px solid $color_dark;
    img {
      width: 100%;
      height: 100%;
      max-width: px(20);
      max-height: px(20);
    }
  }
  &[data-type="issue"] {
    border: 1px solid $color_accentdark;
    .ct-icon {
      border-left: 1px solid $color_accentdark;
    }
  }
  &[data-type="period"] {
    border: 1px solid $color_danger;
    .ct-icon {
      border-left: 1px solid $color_danger;
    }
  }
}
.ct-period {
  padding-top: $gap_inner-big;
}
.ct-periodentry {
  @include flex(row, space-between, center);
}
</style>
