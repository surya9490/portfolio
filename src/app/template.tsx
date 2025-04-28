"use client";

import { motion } from "framer-motion";
import { BackToTop } from "@/components/BackToTop";

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -20,
  },
};

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        {children}
      </motion.div>
      <BackToTop />
    </>
  );
}