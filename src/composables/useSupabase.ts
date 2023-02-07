import { supabase } from "@/services/supabase";
import { ref } from "vue";
import { useUser } from "@/composables/useUser";
import { modify, format } from "datenow-ts";

// -> types
export interface peopleTable {
  birthday?: string | null;
  created_at?: string | null;
  name?: string | null;
  uid?: string;
  weight?: number | null;
}
interface peopleTableInsert {
  birthday: Date;
  name: string;
  uid: string;
  weight: number;
}
export interface mealsTable {
  created_at?: string | null;
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
  created_at?: string | null;
  issues?: string | null;
  uid?: string | null;
}
interface issuesTableInsert {
  created_at: Date;
  issues: string;
  uid: string;
}

// -> methods
export const useSupabase = () => {
  const isProcessing = ref<boolean>(false);
  const wasSuccessful = ref<boolean>(false);
  const { uid } = useUser();

  // -> table: people
  const addPeople = async (data: peopleTableInsert) => {
    isProcessing.value = true;
    const { status } = await supabase.from("people").insert([
      {
        uid: data.uid,
        name: data.name,
        birthday: data.birthday,
        weight: data.weight,
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
  const getMealsByUserAndDay = async (date: Date): Promise<void> => {
    isProcessing.value = true;
    const dayStart = format.toISO(modify.day.subtract(date, 1));
    const dayEnd = format.toISO(date);
    const { data: meals } = await supabase
      .from("meals")
      .select("*")
      .eq("uid", uid.value)
      .gte("created_at", dayStart)
      .lte("created_at", dayEnd);
    isProcessing.value = false;
    if (meals) {
      wasSuccessful.value = true;
    }
    if (meals?.length) {
      mealsByUserAndDay.value = meals;
    } else {
      mealsByUserAndDay.value = false;
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
  const getIssuesByUserAndDay = async (date: Date): Promise<void> => {
    isProcessing.value = true;
    const dayStart = format.toISO(modify.day.subtract(date, 1));
    const dayEnd = format.toISO(date);
    const { data: issues } = await supabase
      .from("issues")
      .select("*")
      .eq("uid", uid.value)
      .gte("created_at", dayStart)
      .lte("created_at", dayEnd);
    isProcessing.value = false;
    if (issues) {
      wasSuccessful.value = true;
    }
    if (issues?.length) {
      issuesByUserAndDay.value = issues;
    } else {
      issuesByUserAndDay.value = false;
    }
  };

  // -> returns
  return {
    addPeople,
    addMeal,
    getMealsByUserAndDay,
    mealsByUserAndDay,
    issues,
    getIssuesByUserAndDay,
    issuesByUserAndDay,
    addIssue,
    isProcessing,
    wasSuccessful,
  };
};
