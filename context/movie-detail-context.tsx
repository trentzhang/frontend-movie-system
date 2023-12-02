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

type likedNumContextType = {
  likedNum: number;
  setLikedNum: React.Dispatch<React.SetStateAction<number>>;
};

type liked_usersContextType = {
  liked_users: (typeof movieAPI.data.liked_users | User)[];
  setLiked_users: React.Dispatch<
    React.SetStateAction<(typeof movieAPI.data.liked_users | User)[]>
  >;
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
export const likedNumContext = createContext<likedNumContextType>(
  {} as likedNumContextType
);
export const liked_usersContext = createContext<liked_usersContextType>(
  {} as liked_usersContextType
);
