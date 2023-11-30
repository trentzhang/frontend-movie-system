"use client";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { MovieCard } from "./MovieCard";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";
import MoviesGroup from "@/Components/shared/MoviesGroup";

interface TopMoviesProps {
  movies: Movie[];
}

export default function TopMovies({ movies }: TopMoviesProps) {
  const { ref } = useSectionInView("topMovies");
  return (
    <motion.section
      ref={ref}
      className="flex flex-col items-center justify-center w-full h-full  text-white scroll-mt-28 "
      id="topMovies"
    >
      <SectionTitle>Top Movies</SectionTitle>
      <MoviesGroup movies={movies} />
    </motion.section>
  );
}
