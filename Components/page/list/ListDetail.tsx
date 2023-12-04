import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@nextui-org/react";
import { MovieCard } from "../home/MovieCard";
import MoviesGroup from "@/Components/shared/MoviesGroup";
import Link from "next/link";

// ListDetailCard
export default function ListDetail({ data }: { data: ListAPI }) {
  const list = data.data;
  return (
    <Card className="mt-24 dark max-w-[800px]">
      <CardHeader className="flex justify-between flex-wrap">
        <span>{list.name}</span>
        <span>Liked Number: {list.liked_num}</span>
      </CardHeader>
      <Divider />
      <CardBody>
        {list.description}
        <MoviesGroup movies={list.movies}></MoviesGroup>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link href={`/user/${list.creator}`}>Created by: {list.creator}</Link>
      </CardFooter>
    </Card>
  );
}
