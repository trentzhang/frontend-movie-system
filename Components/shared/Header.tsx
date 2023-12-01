"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useActiveSectionContext } from "@/context/active-section-context";

const menu = [
  {
    name: "Home",
    link: "/",
    sections: [
      { name: "Top Movies", link: "#topMovies", id: "topMovies" },
      { name: "Random Movies", link: "#randomMovies", id: "randomMovies" },
      { name: "Top Lists", link: "#topLists", id: "topLists" },
    ],
  },
  {
    name: "Search",
    link: "/search",
    sections: [
      { name: "Movie", link: "" },
      { name: "List", link: "" },
    ],
  },
  {
    name: "Me",
    link: "/user/id",
    sections: [
      { name: "Log in", link: "/user/login" },
      { name: "Profile", link: "/user/profile" },
      { name: "Log out", link: "/user/logout" },
      { name: "Sign up", link: "/user/signup" },
      { name: "Settings", link: "/user/settings" },
    ],
  },
];

function isPageActive(pathname: string, link: string) {
  if (link === "/user/id") return pathname.startsWith("/user");
  else return pathname === link;
}
// Logo component
function Logo() {
  return (
    <span className="  sm:px-4 sm:py-2  text-2xl font-bold">
      <Link href={"/"}>🎥</Link>
    </span>
  );
}
export default function Header() {
  const pathname = usePathname();
  const [activePage, setActivePage] = useState(pathname);
  //   const [activeSection, setActiveSection] = useState("#topMovies");
  const { activeSection, setActiveSection } = useActiveSectionContext();

  return (
    <motion.div className="w-full sm:w-[40em] h-24 sm:h-min z-[1000] fixed top-0 sm:top-4 left-1/2 -translate-x-1/2 px-4  bg-slate-600/30 backdrop-blur-md sm:rounded-full flex items-center justify-between gap-3  sm:border-slate-600 sm:border-1">
      <Logo />

      <motion.nav className="flex flex-col sm:flex-row  flex-wrap  w-[400px] sm:w-full sm:justify-between sm:items-center text-sm">
        {menu.map((page, index) => (
          //   page
          <motion.div
            layout
            transition={{
              type: "spring",
              stiffness: 320,
              damping: 30,
            }}
            key={index}
            className={`px-2 py-1 min-w-[100px] sm:px-4 sm:py-2  rounded-full flex gap-3 ${
              isPageActive(activePage, page.link)
                ? "bg-slate-300/50 "
                : "text-white/50"
            }`}
            onHoverStart={() => {
              setActivePage(page.link);
            }}
          >
            <motion.div layout>
              <Link href={page.link}>
                <span
                  className={
                    isPageActive(pathname, page.link) ? "" : "text-white/50"
                  }
                >
                  {page.name}
                </span>
              </Link>
            </motion.div>

            {isPageActive(activePage, page.link) && (
              <motion.div
                transition={{ duration: 4 }}
                className={"flex flex-wrap justify-end gap-2 min-w-[200px]"}
              >
                {page.sections.map((section, index) => (
                  //section
                  <Link
                    href={page.link + section.link}
                    key={index}
                    onClick={() => {
                      if ("id" in section) {
                        setActiveSection(section.id);
                        console.log("section.id", section.id);
                      }
                    }}
                  >
                    <motion.span
                      className={
                        "id" in section && activeSection === section.id
                          ? ""
                          : "text-white/50 hover:text-white transition duration-[0.45s]"
                      }
                    >
                      {section.name}
                    </motion.span>
                    {/* underline */}
                    {"id" in section && activeSection === section.id && (
                      <motion.div
                        layoutId="underline"
                        className="border-b-2 border-white w-full"
                        // initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      ></motion.div>
                    )}
                  </Link>
                ))}
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.nav>
    </motion.div>
  );
}
