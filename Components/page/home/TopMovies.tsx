"use client";
import { MovieCard } from "./MovieCard";
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SectionTitle from "./SectionTitle";

interface TopMoviesProps {
  movies: Movie[];
}

export default function TopMovies({ movies }: TopMoviesProps) {
  return (
    <section
      className="flex flex-col items-center justify-center w-full h-full  text-white scroll-mt-28 "
      id="topMovies"
    >
      <SectionTitle>Top Movies</SectionTitle>
      <div className="w-full h-full flex gap-3 flex-wrap justify-center">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </section>
  );
}
