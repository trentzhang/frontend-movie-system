"use client";
import { Input } from "@nextui-org/react";
import { FaSearch } from "react-icons/fa";
import { NextUIProvider } from "@nextui-org/react";
import SearchBox from "@/Components/page/search/SearchBox";
import SearchFilterCheck from "@/Components/page/search/SearchFilterCheck";
import SearchResult from "@/Components/page/search/SearchResult";

export default function Search() {
  return (
    <NextUIProvider>
      <SearchBox />
      <SearchFilterCheck />
      <SearchResult />
    </NextUIProvider>
  );
}
