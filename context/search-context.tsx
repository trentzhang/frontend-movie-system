import { createContext } from "react";

type searchLanguageContextType = {
  searchLanguage: string;
  setSearchLanguage: React.Dispatch<React.SetStateAction<string>>;
};

export const searchLanguageContext = createContext<searchLanguageContextType>(
  {} as searchLanguageContextType
);

type searchMovieTypeContextType = {
  searchMovieType: string;
  setSearchMovieType: React.Dispatch<React.SetStateAction<string>>;
};

export const searchTypeContext = createContext<searchMovieTypeContextType>(
  {} as searchMovieTypeContextType
);

type searchTextType = {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
};

export const searchTextContext = createContext<searchTextType>(
  {} as searchTextType
);
