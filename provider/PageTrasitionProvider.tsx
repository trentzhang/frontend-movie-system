"use client";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useContext, useRef } from "react";

function FrozenRouter({ children }: { children: React.ReactNode }) {
  const context = useContext(LayoutRouterContext);
  const frozen = useRef(context).current;

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {children}
    </LayoutRouterContext.Provider>
  );
}

export function Providers({ children }: { children: React.ReactNode }) {
  const onTheRight = { x: "100%" };
  const inTheCenter = { x: 0 };
  const onTheLeft = { x: "-100%" };

  const transition = { duration: 0.4, ease: "easeInOut" };

  return (
    <AnimatePresence
      mode="wait"
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <motion.div
        key={usePathname()}
        // initial={onTheRight}
        // animate={inTheCenter}
        // exit={onTheLeft}
        // transition={transition}
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 200, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <FrozenRouter>{children}</FrozenRouter>
      </motion.div>
    </AnimatePresence>
  );
}
