import { motion } from "framer-motion";

export function Underline() {
  return (
    <motion.div
      layoutId="underline"
      className="border-b-2 border-white w-full"
      transition={{
        type: "spring",
        stiffness: 380,
        damping: 30,
      }}
    />
  );
}
