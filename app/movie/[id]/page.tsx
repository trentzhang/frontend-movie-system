// import React, { useEffect, useState } from "react";
// import { Col, Container, Image, Row, Stack } from "react-bootstrap";
import { auth } from "@/Components/Firebase";
import MovieDetailCard from "@/Components/MovieDetailCard";
import { getData } from "@/lib/dataFetchers";
import Image from "next/image";
// import { ListCardGroup } from "../Home/body/ListCardGroup";
// import { backendUrl } from "../settings";
// import { AddMovieToListModal } from "./Components/AddMovieToListModal";
// import AddToListButton from "./Components/AddToListButton/AddToListButton";
// import CommentSection from "./Components/CommentSection";
// import { LikeButton } from "./Components/LikeButton/LikeButton";
// import { TheyAlsoLikedTab } from "./Components/TheyAlsoLikedThisMovieTab";

async function MoviePage({ params }: { params: { id: string } }) {
  const movieData = await getData(
    `${process.env.backendUrl}/movies/${params.id}`
  );
  console.log("movieData", movieData);
  return <MovieDetailCard data={movieData}></MovieDetailCard>;
}

export default MoviePage;
