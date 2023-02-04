<template>
  <main>
    <router-view />
    <div class="ct-date">
      <current-date />
    </div>
  </main>
</template>

<script lang="ts" setup>
import CurrentDate from "@/components/layout/CurrentDate.vue";
</script>

<style lang="scss" scoped>
.ct-date {
  position: absolute;
  left: $gap_around;
  bottom: $gap_around;
}
</style>
