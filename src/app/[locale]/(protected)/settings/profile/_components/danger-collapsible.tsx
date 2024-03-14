"use client";

import {
  PiAlertTriangleDuoSolid,
  PiChevronDownStroke,
  PiChevronUpStroke,
  PiInformationCircleDuoStroke,
} from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface DangerCollapsibleProps {}

export function DangerCollapsible({}: DangerCollapsibleProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <Card>
        <CardHeader className="flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <PiAlertTriangleDuoSolid
              className={cn(
                "w-5",
                isOpen ? "animate-pulse text-destructive" : "text-primary",
              )}
            />

            <h3 className="font-semibold">Danger zone</h3>
          </div>

          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              size="icon-sm"
              className="text-muted-foreground transition-all hover:text-accent-foreground"
            >
              {isOpen ? (
                <PiChevronDownStroke className="w-5" />
              ) : (
                <PiChevronUpStroke className="w-5" />
              )}
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </CardHeader>

        <CollapsibleContent>
          <Separator />
          <CardContent className="flex flex-col gap-4 pt-4">
            <span className="font-medium text-destructive">
              Delete your account
            </span>

            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <PiInformationCircleDuoStroke className="w-4 shrink-0 text-accent-foreground" />
              <span>
                Should you decide to delete your account, you will lose access
                to all of your data. This action cannot be undone and the
                process may take up to 24 hours.
              </span>
            </div>
          </CardContent>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  );
}
