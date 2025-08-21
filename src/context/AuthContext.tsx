"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { UserType } from "../types";
import axios from "axios";

// Define context types
type AuthContextType = {
  user: UserType;
  token: string;
  baseUrl: string;
  headers: any;
};

type AuthUpdateContextType = {
  register: ({
    fullname,
    email,
    password,
  }: {
    fullname: string;
    email: string;
    password: string;
  }) => void;
  registerVerification: ({
    email,
    otp,
  }: {
    email: string;
    otp: string;
  }) => void;
  registerResendVerification: ({ email }: { email: string }) => void;
  login: ({ email, password }: { email: string; password: string }) => void;
  me: () => void;
  refreshAccessToken: () => void;
};

// Create contexts with explicit types
const AuthContext = createContext<AuthContextType | undefined>(undefined);
const AuthContextUpdate = createContext<AuthUpdateContextType | undefined>(
  undefined
);

// Hook to load theme
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};

// Hook to update theme
export const useAuthUpdate = (): AuthUpdateContextType => {
  const context = useContext(AuthContextUpdate);
  if (context === undefined) {
    throw new Error("useAuthUpdate must be used within a AuthProvider");
  }
  return context;
};

// Props type for provider
interface AuthProviderProps {
  children: ReactNode;
}

// Provider component
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserType>({
    id: 0,
    fullname: "",
    email: "",
    roles: "",
    loggedIn: false,
  });

  const [token, setToken] = useState<string>("");
  const [baseUrl, setBaseUrl] = useState<string>("");
  const [headers, setHeaders] = useState<any>({
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const register = ({
    fullname,
    email,
    password,
  }: {
    fullname: string;
    email: string;
    password: string;
  }) => {};

  const registerVerification = ({
    email,
    otp,
  }: {
    email: string;
    otp: string;
  }) => {};

  const registerResendVerification = ({ email }: { email: string }) => {};

  const login = ({ email, password }: { email: string; password: string }) => {
    const url = "/login";

    axios
      .post(url, { email: email, password: password })
      .then((res) => {
        console.log("login", res.data);
      })
      .catch((err) => {
        console.log("err while login", err);
      });
  };

  const me = () => {};

  const refreshAccessToken = () => {};

  return (
    <AuthContext.Provider value={{ user, token, baseUrl, headers }}>
      <AuthContextUpdate.Provider
        value={{
          register,
          registerVerification,
          registerResendVerification,
          login,
          me,
          refreshAccessToken,
        }}
      >
        {children}
      </AuthContextUpdate.Provider>
    </AuthContext.Provider>
  );
};

/*



entitties

pricing
faq
contact
clinic

auth
dashboard (mixture of contact+clinic)

*/
