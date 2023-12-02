import { User } from "firebase/auth";
import { createContext } from "react";

type likeContextType = {
  Like: boolean;
  setLike: React.Dispatch<React.SetStateAction<boolean>>;
};
type addToListsContextType = {
  addToLists: string[];
  setAddToLists: React.Dispatch<React.SetStateAction<string[]>>;
};
type userContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

export const likeContext = createContext<likeContextType>(
  {} as likeContextType
);
export const addToListsContext = createContext<addToListsContextType>(
  {} as addToListsContextType
);
export const userContext = createContext<userContextType>(
  {} as userContextType
);
