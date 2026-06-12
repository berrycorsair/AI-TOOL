"use client";

import { createContext, useContext, ReactNode } from 'react';

type User = {
  id: string;
  email: string;
  name?: string;
} | null;

interface AuthContextType {
  user: User;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: false,
  signIn: async () => {},
  signOut: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  // Mock implementation since auth is disabled
  const value = {
    user: null,
    loading: false,
    signIn: async () => {
      console.log('Auth is disabled in this build');
    },
    signOut: () => {
      console.log('Auth is disabled in this build');
    },
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
export default AuthProvider;