import { siteConfig } from "@/config/site";
const i18nKeys = {
  common: {
    open: "Abrir",
    close: "Fechar",
    joinDiscord: "Entrar na comunidade do Discord",
    contactSupport: "Suporte técnico",
    comingSoon: "Em breve",
    active: "Ativo"
  },
  auth: {
    login: {
      title: "Bem-vindo de volta!",
      subtitle: "Entre com a sua conta para continuar.",
      email: "Email",
      password: "Senha",
      signIn: "Entrar",
      forgotPassword: "Esqueceu a sua senha?",
      noAccount: "Não tem uma conta?",
      join: "Criar conta",
      loginError: "Catapimbas! Algo deu errado.",
      loginErrorDescription: "Um erro inesperado ocorreu durante o login. Tente novamente mais tarde ou peça ajuda na nossa comunidade do Discord."
    },
    join: {
      inviteOnly: "Atualmente, somente é possível criar uma conta mediante a um convite para o programa de beta."
    },
    forgotPassword: {
      title: "Esqueceu a sua senha?",
      subtitle: "Digite o seu email para recuperar a sua senha.",
      email: "Email",
      sendEmail: "Enviar recuperação de senha",
      backToLogin: "Lembrou a sua senha?",
      resetError: "Um erro ocorreu ao tentar recuperar a sua senha.",
      resetErrorDescription: "Tente novamente mais tarde ou peça ajuda no nosso Discord.",
      resetEmailSent: "Email de recuperação de senha foi enviado!",
      resetEmailSentIfAccountIsValid: "Se os dados digitados estiverem associados com uma conta, você receberá um email com instruções para recuperar a sua senha."
    },
    supportCard: {
      title: "Precisa de ajuda?"
    }
  },
  sidebar: {
    map: {
      title: "Mapa",
      subtitle: "Conexões ativas nas redes"
    },
    events: {
      title: "Eventos",
      subtitle: "Detalhes dos próximos eventos"
    },
    friends: {
      title: "Amigos",
      subtitle: "Gerenciar suas amizades"
    },
    feedback: {
      title: "Feedback",
      subtitle: "Ajude-nos a melhorar"
    },
    help: {
      title: "Suporte",
      subtitle: "Peça ajuda para a comunidade"
    },
    changelog: {
      title: "Changelog",
      subtitle: "Confira as novidades"
    },
    profile: {
      title: "Perfil",
      subtitle: "Detalhes da sua conta"
    }
  },
  map: {
    toolbar: {
      baseMap: {
        tooltip: {
          title: "Mapa base",
          description: "Alternar entre os diferentes mapas base"
        },
        title: "Mapa base",
        currentlyActive: "Ativo",
        satellite: {
          title: "Satélite",
          description: "Detalhes do terreno"
        },
        light: {
          title: "Claro",
          description: "Minimalista"
        },
        dark: {
          title: "Escuro",
          description: "Modo noturno com diagramas de solo"
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
      }
    }
  },
  settings: {
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
      description: "Provedor de dados aeronáuticos para a comunidade de entusiastas de aviação."
    }
  },
  onboarding: {
    welcome: {
      hat: "Primeiros passos",
      title: `Bem-vindo ao ${siteConfig.name}!`,
      subtitle: "Estamos felizes de tê-lo a bordo. Vamos começar com algumas informações básicas.",
      getStarted: "Começar"
    },
    integrations: {
      hat: "Integrações",
      title: "Sincronize serviços de terceiros",
      subtitle: "Vincule as suas contas de outros serviços para ter uma melhor experiência.",
      skip: "Continuar sem sincronizar"
    },
    finish: {
      hat: "Tudo pronto!",
      title: "Vamos começar?",
      subtitle: `Tudo pronto! Clique no botão abaixo para começar a sua jornada no ${siteConfig.name}.`,
      getStarted: "Começar"
    }
  },
  flightDetails: {
    unknownAirline: "Companhia desconhecida",
    unknownCallsign: "Indicativo de chamada desconhecido",
    routeDetails: {
      title: "Rota",
      subtitle: "Detalhes da rota do voo.",
      airport: {
        departure: "Partida",
        arrival: "Chegada",
        alternate: "Alternativo",
        alternate2: "Alternativo secundário"
      }
    },
    aircraftDetails: {
      title: "Detalhes da aeronave",
      subtitle: "Informações adicionais da aeronave.",
      aircraft: {
        registration: "Matrícula",
        transponder: "Transponder",
        wakeTurbulence: "Esteira de turbulência",
        photographer: "Fotógrafo"
      }
    },
    crewDetails: {
      title: "Detalhes da tripulação",
      subtitle: "Informações adicionais da tripulação.",
      crew: {
        pilotInCommand: "Piloto em comando"
      }
    },
    analytics: {
      title: "Análises",
      subtitle: "Dados e estatísticas do voo em tempo real.",
      verticalPathChart: {
        title: "Perfil vertical",
        subtitle: "Altitude e velocidade vertical",
        altitude: "Altitude",
        speed: "Velocidade de solo"
      }
    },
    flightPlanDetails: {
      title: "Detalhes do plano de voo",
      subtitle: "Informações completas do plano de voo.",
      viewTypes: {
        simple: "Simples",
        detailed: "Detalhada"
      },
      flightRules: "Regra de voo",
      flightType: "Tipo de voo",
      route: "Rota",
      remarks: "Observações",
      icaoFplFormat: "Formato ICAO"
    },
    notFound: {
      title: "Voo indisponível",
      subtitle: "Não conseguimos encontrar este voo.",
      troubleshooting: {
        title: "Solução de problemas",
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
};
export default i18nKeys;