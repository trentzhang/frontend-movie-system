import MoviesGroup from "@/Components/shared/MoviesGroup";
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
