<template>
  <div class="ct-nutrition-mode">
    <mark>Ernährungsart</mark>
  </div>
</template>

<script setup lang="ts">
const nutritionModes = [];
</script>

<style lang="scss" scoped>
.ct-nutrition-mode {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  @include flex(row, flex-end, center, px(5));
}
</style>
