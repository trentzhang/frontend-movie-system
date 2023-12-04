import { ScrollShadow } from "@nextui-org/react";
import { MovieCard } from "../page/home/MovieCard";

export default function MoviesGroup({ movies }: { movies: Movie[] }) {
  // movies: MovieAPI[]
  return (
    <div className="flex justify-center items-center w-full">
      <ScrollShadow
        className=" grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3 justify-center items-center w-fit h-[500px]"
        hideScrollBar
      >
        {movies.map((movie, index) => (
          <MovieCard movie={movie} key={index}></MovieCard>
        ))}
      </ScrollShadow>
    </div>
  );
}
