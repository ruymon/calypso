"use client";

import { Logo } from "@/components/logo";
import { buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export function Navbar({}) {
  return (
    <div className="flex h-20 w-full items-center justify-between py-2">
      <Logo />
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <Link
        href="/"
        className={buttonVariants({
          size: "sm",
          variant: "outline",
        })}
      >
        Open app
      </Link>
    </div>
  );
}
