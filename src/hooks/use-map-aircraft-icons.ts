import { useMapLoadStore } from "@/stores/map-load-store";
import { useCallback, useRef } from "react";
import { MapRef } from "react-map-gl";

interface AircraftIcon {
  fileName: string
  filePath: string
}

const aircraftIcons: AircraftIcon[] = [
  {
    fileName: "h",
    filePath: "/assets/aircraft-icons/m.png"
  },
  {
    fileName: "heli",
    filePath: "/assets/aircraft-icons/heli.png"
  },
  {
    fileName: "j",
    filePath: "/assets/aircraft-icons/j.png"
  },
  {
    fileName: "l",
    filePath: "/assets/aircraft-icons/l.png"
  },
  {
    fileName: "m",
    filePath: "/assets/aircraft-icons/m.png"
  },
  {
    fileName: "s",
    filePath: "/assets/aircraft-icons/s.png"
  }
]

export function useMapAircraftIcons() {
  const mapRef = useRef<MapRef | null>(null);
  const [setIsMapLoaded, setMapRef] = useMapLoadStore((state) => [state.setIsMapLoaded, state.setMapRef]);

  const setMapCallbackRef = useCallback((ref: MapRef | null) => {
    if (mapRef.current) {
      // Clean up the previous map
      setIsMapLoaded(false)
    }

    if (!ref) return

    const loadMapImage = (fileName: string, filePath: string) => {
      if (ref.hasImage(fileName)) {
        return;
      }

      ref.loadImage(filePath, (error, image) => {
        if (error) {
          throw error;
        };

        if (image === undefined) {
          throw new Error('Image is undefined');
        };

        if (ref.hasImage(fileName)) {
          return;
        }

        ref.addImage(fileName, image, { sdf: true });
      });

      return;
    }

    aircraftIcons.forEach((aircraftIcon) => {
      loadMapImage(aircraftIcon.fileName, aircraftIcon.filePath);
    });

    mapRef.current = ref

    setMapRef(mapRef.current)
    setIsMapLoaded(true)
  }, [setIsMapLoaded, setMapRef])

  return { setMapCallbackRef }
}