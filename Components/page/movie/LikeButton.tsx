"use client";
import { auth } from "@/Components/shared/auth/Firebase";
import { Button } from "@nextui-org/react";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { IoHeartDislikeOutline } from "react-icons/io5";
import { IoMdHeartDislike, IoMdHeartEmpty } from "react-icons/io";

export function LikeButton() {
  const params = useParams();
  const id = params.id;
  const currentUser = auth.currentUser;
  const router = useRouter();

  const [Like, setLike] = useState(false);

  async function handleLike() {
    if (!currentUser) {
      router.push("/login");
      return false;
    }
    setLike(!Like);
    const email = currentUser.email;
    const requestMethod = Like ? "DELETE" : "PUT";
    // Send API to update database when like button is clicked

    try {
      const request = {
        method: requestMethod,
        headers: {
          "Content-type": "application/json",
        },
      };

      await fetch(
        `${process.env.backendUrl}/liked/${Like}/${email}/${id}`,
        request
      );
      console.log("email", email);
      console.log("id", id);
      console.log("params", params);
    } catch (error) {
      console.log(error);
      alert("Oops! Like Operation API Wrong, Please Try Again!");
    }
  }
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
