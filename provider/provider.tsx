"use client";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export function Providers({ children }: { children: React.ReactNode }) {
  const onTheRight = { x: "100%" };
  const inTheCenter = { x: 0 };
  const onTheLeft = { x: "-100%" };

  const transition = { duration: 0.4, ease: "easeInOut" };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={usePathname()}
        initial={onTheRight}
        animate={inTheCenter}
        // exit={onTheLeft}
        transition={transition}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
