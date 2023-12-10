// Header.jsx
"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";
import MenuItem from "./MenuItem";
import { activePageContext } from "@/context/active-page-context";
import debounce from "lodash/debounce";
import { auth } from "../shared/auth/Firebase";
import { set } from "lodash";
import { User } from "firebase/auth";

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
      //   { name: "List", link: "" },
    ],
  },
  logIn: {
    name: "Log in",
    link: "/login",
    subItems: [],
  },
  signUp: { name: "Sign up", link: "/signup", subItems: [] },
  loggedIn: {
    name: "My Home",
    link: "/user/id",
    subItems: [
      { name: "Log out", link: "/user/logout" },
      { name: "Settings", link: "/user/settings" },
    ],
  },
};

export default function Header() {
  const pathname = usePathname();
  const [activePage, setActivePage] = useState(pathname);
  const [user, setUser] = useState<User | null>(null);

  // Debounce the setActivePage function
  const debouncedSetActivePage = debounce((newActivePage) => {
    setActivePage(newActivePage);
  }, 900);

  const loggedIn = {
    name: "My Home",
    link: user ? "/user/" + user.email : "/login",
    subItems: [
      { name: "Log out", link: "/logout" },
      { name: "Settings", link: "/settings" },
    ],
  };

  const myHome = {
    name: user ? "My Home" : "Log in",
    link: user ? "/user/" + user.email : "",
    subItems: user
      ? [
          { name: "Log out", link: "/logout" },
          { name: "Settings", link: "/settings" },
        ]
      : [
          {
            name: "Log in",
            link: "/login",
          },
          { name: "Sign up", link: "/signup" },
        ],
  };

  auth.onAuthStateChanged((user) => {
    setUser(user);
  });

  return (
    <motion.div className="w-full sm:w-[45em] h-24 sm:h-min z-[1000] fixed top-0 sm:top-4 left-1/2 -translate-x-1/2 px-4  bg-slate-600/30 backdrop-blur-xl sm:rounded-full flex items-center justify-between gap-3  sm:border-slate-600 sm:border-1">
      <Logo />
      <activePageContext.Provider
        value={{ activePage, setActivePage, debouncedSetActivePage }}
      >
        <motion.nav className="flex flex-col sm:flex-row  flex-wrap  w-[400px] sm:w-full sm:justify-between sm:items-center text-sm">
          <MenuItem page={menu.home} className="min-w-[240px]" />
          <MenuItem page={menu.search} />
          {/* {user ? (
            <MenuItem page={loggedIn} />
          ) : (
            <>
              <MenuItem page={menu.logIn} />
              <MenuItem page={menu.signUp} />
            </>
          )} */}
          <MenuItem page={myHome} />
        </motion.nav>
      </activePageContext.Provider>
    </motion.div>
  );
}
