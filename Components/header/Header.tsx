// Header.jsx
"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";
import MenuItem from "./MenuItem";
import { activePageContext } from "@/context/active-page-context";
import debounce from "lodash/debounce";

const menu = {
  home: {
    name: "Home",
    link: "/",
    subItems: [
      { name: "Top Movies", link: "#topMovies", id: "topMovies" },
      { name: "Random Movies", link: "#randomMovies", id: "randomMovies" },
      { name: "Top Lists", link: "#topLists", id: "topLists" },
    ],
  },
  search: {
    name: "Search",
    link: "/search",
    subItems: [
      { name: "Movie", link: "" },
      { name: "List", link: "" },
    ],
  },
  notLogIn: {
    name: "Log in",
    link: "",
    subItems: [{ name: "Sign up", link: "/user/signup" }],
  },
  loggedIn: {
    name: "Me",
    link: "/user/id",
    subItems: [
      { name: "Profile", link: "/user/profile" },
      { name: "Log out", link: "/user/logout" },
      { name: "Settings", link: "/user/settings" },
    ],
  },
};

export default function Header() {
  const pathname = usePathname();
  const [activePage, setActivePage] = useState(pathname);

  // Debounce the setActivePage function
  const debouncedSetActivePage = debounce((newActivePage) => {
    setActivePage(newActivePage);
  }, 900);

  return (
    <motion.div className="w-full sm:w-[40em] h-24 sm:h-min z-[1000] fixed top-0 sm:top-4 left-1/2 -translate-x-1/2 px-4  bg-slate-600/30 backdrop-blur-md sm:rounded-full flex items-center justify-between gap-3  sm:border-slate-600 sm:border-1">
      <Logo />
      <activePageContext.Provider
        value={{ activePage, setActivePage, debouncedSetActivePage }}
      >
        <motion.nav className="flex flex-col sm:flex-row  flex-wrap  w-[400px] sm:w-full sm:justify-between sm:items-center text-sm">
          <MenuItem page={menu.home} />
          <MenuItem page={menu.search} />
          <MenuItem page={menu.notLogIn} />
        </motion.nav>
      </activePageContext.Provider>
    </motion.div>
  );
}
