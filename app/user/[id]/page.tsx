import UserDetail from "@/Components/page/user/UserDetail";
import { getData } from "@/lib/dataFetchers";

export default async function Page({ params }: { params: { id: string } }) {
  const data = await getData(
    `${process.env.BACKEND_URL}/user/full/${params.id}`,
    { cache: "no-cache" }
  );
  return (
    <div className="my-24 max-w-md sm:max-w-none">
      <UserDetail data={data} />
    </div>
  );
}
