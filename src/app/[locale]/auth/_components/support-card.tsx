"use client";

import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { useScopedI18n } from "@/locales/client";
import { AlertTriangleIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface SupportCardProps {}

export function SupportCard({}: SupportCardProps) {
  const t = useScopedI18n("auth.supportCard");
  const [isOpen, setIsOpen] = useState(true);

  function handleClose() {
    setIsOpen(false);
  }

  return isOpen ? (
    <div
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
        <span className="text-xs font-medium">{t("title")}</span>
      </div>
      <Link href={`mailto:${siteConfig.email}`} className="text-xs opacity-75">
        {siteConfig.email}
      </Link>
    </div>
  ) : null;
}
