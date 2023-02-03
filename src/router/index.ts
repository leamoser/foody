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
import UserInfoView from "@/views/UserInfoView.vue";
import HomeView from "@/views/HomeView.vue";
import IssuesView from "@/views/IssuesView.vue";
import MealView from "@/views/MealView.vue";
import CalendarView from "@/views/CalendarView.vue";
import CorrelationView from "@/views/CorrelationView.vue";
import ProfileView from "@/views/ProfileView.vue";
import { useUser } from "@/composables/useUser";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // -> entry
    {
      path: "/",
      component: EntryLayout,
      meta: {
        needsAuth: false,
      },
      children: [
        {
          path: "",
          name: "entry",
          component: EntryView,
        },
      ],
    },
    // -> sign in
    {
      path: "/sign-in",
      component: AuthLayout,
      meta: {
        needsAuth: false,
      },
      children: [
        {
          path: "",
          name: "sign-in",
          component: SignInView,
        },
      ],
    },
    // -> sign up
    {
      path: "/sign-up",
      component: AuthLayout,
      meta: {
        needsAuth: false,
      },
      children: [
        {
          path: "",
          name: "sign-up",
          component: SignUpView,
        },
      ],
    },
    // -> user info
    {
      path: "/user-info",
      component: AuthLayout,
      meta: {
        needsAuth: true,
      },
      children: [
        {
          path: "",
          name: "user-info",
          component: UserInfoView,
        },
      ],
    },
    // -> home
    {
      path: "/home",
      component: AppLayout,
      meta: {
        needsAuth: true,
      },
      children: [
        {
          path: "",
          name: "home",
          component: HomeView,
        },
      ],
    },
    // -> issues
    {
      path: "/issues",
      component: AppLayout,
      meta: {
        needsAuth: true,
      },
      children: [
        {
          path: "",
          name: "issues",
          component: IssuesView,
        },
      ],
    },
    // -> meal
    {
      path: "/meal",
      component: AppLayout,
      meta: {
        needsAuth: true,
      },
      children: [
        {
          path: "",
          name: "meal",
          component: MealView,
        },
      ],
    },
    // -> calendar
    {
      path: "/calendar",
      component: AppLayout,
      meta: {
        needsAuth: true,
      },
      children: [
        {
          path: "",
          name: "calendar",
          component: CalendarView,
        },
      ],
    },
    // -> correlation
    {
      path: "/correlation",
      component: AppLayout,
      meta: {
        needsAuth: true,
      },
      children: [
        {
          path: "",
          name: "correlation",
          component: CorrelationView,
        },
      ],
    },
    // -> profile
    {
      path: "/profile",
      component: AppLayout,
      meta: {
        needsAuth: true,
      },
      children: [
        {
          path: "",
          name: "profile",
          component: ProfileView,
        },
      ],
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  const { data } = await supabase.auth.getUser();
  if (!to.meta.needsAuth) {
    data.user ? next({ name: "home" }) : next();
  } else {
    !data.user ? next({ name: "entry" }) : next();
  }
});

export default router;
