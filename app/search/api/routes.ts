import { getData } from "@/lib/dataFetchers";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const data = await getData(
    `${process.env.BACKEND_URL}/search_movie`,
    request
  );

  return Response.json(data);
}
