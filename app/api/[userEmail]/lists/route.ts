import { getData } from "@/lib/dataFetchers";

export async function GET(
  request: Request,
  { params }: { params: { userEmail: string } }
) {
  const data = await getData(
    `${process.env.BACKEND_URL}/lists/email/${params.userEmail}`
  );

  return Response.json({ data });
}
