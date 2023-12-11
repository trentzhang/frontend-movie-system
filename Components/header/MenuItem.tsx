// MenuItem.jsx
import React, { use, useContext } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MenuSubItem } from "./MenuSubItem";
import { usePathname } from "next/navigation";
import { activePageContext } from "@/context/active-page-context";
import { useActiveSectionContext } from "@/context/active-section-context";

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
  className?: string;
};

function MenuItem({ page, className }: MenuItemProps) {
  const pathname = usePathname();
  const { activePage, setActivePage, debouncedSetActivePage } =
    useContext(activePageContext);
  const { activeSection, setActiveSection } = useActiveSectionContext();

  return (
    <motion.div
      layout
      transition={{
        type: "spring",
        stiffness: 320,
        damping: 50,
      }}
      className={`${className} px-2 py-1  sm:px-4 sm:py-2  rounded-full flex  transition-[color] ${
        isPageActive(activePage, page.link) ? "bg-slate-300/50 " : ""
      }
      `}
      //   className={`px-2 py-1  sm:px-4 sm:py-2  rounded-full flex
      //   ${isPageActive(activePage, page.link) ? "bg-slate-300/50 " : ""}
      //   `}
      onHoverEnd={() => {
        //   if screen is small, set active section without debounce
        if (window.innerWidth < 640) {
          setActivePage(pathname);
        } else {
          //   debouncedSetActivePage(pathname);
          // delay setting active page to pathname
          //   setTimeout(() => {
          //     setActivePage(pathname);
          //   }, 900);
          setActivePage(pathname);
        }
      }}
      onHoverStart={() => {
        if (window.innerWidth < 640) {
          setActivePage(page.link);
        } else {
          //   debouncedSetActivePage(page.link);
          setActivePage(page.link);
        }
      }}
    >
      <motion.div layout>
        <Link
          href={page.link}
          onClick={() => {
            setActiveSection("");
          }}
        >
          <span
            className={
              isPageActive(pathname, page.link) ? "text-white" : "text-white/50"
            }
          >
            {page.name}
          </span>
        </Link>
      </motion.div>
      {isPageActive(activePage, page.link) && page.subItems[0] && (
        <motion.div
          //   layout
          transition={{ duration: 4 }}
          className={"ml-6 flex flex-wrap justify-end gap-2 "}
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
