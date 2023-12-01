import { createContext } from "react";

type SearchDataType = [string, React.Dispatch<React.SetStateAction<string>>];

export const searchLanguageContext = createContext<SearchDataType | null>(null);

export const searchTypeContext = createContext<SearchDataType | null>(null);

export const searchTextContext = createContext<SearchDataType | null>(null);
