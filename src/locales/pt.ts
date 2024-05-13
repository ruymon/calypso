import { siteConfig } from "";
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
          title: "Sincronizar com o tema",
          description: "Utilizar mapa base conforme o tema da interface"
        }
      },
      networkLayers: {
        tooltip: {
          title: "Camadas das redes",
          description: "Gerir a visibilidade dos dados das redes"
        },
        quickActions: {
          title: "Ações rápidas",
          ivao: {
            title: "IVAO",
            description: "Exibir somente voos e controladores na IVAO"
          },
          vatsim: {
            title: "Vatsim",
            description: "Exibir somente voos e controladores na Vatsim"
          },
          combineNetworks: {
            title: "Combinar redes",
            description: "Exibir voos e controladores de todas as redes"
          },
          hideAll: {
            title: "Ocultar tudo",
            description: "Ocultar todos os voos e controladores das redes"
          }
        },
        vatsimLayers: {
          title: "Opções de camadas da Vatsim",
          showFlights: {
            title: "Exibir voos",
            description: "Aviões verdes no mapa"
          },
          showAtcs: {
            title: "Exibir controladores",
            description: "Polígono e etiqueta dos controladores ativos na rede"
          }
        },
        ivaoLayers: {
          title: "Opções de camadas da IVAO",
          showFlights: {
            title: "Exibir voos",
            description: "Aviões azuis no mapa"
          },
          showAtcs: {
            title: "Exibir controladores",
            description: "Polígono e etiqueta dos controladores ativos na rede"
          }
        }
      }
    }
  },
  settings: {
    profile: {
      title: "Perfil",
      subtitle: "Gerir os dados da sua conta",
      emailCard: {
        title: "Email",
        cannotChange: "Você não pode modificar seu endereço de email"
      },
      nameCard: {
        title: "Nome",
        cannotChange: "Você não pode modificar o seu nome",
        emptyState: "Não definido"
      },
      avatarCard: {
        title: "Imagem de perfil",
        subtitle: "Torne o seu perfil único com uma imagem que ter represente."
      },
      dangerZone: {
        title: "Perigo",
        deleteAccount: "Excluir a sua conta",
        deleteAccountDescription: "Caso decida remover a sua conta, perderá todos os seus dados e acesso à plataforma. Essa ação não poderá ser desfeita e o processo pode demorar até 24 horas."
      }
    },
    integrations: {
      title: "Integrações",
      subtitle: "Vincule e sincronize serviços de terceiros para melhorar a sua experiência.",
      comingSoonDescription: "Mais integrações em breve."
    }
  },
  integrations: {
    comum: {
      connect: "Vincular",
      connected: "Vinculada",
      unlink: "Desvincular",
      changeAccount: "Mudar conta",
      callback: {
        title: "Vinculando a sua conta da {provider}",
        subtitle: "Este processo pode demorar alguns segundos."
      },
      unstable: "Esta integração é recente e pode apresentar comportamentos inesperados."
    },
    integrationDetailsTooltip: {
      title: "Detalhes da integração",
      accountId: "ID da conta"
    },
    ivao: {
      description: "A IVAO é uma associação sem fins lucrativos que opera uma rede online de simulação de voo livre de custos"
    },
    vatsim: {
      description: "A Vatsim é uma plataforma online que possibilita entusiastas de simulação de voo se conectarem e voarem juntos."
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
        subtitle: "Possíveis soluções para o problema. Caso persista, por favor entre em contato com o time de suporte.",
        steps: {
          verifyFlightExists: "Verifique que o voo está online atualmente em uma das redes suportadas",
          refresh: "Recarregue a página",
          checkInternetConnection: "Verifique a sua conexão de internet",
          checkLoginStatus: "Verifique que você está autenticado"
        }
      },
      systemLogs: {
        title: "Detalhes do sistema",
        subtitle: "As informações abaixo podem ser ajudar o nosso time a investigar o problema.",
        code: "Código",
        flightId: "Id do voo",
        timestamp: "Horário",
        buildVersion: "Versão"
      }
    }
  }
};
export default i18nKeys;