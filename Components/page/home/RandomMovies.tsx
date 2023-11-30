"use client";
import { MovieCard } from "./MovieCard";
import { useActiveSectionContext } from "@/context/active-section-context";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { useSectionInView } from "@/lib/hooks";
import MoviesGroup from "@/Components/shared/MoviesGroup";

interface TopMoviesProps {
  movies: Movie[];
}

export default function TopMovies({ movies }: TopMoviesProps) {
  const { ref } = useSectionInView("randomMovies");
  return (
    <motion.section
      className="flex flex-col items-center justify-center w-full h-full  text-white scroll-mt-28"
      id="randomMovies"
      ref={ref}
    >
      <SectionTitle>Random Movies</SectionTitle>
      <MoviesGroup movies={movies} />
    </motion.section>
  );
}
