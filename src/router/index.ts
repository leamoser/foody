import { createRouter, createWebHistory } from "vue-router";
import { supabase } from "@/services/supabase";
// -> layouts
import AppLayout from "@/layouts/AppLayout.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";
import EntryLayout from "@/layouts/EntryLayout.vue";
// -> views
import EntryView from "@/views/EntryView.vue";
import SignInView from "@/views/SignInView.vue";
import SignUpView from "@/views/SignUpView.vue";
import HomeView from "@/views/HomeView.vue";
import IssuesView from "@/views/IssuesView.vue";
import MealView from "@/views/MealView.vue";
import CalendarView from "@/views/CalendarView.vue";
import CorrelationView from "@/views/CorrelationView.vue";
import ProfileView from "@/views/ProfileView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // -> entry
    {
      path: "/",
      name: "entry",
      component: EntryLayout,
      meta: {
        needsAuth: false,
      },
      children: [
        {
          path: "/",
          component: EntryView,
        },
      ],
    },
    // -> sign in
    {
      path: "/sign-in",
      name: "sign-in",
      component: AuthLayout,
      meta: {
        needsAuth: false,
      },
      children: [
        {
          path: "/",
          component: SignInView,
        },
      ],
    },
    // -> sign up
    {
      path: "/sign-up",
      name: "sign-up",
      component: AuthLayout,
      meta: {
        needsAuth: false,
      },
      children: [
        {
          path: "/",
          component: SignUpView,
        },
      ],
    },
    // -> home
    {
      path: "/home",
      name: "home",
      component: AppLayout,
      meta: {
        needsAuth: true,
      },
      children: [
        {
          path: "/",
          component: HomeView,
        },
      ],
    },
    // -> issues
    {
      path: "/issues",
      name: "issues",
      component: AppLayout,
      meta: {
        needsAuth: true,
      },
      children: [
        {
          path: "/",
          component: IssuesView,
        },
      ],
    },
    // -> meal
    {
      path: "/meal",
      name: "meal",
      component: AppLayout,
      meta: {
        needsAuth: true,
      },
      children: [
        {
          path: "/",
          component: MealView,
        },
      ],
    },
    // -> calendar
    {
      path: "/calendar",
      name: "calendar",
      component: AppLayout,
      meta: {
        needsAuth: true,
      },
      children: [
        {
          path: "/",
          component: CalendarView,
        },
      ],
    },
    // -> correlation
    {
      path: "/correlation",
      name: "correlation",
      component: AppLayout,
      meta: {
        needsAuth: true,
      },
      children: [
        {
          path: "/",
          component: CorrelationView,
        },
      ],
    },
    // -> profile
    {
      path: "/profile",
      name: "profile",
      component: AppLayout,
      meta: {
        needsAuth: true,
      },
      children: [
        {
          path: "/",
          component: ProfileView,
        },
      ],
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  const { data } = await supabase.auth.getUser();
  if (!to.meta.needsAuth) {
    if (data.user) {
      console.log("💁 already authenticated, leave this route");
      return router.push({ name: "home" });
    }
    console.log("🔐not yet authenticated");
    return next();
  } else {
    if (!data.user) {
      console.log("🙅not authenticated yet, go to entry");
      return router.push({ name: "entry" });
    }
    console.log("🔓authentication successful");
    return next();
  }
});

export default router;
