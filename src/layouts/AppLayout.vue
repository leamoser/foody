<template>
  <button @click="logout">logout</button><br />
  <router-view />
</template>

<script setup lang="ts">
import { supabase } from "@/services/supabase";
const logout = async (): Promise<void> => {
  const { error } = await supabase.auth.signOut();
  console.log("log out", error);
};
</script>

<style lang="scss" scoped></style>
