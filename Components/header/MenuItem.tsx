// MenuItem.jsx
import React, { use, useContext } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MenuSubItem } from "./MenuSubItem";
import { usePathname } from "next/navigation";
import { activePageContext } from "@/context/active-page-context";

function isPageActive(pathname: string, link: string) {
  if (link === "/user/id") return pathname.startsWith("/user");
  else return pathname === link;
}

export type MenuItemProps = {
  page: {
    name: string;
    link: string;
    subItems: {
      name: string;
      link: string;
      id?: string;
    }[];
  };
};

function MenuItem({ page }: MenuItemProps) {
  const pathname = usePathname();
  const { activePage, setActivePage, debouncedSetActivePage } =
    useContext(activePageContext);

  return (
    <motion.div
      layout
      transition={{
        type: "spring",
        stiffness: 320,
        damping: 30,
      }}
      className={`px-2 py-1 min-w-[100px] sm:px-4 sm:py-2  rounded-full flex gap-3 ${
        isPageActive(activePage, page.link) ? "bg-slate-300/50 " : ""
      }`}
      //   onHoverEnd={() => {
      //     setActivePage(pathname);
      //   }}
      onHoverStart={() => {
        debouncedSetActivePage(page.link);
        // setActivePage(page.link);
      }}
    >
      <motion.div layout>
        <Link href={page.link}>
          <span
            className={
              isPageActive(pathname, page.link) ? "text-white" : "text-white/50"
            }
          >
            {page.name}
          </span>
        </Link>
      </motion.div>
      {isPageActive(activePage, page.link) && (
        <motion.div
          //   layout
          transition={{ duration: 4 }}
          className={"flex flex-wrap justify-end gap-2 min-w-[200px]"}
        >
          {page.subItems.map((subItem, index) => (
            <MenuSubItem
              key={index}
              hrefLink={page.link + subItem.link}
              section={subItem}
            />
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}

export default MenuItem;
