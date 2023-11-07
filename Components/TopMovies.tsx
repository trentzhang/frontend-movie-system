import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import Carousel from "./Carousel";

interface TopMoviesProps {
  movies: Movie[];
}

export default function TopMovies({ movies }: TopMoviesProps) {
  return (
    <section
      className="flex flex-col items-center justify-center w-full h-full  text-white "
      id="topMovies"
    >
      <h1 className="text-2xl font-bold">Top Movies</h1>
      <Carousel>
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </Carousel>
    </section>
  );
}
