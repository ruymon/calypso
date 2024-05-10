import { BASE_MAP_STYLES } from "@/config/map";
import { BaseMap } from "@/stores/base-map-store";
import { Theme } from "@/types/themes";
import { useTheme } from "next-themes";

export function getBaseMapUrl(baseMap: BaseMap): string {
  const { resolvedTheme } = useTheme();

  if (baseMap === "theme") {
    return BASE_MAP_STYLES[resolvedTheme as Theme];
  }

  return BASE_MAP_STYLES[baseMap];
}

export function getMapCursor({
  isDragging,
  isHovering,
}: {
  isHovering: boolean;
  isDragging: boolean;
}): string {
  if (isDragging) return "grabbing";
  if (isHovering) return "pointer";
  return "grab";
}
