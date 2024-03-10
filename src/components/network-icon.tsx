import { Network } from "@/types/live-flights";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface NetworkIconProps {
  network: Network;
  className?: string;
  variant?: "default" | "white";
}

const networkLogosUrl = {
  vatsim: {
    default: "https://static.skyscope.app/networks/vatsim.png",
    white: "https://static.skyscope.app/networks/vatsim_white.png",
  },
  ivao: {
    default: "https://static.skyscope.app/networks/ivao.png",
    white: "https://static.skyscope.app/networks/ivao_white.png",
  },
};

export function NetworkIcon({
  className,
  network,
  variant = "default",
}: NetworkIconProps) {
  return (
    <Avatar className={className}>
      <AvatarImage src={networkLogosUrl[network][variant]} />
      <AvatarFallback>{network.toUpperCase()[0]}</AvatarFallback>
    </Avatar>
  );
}
