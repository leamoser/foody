<template>
  <div class="ct-view-title">
    <img :src="icon" :alt="`Icons ${title}`" />
    <h1 v-html="title" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  icon: { required: true, type: String },
  title: { required: true, type: String },
});
</script>

<style lang="scss" scoped>
.ct-view-title {
  @include flex(row, flex-start, center, $gap_inner-big);
  img {
    min-width: px(20);
    max-width: px(70) !important;
  }
}
</style>
