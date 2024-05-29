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
      forgotPassword: "Het jy jou wagwoord vergeet?",
      noAccount: "Geen profiel nie?",
      join: "Sluit nou aan",
      loginError: "Agge nee! Iets het verkeerd gegaan.",
      loginErrorDescription: "'n Onverwagte probleem het voorgekom tydens die in teken proses. Probeer asseblief later weer of kontak vir hulp op Discord."
    },
    join: {
      inviteOnly: "Ons is jammer, maar tans is aansluiting ongelukkig slegs beskikbaar vir enkele uitgenooide gebruikers."
    },
    forgotPassword: {
      title: "Het jy jou wagwoord vergeet?",
      subtitle: "Tik jou e-pos adres in om jou wagwoord weer te regenereer.",
      email: "E-pos adres",
      sendEmail: "Stuur 'n e-pos om jou profiel te red",
      backToLogin: "Onthou jy jou wagwoord?",
      resetError: "'n Probleem het voorgekom tydens die proses om jou wagwoord te regenereer.",
      resetErrorDescription: "Probeer asseblief later weer, of kontak die hulp departement op Discord.",
      resetEmailSent: "Wagwoord regenerasie e-pos gestuur!",
      resetEmailSentIfAccountIsValid: "Indien die e-pos adres wat jy ingevoer het met 'n geldige profiel geassosieer word, sal jy 'n in jou e-posse, 'n skakel ontvang om jou wagwoord te regenereer."
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
      subtitle: "Kry hulp met die toep / webwerf"
    },
    changelog: {
      title: "Geskiedenis van alle veranderinge aan die toep / webwerf",
      subtitle: "Kyk wat nuut is in die toep / webwerf"
    },
    profile: {
      title: "Profiel",
      subtitle: "Bestuur jou profiel instellings"
    },
    themeSwitcher: {
      title: "Kleur verstellings",
      subtitle: "Verander tussen lig en donker"
    }
  },
  map: {
    loading: {
      title: "Dit laai tans die kaart",
      subtitle: "Dit behoort minder as 10 sekondes te neem, afhangend van jou internet spoed"
    },
    toolbar: {
      baseMap: {
        tooltip: {
          title: "Onderste kaart",
          description: "Wissel tussen kaarte"
        },
        title: "Onderste kaart",
        currentlyActive: "Aktief",
        satellite: {
          title: "Sateliet",
          description: "Opsie met die aarde se besonderhede"
        },
        light: {
          title: "Lig",
          description: "Minimale opsie"
        },
        dark: {
          title: "Donker",
          description: "Donker opsie met lughawe diagramme"
        },
        theme: {
          title: "Sinchroniseer met jou toestel",
          description: "Verander tussen lig en donker gebaseer op jou toestel se instellings"
        }
      },
      networkLayers: {
        tooltip: {
          title: "Netwerk lae",
          description: "Verstel netwerk lae wat sigbaar is"
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
          title: "Ekstra lae",
          description: "Verstel die ekstra lae se sigbaarheid"
        },
        title: "Ekstra lae",
        airports: {
          title: "Luhhawens",
          description: "Wys lughawens op die kaart"
        },
        weatherRadar: {
          title: "Weer radar",
          description: "Wys die weer radar op die kaart"
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
      subtitle: "Verander en dateer profiel instellings op",
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
      comingSoonDescription: "Nog meer intergrasies kom binnekort."
    }
  },
  integrations: {
    comum: {
      connect: "Verbind",
      connected: "Suksesvol verbind",
      unlink: "Ontkoppel",
      changeAccount: "Verander profiel",
      callback: {
        title: "Integreer jou {provider} profiel",
        subtitle: "Hierdie proses mag dalk 'n paar sekondes duur."
      },
      unstable: "Hierdie integrasie is onlangs bygevoeg en dit mag dalk nie werk soos wat U verwag nie."
    },
    integrationDetailsTooltip: {
      title: "Integrasie besonderhede",
      accountId: "Profiel ID"
    },
    ivao: {
      description: "Die \"Internation Virtual Aviation Organisation\" (VZW) is 'n nie-winsgewende vereniging wat 'n gratis, aanlyn vliegsimulasie netwerk aan bied"
    },
    vatsim: {
      description: "Die \"Virtual Air Traffic Simulation Network\" is 'n aanlyn platform wat vlugsimulasie-entoesiaste toelaat om te verbind en saam te vlieg."
    },
    navigraph: {
      description: "Verskaffer van lugvaartdata vir die vliegsimulasie-gemeenskap. "
    }
  },
  onboarding: {
    welcome: {
      hat: "Begin hier",
      title: `Welkom by ${siteConfig.name}!`,
      subtitle: "Ons is bly om jou hier te hê. Kom ons begin met 'n paar maklike besonderhede.",
      getStarted: "Kom ons begin"
    },
    integrations: {
      hat: "Sinkroniseer jou besonderhede",
      title: "Sinkroniseer jou besonderhede",
      subtitle: "Koppel al jou profiele om 'n naatlose en maklike ervaring te hê.",
      skip: "Begin sonder om te sinkroniseer"
    },
    finish: {
      hat: "Alles is reg!",
      title: "Reg om te begin?",
      subtitle: `Jy is heeltemaal reg! Drul die knoppie hier onder om ${siteConfig.name} te begin gebruik.`,
      getStarted: "Kom ons begin"
    }
  },
  flightDetails: {
    unknownAirline: "Onbekende lugredery",
    unknownCallsign: "Onbekende roepsein",
    routeDetails: {
      title: "Roete",
      subtitle: "Gedetailleerde inligting oor die vliegtuig se roete.",
      airport: {
        departure: "Vertrek",
        arrival: "Aankoms",
        alternate: "Alternatief",
        alternate2: "Tweede alternatief"
      }
    },
    aircraftDetails: {
      title: "Vliegtuig besonderhede",
      subtitle: "Gedetailleerde inligting oor die vliegtuig.",
      aircraft: {
        registration: "Registrasie",
        transponder: "Transponeerder",
        wakeTurbulence: "Turbulensie kategorie",
        photographer: "Fotograaf"
      }
    },
    crewDetails: {
      title: "Inligting oor die lugbemanning",
      subtitle: "Gedetailleerde inligting oor die lugbemanning.",
      crew: {
        pilotInCommand: "Vlieënier in beheer"
      }
    },
    analytics: {
      title: "Analise",
      subtitle: "Lewendige inligting en statistieke oor die vlug.",
      verticalPathChart: {
        title: "Vertikale pad",
        subtitle: "Hoogte en vertikale spoed",
        altitude: "Hoogte",
        speed: "Grond spoed"
      }
    },
    flightPlanDetails: {
      title: "Vlugplan besonderhede",
      subtitle: "Gedetailleerde inligting oor die vlugplan.",
      viewTypes: {
        simple: "Maklike",
        detailed: "Gedetailleerd"
      },
      flightRules: "Vlug reëls",
      flightType: "Vlug tipe",
      route: "Roete",
      remarks: "Opmerkings",
      icaoFplFormat: "ICAO FPL formaat"
    },
    notFound: {
      title: "Vlug onbeskikbaar",
      subtitle: "Ons kon ongelukkig nie die vlug vind wat jy gesoek het nie.",
      troubleshooting: {
        title: "Probleemoplossing",
        subtitle: "Dinge wat jy kan probeer om die probleem op te los. Indien die probleem aanhou, kontak asseblief ons ondersteunings-en hulpspan.",
        steps: {
          verifyFlightExists: "Maak seker die vlug vlieg tans op een van die ondersteunde netwerke",
          refresh: "Herlaai die toep en webwerf",
          checkInternetConnection: "Kyk na jou internet konneksie",
          checkLoginStatus: "Maak seker jy is ingeteken"
        }
      },
      systemLogs: {
        title: "Stelsel logs",
        subtitle: "Die volgende inligting mag dalk van waarde wees vir ons hulp span.",
        code: "Kode",
        flightId: "Vlug id",
        timestamp: "Tydstempel",
        buildVersion: "Weergawe van die toep / webwerf"
      }
    }
  }
} as const);