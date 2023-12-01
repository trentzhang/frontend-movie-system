"use client";
import SearchBox from "@/Components/page/search/SearchBox";
import SearchFilterCheck from "@/Components/page/search/SearchFilterCheck";
import SearchResult from "@/Components/page/search/SearchResult";
import {
  searchLanguageContext,
  searchTextContext,
  searchTypeContext,
} from "@/context/search-context";
import { getData } from "@/lib/dataFetchers";
import { Button, Pagination } from "@nextui-org/react";
import { motion } from "framer-motion";
import { use, useCallback, useEffect, useState } from "react";

export default function Search() {
  const [searchText, setSearchText] = useState("");
  const [searchLanguage, setSearchLanguage] = useState("");
  const [searchMovieType, setSearchMovieType] = useState("");
  const [searchResultPage, setSearchResultPage] = useState(0);
  const [searchResults, setSearchResults] = useState([]);
  console.log("searchResultPage", searchResultPage);
  const fetchData = useCallback(async () => {
    try {
      console.log("first");
      const searchCriteria = {
        language: searchLanguage,
        type: searchMovieType,
        keyword: searchText,
        searchType: "Movie",
        page: searchResultPage,
      };

      const request = {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(searchCriteria),
      };

      // const response = await fetch(
      //   `${process.env.NEXT_PUBLIC_BACKEND_URL}/search_movie`,
      //   request
      // );
      // const data = await response.json();
      const data = await getData(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/search_movie`,
        request
      );

      if (!data.data) {
        setSearchResults([]);
      } else {
        setSearchResults(data.data);
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  }, [searchLanguage, searchMovieType, searchText, searchResultPage]);

  useEffect(() => {
    fetchData();
  }, [
    searchText,
    searchLanguage,
    searchMovieType,
    searchResultPage,
    fetchData,
  ]);

  // Attach the scroll event listener to the window object, reach the bottom of the page, and load more data, page + 1
  //   useEffect(() => {
  //     const handleScroll = () => {
  //       if (
  //         window.innerHeight + document.documentElement.scrollTop ===
  //         document.documentElement.offsetHeight
  //       ) {
  //         setSearchResultPage((searchResultPage) => searchResultPage + 1);
  //       }
  //     };
  //     window.addEventListener("scroll", handleScroll);
  //     return () => window.removeEventListener("scroll", handleScroll);
  //   }, [handleSearch]);

  return (
    <searchLanguageContext.Provider
      value={{ searchLanguage, setSearchLanguage }}
    >
      <searchTypeContext.Provider
        value={{ searchMovieType, setSearchMovieType }}
      >
        <searchTextContext.Provider value={{ searchText, setSearchText }}>
          <motion.div className="min-w-[70vw] min-h-[20vh]  p-8 rounded-2xl flex flex-col gap-3  items-center bg-gradient-to-tr from-slate-700 to-gray-700 text-white shadow-lg">
            <motion.div className="flex w-full items-center justify-center gap-3">
              <SearchBox />
              <Button
                onClick={() => {
                  fetchData();
                }}
              >
                Search
              </Button>
            </motion.div>
            <motion.div className="w-full">
              <SearchFilterCheck />
            </motion.div>
            <SearchResult movies={searchResults} />
            <Pagination
              showControls
              total={10}
              initialPage={1}
              onChange={(page) => setSearchResultPage(page - 1)}
              classNames={{
                wrapper:
                  "gap-0 overflow-visible h-8 rounded border border-divider",
                item: "mx-1 ",
                cursor:
                  "bg-gradient-to-b from-slate-500 to-default-800  shadow-lg  text-white font-bold",
              }}
            />
          </motion.div>
        </searchTextContext.Provider>
      </searchTypeContext.Provider>
    </searchLanguageContext.Provider>
  );
}
