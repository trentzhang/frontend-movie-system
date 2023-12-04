import Image from "next/image";
import { motion } from "framer-motion";
import TopMovies from "@/Components/page/home/TopMovies";
import RandomMovies from "@/Components/page/home/RandomMovies";
import TopLists from "@/Components/page/home/TopLists";
import { getData } from "@/lib/dataFetchers";

// async function getData() {
//   const res = await fetch(`${process.env.BACKEND_URL}/homepage/`);
//   //   const res = await fetch("https://api.example.com/...");

//   if (!res.ok) {x
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

export default async function Home() {
  const data = await getData(`${process.env.BACKEND_URL}/homepage/`, {
    cache: "no-store",
  });
  const { moviesRandom, moviesSortedByRating, lists } = data.data;

  return (
    <div className="flex flex-col items-center justify-center  my-24">
      <TopMovies movies={moviesSortedByRating} />
      <RandomMovies movies={moviesRandom} />
      <TopLists lists={lists} />
      {/* <Footer /> */}
    </div>
  );
}
