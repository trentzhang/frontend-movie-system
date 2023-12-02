"use server";

import { revalidateTag } from "next/cache";

// use server side action to update cache
export async function updateCache(
  requestMethod: string,
  email: string,
  id: string | string[]
) {
  // Send API to update database when like button is clicked
  try {
    const res = await fetch(
      `${process.env.BACKEND_URL}/liked/movies/${email}/${id}`,
      {
        method: requestMethod,
        headers: {
          "Content-type": "application/json",
        },
        cache: "no-store",
      }
    );
    if (!res.ok) {
      throw new Error("Oops! Like Operation API Wrong, Please Try Again!");
    }

    revalidateTag("MoviePage");
  } catch (error) {
    console.log(error);
    alert("Oops! Like Operation API Wrong, Please Try Again!");
  }
}
