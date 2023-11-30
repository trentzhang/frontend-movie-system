import { coverURL } from "@/lib/utils";
import Image from "next/image";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import Link from "next/link";

type ListsGroupProps = {
  lists: typeof lists;
};
export default function ListsGroup({ lists }: ListsGroupProps) {
  return (
    <Table
      aria-label="Example empty table"
      className={" dark "}
      classNames={{ wrapper: ["px-0"] }}
    >
      <TableHeader>
        <TableColumn>Name</TableColumn>
        <TableColumn>Description</TableColumn>
        <TableColumn>Creator</TableColumn>
        <TableColumn>Liked Number</TableColumn>
      </TableHeader>
      <TableBody emptyContent={"No lists to display."}>
        {lists.map((list, index) => (
          // list card
          <TableRow key={index}>
            <TableCell>
              <Link href={`/list/${list.id}`}>{list.name}</Link>
            </TableCell>
            <TableCell>{list.description}</TableCell>
            <TableCell>{list.creator}</TableCell>
            <TableCell>{list.liked_num}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
