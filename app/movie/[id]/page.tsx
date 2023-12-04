import MovieDetailCard from "@/Components/page/movie/MovieDetailCard";
import { auth } from "@/Components/shared/auth/Firebase";
import { getData } from "@/lib/dataFetchers";

async function MoviePage({ params }: { params: { id: string } }) {
  const movieData: MovieAPI = await getData(
    `${process.env.BACKEND_URL}/movies/${params.id}`,
    { next: { tags: ["MoviePage"] } }
  );

  return <MovieDetailCard data={movieData}></MovieDetailCard>;
}

export default MoviePage;
