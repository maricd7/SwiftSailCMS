import { createClient } from "@/utils/supabase/server";
import ConnectSupabaseSteps from "@/components/ConnectSupabaseSteps";
import SignUpUserSteps from "@/components/SignUpUserSteps";
import Header from "@/components/Header";
import { cookies } from "next/headers";
import { ProductContextProvider } from "../contexts/ProductsContext";
import { Heading } from "../components/common/Heading/Heading";
export default async function Index() {
  const cookieStore = cookies();

  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient(cookieStore);
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <div>
      <Heading text="Welcome username" />
      <h2 className="text-gray-950">
        Use SwiftSail cms to create changes on your shop or track traffic and
        user actions.
      </h2>
    </div>
  );
}
