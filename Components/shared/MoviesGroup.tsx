import { MovieCard } from "../page/home/MovieCard";

export default function MoviesGroup({ movies }: { movies: Movie[] }) {
  // movies: MovieAPI[]
  return (
    <div className="flex justify-center items-center">
      <div className="w-full h-full grid grid-cols-5 gap-3  ">
        {movies.map((movie, index) => (
          <MovieCard movie={movie} key={index}></MovieCard>
        ))}
      </div>
    </div>
  );
}
