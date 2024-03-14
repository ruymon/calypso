"use client";

import { PlaneIcon, TowerControlIcon } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  CommandDialog,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { getAirlineTailImageUrl } from "@/lib/images";
import { useEffect, useRef, useState } from "react";

const commands = [
  {
    title: "Find flight",
    description: "Search for a flight by callsign or flight number.",
    prefix: "flight:",
    icon: PlaneIcon,
  },
  {
    title: "Airport information",
    description: "Get information about an airport.",
    prefix: "airport:",
    icon: TowerControlIcon,
  },
];

export function CommandDialogDemo() {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [pages, setPages] = useState<string[]>([]);
  const page = pages[pages.length - 1];

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  function handleClick() {
    setOpen((open) => !open);
  }

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput
        onKeyDown={(e) => {
          // Escape goes to previous page
          // Backspace goes to previous page when search is empty
          if (e.key === "ArrowLeft" || (e.key === "Backspace" && !search)) {
            e.preventDefault();
            setPages((pages) => pages.slice(0, -1));
          }
        }}
        placeholder="Type a command or search..."
        value={search}
        onValueChange={setSearch}
      />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        {!page && (
          <>
            <CommandItem onSelect={() => setPages([...pages, "flights"])}>
              <PlaneIcon className="mr-2" />
              <span>Search flights</span>
            </CommandItem>
            <CommandItem onSelect={() => setPages([...pages, "airports"])}>
              <TowerControlIcon className="mr-2" />
              <span>Search airports</span>
            </CommandItem>
          </>
        )}

        {page === "flights" && (
          <>
            <CommandItem className="gap-4">
              <Avatar className="h-5 w-6 rounded-none">
                <AvatarImage
                  src={getAirlineTailImageUrl("GLO")}
                  alt="Airline Tail Image"
                />
                <AvatarFallback className="clip-tail animate-pulse rounded-none" />
              </Avatar>
              <header className="flex flex-col">
                <span className="text-base font-semibold text-accent-foreground">
                  GLO1234
                </span>
                <span className="text-xs text-muted-foreground">A320</span>
              </header>
            </CommandItem>

            <CommandItem className="gap-4">
              <Avatar className="h-5 w-6 rounded-none">
                <AvatarImage
                  src={getAirlineTailImageUrl("TAM")}
                  alt="Airline Tail Image"
                />
                <AvatarFallback className="clip-tail animate-pulse rounded-none" />
              </Avatar>
              <header className="flex flex-col">
                <span className="text-base font-semibold text-accent-foreground">
                  TAM1234
                </span>
                <span className="text-xs text-muted-foreground">A320</span>
              </header>
            </CommandItem>

            <CommandItem className="gap-4">
              <Avatar className="h-5 w-6 rounded-none">
                <AvatarImage
                  src={getAirlineTailImageUrl("AZU")}
                  alt="Airline Tail Image"
                />
                <AvatarFallback className="clip-tail animate-pulse rounded-none" />
              </Avatar>
              <header className="flex flex-col">
                <span className="text-base font-semibold text-accent-foreground">
                  AZU1234
                </span>
                <span className="text-xs text-muted-foreground">A320</span>
              </header>
            </CommandItem>

            <CommandItem className="gap-4">
              <Avatar className="h-5 w-6 rounded-none">
                <AvatarImage
                  src={getAirlineTailImageUrl("AAL")}
                  alt="Airline Tail Image"
                />
                <AvatarFallback className="clip-tail animate-pulse rounded-none" />
              </Avatar>
              <header className="flex flex-col">
                <span className="text-base font-semibold text-accent-foreground">
                  AAL1234
                </span>
                <span className="text-xs text-muted-foreground">A320</span>
              </header>
            </CommandItem>

            <CommandItem className="gap-4">
              <Avatar className="h-5 w-6 rounded-none">
                <AvatarImage
                  src={getAirlineTailImageUrl("SMB")}
                  alt="Airline Tail Image"
                />
                <AvatarFallback className="clip-tail animate-pulse rounded-none" />
              </Avatar>
              <header className="flex flex-col">
                <span className="text-base font-semibold text-accent-foreground">
                  SMB1234
                </span>
                <span className="text-xs text-muted-foreground">A320</span>
              </header>
            </CommandItem>
          </>
        )}

        {page === "airports" && (
          <>
            <CommandItem className="flex-col items-start">
              <span className="text-base font-semibold text-accent-foreground">
                SBGR
              </span>
              <span className="text-xs text-muted-foreground">
                Guarulhos Intl.
              </span>
            </CommandItem>

            <CommandItem className="flex-col items-start">
              <span className="text-base font-semibold text-accent-foreground">
                SBSP
              </span>
              <span className="text-xs text-muted-foreground">
                Congonhas Intl.
              </span>
            </CommandItem>

            <CommandItem className="flex-col items-start">
              <span className="text-base font-semibold text-accent-foreground">
                SBRJ
              </span>
              <span className="text-xs text-muted-foreground">
                Santos Dumont
              </span>
            </CommandItem>
          </>
        )}
      </CommandList>
    </CommandDialog>
  );
}
