export type NetworkLogoVariants = "default" | "white";
type NetworkLogo = { [key in NetworkLogoVariants]: string };

export const VATSIM_NETWORK_LOGO: NetworkLogo = {
  default: "https://static.skyscope.app/networks/vatsim.png",
  white: "https://static.skyscope.app/networks/vatsim_white.png",
};

export const IVAO_NETWORK_LOGO: NetworkLogo = {
  default: "https://static.skyscope.app/networks/ivao.png",
  white: "https://static.skyscope.app/networks/ivao_white.png",
};
