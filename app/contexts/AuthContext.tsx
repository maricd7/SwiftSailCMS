"use client";
import React, {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import supabase from "../supabase";
import { useRouter } from "next/navigation";

interface AuthContextProps {
  currentUser: {};
  setSignedIn: Dispatch<SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentUser, setCurrentUser] = useState<any>();
  const [userSignedIn, setSignedIn] = useState<boolean>(false);
  const router = useRouter();
  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        setCurrentUser(user);
        setSignedIn(true);
      } else {
        router.push("/login");
      }
    };
    // const logoutUser = async () => {
    //   const { error } = await supabase.auth.signOut();
    // };
    // logoutUser();
    getUser();
  }, [userSignedIn]);
  const contextValue: AuthContextProps = {
    currentUser: currentUser,
    setSignedIn: setSignedIn,
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
