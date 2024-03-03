import { Separator } from "@/components/ui/separator";
import { Fragment } from "react";
import { settingSidebar } from "./helper";
import { SettingSidebarItem } from "./sidebar-item";

interface SettingSidebarProps {}

export function SettingSidebar({}: SettingSidebarProps) {
  return (
    <nav className="flex w-full max-w-52 flex-col gap-6">
      {settingSidebar.map(({ title, items }, idx) => {
        const isLast = idx === settingSidebar.length - 1;
        return (
          <Fragment key={title}>
            <section className="flex flex-col gap-1">
              <span className="text-xs font-bold uppercase text-muted-foreground">
                {title}
              </span>
              {items.map((item) => (
                <SettingSidebarItem key={item.href} {...item} />
              ))}
            </section>

            {!isLast && <Separator className="bg-accent" />}
          </Fragment>
        );
      })}
    </nav>
  );
}
