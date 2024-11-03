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
    },
    login: {
      title: "Login",
      subtitle: "Login to your account"
    }
  },
  map: {
    loading: {
      title: "Harita yükleniyor",
      subtitle: "Bağlantı hızına göre bu işlem 10 saniye kadar sürebilir"
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
            description: "Sadece IVAO'daki uçuşları ve ATC'leri göster"
          },
          vatsim: {
            title: "VATSIM",
            description: "Sadece VATSIM'deki uçuşları ve ATC'leri göster"
          },
          combineNetworks: {
            title: "Network'leri birleştir",
            description: "Tüm network'lerdeki uçuşları ve ATC'leri göster"
          },
          hideAll: {
            title: "Tümünü gizle",
            description: "Tüm network'lerdeki uçuşları ve ATC'leri gizle"
          }
        },
        vatsimLayers: {
          title: "Vatsim katman ayarları",
          showFlights: {
            title: "Uçuşları göster",
            description: "Haritadaki yeşil uçaklar"
          },
          showAtcs: {
            title: "ATC'leri göster",
            description: "Network'deki aktif hava trafik kontrolörleri"
          }
        },
        ivaoLayers: {
          title: "IVAO katman ayarları",
          showFlights: {
            title: "Uçuşları göster",
            description: "Haritadaki mavi uçaklar"
          },
          showAtcs: {
            title: "ATC'leri göster",
            description: "Network'deki aktif hava trafik kontrolörleri"
          }
        }
      },
      extraLayers: {
        tooltip: {
          title: "Ekstra katmanlar",
          description: "Ekstra katmanlarını görünürlüğünü aç veya kapat"
        },
        title: "Ekstra katmanlar",
        airports: {
          title: "Havalimanları",
          description: "Havalimanlarını haritada göster"
        },
        weatherRadar: {
          title: "Yağış radarı",
          description: "Yağış radarını haritada göster"
        }
      }
    },
    airacCycleBadge: {
      airacCycle: "AIRAC versiyonu",
      outdatedCycle: {
        title: "Eski AIRAC versiyonu",
        description: "Güncel AIRAC versiyonu için Navigraph hesabını eşle."
      },
      upToDateCycle: {
        title: "AIRAC güncel",
        description: "Bu AIRAC'in süresi {distance} tarihinde dolacak."
      },
      unknownCycle: {
        title: "Bilinmeyen AIRAC versiyonu",
        description: "Mevcut AIRAC versiyonu yüklenemedi."
      }
    }
  },
  settings: {
    sidebar: {
      title: "Ayarlar",
      profile: "Profil",
      integrations: "Entegrasyonlar"
    },
    profile: {
      title: "Profil",
      subtitle: "Profil ayarlarını yönet",
      emailCard: {
        title: "Email",
        cannotChange: "Email adresini değiştiremezsin"
      },
      nameCard: {
        title: "İsim",
        cannotChange: "İsmini değiştiremezsin",
        emptyState: "Yok"
      },
      avatarCard: {
        title: "Profil resmi",
        subtitle: "Profil resmi başkalarının seni tanımasına yardımcı olur."
      },
      dangerZone: {
        title: "Tehlikeli bölge",
        deleteAccount: "Hesabını sil",
        deleteAccountDescription: "Hesabını silmeye karar verdiğinde tüm verilerine erişimini kaybedeceksin. Bu işlemin gerçekleşmesi 24 saate kadar sürebilir ve geri alınamaz."
      }
    },
    integrations: {
      title: "Entegrasyonlar",
      subtitle: "Deneyimini iyileştirmek için 3. parti uygulamaları hesabına bağla ve senkronize et.",
      comingSoonDescription: "Daha fazla entegrasyonlar çok yakında."
    }
  },
  integrations: {
    comum: {
      connect: "Bağla",
      connected: "Bağlandı",
      unlink: "Bağlantıyı kes",
      changeAccount: "Hesabını değiştir",
      callback: {
        title: "{provider} hesabını bağla",
        subtitle: "Bu işlem birkaç saniye sürebilir."
      },
      unstable: "Bu entegrasyon yenidir ve beklendiği gibi çalışmayabilir."
    },
    integrationDetailsTooltip: {
      title: "Entegrasyon detayları",
      accountId: "Hesap ID"
    },
    ivao: {
      description: "International Virtual Aviation Organisation (IVAO) kar amacı gütmeyen bir kuruluş olup ücretsiz online uçuş simülasyon hizmeti vermektedir"
    },
    vatsim: {
      description: "Virtual Air Traffic Simulation Network (VATSIM) kar amacı gütmeyen bir kuruluş olup ücretsiz online uçuş simülasyon hizmeti vermektedir."
    },
    navigraph: {
      description: "Uçuş simülasyonu için navigasyonel veri sağlayacısı. "
    }
  },
  onboarding: {
    welcome: {
      hat: "Başlıyoruz",
      title: `Hoşgeldiniz ${siteConfig.name}!`,
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
      title: "Uçak Bilgileri",
      subtitle: "Uçak hakkında detaylı bilgiler.",
      aircraft: {
        registration: "Tescil",
        transponder: "Transponder",
        wakeTurbulence: "Wake turbulence kategorisi",
        photographer: "Fotoğrafçı"
      }
    },
    crewDetails: {
      title: "Ekip bilgisi",
      subtitle: "Ekip hakkında detaylı bilgiler.",
      crew: {
        pilotInCommand: "Pilot"
      }
    },
    analytics: {
      title: "İstatistikler",
      subtitle: "Gerçek zamanlı uçuş verisi ve istatistikler.",
      verticalPathChart: {
        title: "Düşey güzergah",
        subtitle: "İrtifa ve düşey hız",
        altitude: "İrtifa",
        speed: "Yer hızı"
      }
    },
    flightPlanDetails: {
      title: "Uçuş planı detayları",
      subtitle: "Uçuş planı hakkında detaylı bilgiler.",
      viewTypes: {
        simple: "Basit",
        detailed: "Detaylı"
      },
      flightRules: "Uçuş kuralları",
      flightType: "Uçuş tipi",
      route: "Rota",
      remarks: "Notlar",
      icaoFplFormat: "ICAO Uçuş Planı Formatı"
    },
    notFound: {
      title: "Uçuş mevcut değil",
      subtitle: "Aradığın uçuşu bulamadık.",
      troubleshooting: {
        title: "Sorun giderme",
        subtitle: "Sorunu gidermek için yapabileceğin şeyler. Eğer sorun devam ediyorsa, lütfen destek ekibimizle iletişime geç.",
        steps: {
          verifyFlightExists: "Lütfen uçuşun desteklenen network'lerde olduğundan emin ol",
          refresh: "Sayfayı yenile",
          checkInternetConnection: "İnternet bağlantını kontrol et",
          checkLoginStatus: "Giriş yaptığında emin ol"
        }
      },
      systemLogs: {
        title: "Sistem kayıtları",
        subtitle: "Aşağıdaki bilgiler destek ekibimiz için faydalı olabilir.",
        code: "Kod",
        flightId: "Uçuş ID",
        timestamp: "Zaman",
        buildVersion: "Uygulama versiyonu"
      }
    }
  }
} as const);