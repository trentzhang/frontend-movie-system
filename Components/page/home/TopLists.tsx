"use client";
import Image from "next/image";
import { MovieCard } from "./MovieCard";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import { coverURL } from "@/lib/utils";
import SectionTitle from "./SectionTitle";
import ListsGroup from "@/Components/shared/ListsGroup";

export default function TopLists({ lists }: { lists: List[] }) {
  return (
    <section
      className="flex flex-col items-center justify-center  h-full  text-white scroll-mt-28"
      id="topLists"
    >
      <SectionTitle>Top Lists</SectionTitle>
      <ListsGroup lists={lists} />
    </section>
  );
}
