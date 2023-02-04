<template>
  <p class="typo-text intro" v-if="userdata">
    Hallo {{ userdata.name }},<br />
    schön bist du hier.
  </p>
  <current-date />
</template>

<script setup lang="ts">
import { useUser } from "@/composables/useUser";
import CurrentDate from "@/components/layout/CurrentDate.vue";
const { userdata } = useUser();
</script>

<style lang="scss" scoped>
.intro {
  padding-bottom: $gap_inner-big;
}
</style>
