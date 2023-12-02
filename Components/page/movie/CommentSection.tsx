"use client";
import { Divider } from "@nextui-org/react";
import Comment from "./Comment";
import WriteComment from "./WriteComment";

type CommentSectionProps = {
  data: typeof movieAPI.data.comments;
};
export default function CommentSection({ data }: CommentSectionProps) {
  return (
    <div className="flex flex-col gap-3">
      <WriteComment />
      <Divider />
      <div className="flex flex-wrap justify-between gap-3">
        {data.map((comment, index) => (
          <Comment data={comment} key={index}></Comment>
        ))}
      </div>
    </div>
  );
}
