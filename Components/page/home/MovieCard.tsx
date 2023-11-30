import { coverURL } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className="relative group overflow-hidden rounded-xl w-40 h-60">
      {/* cover image  */}
      <Image
        alt="movies.id"
        className="object-cover scale-[1.15] group-hover:scale-[1.2] transition duration-500 ease-in-out z-0"
        src={coverURL(movie.cover)}
        fill
        sizes="95"
        // placeholder="blur"
      />

      {/* hover details */}
      <div className=" flex items-center justify-center absolute top-0 h-full w-full text-sm backdrop-blur-sm  bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out text-white font-medium p-5">
        <Link href={`/movie/${movie.id}`}>
          <h1 className="">{movie.title}</h1>
        </Link>
      </div>
    </div>
  );
}
