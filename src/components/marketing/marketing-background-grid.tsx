"use client";

import { motion } from "framer-motion";

export function MarketingBackgroundGrid() {
  return (
    <div className="absolute h-full w-full overflow-hidden [mask-image:radial-gradient(ellipse_50%_50%_at_center,#000_70%,transparent_100%)]">
      <motion.div
        animate={{ opacity: 1 }}
        className="motion-safe:animate-movingbackground h-[200%] w-full bg-[linear-gradient(to_right,rgb(var(--purple-300)/0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgb(var(--purple-300)/0.2)_1px,transparent_1px)] bg-[size:3rem_3rem] will-change-transform"
        initial={{ opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      />
    </div>
  );
}
