import { Button, Input, NextUIProvider } from "@nextui-org/react";
import { FaSearch } from "react-icons/fa";
import React, { useContext } from "react";
import { searchTextContext } from "@/context/search-context";

export default function SearchBox() {
  const [searchText, setSearchText] = useContext<any>(searchTextContext);
  return (
    <Input
      onValueChange={setSearchText}
      label="Search"
      isClearable
      radius="lg"
      classNames={{
        label: "text-black/50 dark:text-white/90",
        input: [
          "bg-transparent",
          "text-black/90 dark:text-white/90",
          "placeholder:text-default-700/50 dark:placeholder:text-white/60",
        ],
        innerWrapper: "bg-transparent",
        inputWrapper: [
          "shadow-xl",
          "backdrop-blur-xl",
          "backdrop-saturate-200",
          "hover:bg-default-200/70",
          "dark:hover:bg-default/70",
          "group-data-[focused=true]:bg-default-200/50",
          "dark:group-data-[focused=true]:bg-default/60",
          "!cursor-text",
        ],
        clearButton: ["text-black"],
      }}
      placeholder="Type to search..."
      startContent={
        <FaSearch className="text-black/50 mb-0.5 dark:text-white/90 text-slate-800 pointer-events-none flex-shrink-0" />
      }
    />
  );
}
