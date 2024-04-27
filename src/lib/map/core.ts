import { MAP_STYLES } from "@/config/map";
import { Theme } from "@/types/themes";

export function getMapStyleBasedOnTheme(theme: Theme) {
  return theme === "light" ? MAP_STYLES.light : MAP_STYLES.dark;
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
