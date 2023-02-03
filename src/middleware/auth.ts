import { supabase } from "@/services/supabase";
// @ts-ignore
export default async function auth({ next, router }) {
  const { data } = await supabase.auth.getUser();
  if (data) {
    console.log("not authenticated");
    return next();
  }
  console.log("is authenticated");
  return router.push({ name: "home" });
}
