import { auth } from "@/Components/shared/Firebase";
import MovieDetailCard from "@/Components/page/movie/MovieDetailCard";
import { getData } from "@/lib/dataFetchers";
import Image from "next/image";

async function MoviePage({ params }: { params: { id: string } }) {
  const movieData: MovieAPI = await getData(
    `${process.env.backendUrl}/movies/${params.id}`
  );

  return <MovieDetailCard data={movieData}></MovieDetailCard>;
}

export default MoviePage;
