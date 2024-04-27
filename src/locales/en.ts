import { siteConfig } from "@/config/site";

const en = {
  common: {
    open: "Open",
    close: "Close",
    joinDiscord: "Join our discord",
    contactSupport: "Contact support",
    comingSoon: "Coming soon",
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
    },
    join: {
      inviteOnly:
        "We're sorry, but unfortunately joining is only available to invited users at this time.",
    },
    forgotPassword: {
      title: "Forgot your password?",
      subtitle: "Enter your email to reset your password.",
      email: "Email",
      sendEmail: "Send recovery email",
      backToLogin: "Remember your password?",
      resetError: "An error occurred while trying to reset your password.",
      resetErrorDescription:
        "Please try again later or contact support on Discord.",
      resetEmailSent: "Password reset email sent!",
      resetEmailSentIfAccountIsValid:
        "If the email you entered is associated with a valid account, you will receive a password reset link in your email.",
    },
    supportCard: {
      title: "Need help?",
    },
  },

  sidebar: {
    map: {
      title: "World map",
      subtitle: "Live network connections",
    },
    events: {
      title: "Events",
      subtitle: "See current and upcoming events",
    },
    friends: {
      title: "Friends",
      subtitle: "Manage your friends list",
    },
    feedback: {
      title: "Feedback",
      subtitle: "Help us improve our service",
    },
    help: {
      title: "Support",
      subtitle: "Get help with the app",
    },
    changelog: {
      title: "Changelog",
      subtitle: "See what's new in the app",
    },
    profile: {
      title: "Profile",
      subtitle: "Manage your account settings",
    },
  },

  settings: {
    profile: {
      title: "Profile",
      subtitle: "Manage and update your profile settings",
      emailCard: {
        title: "Email",
        cannotChange: "You cannot change your email address",
      },
      nameCard: {
        title: "Name",
        cannotChange: "You cannot change your name",
        emptyState: "Not set",
      },
      avatarCard: {
        title: "Profile picture",
        subtitle: "Keeping a profile picture helps others recognize you.",
      },
      dangerZone: {
        title: "Danger zone",
        deleteAccount: "Delete your account",
        deleteAccountDescription:
          "Should you decide to delete your account, you will lose access to all of your data. This action cannot be undone and the process may take up to 24 hours.",
      },
    },
    integrations: {
      title: "Integrations",
      subtitle:
        "Connect and sync third-party services to enhance your experience.",
      comingSoonDescription: "More integrations are coming soon.",
    },
  },

  integrations: {
    comum: {
      connect: "Connect",
      unlink: "Unlink",
    },
    ivao: {
      description:
        "International Virtual Aviation Organisation VZW is a non-profit association which operates a free-of-charge online flight-simulation network",
      cannotChange: "At the moment, you cannot connect to your IVAO account",
    },
    vatsim: {
      description:
        "The Virtual Air Traffic Simulation Network is an online platform that allows flight simulation enthusiasts to connect and fly together.",
      cannotChange: "At the moment, you cannot connect to your VATSIM account",
    },
  },

  onboarding: {
    welcome: {
      hat: "Getting started",
      title: `Welcome to ${siteConfig.name}!`,
      subtitle:
        "We are excited to have you on board. Let's get you started with a few basic details.",
      getStarted: "Get started",
    },
    integrations: {
      hat: "Sync your details",
      title: "Sync your details",
      subtitle: "Connect your accounts to have a seamless experience.",
      skip: "Continue without syncing",
    },
    finish: {
      hat: "All set!",
      title: "Let's get started?",
      subtitle: `You're all set! Click the button below start using ${siteConfig.name}.`,
      getStarted: "Get started",
    },
  },

  flightDetails: {
    unknownAirline: "Unknown airline",
    routeDetails: {
      title: "Route",
      subtitle: "Detailed information about the aircraft's route.",
      airport: {
        departure: "Departure",
        arrival: "Arrival",
        alternate: "Alternate",
        alternate2: "Second alternate",
      },
    },
    aircraftDetails: {
      title: "Aircraft details",
      subtitle: "Detailed information about the aircraft.",
      aircraft: {
        registration: "Registration",
        transponder: "Transponder",
        wakeTurbulence: "Wake turbulence",
      },
    },
    crewDetails: {
      title: "Flight crew details",
      subtitle: "Detailed information about the flight crew.",
      crew: {
        pilotInCommand: "Pilot in command",
      },
    },
    flightPlanDetails: {
      title: "Flight plan details",
      subtitle: "Detailed information about the flight plan.",
      viewTypes: {
        simple: "Simple",
        detailed: "Detailed",
      },
      flightRules: "Flight rules",
      flightType: "Flight type",
      route: "Route",
      remarks: "Remarks",
      icaoFplFormat: "ICAO FPL format",
    },
  },
};

export default en;
