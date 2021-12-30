// import { Auth, getAuth } from "firebase/auth";
import { getAuth } from "firebase/auth";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

type UserContextProps = {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
};

type User = {
  uid?: string | null;
  email?: string | null;
  createdAt?: string | null;
  lastSignIn?: string | null;
};

export const UserContext = createContext({} as UserContextProps);

export const UserProvider: React.FC = ({ children }) => {
  const storedUser = localStorage.getItem("auth");
  const auth = getAuth();

  console.log(98219, { storedUser, auth });

  const parsedUser = JSON.parse(storedUser || "{}");

  const [user, setUser] = useState(parsedUser as User);

  useEffect(() => {
    console.log(982101, "usercontext", user);
    localStorage.setItem("auth", JSON.stringify(user));
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
