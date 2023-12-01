import { createContext } from "react";

type searchLanguageContextType = {
  searchLanguage: string;
  setSearchLanguage: React.Dispatch<React.SetStateAction<string>>;
};

export const searchLanguageContext = createContext<searchLanguageContextType>(
  {} as searchLanguageContextType
);

type searchTypeContextType = {
  searchType: string;
  setSearchType: React.Dispatch<React.SetStateAction<string>>;
};

export const searchTypeContext = createContext<searchTypeContextType>(
  {} as searchTypeContextType
);

type searchTextType = {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
};

export const searchTextContext = createContext<searchTextType>(
  {} as searchTextType
);
