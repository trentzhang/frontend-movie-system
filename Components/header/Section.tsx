import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useActiveSectionContext } from "@/context/active-section-context";
import { Underline } from "./Underline";
import { MenuItemProps } from "./MenuItem";

export function Section({
  hrefLink,
  section,
}: {
  hrefLink: string;
  section: MenuItemProps["page"]["sections"][0];
}) {
  const { activeSection, setActiveSection } = useActiveSectionContext();

  return (
    <Link
      href={hrefLink}
      onClick={() => {
        if ("id" in section) {
          setActiveSection(section.id ?? "");
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

      {"id" in section && activeSection === section.id && <Underline />}
    </Link>
  );
}
