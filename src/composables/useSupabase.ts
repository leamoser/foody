import { supabase } from "@/services/supabase";
import { ref } from "vue";
import { useUser } from "@/composables/useUser";
import { modify, format, create } from "datenow-ts";
import type { Month, Year } from "datenow-ts/lib/types";
import type { NutritionTypes, PeriodTypes } from "@/ts/enums";

// -> types
export interface peopleTable {
  birthday?: string | null;
  created_at?: string | null;
  name?: string | null;
  uid?: string;
  weight?: number | null;
  nutrition_type?: NutritionTypes;
  period_type?: PeriodTypes;
}
interface peopleTableInsert {
  birthday: Date;
  name: string;
  uid: string;
  weight: number;
  nutrition_type: NutritionTypes;
  period_type: PeriodTypes;
}
export interface mealsTable {
  id: string;
  created_at: string;
  title?: string | null;
  food?: string | null;
  uid?: string | null;
}
interface mealsTableInsert {
  created_at: Date;
  title: string;
  food: string;
  uid: string;
}
export interface issuesTable {
  id: string;
  created_at: string;
  issues?: string | null;
  uid?: string | null;
}
interface issuesTableInsert {
  created_at: Date;
  issues: string;
  uid: string;
}
interface periodTable {
  id: string;
  created_at: string;
  uid?: string;
}
interface periodTableInsert {
  created_at: Date;
  uid: string;
}

// -> methods
export const useSupabase = () => {
  const isProcessing = ref<boolean>(false);
  const wasSuccessful = ref<boolean>(false);
  const { uid } = useUser();
  const dateWithResettedTime = (date: Date): Date => {
    const datestring = format.toDate("Y-m-d", date, "de");
    return create.dateByDatestring(datestring);
  };

  // -> table: people
  const addPeople = async (data: peopleTableInsert) => {
    isProcessing.value = true;
    const { status } = await supabase.from("people").insert([
      {
        uid: data.uid,
        name: data.name,
        birthday: data.birthday,
        weight: data.weight,
        nutrition_type: data.nutrition_type,
        period_type: data.period_type,
      },
    ]);
    isProcessing.value = false;
    wasSuccessful.value = status === 201;
  };

  // -> table: meals
  const addMeal = async (data: mealsTableInsert) => {
    isProcessing.value = true;
    const { status } = await supabase.from("meals").insert([
      {
        created_at: data.created_at,
        title: data.title,
        food: data.food,
        uid: data.uid,
      },
    ]);
    isProcessing.value = false;
    wasSuccessful.value = status === 201;
  };
  const mealsByUserAndDay = ref<mealsTable[] | false>(false);
  const mealsByUserAndMonth = ref<mealsTable[] | false>(false);
  const foodsByUser = ref<string[]>([]);
  const getMealsByUserAndDay = async (date: Date): Promise<void> => {
    isProcessing.value = true;
    const dayStart = format.toISO(dateWithResettedTime(date));
    const dayEnd = format.toISO(modify.day.add(dateWithResettedTime(date), 1));
    const { data: meals } = await supabase
      .from("meals")
      .select("*")
      .eq("uid", uid.value)
      .gte("created_at", dayStart)
      .lte("created_at", dayEnd)
      .order("created_at", { ascending: true });
    isProcessing.value = false;
    if (meals) {
      wasSuccessful.value = true;
    }
    if (meals?.length) {
      mealsByUserAndDay.value = meals;
    } else {
      mealsByUserAndDay.value = [];
    }
  };
  const getMealsByUserAndMonth = async (
    month: Month,
    year: Year
  ): Promise<void> => {
    isProcessing.value = true;
    const dayStart = create.dateByParams({ year, month, day: 1 });
    const dayStartIso = format.toISO(dayStart);
    const dayEnd = modify.day.subtract(modify.month.add(dayStart, 1), 1);
    const dayEndIso = format.toISO(dayEnd);
    const { data: meals } = await supabase
      .from("meals")
      .select("*")
      .eq("uid", uid.value)
      .gte("created_at", dayStartIso)
      .lte("created_at", dayEndIso)
      .order("created_at", { ascending: true });
    isProcessing.value = false;
    if (meals) {
      wasSuccessful.value = true;
    }
    if (meals?.length) {
      mealsByUserAndMonth.value = meals;
    } else {
      mealsByUserAndMonth.value = [];
    }
  };
  const deleteMealById = async (id: string) => {
    isProcessing.value = true;
    const { status } = await supabase.from("meals").delete().eq("id", id);
    isProcessing.value = false;
    wasSuccessful.value = status < 300;
  };
  const getFoodsByUser = async (): Promise<void> => {
    isProcessing.value = true;
    const { data: meals } = await supabase
      .from("meals")
      .select("food")
      .eq("uid", uid.value);
    isProcessing.value = false;
    if (meals) {
      wasSuccessful.value = true;
      const allFoods = [].concat(
        ...meals.map((meal) => {
          return JSON.parse(meal.food);
        })
      );
      const uniqueFoods = [...new Set(allFoods)];
      foodsByUser.value = uniqueFoods;
    }
  };

  // -> table: issues
  const issues = [
    "Bauchweh",
    "Durchfall",
    "Verstopfung",
    "Übelkeit",
    "Blähungen",
    "Ausschlag",
  ];
  const addIssue = async (data: issuesTableInsert) => {
    isProcessing.value = true;
    const { status } = await supabase.from("issues").insert([
      {
        created_at: data.created_at,
        issues: data.issues,
        uid: data.uid,
      },
    ]);
    isProcessing.value = false;
    wasSuccessful.value = status === 201;
  };
  const issuesByUserAndDay = ref<issuesTable[] | false>(false);
  const issuesByUserAndMonth = ref<issuesTable[] | false>(false);
  const getIssuesByUserAndDay = async (date: Date): Promise<void> => {
    isProcessing.value = true;
    const dayStart = format.toISO(dateWithResettedTime(date));
    const dayEnd = format.toISO(modify.day.add(dateWithResettedTime(date), 1));
    const { data: issues } = await supabase
      .from("issues")
      .select("*")
      .eq("uid", uid.value)
      .gte("created_at", dayStart)
      .lte("created_at", dayEnd)
      .order("created_at", { ascending: true });
    isProcessing.value = false;
    if (issues) {
      wasSuccessful.value = true;
    }
    if (issues?.length) {
      issuesByUserAndDay.value = issues;
    } else {
      issuesByUserAndDay.value = [];
    }
  };
  const getIssuesByUserAndMonth = async (
    month: Month,
    year: Year
  ): Promise<void> => {
    isProcessing.value = true;
    const dayStart = create.dateByParams({ year, month, day: 1 });
    const dayStartIso = format.toISO(dayStart);
    const dayEnd = modify.day.subtract(modify.month.add(dayStart, 1), 1);
    const dayEndIso = format.toISO(dayEnd);
    const { data: issues } = await supabase
      .from("issues")
      .select("*")
      .eq("uid", uid.value)
      .gte("created_at", dayStartIso)
      .lte("created_at", dayEndIso)
      .order("created_at", { ascending: true });
    isProcessing.value = false;
    if (issues) {
      wasSuccessful.value = true;
    }
    if (issues?.length) {
      issuesByUserAndMonth.value = issues;
    } else {
      issuesByUserAndMonth.value = [];
    }
  };
  const deleteIssueById = async (id: string) => {
    isProcessing.value = true;
    const { status } = await supabase.from("issues").delete().eq("id", id);
    isProcessing.value = false;
    wasSuccessful.value = status < 300;
  };

  // -> table: period
  const addPeriod = async (data: periodTableInsert) => {
    isProcessing.value = true;
    const { status } = await supabase.from("period").insert([
      {
        created_at: data.created_at,
        uid: data.uid,
      },
    ]);
    isProcessing.value = false;
    wasSuccessful.value = status === 201;
  };
  const periodByUserAndDay = ref<periodTable[] | false>(false);
  const periodByUserAndMonth = ref<periodTable[] | false>(false);
  const getPeriodByUserAndDay = async (date: Date): Promise<void> => {
    isProcessing.value = true;
    const dayStart = format.toISO(dateWithResettedTime(date));
    const dayEnd = format.toISO(modify.day.add(dateWithResettedTime(date), 1));
    const { data: period } = await supabase
      .from("period")
      .select("*")
      .eq("uid", uid.value)
      .gte("created_at", dayStart)
      .lte("created_at", dayEnd)
      .order("created_at", { ascending: true });
    isProcessing.value = false;
    if (period) {
      wasSuccessful.value = true;
    }
    if (period?.length) {
      periodByUserAndDay.value = period;
    } else {
      periodByUserAndDay.value = [];
    }
  };
  const getPeriodByUserAndMonth = async (
    month: Month,
    year: Year
  ): Promise<void> => {
    isProcessing.value = true;
    const dayStart = create.dateByParams({ year, month, day: 1 });
    const dayStartIso = format.toISO(dayStart);
    const dayEnd = modify.day.subtract(modify.month.add(dayStart, 1), 1);
    const dayEndIso = format.toISO(dayEnd);
    const { data: period } = await supabase
      .from("period")
      .select("*")
      .eq("uid", uid.value)
      .gte("created_at", dayStartIso)
      .lte("created_at", dayEndIso)
      .order("created_at", { ascending: true });
    isProcessing.value = false;
    if (period) {
      wasSuccessful.value = true;
    }
    if (period?.length) {
      periodByUserAndMonth.value = period;
    } else {
      periodByUserAndMonth.value = [];
    }
  };
  const deletePeriodById = async (id: string) => {
    isProcessing.value = true;
    const { status } = await supabase.from("period").delete().eq("id", id);
    isProcessing.value = false;
    wasSuccessful.value = status < 300;
  };

  // -> returns
  return {
    // -> people
    addPeople,
    // -> meals
    addMeal,
    getMealsByUserAndDay,
    mealsByUserAndDay,
    getMealsByUserAndMonth,
    mealsByUserAndMonth,
    deleteMealById,
    foodsByUser,
    getFoodsByUser,
    // -> issues
    addIssue,
    issues,
    getIssuesByUserAndDay,
    issuesByUserAndDay,
    getIssuesByUserAndMonth,
    issuesByUserAndMonth,
    deleteIssueById,
    // -> period
    addPeriod,
    getPeriodByUserAndDay,
    periodByUserAndDay,
    getPeriodByUserAndMonth,
    periodByUserAndMonth,
    deletePeriodById,
    // -> misc
    isProcessing,
    wasSuccessful,
  };
};
