"use client"

import { buttonVariants } from "@/components/ui/button";
import { AlertTriangleIcon, XIcon } from "lucide-react";
import { useState } from "react";

interface SupportCardProps { };

export function SupportCard({ }: SupportCardProps) {
  const [isOpen, setIsOpen] = useState(true);

  function handleClose() {
    setIsOpen(false);
  }

  return isOpen ? (
    <div className={buttonVariants({ variant: 'outline', className: 'flex-col gap-1 relative' })}>
      <button type="button" onClick={handleClose} className="p-0.5 rounded-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground absolute top-1.5 right-1.5 transition-colors duration-150">
        <XIcon className="w-3 h-3" />
      </button>

      <div className="flex items-center gap-1 text-accent-foreground">
        <AlertTriangleIcon className="w-3.5 h-3.5" />
        <span className="text-xs font-medium">Problem?</span>
      </div>
      <span className="text-xs opacity-75">support@skyscope.app</span>
    </div>
  ) : null;
};
