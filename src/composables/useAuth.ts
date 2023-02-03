import { supabase } from "@/services/supabase";
import { useRouter } from "vue-router";
import { ref } from "vue";
export const useAuth = () => {
  const router = useRouter();
  const isProcessing = ref<boolean>(false);
  const signIn = async (email: string): Promise<void> => {
    isProcessing.value = true;
    const { error, data } = await supabase.auth.signInWithOtp({
      email,
    });
    isProcessing.value = false;
  };
  const signOut = async (): Promise<void> => {
    isProcessing.value = true;
    const { error } = await supabase.auth.signOut();
    if (!error) {
      await router.push({ name: "entry" });
    }
    isProcessing.value = false;
  };
  return {
    signIn,
    signUp: signIn,
    signOut,
    isProcessing,
  };
};
