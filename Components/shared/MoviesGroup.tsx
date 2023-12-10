"use client";
import { ScrollShadow } from "@nextui-org/react";
import { MovieCard } from "../page/home/MovieCard";
import { AnimatePresence, motion } from "framer-motion";

export default function MoviesGroup({ movies }: { movies: Movie[] }) {
  // movies: MovieAPI[]
  return (
    <div className="flex justify-center items-center w-full">
      {/* <ScrollShadow
        className=" grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3 justify-center items-center w-fit h-[500px]"
        hideScrollBar
      > */}

      <motion.div
        className=" grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 justify-center items-center w-fit"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        key={movies[0]?.id}
      >
        {movies.map((movie, index) => (
          <MovieCard movie={movie} key={index}></MovieCard>
        ))}
      </motion.div>

      {/* </ScrollShadow> */}
    </div>
  );
}
