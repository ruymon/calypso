"use client";

import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { useI18n } from "@/locales/client";
import { AlertTriangleIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface SupportCardProps {}

export function SupportCard({}: SupportCardProps) {
  const t = useI18n();
  const [isOpen, setIsOpen] = useState(true);

  function handleClose() {
    setIsOpen(false);
  }

  return isOpen ? (
    <Link
      href={siteConfig.links.discord}
      target="_blank"
      rel="noopener noreferrer"
      className={buttonVariants({
        variant: "outline",
        className: "relative flex h-auto flex-col gap-0.5 py-1",
      })}
    >
      <button
        type="button"
        onClick={handleClose}
        className="absolute right-1.5 top-1.5 rounded-sm p-0.5 text-muted-foreground transition-colors duration-150 hover:bg-accent hover:text-accent-foreground"
      >
        <XIcon className="h-3 w-3" />
      </button>

      <div className="flex items-center gap-1 text-accent-foreground">
        <AlertTriangleIcon className="h-3.5 w-3.5" />
        <span className="text-xs font-medium">
          {t("auth.supportCard.title")}
        </span>
      </div>
      <span className="text-xs opacity-75">{t("common.joinDiscord")}</span>
    </Link>
  ) : null;
}
