import { CompassIcon, LucideIcon, SettingsIcon } from "lucide-react";

export interface SidebarItem {
  title: string;
  label: string;
  icon: LucideIcon;
  href: string;
}

export type SidebarItems = SidebarItem[];

export const sidebarItems: SidebarItems = [
  {
    title: "World map",
    href: "/",
    icon: CompassIcon,
    label: "Live network connections",
  },
  // {
  //   title: "Friends",
  //   href: "/live",
  //   icon: UsersIcon,
  //   label: "Manage your friends list",
  // },
  // {
  //   title: "Events",
  //   href: '/app/events',
  //   icon: CalendarSearchIcon,
  //   label: "Check upcoming events among the networks"
  // },
  // {
  //   title: "Real flight plans",
  //   href: '/app/flights',
  //   icon: RouteIcon,
  //   label: "Find real life flights"
  // },
  // {
  //   title: "Airports",
  //   href: '/app/airports',
  //   icon: TowerControlIcon,
  //   label: "Check airport information"
  // },
  // {
  //   title: "Network status",
  //   href: '/app/network-status',
  //   icon: PieChartIcon,
  //   label: "Monitor and compare connections among networks"
  // },
  {
    title: "Settings",
    href: "/settings",
    icon: SettingsIcon,
    label: "Manage your account settings",
  },
];
