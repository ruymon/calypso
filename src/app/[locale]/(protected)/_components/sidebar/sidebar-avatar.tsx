import { PiUserDefaultDuoStroke } from "@/components/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { getProfile } from "@/lib/auth";
import { getNameInitials } from "@/lib/utils";
import { getScopedI18n } from "@/locales/server";
import Link from "next/link";

interface SidebarAvatarProps {}

export async function SidebarAvatar({}: SidebarAvatarProps) {
  const t = await getScopedI18n("sidebar.profile");
  const user = await getProfile();

  return (
    <Tooltip delayDuration={400}>
      <TooltipTrigger className="flex w-full items-center justify-center">
        <Link href="/settings">
          <Avatar className="h-7 w-7">
            <AvatarImage src={user?.avatarUrl} />
            <AvatarFallback>
              {user?.name ? (
                getNameInitials(user.name)
              ) : (
                <PiUserDefaultDuoStroke className="w-4" />
              )}
            </AvatarFallback>
          </Avatar>
        </Link>
      </TooltipTrigger>
      <TooltipContent
        side="right"
        className="flex flex-col rounded-sm px-2"
        sideOffset={6}
      >
        <span className="text-xs font-semibold">{t("title")}</span>
        <span className="text-2xs text-muted-foreground">{t("subtitle")}</span>
      </TooltipContent>
    </Tooltip>
  );
}
