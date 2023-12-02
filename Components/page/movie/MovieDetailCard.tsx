"use client";
import { LikedUsers } from "./LikedUsers";
import ListsGroup from "@/Components/shared/ListsGroup";
import CommentSection from "./CommentSection";
import { Image } from "@nextui-org/react";
import { SectionTitle } from "./SectionTitle";
import { LikeButton } from "./LikeButton";
import { AddToListButton } from "./AddToListButton";
import { use, useEffect, useState } from "react";
import { User } from "firebase/auth";
import { auth } from "@/Components/shared/auth/Firebase";

import {
  likeContext,
  addToListsContext,
  userContext,
  likedNumContext,
  liked_usersContext,
} from "@/context/movie-detail-context";

export default function MovieDetailCard({ data }: { data: MovieAPI }) {
  const movieData = data.data;

  const [Like, setLike] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [addToLists, setAddToLists] = useState([] as typeof lists);

  const [likedNum, setLikedNum] = useState(movieData.liked_num);
  const [liked_users, setLiked_users] = useState(movieData.liked_users);

  auth.onAuthStateChanged((user) => {
    setUser(user);
  });

  console.log("addToLists", addToLists);

  useEffect(() => {
    // get users lists
    if (user) {
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/lists/email/${user.email}`)
        .then((response) => response.json())
        .then((data) => {
          setAddToLists(data.data);
        });
    }
  }, [user]);

  return (
    <liked_usersContext.Provider value={{ liked_users, setLiked_users }}>
      <likedNumContext.Provider value={{ likedNum, setLikedNum }}>
        <likeContext.Provider value={{ Like, setLike }}>
          <addToListsContext.Provider value={{ addToLists, setAddToLists }}>
            <userContext.Provider value={{ user, setUser }}>
              <div className="flex flex-col items-center">
                <div className="flex flex-col  bg-white/20 rounded-2xl w-[70vw] overflow-hidden">
                  <div className="flex gap-8 flex-col md:flex-row">
                    <div className="flex items-center justify-center min-w-max mt-5 md:mt-0">
                      <Image
                        src={movieData.cover}
                        alt="cover"
                        width={300}
                        height={300}
                      />
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
                          <b>Liked Number:</b> {likedNum}
                        </div>
                        <div>
                          <b>Rate Number:</b> {movieData.rate_num}
                        </div>
                        <div>
                          <b>Rating:</b> {movieData.rating}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <LikeButton />
                        <AddToListButton />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[70vw] flex flex-col my-5 gap-2">
                  <SectionTitle>Description:</SectionTitle>
                  <p className="text-break">{movieData.description}</p>
                  <SectionTitle>They also liked this movie:</SectionTitle>
                  <LikedUsers liked_users={liked_users} />
                  <SectionTitle>Lists you may be interested in:</SectionTitle>
                  <ListsGroup lists={movieData.related_lists} />
                  <SectionTitle>User review</SectionTitle>
                  <CommentSection data={movieData.comments} />
                </div>
              </div>
            </userContext.Provider>
          </addToListsContext.Provider>
        </likeContext.Provider>
      </likedNumContext.Provider>
    </liked_usersContext.Provider>
  );
}
