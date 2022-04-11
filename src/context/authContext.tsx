import { createContext, useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { User, UserCredential } from "firebase/auth";
import { auth } from "../firebase";

export interface FunctionProps {
  login: (email: string, password: string) => Promise<UserCredential> | void;
  signUp: (email: string, password: string) => Promise<UserCredential> | void;
  logout: () => Promise<void> | void;
  user: User | null | undefined;
  loading: boolean | null | undefined;
}

export const authContext = createContext<FunctionProps>({
  login: () => {},
  signUp: () => {},
  logout: () => {},
  user: null,
  loading: null,
});

interface Props {
  children: React.ReactNode;
}

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const login = (email: string, password: string) =>
    signInWithEmailAndPassword(auth, email, password);
  const signUp = (email: string, password: string) =>
    createUserWithEmailAndPassword(auth, email, password);
  const logout = () => signOut(auth);

  useEffect(() => {
    const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log({ currentUser });
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubuscribe();
  }, []);

  return (
    <authContext.Provider
      value={{
        signUp,
        login,
        logout,
        user,
        loading,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
