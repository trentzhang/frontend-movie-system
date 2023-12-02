"use client";
import { auth } from "@/Components/shared/auth/Firebase";
import { Button } from "@nextui-org/react";
import { useParams, useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { IoHeartDislikeOutline } from "react-icons/io5";
import { IoMdHeartDislike, IoMdHeartEmpty } from "react-icons/io";
import { User } from "firebase/auth";
import { likeContext, userContext } from "@/context/movie-detail-context";

export function LikeButton() {
  const params = useParams();
  const id = params.id;
  const router = useRouter();

  const { Like, setLike } = useContext(likeContext);
  const { user, setUser } = useContext(userContext);

  async function handleLike() {
    if (!user) {
      router.push("/login");
      return false;
    }
    setLike(!Like);

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
