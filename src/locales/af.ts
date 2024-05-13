import { siteConfig } from "@/config/site";
export default ({
  common: {
    open: "Maak oop",
    close: "Maak toe",
    joinDiscord: "Sluit aan by ons Discord groep",
    contactSupport: "Kontak hulp",
    comingSoon: "Dit kom binnekort",
    active: "Aktief"
  },
  auth: {
    login: {
      title: "Welkom terug!",
      subtitle: "Teken in by jou profiel aan voort te gaan.",
      email: "E-pos",
      password: "Wagwoord",
      signIn: "Teken in",
      forgotPassword: "Wagwoord vergeet?",
      noAccount: "Geen profiel nie?",
      join: "Sluit nou aan",
      loginError: "Agge nee! Iets het verkeerd gegaan.",
      loginErrorDescription: "An unexpected error ocurred while trying to log in. Please try again later or contact support on Discord."
    },
    join: {
      inviteOnly: "We're sorry, but unfortunately joining is only available to invited users at this time."
    },
    forgotPassword: {
      title: "Forgot your password?",
      subtitle: "Enter your email to reset your password.",
      email: "E-pos",
      sendEmail: "Send recovery email",
      backToLogin: "Remember your password?",
      resetError: "An error occurred while trying to reset your password.",
      resetErrorDescription: "Please try again later or contact support on Discord.",
      resetEmailSent: "Password reset email sent!",
      resetEmailSentIfAccountIsValid: "If the email you entered is associated with a valid account, you will receive a password reset link in your email."
    },
    supportCard: {
      title: "Kort jy hulp?"
    }
  },
  sidebar: {
    map: {
      title: "Wêreld kaart",
      subtitle: "Live network connections"
    },
    events: {
      title: "Events",
      subtitle: "See current and upcoming events"
    },
    friends: {
      title: "Vriende",
      subtitle: "Bestuur jou vriendelys"
    },
    feedback: {
      title: "Terugvoer",
      subtitle: "Help ons om ons dienste te verbeter"
    },
    help: {
      title: "Ondersteun ons",
      subtitle: "Get help with the app"
    },
    changelog: {
      title: "Changelog",
      subtitle: "See what's new in the app"
    },
    profile: {
      title: "Profiel",
      subtitle: "Manage your account settings"
    },
    themeSwitcher: {
      title: "Theme switcher",
      subtitle: "Toggle between light and dark mode"
    }
  },
  map: {
    toolbar: {
      baseMap: {
        tooltip: {
          title: "Base map",
          description: "Switch between different base maps"
        },
        title: "Base map",
        currentlyActive: "Aktief",
        satellite: {
          title: "Satellite",
          description: "Earth details"
        },
        light: {
          title: "Lig",
          description: "Minimaal"
        },
        dark: {
          title: "Donker",
          description: "Night mode with airport diagrams"
        },
        theme: {
          title: "Sync with theme",
          description: "Switch between light and dark based on your system settings"
        }
      },
      networkLayers: {
        tooltip: {
          title: "Network layers",
          description: "Toggle network layers visibility"
        },
        quickActions: {
          title: "Vinnige aksies",
          ivao: {
            title: "IVAO",
            description: "Wys slegs IVAO vlugte en ATCs"
          },
          vatsim: {
            title: "VATSIM",
            description: "Wys slegs Vatsim vlugte en ATCs"
          },
          combineNetworks: {
            title: "Kombineer beide netwerke",
            description: "Show flights and ATCs from all networks"
          },
          hideAll: {
            title: "Hide all",
            description: "Hide all flights and ATC from all networks"
          }
        },
        vatsimLayers: {
          title: "Vatsim layers settings",
          showFlights: {
            title: "Wys vlugte",
            description: "Groen vliegtuie op die kaart"
          },
          showAtcs: {
            title: "Wys ATCs",
            description: "Active air traffic controllers on the network"
          }
        },
        ivaoLayers: {
          title: "IVAO layers settings",
          showFlights: {
            title: "Show flights",
            description: "Blue planes on the map"
          },
          showAtcs: {
            title: "Show ATCs",
            description: "Active air traffic controllers on the network"
          }
        }
      }
    },
    airacCycleBadge: {
      airacCycle: "AIRAC cycle",
      outdatedCycle: {
        title: "Outdated AIRAC cycle",
        description: "Integrate a Navigraph account with an active subscription to get the latest cycle."
      },
      upToDateCycle: {
        title: "Jou AIRAC siklus is op datum",
        description: "Hierdie siklus sal verval in {distance}."
      },
      unknownCycle: {
        title: "Onbekende AIRAC siklus",
        description: "Unable to fetch the current cycle."
      }
    }
  },
  settings: {
    sidebar: {
      title: "Settings",
      profile: "Profile",
      integrations: "Integrations"
    },
    profile: {
      title: "Profile",
      subtitle: "Manage and update your profile settings",
      emailCard: {
        title: "Email",
        cannotChange: "You cannot change your email address"
      },
      nameCard: {
        title: "Name",
        cannotChange: "You cannot change your name",
        emptyState: "Not set"
      },
      avatarCard: {
        title: "Profiel foto",
        subtitle: "Keeping a profile picture helps others recognize you."
      },
      dangerZone: {
        title: "Gevaarlike area",
        deleteAccount: "Verwyder jou rekening en profiel",
        deleteAccountDescription: "Should you decide to delete your account, you will lose access to all of your data. This action cannot be undone and the process may take up to 24 hours."
      }
    },
    integrations: {
      title: "Integrations",
      subtitle: "Connect and sync third-party services to enhance your experience.",
      comingSoonDescription: "More integrations are coming soon."
    }
  },
  integrations: {
    comum: {
      connect: "Connect",
      connected: "Connected",
      unlink: "Unlink",
      changeAccount: "Change account",
      callback: {
        title: "Integrating your {provider} account",
        subtitle: "This process may take a few seconds."
      },
      unstable: "This integration is a recent addition and may not work as expected."
    },
    integrationDetailsTooltip: {
      title: "Integration details",
      accountId: "Account ID"
    },
    ivao: {
      description: "International Virtual Aviation Organisation VZW is a non-profit association which operates a free-of-charge online flight-simulation network"
    },
    vatsim: {
      description: "The Virtual Air Traffic Simulation Network is an online platform that allows flight simulation enthusiasts to connect and fly together."
    },
    navigraph: {
      description: "Provider of aeronautical data for the flight-sim community. "
    }
  },
  onboarding: {
    welcome: {
      hat: "Getting started",
      title: `Welcome to ${siteConfig.name}!`,
      subtitle: "We are excited to have you on board. Let's get you started with a few basic details.",
      getStarted: "Get started"
    },
    integrations: {
      hat: "Sync your details",
      title: "Sync your details",
      subtitle: "Connect your accounts to have a seamless experience.",
      skip: "Continue without syncing"
    },
    finish: {
      hat: "All set!",
      title: "Let's get started?",
      subtitle: `You're all set! Click the button below start using ${siteConfig.name}.`,
      getStarted: "Get started"
    }
  },
  flightDetails: {
    unknownAirline: "Unknown airline",
    unknownCallsign: "Unknown callsign",
    routeDetails: {
      title: "Route",
      subtitle: "Detailed information about the aircraft's route.",
      airport: {
        departure: "Departure",
        arrival: "Arrival",
        alternate: "Alternate",
        alternate2: "Second alternate"
      }
    },
    aircraftDetails: {
      title: "Aircraft details",
      subtitle: "Detailed information about the aircraft.",
      aircraft: {
        registration: "Registration",
        transponder: "Transponder",
        wakeTurbulence: "Wake turbulence",
        photographer: "Photographer"
      }
    },
    crewDetails: {
      title: "Flight crew details",
      subtitle: "Detailed information about the flight crew.",
      crew: {
        pilotInCommand: "Pilot in command"
      }
    },
    analytics: {
      title: "Analytics",
      subtitle: "Data and statistics about the flight in real-time.",
      verticalPathChart: {
        title: "Vertical path",
        subtitle: "Altitude and vertical speed",
        altitude: "Altitude",
        speed: "Ground speed"
      }
    },
    flightPlanDetails: {
      title: "Flight plan details",
      subtitle: "Detailed information about the flight plan.",
      viewTypes: {
        simple: "Simple",
        detailed: "Detailed"
      },
      flightRules: "Flight rules",
      flightType: "Flight type",
      route: "Route",
      remarks: "Remarks",
      icaoFplFormat: "ICAO FPL format"
    },
    notFound: {
      title: "Flight unavailable",
      subtitle: "We couldn't find the flight you were looking for.",
      troubleshooting: {
        title: "Troubleshooting",
        subtitle: "Things you can do to possibly fix it. If this problem persists, please contact our support team.",
        steps: {
          verifyFlightExists: "Make sure the flight is currently flying in one of the supported networks",
          refresh: "Refresh the page",
          checkInternetConnection: "Check your internet connection",
          checkLoginStatus: "Make sure you are logged in"
        }
      },
      systemLogs: {
        title: "System logs",
        subtitle: "The following information might be useful for our support team.",
        code: "Code",
        flightId: "Flight id",
        timestamp: "Timestamp",
        buildVersion: "Build version"
      }
    }
  }
} as const);