<template>
  <view-title :title="activeDateTitle" :icon="DayIconUrl" />
</template>

<script setup lang="ts">
import DayIconUrl from "@/assets/icons/day_extended.svg";
import ViewTitle from "@/components/layout/ViewTitle.vue";
import { useRoute } from "vue-router";
import { computed, onMounted, ref } from "vue";
import { create, format } from "datenow-ts";

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
});
</script>

<style lang="scss" scoped></style>
