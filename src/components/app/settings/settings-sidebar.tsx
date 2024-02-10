import { Separator } from "@/components/ui/separator";
import { settingSidebar } from "@/config/settings";
import { Fragment } from "react";
import { SettingSidebarItem } from "./settings-sidebar-item";

interface SettingSidebarProps { };

export function SettingSidebar({ }: SettingSidebarProps) {
  return (
    <nav className="flex flex-col gap-6 w-1/6">
      {settingSidebar.map(({ title, items }, idx) => {
        const isLast = idx === settingSidebar.length - 1;
        return (
          <Fragment key={title}>
            <section className="flex flex-col gap-2">
              <span className="text-muted-foreground text-xs font-bold uppercase">{title}</span>
              {items.map(item => <SettingSidebarItem key={item.href} {...item} />)}
            </section>

            {!isLast && <Separator className="bg-accent" />}
          </Fragment>
        )
      })}
    </nav>
  );
};
