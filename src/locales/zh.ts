import { siteConfig } from "@/config/site";
export default ({
  common: {
    open: "打开",
    close: "关闭",
    joinDiscord: "加入我们的Discord",
    contactSupport: "Contact support",
    comingSoon: "即将到来",
    active: "Active"
  },
  auth: {
    login: {
      title: "欢迎回来！",
      subtitle: "登录你的账号以继续",
      email: "电子邮箱",
      password: "密码",
      signIn: "登录",
      forgotPassword: "忘记密码？",
      noAccount: "没有账号？",
      join: "Join now",
      loginError: "糟糕！出了些问题。",
      loginErrorDescription: "登录时出错！请稍后重试或在 Discord 上获取帮助。"
    },
    join: {
      inviteOnly: "我们很抱歉，现在加入只对受到邀请的用户可用"
    },
    forgotPassword: {
      title: "忘记你的密码？",
      subtitle: "输入你的电子邮箱来重置密码。",
      email: "电子邮箱",
      sendEmail: "发送重置邮件",
      backToLogin: "记得你的密码？",
      resetError: "重置密码时出错！",
      resetErrorDescription: "请稍后重试或在 Discord 上联系客服。",
      resetEmailSent: "密码重置邮件已发送！",
      resetEmailSentIfAccountIsValid: "If the email you entered is associated with a valid account, you will receive a password reset link in your email."
    },
    supportCard: {
      title: "需要帮助？"
    }
  },
  sidebar: {
    map: {
      title: "世界地图",
      subtitle: "Live network connections"
    },
    events: {
      title: "Events",
      subtitle: "See current and upcoming events"
    },
    friends: {
      title: "好友",
      subtitle: "管理好友列表"
    },
    feedback: {
      title: "反馈",
      subtitle: "帮助我们改进服务"
    },
    help: {
      title: "Support",
      subtitle: "Get help with the app"
    },
    changelog: {
      title: "更新日志",
      subtitle: "See what's new in the app"
    },
    profile: {
      title: "Profile",
      subtitle: "管理用户设置"
    },
    themeSwitcher: {
      title: "主题选择",
      subtitle: "切换浅色/深色模式"
    },
    login: {
      title: "登录",
      subtitle: "登录你的账号"
    }
  },
  map: {
    loading: {
      title: "地图加载中",
      subtitle: "This should take less than 10 seconds, depending on your connection"
    },
    toolbar: {
      baseMap: {
        tooltip: {
          title: "基础地图",
          description: "切换不同的基础地图"
        },
        title: "基础地图",
        currentlyActive: "Active",
        satellite: {
          title: "卫星",
          description: "展示地球细节"
        },
        light: {
          title: "白天",
          description: "Minimalistic"
        },
        dark: {
          title: "夜晚",
          description: "Night mode with airport diagrams"
        },
        theme: {
          title: "同步主题",
          description: "基于系统设置切换浅色/深色模式"
        }
      },
      networkLayers: {
        tooltip: {
          title: "Network layers",
          description: "Toggle network layers visibility"
        },
        quickActions: {
          title: "快速操作",
          ivao: {
            title: "IVAO",
            description: "仅显示 IVAO 的航班和空中交通管制"
          },
          vatsim: {
            title: "VATSIM",
            description: "仅显示 VATSIM 的航班和空中交通管制"
          },
          combineNetworks: {
            title: "Combine networks",
            description: "Show flights and ATCs from all networks"
          },
          hideAll: {
            title: "隐藏全部",
            description: "Hide all flights and ATC from all networks"
          }
        },
        vatsimLayers: {
          title: "Vatsim 图层设置",
          showFlights: {
            title: "显示航班",
            description: "地图上会出现绿色的飞机"
          },
          showAtcs: {
            title: "显示空中交通管制系统",
            description: "在网络上启用空中交通管制系统"
          }
        },
        ivaoLayers: {
          title: "IVAO 图层设置",
          showFlights: {
            title: "显示航班",
            description: "地图上将出现蓝色的飞机"
          },
          showAtcs: {
            title: "显示空中交通管制系统",
            description: "在网络上启用空中交通管制系统"
          }
        }
      },
      extraLayers: {
        tooltip: {
          title: "更多图层",
          description: "切换更多图层可见性"
        },
        title: "更多图层",
        airports: {
          title: "机场",
          description: "在地图上显示机场"
        },
        weatherRadar: {
          title: "气象雷达",
          description: "在地图上显示气象雷达"
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
      title: "设置",
      profile: "Profile",
      integrations: "Integrations"
    },
    profile: {
      title: "Profile",
      subtitle: "Manage and update your profile settings",
      emailCard: {
        title: "电子邮箱",
        cannotChange: "你不能更改你的电子邮箱地址"
      },
      nameCard: {
        title: "姓名",
        cannotChange: "无法更改姓名",
        emptyState: "Not set"
      },
      avatarCard: {
        title: "Profile picture",
        subtitle: "Keeping a profile picture helps others recognize you."
      },
      dangerZone: {
        title: "Danger zone",
        deleteAccount: "删除账号",
        deleteAccountDescription: "如果你决定删除你的账号，你将无法访问所有你的数据。此操作不可逆。24小时后生效。"
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
      connect: "连接",
      connected: "已连接",
      unlink: "断开连接",
      changeAccount: "切换账号",
      callback: {
        title: "Integrating your {provider} account",
        subtitle: "This process may take a few seconds."
      },
      unstable: "This integration is a recent addition and may not work as expected."
    },
    integrationDetailsTooltip: {
      title: "Integration details",
      accountId: "用户ID"
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
      hat: "现在开始",
      title: `欢迎 ${siteConfig.name}!`,
      subtitle: "We are excited to have you on board. Let's get you started with a few basic details.",
      getStarted: "现在开始"
    },
    integrations: {
      hat: "Sync your details",
      title: "Sync your details",
      subtitle: "Connect your accounts to have a seamless experience.",
      skip: "Continue without syncing"
    },
    finish: {
      hat: "All set!",
      title: "让我们开始吧？",
      subtitle: `You're all set! Click the button below start using ${siteConfig.name}.`,
      getStarted: "现在开始"
    }
  },
  flightDetails: {
    unknownAirline: "未知航线",
    unknownCallsign: "未知呼号",
    routeDetails: {
      title: "路线",
      subtitle: "飞机路线的详细信息",
      airport: {
        departure: "离开",
        arrival: "到达",
        alternate: "Alternate",
        alternate2: "Second alternate"
      }
    },
    aircraftDetails: {
      title: "飞行器信息",
      subtitle: "你的飞行器的详细信息",
      aircraft: {
        registration: "Registration",
        transponder: "Transponder",
        wakeTurbulence: "Wake turbulence",
        photographer: "照相机"
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
      route: "路线",
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
          refresh: "刷新此页",
          checkInternetConnection: "检查你的互联网连接",
          checkLoginStatus: "Make sure you are logged in"
        }
      },
      systemLogs: {
        title: "系统日志",
        subtitle: "The following information might be useful for our support team.",
        code: "Code",
        flightId: "航班号",
        timestamp: "时间戳",
        buildVersion: "Build version"
      }
    }
  }
} as const);