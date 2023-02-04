import { computed, onMounted, ref } from "vue";
import type { peopleTable } from "@/composables/useSupabase";
import { supabase } from "@/services/supabase";
import { watchArray } from "@vueuse/core";
export const useUser = () => {
  // -> auth data
  const authdata = localStorage.getItem("sb-lbauizlhaxtupjrudtln-auth-token");
  const userLoggedIn = computed<boolean>(() => !!authdata);
  const user = computed<{ [key: string]: string } | false>(() =>
    authdata ? JSON.parse(authdata)?.user : false
  );
  const uid = computed<string | false>(() =>
    user.value ? user.value.id : false
  );
  const email = computed<string | false>(() =>
    user.value ? user.value.email : false
  );
  // -> user data
  const userdata = ref<peopleTable | false>(false);
  const getUserdata = async (): Promise<void> => {
    const { data: people } = await supabase
      .from("people")
      .select("*")
      .eq("uid", uid.value);
    if (people?.length) {
      userdata.value = people[0];
    } else {
      userdata.value = false;
    }
  };
  onMounted(async () => {
    await getUserdata();
  });
  return {
    userLoggedIn,
    user,
    uid,
    email,
    userdata,
  };
};
