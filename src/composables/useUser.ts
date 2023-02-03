import { computed } from "vue";
import type { ComputedRef } from "vue";
import { supabase } from "@/services/supabase";

export const useUser = (): {
  userLoggedIn: ComputedRef<boolean>;
  user: ComputedRef<{ [key: string]: any } | false>;
  uid: ComputedRef<string | false>;
  email: ComputedRef<string | false>;
} => {
  // -> auth user data
  const userdata = localStorage.getItem("sb-lbauizlhaxtupjrudtln-auth-token");
  const userLoggedIn = computed<boolean>(() => !!userdata);
  const user = computed<{ [key: string]: string } | false>(() =>
    userdata ? JSON.parse(userdata)?.user : false
  );
  const uid = computed<string | false>(() =>
    user.value ? user.value.id : false
  );
  const email = computed<string | false>(() =>
    user.value ? user.value.email : false
  );
  return {
    userLoggedIn,
    user,
    uid,
    email,
  };
};
