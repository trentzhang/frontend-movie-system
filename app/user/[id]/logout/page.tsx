"use client";
import { auth } from "@/Components/shared/auth/Firebase";
import { redirect } from "next/navigation";

export default function logout() {
  auth.signOut();
  console.log("auth.currentUser", auth.currentUser);
  redirect("/");
}
