import MoviesGroup from "@/Components/shared/MoviesGroup";
import {
  searchLanguageContext,
  searchTextContext,
  searchTypeContext,
} from "@/context/search-context";
import { getData } from "@/lib/dataFetchers";
import { useContext } from "react";
type SearchResultsProps = {
  movies: Movie[];
};
export default function SearchResult({ movies }: SearchResultsProps) {
  return (
    <div>
      <MoviesGroup movies={movies} />
    </div>
  );
}
