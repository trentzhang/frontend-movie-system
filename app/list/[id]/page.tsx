import ListDetailCard from "@/Components/page/list/ListDetail";
import { getData } from "@/lib/dataFetchers";
import { Card } from "@nextui-org/react";

async function ListPage({ params }: { params: { id: string } }) {
  const listData: ListAPI = await getData(
    `${process.env.backendUrl}/lists/id/${params.id}`
  );
  return <ListDetailCard data={listData}></ListDetailCard>;
}

export default ListPage;
