"use client";
import React, {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState,
} from "react";
import supabase from "../supabase";
import { useRouter } from "next/navigation";

interface AuthContextProps {
  currentUser: {};
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentUser, setCurrentUser] = useState<any>();
  const router = useRouter();
  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        setCurrentUser(user);
      } else {
        router.push("/login");
      }
    };
    // const logoutUser = async () => {
    //   const { error } = await supabase.auth.signOut();
    // };
    // logoutUser();
    getUser();
  }, []);
  const contextValue: AuthContextProps = {
    currentUser: currentUser,
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "No AuthContext.Provider found when calling useAuthContext."
    );
  }

  return context;
};
