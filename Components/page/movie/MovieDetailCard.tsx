"use client";

import Image from "next/image";
import { LikedUsers } from "./LikedUsers";
import ListsGroup from "@/Components/shared/ListsGroup";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h1 className="text-3xl text-white font-bold mt-2">{children}</h1>;
}
export default function MovieDetailCard({ data }: { data: MovieAPI }) {
  const movieData = data.data;
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col  bg-white/20 rounded-2xl w-[70vw] overflow-hidden">
        <div className="flex gap-8 ">
          <div>
            <Image src={movieData.cover} alt="cover" width={250} height={250} />
          </div>
          <div className="my-5">
            <h1 className="text-3xl font-bold mb-5">{movieData.title}</h1>
            <div>
              <b>Type:</b> {movieData.type}
            </div>
            <div>
              <b>Release year:</b> {movieData.release_year}
            </div>
            <div>
              <b>Run Time:</b> {movieData.runtime} min
            </div>
            <div>
              <b>Production:</b> {movieData.production}
            </div>
            <div>
              <b>Language:</b> {movieData.language}
            </div>
            <div>
              <b>Liked Number:</b> {movieData.liked_num}
            </div>
            <div>
              <b>Rate Number:</b> {movieData.rate_num}
            </div>
            <div>
              <b>Rating:</b> {movieData.rating}
            </div>
          </div>
        </div>
      </div>
      <div className="w-[70vw] flex flex-col my-5 gap-2">
        <SectionTitle>Description:</SectionTitle>
        <p className="text-break">{movieData.description}</p>
        <SectionTitle>They also liked this movie:</SectionTitle>
        <LikedUsers liked_users={movieData.liked_users} />
        <SectionTitle>Lists you may be interested in:</SectionTitle>
        {/* <ListsGroup lists={movieData.lists} /> */}
        <ListsGroup lists={movieData.related_lists} />
        {/* <Stack direction="horizontal" gap={3}></Stack> */}
        <SectionTitle>User review</SectionTitle>
        {/* <CommentSection movieData={movieData} /> */}
      </div>
    </div>
  );
}
