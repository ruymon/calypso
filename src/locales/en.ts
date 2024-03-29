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
    },
    supportCard: {
      title: "Need help?",
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
    },
  },
};

export default en;
