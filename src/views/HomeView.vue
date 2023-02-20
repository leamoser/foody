<template>
  <p class="typo-text intro" v-if="userdata">
    Hallo {{ userdata.name }},<br />
    schön bist du hier.
  </p>
  <current-date />
  <div class="ct-stats">
    <h2>Heutige Statistiken</h2>
    <div class="ct-stats-boxen">
      <div v-if="mealsByUserAndDay" class="ct-stat stat-meals typo-light">
        <p>{{ mealsByUserAndDay.length }}</p>
        <h2>
          {{ mealsByUserAndDay.length === 1 ? "Mahlzeit" : "Mahlzeiten" }}
        </h2>
      </div>
      <div v-if="issuesByUserAndDay" class="ct-stat stat-issues typo-light">
        <p>{{ issuesByUserAndDay.length }}</p>
        <h2>
          {{ issuesByUserAndDay.length === 1 ? "Beschwerde" : "Beschwerden" }}
        </h2>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CurrentDate from "@/components/layout/CurrentDate.vue";
import { onMounted } from "vue";
import { create } from "datenow-ts";
import { useUser } from "@/composables/useUser";
import { useSupabase } from "@/composables/useSupabase";

const { userdata } = useUser();
const {
  getMealsByUserAndDay,
  mealsByUserAndDay,
  getIssuesByUserAndDay,
  issuesByUserAndDay,
} = useSupabase();
onMounted(() => {
  getMealsByUserAndDay(create.dateNow());
  getIssuesByUserAndDay(create.dateNow());
});
</script>

<style lang="scss" scoped>
.intro {
  padding-bottom: $gap_inner-big;
}
.ct-stats {
  padding-top: px(30);
  h2 {
    padding-bottom: $gap_inner-small;
  }
}
.ct-stats-boxen {
  @include grid(repeat(2, 1fr), $gap: $gap_inner-small);
}
.ct-stat {
  padding: px(12) 0 px(17) 0;
  @include flex(column, center, center);
  p {
    @include f-mono(2rem, $color_light);
  }
  &.stat-issues {
    background: $color_accentdark;
  }
  &.stat-meals {
    background: $color_dark;
  }
}
</style>
