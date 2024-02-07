'use client';

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageFadeInProps {
  children?: ReactNode;
};

export function PageFadeIn({ children }: PageFadeInProps) {
  const isReady = children;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isReady ? 1 : 0 }}
    >
      {children}
    </motion.div>
  );
};
