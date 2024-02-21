"use client";
import { cn } from "@/lib/utils";

import { AnimatePresence, motion } from "framer-motion";
import {
  BellDotIcon,
  ClipboardCopyIcon,
  FileBadge2Icon,
  FileSignatureIcon,
  PlusIcon,
  Table2Icon,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { LogoIcon } from "../brand/logo";
import { Button } from "../ui/button";
import {
  MarketingBentoGrid,
  MarketingBentoGridItem,
} from "./marketing-bento-grid";

export function MarketingFeaturesBentoGrid() {
  return (
    <MarketingBentoGrid className="md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <MarketingBentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
        />
      ))}
    </MarketingBentoGrid>
  );
}

const SkeletonOne = () => {
  const firstVariant = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      className="flex h-full min-h-24 w-full flex-1 flex-col space-y-2"
    >
      <motion.div
        variants={firstVariant}
        className="flex flex-row items-center space-x-2 rounded-full bg-accent/10 p-2 backdrop-blur-md"
      >
        <div className="h-6 w-6 flex-shrink-0 rounded-full bg-gradient-to-r from-pink-500 to-violet-500" />
        <div className="h-4 w-full rounded-full bg-accent" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="ml-auto flex w-3/4 flex-row items-center space-x-2 rounded-full border bg-accent/10 p-2 backdrop-blur-md"
      >
        <div className="h-4 w-full rounded-full bg-accent" />
        <div className="h-6 w-6 flex-shrink-0 rounded-full bg-gradient-to-r from-pink-500 to-violet-500" />
      </motion.div>
      <motion.div
        variants={firstVariant}
        className="flex flex-row items-center space-x-2 rounded-full bg-accent/10 p-2 backdrop-blur-md"
      >
        <div className="h-6 w-6 flex-shrink-0 rounded-full bg-gradient-to-r from-pink-500 to-violet-500" />
        <div className="h-4 w-full rounded-full bg-accent" />
      </motion.div>
    </motion.div>
  );
};
const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };
  const arr = new Array(6).fill(0);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex h-full min-h-24 w-full flex-1 flex-col space-y-2"
    >
      {arr.map((_, i) => (
        <motion.div
          key={"skeleton-two" + i}
          variants={variants}
          style={{
            maxWidth: Math.random() * (100 - 40) + 40 + "%",
          }}
          className="flex h-4 w-full flex-row items-center space-x-2  rounded-full border bg-accent p-2"
        />
      ))}
    </motion.div>
  );
};
const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex h-full min-h-24 w-full flex-1 flex-col space-y-2 rounded-lg"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg" />
    </motion.div>
  );
};
const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex h-full min-h-24 w-full flex-1 flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="flex h-full w-1/3 flex-col items-center justify-center rounded-2xl border bg-muted p-4"
      >
        <Image
          src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="h-10 w-10 rounded-full"
        />
        <p className="mt-4 text-center text-xs font-semibold text-neutral-500 sm:text-sm">
          Just code in Vanilla Javascript
        </p>
        <p className="mt-4 rounded-full border border-red-500 bg-red-100 px-2 py-0.5 text-xs text-red-600 dark:bg-red-900/20">
          Delusional
        </p>
      </motion.div>
      <motion.div className="flex h-full w-1/3 flex-col items-center justify-center rounded-2xl border bg-muted p-4">
        <Image
          src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="h-10 w-10 rounded-full"
        />
        <p className="mt-4 text-center text-xs font-semibold text-neutral-500 sm:text-sm">
          Just code in Vanilla Javascript
        </p>
        <p className="mt-4 rounded-full border border-red-500 bg-red-100 px-2 py-0.5 text-xs text-red-600 dark:bg-red-900/20">
          Delusional
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="flex h-full w-1/3 flex-col items-center justify-center rounded-2xl border bg-muted p-4"
      >
        <Image
          src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="h-10 w-10 rounded-full"
        />
        <p className="mt-4 text-center text-xs font-semibold text-neutral-500 sm:text-sm">
          Just code in Vanilla Javascript
        </p>
        <p className="mt-4 rounded-full border border-red-500 bg-red-100 px-2 py-0.5 text-xs text-red-600 dark:bg-red-900/20">
          Delusional
        </p>
      </motion.div>
    </motion.div>
  );
};
function NotificationsFeatureIllustration() {
  interface Notification {
    title: string;
    description: string;
  }

  const [notifications, setNotifications] = useState<Notification[]>([
    {
      title: "New ATC in your route 📡",
      description: "SBGR_TWR - on frequency 118.30.",
    },
  ]);

  const notificationsExamples: Notification[] = [
    {
      title: "New ATC in your route 📡",
      description: "SBGR_TWR - on frequency 118.30.",
    },
    {
      title: "TAM2056 ✈",
      description: "3 miles from SBGR runway 09L.",
    },
    {
      title: "Upcoming schedule 📅",
      description: "AZU1234 | SBGR - SBRJ",
    },
    {
      title: "AAL1234 ✈",
      description: "Departing from SBCF to KJFK.",
    },
    {
      title: "Event in your area 🎉",
      description: "Vatsim Event: Fly-in SBGR.",
    },
  ];

  function addRandomNotification() {
    const randomNotification =
      notificationsExamples[
        Math.floor(Math.random() * notificationsExamples.length)
      ];
    setNotifications((prev) => [randomNotification, ...prev]);
  }

  return (
    <div className="flex h-full flex-col justify-between gap-3">
      <ul className="after:content-[' '] relative flex max-h-40 w-full flex-1 flex-col gap-3 overflow-clip before:absolute before:top-0 before:z-10 before:h-12 before:w-full before:bg-gradient-to-b before:from-[#0E0F12] before:to-transparent after:absolute after:bottom-0 after:z-10 after:h-12 after:w-full after:bg-gradient-to-b after:from-transparent after:to-[#0E0F12]">
        <AnimatePresence initial={false}>
          {notifications.map(({ title, description }, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, y: 50, scale: 0.3 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
              className="flex items-center gap-2 rounded-xl bg-accent/5 p-2 backdrop-blur-md"
            >
              <LogoIcon size="sm" />

              <div className="flex flex-col">
                <span className="text-sm font-semibold text-accent-foreground">
                  {title}
                </span>
                <span className="text-xs text-muted-foreground">
                  {description}
                </span>
              </div>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>

      <Button
        onClick={addRandomNotification}
        variant="ghost"
        size="md"
        className="w-fit"
      >
        <PlusIcon className="mr-2 h-4 w-4" />
        New notification
      </Button>
    </div>
  );
}

const items = [
  {
    title: "AI Content Generation",
    description: "Experience the power of AI in generating unique content.",
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <ClipboardCopyIcon className="h-4 w-4 shrink-0" />,
  },
  {
    title: "Automated Proofreading",
    description: "Get your content proofread by AI for grammatical errors.",
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <FileBadge2Icon className="h-4 w-4 shrink-0" />,
  },
  {
    title: "Contextual Suggestions",
    description: "Get suggestions for your content based on the context.",
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <FileSignatureIcon className="h-4 w-4 shrink-0" />,
  },
  {
    title: "Friends",
    description: "Analyze the sentiment of your content with AI.",
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <Table2Icon className="h-4 w-4 shrink-0" />,
  },

  {
    title: "Notifications & Alerts",
    description: "Receive push notifications and alerts for selected flights.",
    header: <NotificationsFeatureIllustration />,
    className: "md:col-span-1",
    icon: <BellDotIcon className="h-4 w-4 shrink-0" />,
  },
];
