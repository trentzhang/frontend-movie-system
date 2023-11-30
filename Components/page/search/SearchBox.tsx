"use client";
import { Input, NextUIProvider } from "@nextui-org/react";
import { FaSearch } from "react-icons/fa";
export default function SearchBox() {
  return (
    <div>
      <div className="w-[70vw] max-w-[700px] h-[240px] px-8 rounded-2xl flex justify-center items-center bg-gradient-to-tr from-slate-700 to-stone-800 text-white shadow-lg">
        <Input
          label="Search"
          isClearable={true}
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
              "bg-default-200/50",
              "dark:bg-default/60",
              "backdrop-blur-xl",
              "backdrop-saturate-200",
              "hover:bg-default-200/70",
              "dark:hover:bg-default/70",
              "group-data-[focused=true]:bg-default-200/50",
              "dark:group-data-[focused=true]:bg-default/60",
              "!cursor-text",
            ],
            clearButton: ["text-black/50"],
          }}
          placeholder="Type to search..."
          startContent={
            <FaSearch className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
          }
        />
      </div>
    </div>
  );
}
