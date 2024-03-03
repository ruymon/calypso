import { useMapLoadStore } from "@/stores/map-load-store";
import { useCallback, useRef } from "react";
import { MapRef } from "react-map-gl";

interface AircraftIcon {
  fileName: string;
  filePath: string;
}

const aircraftIcons: AircraftIcon[] = [
  {
    fileName: "heavy",
    filePath: "/assets/aircraft-icons/heavy.png",
  },
  {
    fileName: "helicopter",
    filePath: "/assets/aircraft-icons/helicopter.png",
  },
  {
    fileName: "light",
    filePath: "/assets/aircraft-icons/light.png",
  },
  {
    fileName: "medium",
    filePath: "/assets/aircraft-icons/medium.png",
  },
  {
    fileName: "super",
    filePath: "/assets/aircraft-icons/super.png",
  },
  {
    fileName: "supersonic",
    filePath: "/assets/aircraft-icons/supersonic.png",
  },
];

export function useMapInitialization() {
  const mapRef = useRef<MapRef | null>(null);
  const [setIsMapLoaded, setMapRef] = useMapLoadStore((state) => [
    state.setIsMapLoaded,
    state.setMapRef,
  ]);

  const setMapCallbackRef = useCallback(
    (ref: MapRef | null) => {
      if (mapRef.current) {
        // Clean up the previous map
        setIsMapLoaded(false);
      }

      if (!ref) return;

      const loadMapImage = (fileName: string, filePath: string) => {
        if (ref.hasImage(fileName)) {
          return;
        }

        ref.loadImage(filePath, (error, image) => {
          if (error) {
            throw error;
          }

          if (image === undefined) {
            throw new Error("Image is undefined");
          }

          if (ref.hasImage(fileName)) {
            return;
          }

          ref.addImage(fileName, image, { sdf: true });
        });

        return;
      };

      aircraftIcons.forEach((aircraftIcon) => {
        loadMapImage(aircraftIcon.fileName, aircraftIcon.filePath);
      });

      mapRef.current = ref;

      setMapRef(mapRef.current);
      setIsMapLoaded(true);
    },
    [setIsMapLoaded, setMapRef],
  );

  return { setMapCallbackRef };
}
