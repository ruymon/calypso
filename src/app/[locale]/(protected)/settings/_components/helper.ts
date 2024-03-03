export interface SettingsSidebarItem {
  title: string;
  label: string;
  href: string;
}

export interface SettingsSidebarCategory {
  title: string;
  items: SettingsSidebarItem[];
}

type SettingsSidebar = SettingsSidebarCategory[];

export const settingSidebar: SettingsSidebar = [
  {
    title: "User settings",
    items: [
      {
        title: "My account",
        label: "Change your account settings",
        href: "/settings",
      },
      {
        title: "Connections",
        label: "",
        href: "/settings/connections",
      },
    ],
  },
  {
    title: "Billing settings",
    items: [
      {
        title: "PRO",
        label: "Change your account settings",
        href: "/settings/pro",
      },
    ],
  },
];
