"use client";

import { PiAi02DuoStroke } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { useScopedI18n } from "@/locales/client";
import { motion } from "framer-motion";
import { Rotate3D } from "lucide-react";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

const containerAnimationVariants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  enter: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
    },
  },
};

const logoAnimationVariants = {
  hidden: {
    opacity: 0,
    rotate: 0,
    scale: 0.5,
  },
  enter: {
    opacity: 1,
    rotate: 360,
    scale: 1,
  },
};

const headerAnimationVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  enter: {
    opacity: 1,
    y: 0,
  },
};

interface OnboardingWelcomePageProps {}

export default async function OnboardingWelcomePage({}: OnboardingWelcomePageProps) {
  const t = useScopedI18n("onboarding.welcome");

  return (
    <motion.div
      variants={containerAnimationVariants}
      initial="hidden"
      animate="enter"
      className="flex max-w-xl flex-col items-center gap-12"
    >
      <figure className="relative flex h-24 w-24 items-center justify-center">
        <motion.figure
          variants={logoAnimationVariants}
          initial="hidden"
          animate="enter"
          transition={{
            type: "spring",
            delay: 0.5,
            duration: 1,
          }}
        >
          <Rotate3D className="h-16 w-16" />
        </motion.figure>

        <div className="test" />
      </figure>

      <motion.header
        variants={headerAnimationVariants}
        initial="hidden"
        animate="enter"
        transition={{
          type: "spring",
          delay: 1,
          duration: 1,
        }}
        className="flex flex-col items-center gap-2 text-center"
      >
        <Badge
          variant="outline"
          className="mb-2 font-mono text-xs font-medium uppercase tracking-wide text-muted-foreground"
        >
          {t("hat")}
        </Badge>

        <Balancer as="h1" className="text-6xl font-extrabold text-foreground">
          {t("title")}
        </Balancer>
        <Balancer as="span" className="text-muted-foreground">
          {t("subtitle")}
        </Balancer>
      </motion.header>

      <Link
        href="/onboarding/integrations"
        className={buttonVariants({
          size: "lg",
          className: "w-fit",
        })}
      >
        <PiAi02DuoStroke className="mr-2 h-4 w-4" />
        {t("getStarted")}
      </Link>
    </motion.div>
  );
}
