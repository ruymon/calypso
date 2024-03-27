"use client";

import {
  PiAlertTriangleStroke,
  PiLinkChainSlantDuoStroke,
} from "@/components/icons";
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
import { toast } from "sonner";

interface IvaoIntegrationCardProps {}

export function IvaoIntegrationCard({}: IvaoIntegrationCardProps) {
  function handleConnect() {
    toast.error("This feature is not available yet");
  }

  return (
    <Card className="flex flex-col gap-4 p-4">
      <CardContent className="mb-2 flex items-center justify-between gap-4 p-0">
        <Avatar className="rounded-md">
          <AvatarImage src="https://static.skyscope.app/networks/ivao.png" />
          <AvatarFallback />
        </Avatar>

        <Button
          variant="secondary"
          size="sm"
          className="gap-1"
          onClick={handleConnect}
        >
          <PiLinkChainSlantDuoStroke className="w-4" />
          <span className="text-xs font-medium">Connect</span>
        </Button>
      </CardContent>

      <CardHeader className="p-0">
        <CardTitle className="text-lg font-semibold">IVAO</CardTitle>
        <CardDescription className="text-muted-foreground">
          International Virtual Aviation Organisation VZW is a non-profit
          association which operates a free-of-charge online flight-simulation
          network
        </CardDescription>
      </CardHeader>

      <CardFooter className="gap-2 p-0">
        <PiAlertTriangleStroke className="h-3 w-3 shrink-0" />
        <span>At the moment, you cannot to your IVAO account</span>
      </CardFooter>
    </Card>
  );
}
