import { supabase } from "@/services/supabase";
import { useRouter } from "vue-router";
import { ref } from "vue";

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

// -> methods
export const useSupabase = () => {
  const isProcessing = ref<boolean>(false);
  const wasSuccessful = ref<boolean>(false);

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
  const getSinglePerson = async (uid: string): Promise<peopleTable | false> => {
    isProcessing.value = true;
    const { data: people } = await supabase
      .from("people")
      .select("*")
      .eq("uid", uid);
    isProcessing.value = false;
    if (people?.length) {
      wasSuccessful.value = true;
      return people[0];
    } else {
      return false;
    }
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

  // -> returns
  return {
    addPeople,
    getSinglePerson,
    addMeal,
    isProcessing,
    wasSuccessful,
  };
};
