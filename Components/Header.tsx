"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const menu = [
  {
    name: "Home",
    link: "/",
    sections: [
      { name: "Top Movies", link: "#topMovies" },
      { name: "Top Lists", link: "#topLists" },
      { name: "Random Movies", link: "#randomMovies" },
    ],
  },
  {
    name: "Search",
    link: "/search",
    sections: [
      { name: "Movie", link: "#movie" },
      { name: "List", link: "#list" },
    ],
  },
  { name: "Me", link: "/user/test", sections: [] },
];

export default function Header() {
  const pathname = usePathname();
  const [activePage, setActivePage] = useState(pathname);
  const [activeSection, setActiveSection] = useState("#topMovies");

  let hoverTimeout: NodeJS.Timeout;
  return (
    <motion.div className="w-[40em] z-[1000] fixed top-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-slate-300/30 rounded-full flex justify-between ">
      <span className="px-4 py-2  text-2xl font-bold">🎥</span>
      <motion.nav className="flex justify-between items-center">
        {menu.map((page, index) => (
          //   page
          <motion.div
            layout
            transition={{
              type: "spring",
              stiffness: 380,
              damping: 30,
            }}
            key={index}
            className={`px-4 py-2  rounded-full flex gap-3 ${
              activePage === page.link ? "bg-slate-300/50" : "text-white/50"
            }`}
            onHoverStart={() => {
              setActivePage(page.link);
            }}
            onHoverEnd={() => {
              setActivePage(pathname);
            }}
          >
            <motion.div>
              <Link href={page.link}>
                <span>{page.name}</span>
              </Link>
            </motion.div>

            {activePage === page.link && (
              <motion.div
                transition={{ duration: 4 }}
                className={"flex justify-end gap-2 "}
              >
                {page.sections.map((section, index) => (
                  //section
                  <Link
                    href={page.link + section.link}
                    key={index}
                    onClick={() => {
                      setActiveSection(section.link);
                    }}
                  >
                    <motion.span
                      className={
                        activeSection === section.link
                          ? ""
                          : "text-white/50 hover:text-white transition duration-[0.45s]"
                      }
                    >
                      {section.name}
                    </motion.span>
                    {activeSection === section.link && (
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
