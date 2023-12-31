import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useActiveSectionContext } from "@/context/active-section-context";
import { Underline } from "./Underline";
import { MenuItemProps } from "./MenuItem";

export function MenuSubItem({
  hrefLink,
  section,
}: {
  hrefLink: string;
  section: MenuItemProps["page"]["subItems"][0];
}) {
  const { activeSection, setActiveSection } = useActiveSectionContext();

  return (
    <Link
      href={hrefLink}
      onClick={() => {
        setActiveSection(section.id ?? "");
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

      {"id" in section && activeSection === section.id && <Underline />}
    </Link>
  );
}
