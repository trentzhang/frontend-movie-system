import UserDetail from "@/Components/page/user/UserDetail";
import { getData } from "@/lib/dataFetchers";

export default async function Page({ params }: { params: { id: string } }) {
  const data = await getData(
    `${process.env.BACKEND_URL}/user/full/${params.id}`
  );
  return <UserDetail data={data} />;
}
