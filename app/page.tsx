import Image from "next/image";
import { motion } from "framer-motion";
import TopMovies from "@/Components/page/home/TopMovies";
import RandomMovies from "@/Components/page/home/RandomMovies";
import TopLists from "@/Components/page/home/TopLists";

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

  return (
    <main className="">
      <TopMovies movies={moviesSortedByRating} />
      <RandomMovies movies={moviesRandom} />
      <TopLists lists={lists} />
      {/* <Footer /> */}
    </main>
  );
}
