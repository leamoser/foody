import { computed, onMounted, ref } from "vue";
import type { peopleTable } from "@/composables/useSupabase";
import { supabase } from "@/services/supabase";
import { NutritionTypes, PeriodTypes } from "@/ts/enums";
import { create } from "datenow-ts";
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
  const name = computed<string>(() => {
    return userdata.value ? userdata.value.name || "" : "";
  });
  const shortname = computed<string>(() => {
    if (name.value && name.value.length >= 2) return name.value.substring(0, 2);
    else return "US";
  });
  const weight = computed<number>(() => {
    return userdata.value ? userdata.value.weight || 0 : 0;
  });
  const age = computed<number>(() => {
    if (!userdata.value) return 0;
    if (!userdata.value.birthday) return 0;
    const timestamp_now = Date.now();
    const timestamp_birthday = create
      .dateByDatestring(userdata.value.birthday)
      .valueOf();
    const difference = timestamp_now - timestamp_birthday;
    const yearsBetween = new Date(difference);
    return Math.abs(yearsBetween.getUTCFullYear() - 1970);
  });
  const nutrition = computed<NutritionTypes>(() => {
    if (!userdata.value) return NutritionTypes.meat;
    if (!userdata.value.nutrition_type) return NutritionTypes.meat;
    return userdata.value.nutrition_type;
  });
  const period = computed<PeriodTypes>(() => {
    if (!userdata.value) return PeriodTypes.noperiod;
    if (!userdata.value.period_type) return PeriodTypes.noperiod;
    return userdata.value.period_type;
  });
  const getUserdata = async (): Promise<void> => {
    if (!userLoggedIn.value) return;
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
    name,
    shortname,
    age,
    weight,
    nutrition,
    period,
  };
};
