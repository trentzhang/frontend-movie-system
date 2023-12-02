"use server";

import { revalidateTag } from "next/cache";

// use server side action to update cache
export async function updateCache() {
  revalidateTag("MoviePage");
}
