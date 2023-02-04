<template>
  <button @click="navigateTo" :class="{ disabled: disabled }">
    <p class="typo-text"><slot /></p>
  </button>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const props = defineProps({
  link: { required: false, type: String, default: "" },
  disabled: { required: false, type: Boolean, default: false },
});
const router = useRouter();
const navigateTo = (): void => {
  if (!props.link || props.disabled) {
    return;
  }
  router.push({ name: props.link });
};
</script>

<style lang="scss" scoped>
// -> buttons
button {
  background: $color_light;
  border: 1px solid $color_dark;
  padding: px(8) px(20);
  border-radius: px(50);
  &.disabled {
    pointer-events: none;
    opacity: 0.5;
  }
}
</style>
