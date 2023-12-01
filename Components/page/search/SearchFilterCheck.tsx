import {
  searchLanguageContext,
  searchTypeContext,
} from "@/context/search-context";
import { Select, SelectItem } from "@nextui-org/react";
import React, { useContext, useState } from "react";

const movieLanguages = [
  "English",
  "Spanish",
  "French",
  "Chinese",
  "Japanese",
  "Korean",
];
const movieTypes = [
  "Documentary",
  "Comedy",
  "Drama",
  "Fantasy",
  "Thriller",
  "Action",
  "Romance",
  "Sci_Fi",
];

type MySelectProps = {
  label: string;
  items: string[];
  //   Context: React.Context<any>;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

function MySelect({ label, items, setValue }: MySelectProps) {
  return (
    <Select
      label={"Select a " + label}
      className="max-w-xs "
      classNames={{
        trigger: ["shadow-xl", "backdrop-blur-xl", "backdrop-saturate-200"],
        listbox: ["text-black/90"],
        selectorIcon: ["text-black/50"],
      }}
      onSelectionChange={(valuesSet) => {
        setValue(Array.from(valuesSet).join(", "));
      }}
    >
      {items.map((item) => (
        <SelectItem key={item} value={item}>
          {item}
        </SelectItem>
      ))}
    </Select>
  );
}

export default function SearchFilterCheck() {
  const { setSearchLanguage } = useContext(searchLanguageContext);
  const { setSearchType } = useContext(searchTypeContext);
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4 ">
      <MySelect
        label="language"
        items={movieLanguages}
        setValue={setSearchLanguage}
      />
      <MySelect label="type" items={movieTypes} setValue={setSearchType} />
    </div>
  );
}
