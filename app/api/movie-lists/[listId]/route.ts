import { getData } from "@/lib/dataFetchers";

export async function GET(
  request: Request,
  { params }: { params: { listId: string } }
) {
  const data = await getData(
    `${process.env.BACKEND_URL}/lists/id/${params.listId}`
  );

  return Response.json({ data: data.data });
}
