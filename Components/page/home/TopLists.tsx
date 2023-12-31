"use client";

import ListsGroup from "@/Components/shared/ListsGroup";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";

export default function TopLists({ lists }: { lists: List[] }) {
  const { ref } = useSectionInView("topLists");
  return (
    <motion.section
      className="flex flex-col items-center justify-center  h-full w-10/12 sm:w-[500px] lg:w-[700px] text-white scroll-mt-28"
      id="topLists"
      ref={ref}
    >
      <SectionTitle>Top Lists</SectionTitle>
      <ListsGroup lists={lists} />
    </motion.section>
  );
}
