"use client";
import { Button } from "@nextui-org/react";
import { useParams, usePathname, useRouter } from "next/navigation";

import { updateLike } from "@/app/movie/[id]/actions";
import { useMovieDetailContext } from "@/context/movie-detail-context";
import { getData } from "@/lib/dataFetchers";
import { useEffect } from "react";
import { IoMdHeartDislike, IoMdHeartEmpty } from "react-icons/io";

export function LikeButton() {
  const params = useParams();
  const path = usePathname();
  const id = params.id;
  const router = useRouter();

  const {
    Like,
    setLike,
    user,
    setUser,
    likedNum,
    setLikedNum,
    liked_users,
    setLiked_users,
  } = useMovieDetailContext();

  //   const [Like, setLike] = useState(false);
  //   const [user, setUser] = useState<User | null>(null);

  //   auth.onAuthStateChanged((user) => {
  //     setUser(user);
  //   });

  // Initialize like status
  useEffect(() => {
    async function currentUserLikeThisMovie(
      email: string,
      movie_Id: string | string[]
    ) {
      try {
        const data = await getData(`/api/${email}/${movie_Id}`);

        return data.data ? true : false;
      } catch (error) {
        console.error("Error fetching like status:", error);
        return false;
      }
    }

    if (user?.email) {
      currentUserLikeThisMovie(user.email, id).then((result) => {
        setLike(result);
      });
    }
  }, [setLike, user, id]);

  // handle like button
  async function handleLike() {
    if (!user) {
      router.push("/login");
      return false;
    }
    setLike(!Like);
    setLikedNum(Like ? likedNum - 1 : likedNum + 1);

    setLiked_users(
      // @ts-ignore
      Like
        ? liked_users.filter((this_user) => this_user.email !== user.email)
        : [...liked_users, user]
    );

    const email = user.email;
    const requestMethod = Like ? "DELETE" : "PUT";

    // update cache for movie page
    if (email && id) await updateLike(requestMethod, email, id);
  }

  // set liked to false when user logged out
  useEffect(() => {
    if (!user) {
      setLike(false);
    }
  }, [user, setLike]);

  return (
    <Button
      color="danger"
      aria-label="Like"
      onClick={handleLike}
      className="w-[110px]"
    >
      {Like ? (
        <>
          <IoMdHeartDislike />
          Un-Like
        </>
      ) : (
        <>
          <IoMdHeartEmpty />
          Like
        </>
      )}
    </Button>
  );
}
