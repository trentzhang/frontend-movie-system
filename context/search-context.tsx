import { createContext, useContext, useState } from "react";
type SearchContext = {
  searchLanguage: string;
  setSearchLanguage: React.Dispatch<React.SetStateAction<string>>;
  searchMovieType: string;
  setSearchMovieType: React.Dispatch<React.SetStateAction<string>>;
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
};

export const searchContext = createContext<SearchContext>({
  searchLanguage: "",
  setSearchLanguage: () => {},
  searchMovieType: "",
  setSearchMovieType: () => {},
  searchText: "",
  setSearchText: () => {},
} as SearchContext);

export default function SearchContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [searchText, setSearchText] = useState("");
  const [searchLanguage, setSearchLanguage] = useState("");
  const [searchMovieType, setSearchMovieType] = useState("");
  return (
    <searchContext.Provider
      value={{
        searchLanguage,
        setSearchLanguage,
        searchMovieType,
        setSearchMovieType,
        searchText,
        setSearchText,
      }}
    >
      {children}
    </searchContext.Provider>
  );
}

export function useSearchContext() {
  const context = useContext(searchContext);

  if (context === null) {
    throw new Error(
      "useSearchContext must be used within an SearchContextProvider"
    );
  }

  return context;
}

// type searchLanguageContextType = {
//   searchLanguage: string;
//   setSearchLanguage: React.Dispatch<React.SetStateAction<string>>;
// };

// export const searchLanguageContext = createContext<searchLanguageContextType>(
//   {} as searchLanguageContextType
// );

// type searchMovieTypeContextType = {
//   searchMovieType: string;
//   setSearchMovieType: React.Dispatch<React.SetStateAction<string>>;
// };

// export const searchTypeContext = createContext<searchMovieTypeContextType>(
//   {} as searchMovieTypeContextType
// );

// type searchTextType = {
//   searchText: string;
//   setSearchText: React.Dispatch<React.SetStateAction<string>>;
// };

// export const searchTextContext = createContext<searchTextType>(
//   {} as searchTextType
// );

// export default function SearchPageContextProvider({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [searchText, setSearchText] = useState("");
//   const [searchLanguage, setSearchLanguage] = useState("");
//   const [searchMovieType, setSearchMovieType] = useState("");
//   return (
//     <searchLanguageContext.Provider
//       value={{ searchLanguage, setSearchLanguage }}
//     >
//       <searchTypeContext.Provider
//         value={{ searchMovieType, setSearchMovieType }}
//       >
//         <searchTextContext.Provider value={{ searchText, setSearchText }}>
//           {children}
//         </searchTextContext.Provider>
//       </searchTypeContext.Provider>
//     </searchLanguageContext.Provider>
//   );
// }
