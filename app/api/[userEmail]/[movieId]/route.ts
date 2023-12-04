// current user liked movie or not api
import { getData } from "@/lib/dataFetchers";

export async function GET(
  request: Request,
  { params }: { params: { userEmail: string; movieId: string } }
) {
  const data = await getData(
    `${process.env.BACKEND_URL}/liked/movies/${params.userEmail}/${params.movieId}`
  );

  return Response.json({ data: data.data });
}
