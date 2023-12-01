import { auth } from "@/Components/shared/Firebase";
import { Button, Divider, Input, Textarea } from "@nextui-org/react";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function WriteComment() {
  const movie_Id = useParams();
  const [comment, setComment] = useState("");

  const uploadComment = async () => {
    try {
      if (auth.currentUser == null) {
        alert("Please login first!");
        return;
      }

      const request = {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          comment: comment,
          email: auth.currentUser.email,
        }),
      };

      await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/movie/comment/${movie_Id}`,
        request
      );

      //   window.location.reload(false);
    } catch (error) {
      alert("Upload Comment Failed!" + error);
    }
  };

  return (
    <div className="dark flex flex-col gap-2">
      <Textarea
        placeholder="Write a comment"
        classNames={{ inputWrapper: ["bg-black/90"] }}
        onValueChange={(value) => setComment(value)}
      />

      <Button onClick={() => uploadComment()}>Submit</Button>
    </div>
  );
}
