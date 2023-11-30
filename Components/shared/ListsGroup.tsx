import { coverURL } from "@/lib/utils";
import Image from "next/image";

export default function ListsGroup({ lists }: { lists: Movie[] }) {
  return (
    <div className="w-full h-full flex gap-3 flex-wrap justify-center">
      {lists.map((lists, index) => (
        //   <MovieCard key={index} movie={movie} />
        // list card
        <div
          className="relative group overflow-hidden rounded-xl w-40 h-60"
          key={index}
        >
          {/* cover image  */}
          <Image
            alt="movies.id"
            className="object-cover scale-[1.15] group-hover:scale-[1.2] transition duration-500 ease-in-out z-0"
            src={coverURL(lists.cover)}
            fill
            sizes="95"
            // placeholder="blur"
          />

          {/* hover details */}
          <div className=" flex items-center justify-center absolute top-0 h-full w-full text-sm backdrop-blur-sm  bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out text-white font-medium p-5">
            {/* <Link href={`/movie/${movie.id}`}> */}
            <h1 className="">{lists.title}</h1>
            {/* </Link> */}
          </div>
        </div>
      ))}
    </div>
  );
}
