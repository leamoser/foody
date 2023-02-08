<template>
  <view-title :title="activeDateTitle" :icon="DayIconUrl" />
  <div class="ct-entries">
    <p class="typo-info">Vorhandene Einträge</p>
    <!--<div class="ct-entry" data-type="issue">
      <div class="ct-infos">
        <p class="typo-mono">08:22</p>
        <p>Znacht</p>
      </div>
      <div class="ct-image">
        <img :src="EditIconUrl" alt="Icon Bearbeiten" />
      </div>
      <div class="ct-image">
        <img :src="CrossIconUrl" alt="Icon Löschen" />
      </div>
    </div>-->
  </div>
</template>

<script setup lang="ts">
import DayIconUrl from "@/assets/icons/day_extended.svg";
import ViewTitle from "@/components/layout/ViewTitle.vue";
import EditIconUrl from "@/assets/icons/edit.svg";
import CrossIconUrl from "@/assets/icons/cross_dark.svg";
import { useRoute } from "vue-router";
import { computed, onMounted, ref } from "vue";
import { create, format } from "datenow-ts";
import { useSupabase } from "@/composables/useSupabase";

const {
  getMealsByUserAndDay,
  mealsByUserAndDay,
  getIssuesByUserAndDay,
  issuesByUserAndDay,
} = useSupabase();

const activeDate = ref<Date | false>(false);
const activeDateTitle = computed<string>(() => {
  if (!activeDate.value) return "";
  const day = format.toDate("l", activeDate.value, "de");
  const date = format.toDate("d F Y", activeDate.value, "de");
  return `${day}<br>${date}`;
});

const route = useRoute();
onMounted(() => {
  activeDate.value = create.dateByDatestring(route.params.day.toString());
  getMealsByUserAndDay(activeDate.value);
  getIssuesByUserAndDay(activeDate.value);
});
</script>

<style lang="scss" scoped>
.ct-entries {
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
  .ct-image {
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
    .ct-image {
      border-left: 1px solid $color_accentdark;
    }
  }
}
</style>
