import { supabase } from "@/services/supabase";
import { useRouter } from "vue-router";
import { ref } from "vue";
export const useAuth = () => {
  const router = useRouter();
  const baseurl = import.meta.env.VITE_BASE_URL;
  const isProcessing = ref<boolean>(false);
  const wasSuccessful = ref<boolean>(false);
  const signIn = async (email: string): Promise<void> => {
    isProcessing.value = true;
    const { error } = await supabase.auth.signInWithOtp({
      email,
    });
    isProcessing.value = false;
    wasSuccessful.value = !error;
  };
  const signUp = async (email: string): Promise<void> => {
    isProcessing.value = true;
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${baseurl}/user-info` },
    });
    isProcessing.value = false;
    wasSuccessful.value = !error;
  };
  const signOut = async (): Promise<void> => {
    isProcessing.value = true;
    const { error } = await supabase.auth.signOut();
    if (!error) {
      await router.push({ name: "entry" });
    }
    isProcessing.value = false;
    wasSuccessful.value = !error;
  };
  return {
    signIn,
    signUp,
    signOut,
    isProcessing,
    wasSuccessful,
  };
};
