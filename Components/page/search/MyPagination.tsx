"use client";

import { Pagination } from "@nextui-org/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

// Pagination component
export default function MyPagination() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const searchResultPage = searchParams.get("searchResultPage");

  const createQueryStrings = (
    nameValues: Record<string | number, string | number>
  ) => {
    const params = new URLSearchParams(searchParams);
    Object.entries(nameValues).forEach(([name, value]) => {
      params.set(name, String(value));
    });

    return params.toString();
  };

  return (
    <Pagination
      showControls
      total={10}
      initialPage={Number(searchResultPage) + 1 || 1}
      onChange={(page) => {
        router.push(
          pathname + "?" + createQueryStrings({ searchResultPage: page - 1 })
        );
        router.refresh();
      }}
      classNames={{
        wrapper: "gap-0 overflow-visible h-8 rounded border border-divider",
        item: "mx-1 ",
        cursor:
          "bg-gradient-to-b from-slate-500 to-default-800  shadow-lg  text-white font-bold",
      }}
    />
  );
}
