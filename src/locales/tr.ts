import { siteConfig } from "@/config/site";
export default ({
  common: {
    open: "Aç",
    close: "Kapat",
    joinDiscord: "Discord kanalımıza katıl",
    contactSupport: "Destek",
    comingSoon: "Çok yakında",
    active: "Aktif"
  },
  auth: {
    login: {
      title: "Hoşgeldin!",
      subtitle: "Devam etmek için giriş yap.",
      email: "Email",
      password: "Şifre",
      signIn: "Giriş yap",
      forgotPassword: "Şifremi unuttum?",
      noAccount: "Hesabın mı yok?",
      join: "Kayıt ol",
      loginError: "Olamaz! Ters giden bir şeyler var.",
      loginErrorDescription: "Giriş yapmaya çalışırken beklenmeyen bir hata oluştu. Lütfen daha sonra tekrar dene veya Discord üzerinden destek al."
    },
    join: {
      inviteOnly: "Özür dileriz, şimdilik üyelik sadece davet edilen kullanıcılara açık."
    },
    forgotPassword: {
      title: "Şifremi unuttum?",
      subtitle: "Şifreni sıfırlamak için email adresini gir.",
      email: "Email",
      sendEmail: "Kurtarma email'i gönder",
      backToLogin: "Şifreni mi hatırladın?",
      resetError: "Şifreni sıfırlarken bir hata oluştu.",
      resetErrorDescription: "Lütfen daha sonra tekrar dene veya Discord üzerinden destek al.",
      resetEmailSent: "Şifre sıfırlama email'i gönderildi!",
      resetEmailSentIfAccountIsValid: "Girdiğin email adresi üyelik ile uyuşuyorsa şifre sıfırlama linkini email'inde bulacaksın."
    },
    supportCard: {
      title: "Yardıma mı ihtiyacın var?"
    }
  },
  sidebar: {
    map: {
      title: "Dünya haritası",
      subtitle: "Canlı bağlantılar"
    },
    events: {
      title: "Etkinlikler",
      subtitle: "Şu anki ve gelecekteki etkinliklere bak"
    },
    friends: {
      title: "Arkadaşlar",
      subtitle: "Arkadaş listeni düzenle"
    },
    feedback: {
      title: "Geribildirim",
      subtitle: "Hizmetimizi geliştirmemize yardımcı ol"
    },
    help: {
      title: "Destek",
      subtitle: "Uygulama hakkında yardım al"
    },
    changelog: {
      title: "Değişiklik listesi",
      subtitle: "Uygulamadaki yenilikleri gör"
    },
    profile: {
      title: "Profil",
      subtitle: "Hesabını yönet"
    },
    themeSwitcher: {
      title: "Tema değiştirici",
      subtitle: "Parlak ve karanlık temalar arasında geçiş yap"
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
          title: "Harita tabanı",
          description: "Farklı harita tabanlarını seç"
        },
        title: "Harita tabanı",
        currentlyActive: "Aktif",
        satellite: {
          title: "Uydu Görüntüsü",
          description: "Yeryüzü Detayları"
        },
        light: {
          title: "Parlak",
          description: "Minimalistik"
        },
        dark: {
          title: "Karanlık",
          description: "Havalimanları diagramlarını içeren karanlık tema"
        },
        theme: {
          title: "Tema ile senkronize et",
          description: "Bilgisayar tema ayarlarına göre parlak ve karanlık tema"
        }
      },
      networkLayers: {
        tooltip: {
          title: "Network Katmanları",
          description: "Farklı network katmanlarını göster/gizle"
        },
        quickActions: {
          title: "Kısayollar",
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
      profile: "Profil",
      integrations: "Integrations"
    },
    profile: {
      title: "Profil",
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
      subtitle: "Seni aramızda görmekten mutluyuz. Birkaç basit bilgi ile başlayalım.",
      getStarted: "Başla"
    },
    integrations: {
      hat: "Bilgilerini eşle",
      title: "Bilgilerini eşle",
      subtitle: "Kusursuz bir deneyim için hesaplarını bağla.",
      skip: "Eşlemeden devam et"
    },
    finish: {
      hat: "Her şey tamam!",
      title: "Başlayalım mı?",
      subtitle: `Hazırsın! Başlamak için aşağıdaki butona tıkla ${siteConfig.name}.`,
      getStarted: "Başla"
    }
  },
  flightDetails: {
    unknownAirline: "Bilinmeyen havayolu",
    unknownCallsign: "Bilinmeyen çağrı adı",
    routeDetails: {
      title: "Rota",
      subtitle: "Uçak rotası hakkında detaylı bilgi.",
      airport: {
        departure: "Kalkış",
        arrival: "Varış",
        alternate: "Alternatif",
        alternate2: "İkinci Alternatif"
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
      route: "Rota",
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