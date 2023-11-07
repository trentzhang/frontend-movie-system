import Image from "next/image";
import { motion } from "framer-motion";
import TopMovies from "@/Components/TopMovies";
import useSWR from "swr";

async function getData() {
  const res = await fetch(`${process.env.backendUrl}/homepage/`);
  //   const res = await fetch("https://api.example.com/...");

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();
  const { moviesRandom, moviesSortedByRating, lists } = data.data;
  //   console.log("moviesSortedByRating", moviesSortedByRating);
  return (
    <main className="min-h-screen pt-24  flex  flex-col items-center justify-between bg-black ">
      <TopMovies movies={moviesSortedByRating} />
      {/* <RandomMovies /> */}
      {/* <TopLists /> */}
      {/* <Footer /> */}
    </main>
  );
}
