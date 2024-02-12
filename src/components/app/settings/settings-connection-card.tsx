import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  BadgeCheckIcon,
  CalendarDaysIcon,
  UnplugIcon,
  UserIcon,
} from "lucide-react";

interface SettingsConnectionCardProps {
  name: string;
  url: string;
  description: string;
  imageUrl: string;
  isVerified?: boolean;
  isConnected?: boolean;
}

export function SettingsConnectionCard({
  name,
  url,
  description,
  imageUrl,
  isVerified,
  isConnected,
}: SettingsConnectionCardProps) {
  return (
    <div className="bg-background/5 backdrop-blur-sm border border-accent/25 rounded-md p-4 flex flex-col gap-4">
      <header className="flex items-center gap-4">
        <Avatar className="w-10 h-10 rounded-md">
          <AvatarImage src={imageUrl} />
          <AvatarFallback></AvatarFallback>
        </Avatar>

        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <h4 className="text-secondary-foreground font-bold text-xl">
              {name}
            </h4>
            {isVerified && (
              <BadgeCheckIcon className="w-3.5 h-3.5 stroke-green-500" />
            )}
          </div>

          <span className="text-muted-foreground text-xs">{url}</span>
        </div>
      </header>

      <span className="text-sm text-accent-foreground flex-1">
        {description}
      </span>

      <div className="flex flex-col gap-2 py-2 text-xs">
        <div className="flex items-center gap-2 text-muted-foreground">
          <UserIcon className="w-3.5 h-3.5 shrink-0" />
          {isConnected
            ? "Ruy M. - 595866"
            : "Você ainda não vinculou esta conta."}
        </div>

        <div className="flex items-center gap-2 text-muted-foreground">
          <CalendarDaysIcon className="w-3.5 h-3.5 shrink-0" />
          <span className="font-medium">
            {isConnected
              ? "Vinculado em 10/02/2024"
              : "Você ainda não vinculou esta conta."}
          </span>
        </div>
      </div>

      {isConnected ? (
        <Button className="text-xs" variant="outline-destructive">
          <UnplugIcon className="w-4 h-4 shrink-0 mr-2" />
          Desvincular
        </Button>
      ) : (
        <Button className="text-xs" variant="outline">
          <UnplugIcon className="w-4 h-4 shrink-0 mr-2" />
          Conectar
        </Button>
      )}
    </div>
  );
}
