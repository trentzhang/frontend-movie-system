"use client";
import { Button, Input } from "@nextui-org/react";
import { FaSearch } from "react-icons/fa";
import { NextUIProvider } from "@nextui-org/react";
import SearchBox from "@/Components/page/search/SearchBox";
import SearchFilterCheck from "@/Components/page/search/SearchFilterCheck";
import SearchResult from "@/Components/page/search/SearchResult";
import React, { createContext, useCallback, useState } from "react";
import {
  searchLanguageContext,
  searchTypeContext,
  searchTextContext,
} from "@/context/search-context";
import { getData } from "@/lib/dataFetchers";

export default function Search() {
  const [searchText, setSearchText] = useState("");
  const [searchLanguage, setSearchLanguage] = useState("");
  const [searchType, setSearchType] = useState("");
  //   const [page, setPage] = useState(0);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = useCallback(async () => {
    try {
      //   setPage(0);
      const searchCriteria = {
        language: searchLanguage,
        type: searchType,
        keyword: searchText,
        searchType: "Movie",
        page: 0,
      };
      console.log("searchCriteria", searchCriteria);
      const request = {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(searchCriteria),
      };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/search_movie`,
        request
      );
      const data = await response.json();

      if (!data.data) {
        setSearchResults([]);
      } else {
        setSearchResults(data.data);
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  }, [searchText, searchLanguage, searchType]);

  return (
    <searchLanguageContext.Provider
      value={{ searchLanguage, setSearchLanguage }}
    >
      <searchTypeContext.Provider value={{ searchType, setSearchType }}>
        <searchTextContext.Provider value={{ searchText, setSearchText }}>
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="w-[70vw] max-w-[700px] h-[240px] px-8 rounded-2xl flex flex-col gap-3 justify-center items-center bg-gradient-to-tr from-slate-700 to-gray-700 text-white shadow-lg">
              <div className="flex w-full items-center justify-center gap-3">
                <SearchBox />
                <Button onClick={handleSearch}>Search</Button>
              </div>
              <SearchFilterCheck />

              {searchText}
              {searchLanguage}
              {searchType}
            </div>
            <SearchResult movies={searchResults} />
          </div>
        </searchTextContext.Provider>
      </searchTypeContext.Provider>
    </searchLanguageContext.Provider>
  );
}
