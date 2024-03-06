"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useChangeLocale, useScopedI18n } from "@/locales/client";
import { LanguagesIcon } from "lucide-react";

interface LanguageDropdownProps {}

export function LanguageDropdown({}: LanguageDropdownProps) {
  const changeLocale = useChangeLocale({
    preserveSearchParams: true,
  });
  const t = useScopedI18n("languages");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="ghost">
          <LanguagesIcon className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem asChild className="w-full hover:cursor-pointer">
          <button onClick={() => changeLocale("en")}>{t("english")}</button>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="w-full hover:cursor-pointer">
          <button onClick={() => changeLocale("pt")}>{t("portuguese")}</button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
