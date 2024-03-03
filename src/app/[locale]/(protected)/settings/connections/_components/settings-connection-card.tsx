"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CalendarDaysIcon,
  ExternalLinkIcon,
  PlugIcon,
  UnplugIcon,
  User,
} from "lucide-react";
import Link from "next/link";

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
    <Card className="flex flex-col justify-between">
      <CardHeader className="flex-row items-center gap-3">
        <Avatar className="h-10 w-10 rounded-md">
          <AvatarImage src={imageUrl} />
          <AvatarFallback></AvatarFallback>
        </Avatar>

        <div className="flex flex-col">
          <CardTitle>{name}</CardTitle>
          <Link
            className="inline-flex items-center text-xs text-muted-foreground"
            href={`https://www.${url}`}
          >
            {url}
            <ExternalLinkIcon className="ml-1 h-2.5 w-2.5" />
          </Link>
        </div>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col justify-between gap-4">
        <CardDescription>{description}</CardDescription>

        <section className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CalendarDaysIcon className="h-4 w-4 shrink-0" />
            <span>Vinculou em junho de 2020</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <User className="h-4 w-4 shrink-0" />
            <span>595866</span>
          </div>
        </section>
      </CardContent>

      <CardFooter>
        {isConnected ? (
          <Button variant="destructive" size="sm" className="text-xs">
            <UnplugIcon className="mr-2 h-4 w-4 shrink-0" />
            Desvincular
          </Button>
        ) : (
          <Button variant="outline" size="sm" className="text-xs">
            <PlugIcon className="mr-2 h-4 w-4 shrink-0" />
            Conectar
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
