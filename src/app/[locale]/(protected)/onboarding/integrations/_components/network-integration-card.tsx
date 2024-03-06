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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DatabaseZapIcon, ExternalLinkIcon, PlugIcon } from "lucide-react";
import Link from "next/link";
import { syncNetworkAccount } from "../_actions";

interface NetworkIntegrationCardProps {
  urlWithoutProtocol: string;
  imageUrl: string;
  name: string;
  description: string;
  networkKey: string;
}

export function NetworkIntegrationCard({
  urlWithoutProtocol,
  imageUrl,
  name,
  description,
  networkKey,
}: NetworkIntegrationCardProps) {
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader className="gap-3">
        <Avatar className="rounded-xl">
          <AvatarImage src={imageUrl} />
          <AvatarFallback>
            <DatabaseZapIcon className="h-6 w-6" />
          </AvatarFallback>
        </Avatar>

        <div className="flex flex-col">
          <CardTitle>{name}</CardTitle>
          <Link
            className="inline-flex items-center text-xs text-muted-foreground"
            href={`https://www.${urlWithoutProtocol}`}
          >
            {urlWithoutProtocol}
            <ExternalLinkIcon className="ml-1 h-2.5 w-2.5" />
          </Link>
        </div>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col justify-between gap-4">
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardContent>

      <CardFooter>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm" className="text-xs">
              <PlugIcon className="mr-2 h-4 w-4 shrink-0" />
              Conectar
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-sm">
            <Avatar className="h-12 w-12 rounded-xl">
              <AvatarImage src={imageUrl} />
              <AvatarFallback>
                <DatabaseZapIcon className="h-6 w-6" />
              </AvatarFallback>
            </Avatar>

            <DialogHeader>
              <DialogTitle className="text-xl">
                Connect your {name} account
              </DialogTitle>
              <DialogDescription>
                Enter bellow your {name}{" "}
                <code className="rounded bg-accent px-1 py-0.5 font-mono text-xs text-accent-foreground">
                  unique ID
                </code>{" "}
                to connect your account. This will enable real-time flight
                tracking and more.
              </DialogDescription>
            </DialogHeader>
            <form className="flex flex-col gap-2" action={syncNetworkAccount}>
              <Label htmlFor={networkKey}>Your id</Label>
              <Input
                placeholder="ex: 595866"
                type="text"
                id={networkKey}
                name={networkKey}
                required
                min={6}
              />

              <Button type="submit" size="sm" className="mt-2 self-end">
                Connect {name} Account
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}
