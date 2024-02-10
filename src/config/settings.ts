
export interface SettingsSidebarItem {
  title: string
  label: string
  href: string
}

export interface SettingsSidebarCategory {
  title: string
  items: SettingsSidebarItem[]
}

type SettingsSidebar = SettingsSidebarCategory[]

export const settingSidebar: SettingsSidebar = [
  {
    'title': 'User settings',
    'items': [
      {
        'title': 'My account',
        'label': 'Change your account settings',
        'href': '#'
      },
      {
        'title': 'Export / import data',
        'label': '',
        'href': '#'
      },
      {
        'title': 'Privacy',
        'label': '',
        'href': '#'
      },
      {
        'title': 'Friend requests',
        'label': '',
        'href': '#'
      },
      {
        'title': 'Security',
        'label': '',
        'href': '#'
      },
      {
        'title': 'Connections',
        'label': '',
        'href': '#'
      }
    ]
  },
  {
    'title': 'Billing settings',
    'items': [
      {
        'title': 'Premium',
        'label': 'Change your account settings',
        'href': '#'
      },
      {
        'title': 'Billing',
        'label': '',
        'href': '#'
      }
    ]
  }
]