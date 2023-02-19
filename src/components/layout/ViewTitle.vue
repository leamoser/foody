<template>
  <div class="ct-view-title">
    <icon-loader :icon="icon" />
    <h1 v-html="title" />
  </div>
</template>

<script setup lang="ts">
import type { IconNames } from "@/ts/types";
import IconLoader from "@/components/elements/IconLoader.vue";

const props = defineProps({
  icon: { required: true, type: String as () => IconNames },
  title: { required: true, type: String },
});
</script>

<style lang="scss" scoped>
.ct-view-title {
  @include flex(row, flex-start, center, $gap_inner-big);
}
</style>
