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

interface VatsimIntegrationCardProps {}

export function VatsimIntegrationCard({}: VatsimIntegrationCardProps) {
  function handleConnect() {
    toast.error("This feature is not available yet");
  }

  return (
    <Card className="flex flex-col gap-4 p-4">
      <CardContent className="mb-2 flex items-center justify-between gap-4 p-0">
        <Avatar className="rounded-md">
          <AvatarImage src="https://static.skyscope.app/networks/vatsim.png" />
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
        <CardTitle className="text-lg font-semibold">Vatsim</CardTitle>
        <CardDescription className="text-muted-foreground">
          Virtual Air Traffic Simulation Network is a nonprofit organization
          that operates an online flight-simulation network noted for its active
          membership and realism.
        </CardDescription>
      </CardHeader>

      <CardFooter className="gap-1 p-0">
        <PiAlertTriangleStroke className="h-3 w-3" />
        <span>At the moment, you cannot to your Vatsim account</span>
      </CardFooter>
    </Card>
  );
}
