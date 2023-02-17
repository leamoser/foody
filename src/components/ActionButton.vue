<template>
  <button @click="navigateTo" :class="{ disabled: disabled }">
    <p class="typo-text"><slot /></p>
  </button>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const props = defineProps({
  link: { required: false, type: String, default: "" },
  query: {
    required: false,
    type: Object as () => { [key: string]: string },
    default: () => {},
  },
  disabled: { required: false, type: Boolean, default: false },
});
const router = useRouter();
const navigateTo = (): void => {
  if (!props.link || props.disabled) return;
  const route =
    JSON.stringify(props.query) === "{}"
      ? { name: props.link }
      : { name: props.link, query: props.query };
  router.push(route);
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
