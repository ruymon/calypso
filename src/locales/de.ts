import { siteConfig } from "@/config/site";
export default ({
  common: {
    open: "Öffnen",
    close: "Schließen",
    joinDiscord: "Unserem Discord beitreten",
    contactSupport: "Support kontaktieren",
    comingSoon: "Demnächst verfügbar",
    active: "Aktiv"
  },
  auth: {
    login: {
      title: "Willkommen zurück!",
      subtitle: "Melden Sie sich bei Ihrem Konto an, um fortzufahren.",
      email: "E-Mail",
      password: "Passwort",
      signIn: "Einloggen",
      forgotPassword: "Passwort vergessen?",
      noAccount: "Kein Konto?",
      join: "Jetzt beitreten",
      loginError: "Oh nein! Etwas ist schiefgelaufen.",
      loginErrorDescription: "Ein unerwarteter Fehler ist aufgetreten, beim Versuch Sie einzuloggen. Bitte versuchen Sie es Später nochmals, oder kontaktieren Sie den Support auf Discord."
    },
    join: {
      inviteOnly: "Leider ist der Zugriff nur auf eingeladene Benutzer derzeit gewährt."
    },
    forgotPassword: {
      title: "Haben sie Ihr Passwort vergessen?",
      subtitle: "Geben Sie Ihre E-Mail-Adresse ein, um Ihr Passwort zurückzusetzen.",
      email: "E-Mail",
      sendEmail: "Wiederherstellungs-E-Mail senden",
      backToLogin: "Erinnern Sie sich an Ihr Passwort?",
      resetError: "Beim Versuch Ihr Passwort zurückzusetzen, ist ein Fehler aufgetreten.",
      resetErrorDescription: "Bitte Versuchen Sie es später nochmals, oder kontaktieren sie den Support auf Discord.",
      resetEmailSent: "E-Mail zur Wiederherstellung ihres Passwortes gesendet!",
      resetEmailSentIfAccountIsValid: "Wenn die von Ihnen eingegebene E-Mail mit einem gültigen Konto verknüpft ist, erhalten Sie einen Link zum Zurücksetzen Ihres Passworts per E-Mail."
    },
    supportCard: {
      title: "Brauchen Sie Hilfe?"
    }
  },
  sidebar: {
    map: {
      title: "Weltkarte",
      subtitle: "Live-Netzwerkverbindungen"
    },
    events: {
      title: "Veranstaltungen",
      subtitle: "Siehe aktuelle und kommende Veranstaltungen"
    },
    friends: {
      title: "Freunde",
      subtitle: "Verwalten Sie Ihre Freundesliste"
    },
    feedback: {
      title: "Feedback",
      subtitle: "Helfen Sie uns, unsere Dienstleistung zu verbessern"
    },
    help: {
      title: "Support",
      subtitle: "Hilfe mit der App erhalten"
    },
    changelog: {
      title: "Changelog",
      subtitle: "Sehen Sie an, was neu in der App zugefügt worden ist"
    },
    profile: {
      title: "Profil",
      subtitle: "Verwalten Sie Ihre Kontoeinstellungen"
    },
    themeSwitcher: {
      title: "Theme switcher",
      subtitle: "Zwischen Hell- und Dunkelmodus umschalten"
    }
  },
  map: {
    loading: {
      title: "Karte wird geladen",
      subtitle: "Dies sollte weniger als 10 Sekunden dauern, abhängig von Ihrer Netzwerkverbindung"
    },
    toolbar: {
      baseMap: {
        tooltip: {
          title: "Basiskarte",
          description: "Zwischen verschiedenen Basiskarten umschalten"
        },
        title: "Basiskarte",
        currentlyActive: "Aktiv",
        satellite: {
          title: "Satellitenbild",
          description: "Weltdetails"
        },
        light: {
          title: "Hell",
          description: "Minimalistisch"
        },
        dark: {
          title: "Dunkel",
          description: "Nachtmodus mit Flughafendiagramme"
        },
        theme: {
          title: "Sync with theme",
          description: "Umschalten zwischen hell und dunkel je nach Systemeinstellung"
        }
      },
      networkLayers: {
        tooltip: {
          title: "Netzwerkebenen",
          description: "Sichtbarkeit der Netzwerkebenen umschalten"
        },
        quickActions: {
          title: "Schnellzugriff",
          ivao: {
            title: "IVAO",
            description: "Nur IVAO-Flüge und -Lotsen anzeigen"
          },
          vatsim: {
            title: "VATISM",
            description: "Nur Vatism Flüge und ATCs anzeigen"
          },
          combineNetworks: {
            title: "Netzwerke kombinieren",
            description: "Flüge und ATCs von allen Netzwerken anzeigen"
          },
          hideAll: {
            title: "Alle ausblenden",
            description: "Alle Flüge und ATCs von allen Netzwerken ausblenden"
          }
        },
        vatsimLayers: {
          title: "Vatism Ebeneneinstellungen",
          showFlights: {
            title: "Flüge anzeigen",
            description: "Grüne Flugzeuge auf der Karte"
          },
          showAtcs: {
            title: "ATCs anzeigen",
            description: "Aktive Fluglotsen auf dem Netzwerk"
          }
        },
        ivaoLayers: {
          title: "IVAO Ebeneneinstellungen",
          showFlights: {
            title: "Flüge anzeigen",
            description: "Blaue Flugzeuge auf der Karte"
          },
          showAtcs: {
            title: "ATCs anzeigen",
            description: "Aktive Fluglotsen auf dem Netzwerk"
          }
        }
      },
      extraLayers: {
        tooltip: {
          title: "Zusätzliche Ebenen",
          description: "Sichtbarkeit der zusätzlichen Ebenen umschalten"
        },
        title: "Zusätzliche Ebenen",
        airports: {
          title: "Flughäfen",
          description: "Flughäfen auf der Karte anzeigen"
        },
        weatherRadar: {
          title: "Wetterradar",
          description: "Wetterradar auf der Karte anzeigen"
        }
      }
    },
    airacCycleBadge: {
      airacCycle: "AIRAC-Zyklus",
      outdatedCycle: {
        title: "Veralteter AIRAC-Zyklus",
        description: "Integrieren Sie ein Navigraph-Konto mit einem aktiven Abonnement, um den neuesten Zyklus zu erhalten."
      },
      upToDateCycle: {
        title: "Ihr AIRAC-Zyklus ist auf dem neuesten Stand",
        description: "This cycle will expire in {distance}."
      },
      unknownCycle: {
        title: "Unbekannter AIRAC-Zyklus",
        description: "Der aktuelle Zyklus kann nicht abgerufen werden."
      }
    }
  },
  settings: {
    sidebar: {
      title: "Einstellungen",
      profile: "Profil",
      integrations: "Integrationen"
    },
    profile: {
      title: "Profil",
      subtitle: "Verwalten und Aktualisieren Ihrer Profileinstellungen",
      emailCard: {
        title: "E-Mail",
        cannotChange: "Sie können ihre E-Mail-Adresse nicht ändern"
      },
      nameCard: {
        title: "Name",
        cannotChange: "Sie können Ihr Name nicht ändern",
        emptyState: "Nicht festgelegt"
      },
      avatarCard: {
        title: "Profilbild",
        subtitle: "Ein Profilbild hilft anderen, Sie zu erkennen."
      },
      dangerZone: {
        title: "Gefahrenzone",
        deleteAccount: "Konto löschen",
        deleteAccountDescription: "Sollten Sie sich entscheiden, Ihr Konto zu löschen, verlieren Sie den Zugriff auf alle Ihre Daten. Diese Aktion kann nicht rückgängig gemacht werden und der Vorgang kann bis zu 24 Stunden dauern."
      }
    },
    integrations: {
      title: "Integrationen",
      subtitle: "Verbinden und synchronisieren Sie Dienste von Drittanbietern, um Ihr Erlebnis zu verbessern.",
      comingSoonDescription: "Weitere Integrationen kommen bald."
    }
  },
  integrations: {
    comum: {
      connect: "Verbinden",
      connected: "Verbunden",
      unlink: "Trennen",
      changeAccount: "Konto wechseln",
      callback: {
        title: "Integration ihres {provider}-Kontos",
        subtitle: "Dieser Prozess kann einige Sekunden dauern."
      },
      unstable: "Diese Integration wurde erst kürzlich zugefügt, und funktioniert möglicherweise nicht wie erwartet."
    },
    integrationDetailsTooltip: {
      title: "Integrationsdetails",
      accountId: "Konto ID"
    },
    ivao: {
      description: "International Virtual Aviation Organisation VZW ist ein gemeinnütziger Verein, der ein kostenloses Online-Flugsimulationsnetz betreibt"
    },
    vatsim: {
      description: "Das Virtual Air Traffic Simulation Network ist eine Online-Plattform, die es Flugsimulationsbegeisterten ermöglicht, sich zu vernetzen und gemeinsam zu fliegen."
    },
    navigraph: {
      description: "Anbieter von aeronautischen Daten für die Flugsimulationsgemeinschaft. "
    }
  },
  onboarding: {
    welcome: {
      hat: "Erste Schritte",
      title: `Welcome to ${siteConfig.name}!`,
      subtitle: "Wir freuen uns, Sie an Bord zu haben. Lassen Sie uns mit ein paar grundlegenden Details beginnen.",
      getStarted: "Los geht's"
    },
    integrations: {
      hat: "Synchronisieren Sie Ihre Daten",
      title: "Synchronisieren Sie Ihre Daten",
      subtitle: "Verknüpfen Sie Ihre Konten, um ein reibungsloses Erlebnis zu haben.",
      skip: "Weiter ohne Synchronisierung"
    },
    finish: {
      hat: "Alles startklar!",
      title: "Fangen wir an?",
      subtitle: `You're all set! Click the button below start using ${siteConfig.name}.`,
      getStarted: "Los geht's"
    }
  },
  flightDetails: {
    unknownAirline: "Unbekannte Fluggesellschaft",
    unknownCallsign: "Unbekanntes Rufzeichen",
    routeDetails: {
      title: "Route",
      subtitle: "Detaillierte Informationen über die Flugroute des Flugzeugs.",
      airport: {
        departure: "Abflug",
        arrival: "Ankunft",
        alternate: "Alternate",
        alternate2: "Second alternate"
      }
    },
    aircraftDetails: {
      title: "Details zum Luftfahrzeug",
      subtitle: "Detaillierte Informationen über das Flugzeug.",
      aircraft: {
        registration: "Registrierung",
        transponder: "Transponder",
        wakeTurbulence: "Wirbelschleppen",
        photographer: "Fotograf"
      }
    },
    crewDetails: {
      title: "Angaben zur Flugbesatzung",
      subtitle: "Detaillierte Informationen über die Flugbesatzung.",
      crew: {
        pilotInCommand: "Pilot im Kommando"
      }
    },
    analytics: {
      title: "Analytics",
      subtitle: "Daten und Statistiken über den Flug in Echtzeit.",
      verticalPathChart: {
        title: "Vertikaler Pfad",
        subtitle: "Höhe und vertikale Geschwindigkeit",
        altitude: "Höhenlage",
        speed: "Bodengeschwindigkeit"
      }
    },
    flightPlanDetails: {
      title: "Details zum Flugplan",
      subtitle: "Detaillierte Informationen über den Flugplan.",
      viewTypes: {
        simple: "Simpel",
        detailed: "Detailliert"
      },
      flightRules: "Flugregeln",
      flightType: "Flugtyp",
      route: "Route",
      remarks: "Bemerkungen",
      icaoFplFormat: "ICAO FPL-Format"
    },
    notFound: {
      title: "Flug nicht verfügbar",
      subtitle: "Wir konnten den von Ihnen gesuchten Flug nicht finden.",
      troubleshooting: {
        title: "Troubleshooting",
        subtitle: "Was Sie tun können, um das Problem zu beheben. Wenn dieses Problem weiterhin besteht, wenden Sie sich bitte an unser Support-Team.",
        steps: {
          verifyFlightExists: "Stellen Sie sicher, dass der Flug derzeit in einem der unterstützten Netze stattfindet",
          refresh: "Aktualisieren Sie die Seite",
          checkInternetConnection: "Überprüfen Sie Ihre Internetverbindung",
          checkLoginStatus: "Stellen Sie sicher, dass Sie eingeloggt sind"
        }
      },
      systemLogs: {
        title: "System Logs",
        subtitle: "Die folgenden Informationen könnten für unser Support-Team nützlich sein.",
        code: "Code",
        flightId: "Flugnummer",
        timestamp: "Zeitstempel",
        buildVersion: "Build-Version"
      }
    }
  }
} as const);