import {
  IVAO_ATC_RATINGS,
  IVAO_PILOT_RATINGS,
  VATSIM_ATC_RATINGS,
  VATSIM_PILOT_RATINGS,
} from "@/constants/ratings";
import { Network, NetworkRating } from "@/types/networks";

export function getNetworkUserPilotRating(
  rating: string | number,
  network: Network,
): NetworkRating | null {
  rating = Number(rating);
  const ratingsData =
    network === "vatsim" ? VATSIM_PILOT_RATINGS : IVAO_PILOT_RATINGS;

  const userRating = ratingsData.find((r) => r.id === rating);

  if (!userRating) {
    console.error(`Rating ${rating} not found for network ${network}`);
    return null;
  }

  return userRating;
}

export function getNetworkUserAtcRating(
  rating: string | number,
  network: Network,
): NetworkRating | null {
  rating = Number(rating);
  const ratingsData =
    network === "vatsim" ? VATSIM_ATC_RATINGS : IVAO_ATC_RATINGS;

  const userRating = ratingsData.find((r) => r.id === rating);

  if (!userRating) {
    console.error(`Rating ${rating} not found for network ${network}`);
    return null;
  }

  return userRating;
}
