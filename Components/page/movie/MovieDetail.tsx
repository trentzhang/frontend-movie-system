"use client";

import { LikedUsers } from "./LikedUsers";
import ListsGroup from "@/Components/shared/ListsGroup";
import CommentSection from "./CommentSection";
import { Button, Image } from "@nextui-org/react";

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h1 className="text-3xl text-white font-bold mt-2">{children}</h1>;
}

export default function MovieDetailCard({ data }: { data: MovieAPI }) {
  const movieData = data.data;
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col  bg-white/20 rounded-2xl w-[70vw] overflow-hidden">
        <div className="flex gap-8 flex-col md:flex-row">
          <div className="flex items-center justify-center min-w-max mt-5 md:mt-0">
            <Image src={movieData.cover} alt="cover" width={300} height={300} />
          </div>
          <div className="m-5 flex flex-col justify-between gap-3">
            <h1 className="text-3xl font-bold ">{movieData.title}</h1>
            <div>
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
            <div className="flex flex-wrap gap-3">
              <Button color="danger" aria-label="Like">
                {/* <HeartIcon /> */}
                Like
              </Button>
              <Button color="warning" variant="faded" aria-label="Save to list">
                {/* <CameraIcon /> */}
                Add to list
              </Button>
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
        <ListsGroup lists={movieData.related_lists} />
        <SectionTitle>User review</SectionTitle>
        <CommentSection data={movieData.comments} />
      </div>
    </div>
  );
}
