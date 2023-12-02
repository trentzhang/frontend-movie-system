"use client";
import { auth } from "@/Components/shared/auth/Firebase";
import { redirect, useRouter } from "next/navigation";

export default function Logout() {
  const router = useRouter();
  auth.signOut();
  router.back();
  return null;
}
