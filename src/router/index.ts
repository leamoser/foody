import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Protected from "@/views/Protected.vue";
import { supabase } from "@/services/supabase";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/protected",
      name: "protected",
      component: Protected,
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  const { data } = await supabase.auth.getUser();
  if (data.user) {
    console.log("authenticated");
    return next();
  }
  console.log("not authenticated");
  return next();
  //return router.push({ name: "protected" });
});

export default router;
