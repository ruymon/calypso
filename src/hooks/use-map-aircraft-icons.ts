import { useMapContext } from "@/contexts/map";
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
  const { setMapRef } = useMapContext();

  const setMapCallbackRef = useCallback((ref: MapRef | null) => {
    if (mapRef.current) {
      // Make sure to cleanup any events/references added to the last instance
    }

    if (ref) {
      const map = ref;

      const loadMapImage = (fileName: string, filePath: string) => {
        if (map.hasImage(fileName)) {
          return;
        }

        map.loadImage(filePath, (error, image) => {
          if (error) {
            throw error;
          };

          if (image === undefined) {
            throw new Error('Image is undefined');
          };

          if (map.hasImage(fileName)) {
            return;
          }

          map.addImage(fileName, image, { sdf: true });
        });

        return;
      }

      aircraftIcons.forEach((aircraftIcon) => {
        loadMapImage(aircraftIcon.fileName, aircraftIcon.filePath);
      });

      setMapRef(ref)
    }

    mapRef.current = ref
  }, [setMapRef])

  return [setMapCallbackRef]
}