import MovieDetailCard from "@/Components/page/movie/MovieDetail";
import { getData } from "@/lib/dataFetchers";

async function MoviePage({ params }: { params: { id: string } }) {
  const movieData: MovieAPI = await getData(
    `${process.env.backendUrl}/movies/${params.id}`
  );

  return <MovieDetailCard data={movieData}></MovieDetailCard>;
}

export default MoviePage;
