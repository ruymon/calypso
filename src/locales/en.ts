import { siteConfig } from "@/config/site";

const en = {
  i18n: {
    language: "Language",
    en: "English",
    pt: "Brazilian Portuguese",
  },

  common: {
    open: "Open",
    close: "Close",
    joinDiscord: "Join our discord",
    contactSupport: "Contact support",
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
    telemetry: {
      altitude: "Altitude",
      groundSpeed: "Ground speed",
      heading: "Heading",
      transponder: "Transponder",
    },
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
