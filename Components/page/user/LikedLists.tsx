import ListsGroup from "@/Components/shared/ListsGroup";
import { Card, CardBody, CardHeader } from "@nextui-org/react";

type LikedListProps = {
  lists: typeof lists;
};
export default function LikedList({ lists }: LikedListProps) {
  return (
    <Card>
      <CardHeader>Liked Lists</CardHeader>
      <CardBody className="flex flex-wrap">
        <ListsGroup lists={lists} />
      </CardBody>
    </Card>
  );
}
