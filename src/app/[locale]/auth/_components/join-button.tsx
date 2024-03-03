"use client";

import { Button } from "@/components/ui/button";
import { useScopedI18n } from "@/locales/client";
import { toast } from "sonner";

interface JoinButtonProps {}

export function JoinButton({}: JoinButtonProps) {
  const t = useScopedI18n("auth");

  function handleClick() {
    toast.error(t("join.inviteOnly"));
  }

  return (
    <Button
      onClick={handleClick}
      className="flex h-auto flex-col gap-0.5 py-1"
      variant="outline"
    >
      <span className="text-xs">{t("login.noAccount")}</span>
      <span className="text-sm font-medium text-accent-foreground">
        {t("login.join")}
      </span>
    </Button>
  );
}
