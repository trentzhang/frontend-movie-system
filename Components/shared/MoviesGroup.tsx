import { MovieCard } from "../page/home/MovieCard";

export default function MoviesGroup({ movies }: { movies: Movie[] }) {
  // movies: MovieAPI[]
  return (
    <div className="w-full h-full flex gap-3 flex-wrap justify-center">
      {movies.map((movie, index) => (
        <MovieCard movie={movie} key={index}></MovieCard>
      ))}
    </div>
  );
}
