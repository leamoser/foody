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
import DayView from "@/views/DayView.vue";
import CorrelationView from "@/views/CorrelationView.vue";
import ProfileView from "@/views/ProfileView.vue";
// -> ts
export {};
import "vue-router";
declare module "vue-router" {
  interface RouteMeta {
    needsAuth: boolean;
    // is optional
    pagetitle: string;
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // -> entry
    {
      path: "/",
      component: EntryLayout,
      meta: {
        needsAuth: false,
        pagetitle: "",
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
        pagetitle: "Login",
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
        pagetitle: "Neu anmelden",
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
        pagetitle: "Profil aufsetzen",
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
        pagetitle: "Home",
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
        pagetitle: "Beschwerden",
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
        pagetitle: "Mahlzeit",
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
        pagetitle: "Kalender",
      },
      children: [
        {
          path: "",
          name: "calendar",
          component: CalendarView,
        },
      ],
    },
    // -> day
    {
      path: "/calendar/:day",
      component: AppLayout,
      meta: {
        needsAuth: true,
        pagetitle: "Einzelner Tag",
      },
      children: [
        {
          path: "",
          name: "day",
          component: DayView,
        },
      ],
    },
    // -> correlation
    {
      path: "/correlation",
      component: AppLayout,
      meta: {
        needsAuth: true,
        pagetitle: "Korrelationen",
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
        pagetitle: "Dein Profil",
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
