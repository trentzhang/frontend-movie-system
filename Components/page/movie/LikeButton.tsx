"use client";
import { auth } from "@/Components/shared/auth/Firebase";
import { Button } from "@nextui-org/react";
import { useParams, usePathname, useRouter } from "next/navigation";

import { useContext, useEffect, useState } from "react";
import { IoHeartDislikeOutline } from "react-icons/io5";
import { IoMdHeartDislike, IoMdHeartEmpty } from "react-icons/io";
import { User } from "firebase/auth";
import {
  likeContext,
  likedNumContext,
  liked_usersContext,
  userContext,
} from "@/context/movie-detail-context";
import { revalidatePath, revalidateTag } from "next/cache";
import { updateLike } from "@/app/movie/[id]/actions";
import { getData } from "@/lib/dataFetchers";
// import { useRouter as useRouterClient } from "next/router";
export function LikeButton() {
  const params = useParams();
  const path = usePathname();
  const id = params.id;
  const router = useRouter();
  //   const routerClient = useRouterClient();

  const { Like, setLike } = useContext(likeContext);
  const { user, setUser } = useContext(userContext);
  const { likedNum, setLikedNum } = useContext(likedNumContext);
  const { liked_users, setLiked_users } = useContext(liked_usersContext);

  //   const [Like, setLike] = useState(false);
  //   const [user, setUser] = useState<User | null>(null);

  //   auth.onAuthStateChanged((user) => {
  //     setUser(user);
  //   });

  // Initialize like status
  useEffect(() => {
    async function currentUserLikeThisMovie(
      email: string,
      movie_Id: string | string[]
    ) {
      try {
        const data = await getData(`/api/${email}/${movie_Id}`);

        return data ? true : false;
      } catch (error) {
        console.error("Error fetching like status:", error);
        return false;
      }
    }

    if (user?.email) {
      currentUserLikeThisMovie(user.email, id).then((result) => {
        setLike(result);
      });
    }
  }, [setLike, user, id]);

  // handle like button
  async function handleLike() {
    if (!user) {
      router.push("/login");
      return false;
    }
    setLike(!Like);
    setLikedNum(Like ? likedNum - 1 : likedNum + 1);

    setLiked_users(
      // @ts-ignore
      Like
        ? liked_users.filter((this_user) => this_user.email !== user.email)
        : [...liked_users, user]
    );

    const email = user.email;
    const requestMethod = Like ? "DELETE" : "PUT";

    // update cache for movie page
    if (email && id) await updateLike(requestMethod, email, id);
  }

  // set liked to false when user logged out
  useEffect(() => {
    if (!user) {
      setLike(false);
    }
  }, [user, setLike]);

  return (
    <Button
      color="danger"
      aria-label="Like"
      onClick={handleLike}
      className="w-[110px]"
    >
      {Like ? (
        <>
          <IoMdHeartDislike />
          Un-Like
        </>
      ) : (
        <>
          <IoMdHeartEmpty />
          Like
        </>
      )}
    </Button>
  );
}
