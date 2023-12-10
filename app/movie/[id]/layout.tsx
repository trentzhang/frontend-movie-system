"use client";
import MovieDetailContextProvider from "@/context/movie-detail-context";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MovieDetailContextProvider>{children}</MovieDetailContextProvider>;
}
