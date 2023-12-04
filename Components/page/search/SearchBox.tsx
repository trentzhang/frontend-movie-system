"use client";
import SearchFilterCheck from "@/Components/page/search/SearchFilterCheck";
import SearchInput from "@/Components/page/search/SearchInput";
import SearchResult from "@/Components/page/search/SearchResult";
import {
  searchLanguageContext,
  searchTextContext,
  searchTypeContext,
} from "@/context/search-context";
import { getData } from "@/lib/dataFetchers";
import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { Button, Pagination } from "@nextui-org/react";

// encapsulate the search Box

export function SearchBox() {
  const [searchText, setSearchText] = useState("");
  const [searchLanguage, setSearchLanguage] = useState("");
  const [searchMovieType, setSearchMovieType] = useState("");
  const [searchResultPage, setSearchResultPage] = useState(0);
  const [searchResults, setSearchResults] = useState([]);

  const fetchData = useCallback(async () => {
    try {
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
      const data = await getData(`/search_movie/api`, request);

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
  }, [searchResultPage, fetchData]);
  return (
    <searchLanguageContext.Provider
      value={{ searchLanguage, setSearchLanguage }}
    >
      <searchTypeContext.Provider
        value={{ searchMovieType, setSearchMovieType }}
      >
        <searchTextContext.Provider value={{ searchText, setSearchText }}>
          <motion.div className="w-fit min-w-[50vw] min-h-[20vh]  m-24 p-4 rounded-2xl flex flex-col gap-3  items-center bg-slate-600/30 text-white shadow-lg">
            <motion.div className="flex w-full items-center justify-center gap-3">
              <SearchInput />
              {/* <Button
                onClick={() => {
                  fetchData();
                }}
              >
                Search
              </Button> */}
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
