import MoviesGroup from "@/Components/shared/MoviesGroup";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
type LikedMoviesProps = {
  movies: Movie[];
};
export default function LikedMovies({ movies }: LikedMoviesProps) {
  return (
    <Card>
      <CardHeader>Liked Movies</CardHeader>
      <CardBody className="flex flex-wrap">
        <MoviesGroup movies={movies} />
      </CardBody>
    </Card>
  );
}
