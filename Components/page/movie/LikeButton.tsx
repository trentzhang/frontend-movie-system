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
import { updateCache } from "@/app/movie/[id]/actions";
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
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/liked/movies/${email}/${movie_Id}`
        );
        const data = (await response.json()).data;

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
      Like
        ? // @ts-ignore
          liked_users.filter((this_user) => this_user.email !== user.email)
        : [...liked_users, user]
    );

    const email = user.email;
    const requestMethod = Like ? "DELETE" : "PUT";

    // Send API to update database when like button is clicked
    try {
      const request = {
        method: requestMethod,
        headers: {
          "Content-type": "application/json",
        },
      };

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/liked/movies/${email}/${id}`,
        request
      );
      if (!res.ok) {
        throw new Error("Oops! Like Operation API Wrong, Please Try Again!");
      }
    } catch (error) {
      console.log(error);
      alert("Oops! Like Operation API Wrong, Please Try Again!");
    }
    // update cache for movie page
    await updateCache();
  }

  // set liked to false when user logged out
  useEffect(() => {
    if (!user) {
      setLike(false);
    }
  }, [user, setLike]);
  return (
    <Button color="danger" aria-label="Like" onClick={handleLike}>
      {/* <HeartIcon /> */}
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
