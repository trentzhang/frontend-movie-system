import ListDetailCard from "@/Components/page/list/ListDetail";
import { getData } from "@/lib/dataFetchers";

async function ListPage({ params }: { params: { id: string } }) {
  const listData: ListAPI = await getData(
    `${process.env.BACKEND_URL}/lists/id/${params.id}`
  );
  return <ListDetailCard data={listData}></ListDetailCard>;
}

export default ListPage;
