import { VatsimDataPilot } from "@/types/vatsim";
import { point } from "@turf/helpers";

function getAircraftWakeTurbulence(aircraft: string) {
  const regex = new RegExp(`\/(.+)\-`);
  return regex.exec(aircraft)?.pop()?.toLowerCase();
}

function getAircraftEquipment(aircraft: string) {
  const regex = new RegExp(`-(.+)\/`);
  return regex.exec(aircraft)?.pop();
}

function getAircraftTransponderEquipmentCode(aircraft: string) {
  const regex = new RegExp(`\/.+.*?\/(.+)$`);
  return regex.exec(aircraft)?.pop();
}

export function formatVatsimPilotDataToGeoJSON(data: VatsimDataPilot[]): GeoJSON.FeatureCollection<GeoJSON.Geometry> {
  const features = data.map(({ latitude, longitude, flight_plan, callsign,...rest }) => {
    const flightPlan = {
      transponder_equipment: flight_plan
        ? getAircraftTransponderEquipmentCode(flight_plan.aircraft)
        : null,
      equipment: flight_plan
        ? getAircraftEquipment(flight_plan.aircraft)
        : null,
      wake_turbulence: flight_plan
        ? getAircraftWakeTurbulence(flight_plan.aircraft)
        : null,
      ...flight_plan,
    };

    return point([longitude, latitude], {
      callsign,
      flight_plan: flightPlan,
      ...rest,
    }, {
      id: callsign,
    });
  });

  return {
    type: "FeatureCollection",
    features,
  }
}
