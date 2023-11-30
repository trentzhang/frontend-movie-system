import ListsGroup from "@/Components/shared/ListsGroup";
import { Card, CardBody, CardHeader } from "@nextui-org/react";

type OwnedListProps = {
  lists: typeof lists;
};
export default function OwnedList({ lists }: OwnedListProps) {
  return (
    <Card>
      <CardHeader>Owned Lists</CardHeader>
      <CardBody className="flex flex-wrap">
        <ListsGroup lists={lists} />
      </CardBody>
    </Card>
  );
}
