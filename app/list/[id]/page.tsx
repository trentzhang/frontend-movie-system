import ListDetailCard from "@/Components/page/list/ListDetail";
import {
  searchLanguageContext,
  searchTextContext,
  searchTypeContext,
} from "@/context/search-context";
import { getData } from "@/lib/dataFetchers";
import { Card } from "@nextui-org/react";
import { use, useContext } from "react";

async function ListPage({ params }: { params: { id: string } }) {
  const listData: ListAPI = await getData(
    `${process.env.BACKEND_URL}/lists/id/${params.id}`
  );
  return <ListDetailCard data={listData}></ListDetailCard>;
}

export default ListPage;
