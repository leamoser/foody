<template>
  <view-title
    v-if="userdata"
    :title="`${userdata.name}'s<br>Profil`"
    :icon="ProfileIconUrl"
  />
  <button @click="signOut">logout</button>
</template>

<script setup lang="ts">
import ProfileIconUrl from "@/assets/icons/user.svg";
import ViewTitle from "@/components/layout/ViewTitle.vue";
import { useUser } from "@/composables/useUser";
import { useAuth } from "@/composables/useAuth";
const { signOut } = useAuth();
const { userdata } = useUser();
</script>

<style lang="scss" scoped></style>
