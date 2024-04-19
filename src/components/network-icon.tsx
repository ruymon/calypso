import {
  IVAO_NETWORK_LOGO,
  NetworkLogoVariants,
  VATSIM_NETWORK_LOGO,
} from "@/constants/assets";
import { Network } from "@/types/networks";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface NetworkIconProps {
  network: Network;
  className?: string;
  variant?: NetworkLogoVariants;
}

const getNetworkLogo = (network: Network, variant?: "default" | "white") => {
  switch (network) {
    case "vatsim":
      return variant === "white"
        ? VATSIM_NETWORK_LOGO.white
        : VATSIM_NETWORK_LOGO.default;
    case "ivao":
      return variant === "white"
        ? IVAO_NETWORK_LOGO.white
        : IVAO_NETWORK_LOGO.default;
  }
};

export function NetworkIcon({ className, network, variant }: NetworkIconProps) {
  return (
    <Avatar className={className}>
      <AvatarImage src={getNetworkLogo(network, variant)} />
      <AvatarFallback>{network.toUpperCase()[0]}</AvatarFallback>
    </Avatar>
  );
}
