import { siteConfig } from "@/config/site";
export default ({
  common: {
    open: "Maak oop",
    close: "Maak toe",
    joinDiscord: "Sluit aan by ons Discord groep",
    contactSupport: "Kontak ons vir hulp",
    comingSoon: "Dit kom binnekort",
    active: "Aktief"
  },
  auth: {
    login: {
      title: "Welkom terug!",
      subtitle: "Teken in by jou profiel aan voort te gaan.",
      email: "E-pos adres",
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
      title: "Het jy jou wagwoord vergeet?",
      subtitle: "Tik jou e-pos adres in om jou wagwoord weer te hergenereer.",
      email: "E-pos adres",
      sendEmail: "Send recovery email",
      backToLogin: "Onthou jy jou wagwoord?",
      resetError: "An error occurred while trying to reset your password.",
      resetErrorDescription: "Probeer asseblief later weer, of kontak die hulp departement op Discord.",
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
      subtitle: "Lewendige netwerk konneksies"
    },
    events: {
      title: "Gebeurtenisse",
      subtitle: "Kyk na die huidige en toekomstige gebeure"
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
      title: "Hulp",
      subtitle: "Kry hulp met die toep"
    },
    changelog: {
      title: "Changelog",
      subtitle: "Kyk wat nuut is in die toep"
    },
    profile: {
      title: "Profiel",
      subtitle: "Bestuur jou profiel instellings"
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
        currentlyActive: "Aktief",
        satellite: {
          title: "Sateliet",
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
          title: "Netwerk lae",
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
            description: "Wys slegs VATSIM vlugte en ATCs"
          },
          combineNetworks: {
            title: "Kombineer beide netwerke",
            description: "Wys alle vligte en ATCs van alle netwerke"
          },
          hideAll: {
            title: "Steek alles weg",
            description: "Steek alle vlugte en ATCs van alle netwerke weg"
          }
        },
        vatsimLayers: {
          title: "Vatsim lae instellings",
          showFlights: {
            title: "Wys vlugte",
            description: "Groen vliegtuie op die kaart"
          },
          showAtcs: {
            title: "Wys ATCs",
            description: "Aktiewe lugverkeerbeheerders op die netwerk"
          }
        },
        ivaoLayers: {
          title: "IVAO lae instellings",
          showFlights: {
            title: "Wys vlugte",
            description: "Blou vliegtuie op die kaart"
          },
          showAtcs: {
            title: "Wys ATCs",
            description: "Aktiewe lugverkeerbeheerders op die netwerke"
          }
        }
      },
      extraLayers: {
        tooltip: {
          title: "Netwerk lae",
          description: "Toggle network layers visibility"
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
      airacCycle: "AIRCAC siklus",
      outdatedCycle: {
        title: "Vervale AIRAC siklus",
        description: "Integreer 'n Navigraph profiel met 'n aktiewe subskrubsie om die nuutste siklus te kry."
      },
      upToDateCycle: {
        title: "Jou AIRAC siklus is op datum",
        description: "Hierdie siklus sal verval in {distance}."
      },
      unknownCycle: {
        title: "Onbekende AIRAC siklus",
        description: "Ongelukkig kan ons nie die huidige siklus kry nie."
      }
    }
  },
  settings: {
    sidebar: {
      title: "Instellings",
      profile: "Profiel",
      integrations: "Intergrasies"
    },
    profile: {
      title: "Profiel",
      subtitle: "Verander en dateer profielinstellings op",
      emailCard: {
        title: "E-pos adres",
        cannotChange: "Jy kan nie jou e-pos adres verander nie"
      },
      nameCard: {
        title: "Naam",
        cannotChange: "Jy kan nie jou naam verander nie",
        emptyState: "Nie gestel nie of nie gekies nie"
      },
      avatarCard: {
        title: "Profiel foto",
        subtitle: "'n Profiel foto help ander mense om jou uit te ken."
      },
      dangerZone: {
        title: "Gevaarlike area",
        deleteAccount: "Verwyder jou rekening en profiel",
        deleteAccountDescription: "Indien jy besluit om jou profiel te verwyder, sal jy toegang tot all jou geskiedenis en data verloor. Hierdie proses is permanent, en kan nie teruggekeer word nie. Die proses kan tot 24 ure neem om te voltooi."
      }
    },
    integrations: {
      title: "Integrasies",
      subtitle: "Verbind, en sinchroniseer derdeparty-dienste om jou evaring te verbeter.",
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
      hat: "Alles is reg!",
      title: "Reg om te begin?",
      subtitle: `You're all set! Click the button below start using ${siteConfig.name}.`,
      getStarted: "Kom ons begin"
    }
  },
  flightDetails: {
    unknownAirline: "Onbekende lugredery",
    unknownCallsign: "Onbekende roepsein",
    routeDetails: {
      title: "Roete",
      subtitle: "Detailed information about the aircraft's route.",
      airport: {
        departure: "Vertrek",
        arrival: "Aankoms",
        alternate: "Alternatiewe",
        alternate2: "Tweede alternatiewe"
      }
    },
    aircraftDetails: {
      title: "Vliegtuig besonderhede",
      subtitle: "Detailed information about the aircraft.",
      aircraft: {
        registration: "Registrasie",
        transponder: "Transponder",
        wakeTurbulence: "Wake turbulence",
        photographer: "Fotograaf"
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
        altitude: "Hoogte",
        speed: "Grond spoed"
      }
    },
    flightPlanDetails: {
      title: "Vlugplan besonderhede",
      subtitle: "Detailed information about the flight plan.",
      viewTypes: {
        simple: "Maklike",
        detailed: "Detailed"
      },
      flightRules: "Flight rules",
      flightType: "Vlug tipe",
      route: "Roete",
      remarks: "Remarks",
      icaoFplFormat: "ICAO FPL format"
    },
    notFound: {
      title: "Vlug onbeskikbaar",
      subtitle: "We couldn't find the flight you were looking for.",
      troubleshooting: {
        title: "Troubleshooting",
        subtitle: "Things you can do to possibly fix it. If this problem persists, please contact our support team.",
        steps: {
          verifyFlightExists: "Make sure the flight is currently flying in one of the supported networks",
          refresh: "Refresh the page",
          checkInternetConnection: "Kyk na jou internet konneksie",
          checkLoginStatus: "Maak seker jy is ingeteken"
        }
      },
      systemLogs: {
        title: "System logs",
        subtitle: "Die volgende inligting mag dalk van waarde wees vir ons hulp span.",
        code: "Kode",
        flightId: "Vlug id",
        timestamp: "Tydstempel",
        buildVersion: "Build version"
      }
    }
  }
} as const);