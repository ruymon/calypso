import { Separator } from "@/components/ui/separator";
import { settingSidebar } from "@/config/settings";
import { Fragment } from "react";
import { SettingSidebarItem } from "./settings-sidebar-item";

interface SettingSidebarProps {}

export function SettingSidebar({}: SettingSidebarProps) {
  return (
    <nav className="flex flex-col gap-6 w-full max-w-52">
      {settingSidebar.map(({ title, items }, idx) => {
        const isLast = idx === settingSidebar.length - 1;
        return (
          <Fragment key={title}>
            <section className="flex flex-col gap-2.5">
              <span className="text-accent text-xs font-bold uppercase">
                {title}
              </span>
              {items.map((item) => (
                <SettingSidebarItem key={item.href} {...item} />
              ))}
            </section>

            {!isLast && <Separator className="bg-accent/25" />}
          </Fragment>
        );
      })}
    </nav>
  );
}
