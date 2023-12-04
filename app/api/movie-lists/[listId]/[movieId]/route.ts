import { getData } from "@/lib/dataFetchers";

export async function PUT(
  request: Request,
  { params }: { params: { movieId: string; listId: string } }
) {
  const data = await getData(
    `${process.env.BACKEND_URL}/list/movie/${params.listId}/${params.movieId}`,
    { method: "PUT" }
  );

  return Response.json({ data });
}

export async function DELETE(
  request: Request,
  { params }: { params: { movieId: string; listId: string } }
) {
  const data = await getData(
    `${process.env.BACKEND_URL}/list/movie/${params.listId}/${params.movieId}`,
    { method: "DELETE" }
  );

  return Response.json({ data });
}
