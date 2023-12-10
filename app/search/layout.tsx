"use client";
import SearchContextProvider from "@/context/search-context";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SearchContextProvider>{children}</SearchContextProvider>;
}
