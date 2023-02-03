<template>
  <button @click="logout">logout</button><br />
  <router-view />
</template>

<script setup lang="ts">
import { supabase } from "@/services/supabase";
import { useRouter } from "vue-router";
const router = useRouter();
const logout = async (): Promise<void> => {
  const { error } = await supabase.auth.signOut();
  if (!error) {
    await router.push({ name: "entry" });
  }
};
</script>

<style lang="scss" scoped></style>
