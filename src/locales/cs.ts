import { siteConfig } from "@/config/site";
export default ({
  common: {
    open: "Otevřít",
    close: "Zavřít",
    joinDiscord: "Připoj se na náš Discord",
    contactSupport: "Kontaktovat podporu",
    comingSoon: "Již brzy",
    active: "Aktivní"
  },
  auth: {
    login: {
      title: "Welcome back!",
      subtitle: "Log in to your account to continue.",
      email: "Email",
      password: "Password",
      signIn: "Sign in",
      forgotPassword: "Forgot password?",
      noAccount: "No account?",
      join: "Join now",
      loginError: "Oh no! Something went wrong.",
      loginErrorDescription: "An unexpected error ocurred while trying to log in. Please try again later or contact support on Discord."
    },
    join: {
      inviteOnly: "We're sorry, but unfortunately joining is only available to invited users at this time."
    },
    forgotPassword: {
      title: "Forgot your password?",
      subtitle: "Enter your email to reset your password.",
      email: "Email",
      sendEmail: "Send recovery email",
      backToLogin: "Remember your password?",
      resetError: "An error occurred while trying to reset your password.",
      resetErrorDescription: "Please try again later or contact support on Discord.",
      resetEmailSent: "Password reset email sent!",
      resetEmailSentIfAccountIsValid: "If the email you entered is associated with a valid account, you will receive a password reset link in your email."
    },
    supportCard: {
      title: "Need help?"
    }
  },
  sidebar: {
    map: {
      title: "World map",
      subtitle: "Live network connections"
    },
    events: {
      title: "Events",
      subtitle: "See current and upcoming events"
    },
    friends: {
      title: "Friends",
      subtitle: "Manage your friends list"
    },
    feedback: {
      title: "Feedback",
      subtitle: "Help us improve our service"
    },
    help: {
      title: "Support",
      subtitle: "Get help with the app"
    },
    changelog: {
      title: "Changelog",
      subtitle: "See what's new in the app"
    },
    profile: {
      title: "Profile",
      subtitle: "Manage your account settings"
    },
    themeSwitcher: {
      title: "Theme switcher",
      subtitle: "Toggle between light and dark mode"
    }
  },
  map: {
    loading: {
      title: "Loading map",
      subtitle: "This should take less than 10 seconds, depending on your connection"
    },
    toolbar: {
      baseMap: {
        tooltip: {
          title: "Base map",
          description: "Switch between different base maps"
        },
        title: "Base map",
        currentlyActive: "Aktivní",
        satellite: {
          title: "Satellite",
          description: "Earth details"
        },
        light: {
          title: "Light",
          description: "Minimalistic"
        },
        dark: {
          title: "Dark",
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
          title: "Quick actions",
          ivao: {
            title: "IVAO",
            description: "Only show IVAO flights and ATCs"
          },
          vatsim: {
            title: "VATSIM",
            description: "Only show Vatsim flights and ATCs"
          },
          combineNetworks: {
            title: "Combine networks",
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
            title: "Show flights",
            description: "Green planes on the map"
          },
          showAtcs: {
            title: "Show ATCs",
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
      },
      extraLayers: {
        tooltip: {
          title: "Extra layers",
          description: "Toggle extra layers visibility"
        },
        title: "Extra layers",
        airports: {
          title: "Airports",
          description: "Show airports on the map"
        },
        weatherRadar: {
          title: "Weather radar",
          description: "Show weather radar on the map"
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
        title: "Your AIRAC cycle is up to date",
        description: "This cycle will expire in {distance}."
      },
      unknownCycle: {
        title: "Unknown AIRAC cycle",
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
        title: "Profile picture",
        subtitle: "Keeping a profile picture helps others recognize you."
      },
      dangerZone: {
        title: "Danger zone",
        deleteAccount: "Delete your account",
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