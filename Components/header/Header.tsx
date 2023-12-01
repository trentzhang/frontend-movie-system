// Header.jsx
"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";
import MenuItem from "./MenuItem";
import { menu } from "./menu";
import { activePageContext } from "@/context/active-page-context";

export default function Header() {
  const pathname = usePathname();
  const [activePage, setActivePage] = useState(pathname);

  return (
    <motion.div className="w-full sm:w-[40em] h-24 sm:h-min z-[1000] fixed top-0 sm:top-4 left-1/2 -translate-x-1/2 px-4  bg-slate-600/30 backdrop-blur-md sm:rounded-full flex items-center justify-between gap-3  sm:border-slate-600 sm:border-1">
      <Logo />
      <activePageContext.Provider value={{ activePage, setActivePage }}>
        <motion.nav className="flex flex-col sm:flex-row  flex-wrap  w-[400px] sm:w-full sm:justify-between sm:items-center text-sm">
          {menu.map((page, index) => (
            <MenuItem key={index} page={page} />
          ))}
        </motion.nav>
      </activePageContext.Provider>
    </motion.div>
  );
}
