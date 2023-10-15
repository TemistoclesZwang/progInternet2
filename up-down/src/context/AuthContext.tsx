import { createContext } from "react";

export const createAuthContext = () => {
    const AuthContext = createContext({});
    return AuthContext;
  };