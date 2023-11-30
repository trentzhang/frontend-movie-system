import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@nextui-org/react";
import Link from "next/link";

type CommentProps = {
  data: (typeof movieAPI.data.comments)[0];
};
export default function Comment({ data }: CommentProps) {
  return (
    <Card className="dark w-full sm:w-[49%]">
      <CardHeader className="flex justify-between gap-3">
        <span>{data.username}</span>
        <Link href={`/user/${data.user_email}`}>
          <span>{data.user_email}</span>
        </Link>
      </CardHeader>
      <Divider />
      <CardBody>{data.comment}</CardBody>
      <Divider />
      <CardFooter>{data.created_time}</CardFooter>
    </Card>
  );
}
