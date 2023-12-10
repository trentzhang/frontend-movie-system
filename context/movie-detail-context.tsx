import { auth } from "@/Components/shared/auth/Firebase";
import { getData } from "@/lib/dataFetchers";
import { User } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";

type MovieDetailContext = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  Like: boolean;
  setLike: React.Dispatch<React.SetStateAction<boolean>>;
  addToLists: typeof lists;
  setAddToLists: React.Dispatch<React.SetStateAction<typeof lists>>;
  likedNum: number;
  setLikedNum: React.Dispatch<React.SetStateAction<number>>;
  liked_users: typeof movieAPI.data.liked_users;
  setLiked_users: React.Dispatch<
    React.SetStateAction<typeof movieAPI.data.liked_users>
  >;
};

export const MovieDetailContext = createContext<MovieDetailContext>(
  {} as MovieDetailContext
);

export default function MovieDetailContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [Like, setLike] = useState(false);
  const [addToLists, setAddToLists] = useState([] as typeof lists);
  const [likedNum, setLikedNum] = useState(0);
  const [liked_users, setLiked_users] = useState(
    [] as typeof movieAPI.data.liked_users
  );

  return (
    <MovieDetailContext.Provider
      value={{
        user,
        setUser,
        Like,
        setLike,
        addToLists,
        setAddToLists,
        likedNum,
        setLikedNum,
        liked_users,
        setLiked_users,
      }}
    >
      {children}
    </MovieDetailContext.Provider>
  );
}

export function useMovieDetailContext() {
  const context = useContext(MovieDetailContext);

  if (context === null) {
    throw new Error(
      "useMovieDetailContext must be used within an MovieDetailContextProvider"
    );
  }

  return context;
}
// type likeContextType = {
//   Like: boolean;
//   setLike: React.Dispatch<React.SetStateAction<boolean>>;
// };

// type addToListsContextType = {
//   addToLists: typeof lists;
//   setAddToLists: React.Dispatch<React.SetStateAction<typeof lists>>;
// };
// type userContextType = {
//   user: User | null;
//   setUser: React.Dispatch<React.SetStateAction<User | null>>;
// };

// type likedNumContextType = {
//   likedNum: number;
//   setLikedNum: React.Dispatch<React.SetStateAction<number>>;
// };

// type liked_usersContextType = {
//   liked_users: typeof movieAPI.data.liked_users;
//   setLiked_users: React.Dispatch<
//     React.SetStateAction<typeof movieAPI.data.liked_users>
//   >;
// };

// export const likeContext = createContext<likeContextType>(
//   {} as likeContextType
// );
// export const addToListsContext = createContext<addToListsContextType>(
//   {} as addToListsContextType
// );
// export const userContext = createContext<userContextType>(
//   {} as userContextType
// );
// export const likedNumContext = createContext<likedNumContextType>(
//   {} as likedNumContextType
// );
// export const liked_usersContext = createContext<liked_usersContextType>(
//   {} as liked_usersContextType
// );
