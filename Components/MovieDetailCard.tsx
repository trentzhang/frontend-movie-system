"use client";

import Image from "next/image";
import SectionTitle from "./SectionTitle";

export default function MovieDetailCard({ data }: { data: MovieAPI }) {
  const movieData = data.data;
  return (
    <div className="flex flex-col items-center justify-center bg-white/20 rounded-2xl p-10 pt-0">
      <SectionTitle>Movie Detail</SectionTitle>
      <div className="flex justify-evenly w-[70vw]">
        <div>
          {" "}
          <Image src={movieData.cover} alt="cover" width={200} height={200} />
        </div>
        <div>
          <h2>{movieData.title}</h2>
          <br />
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
  );
}
