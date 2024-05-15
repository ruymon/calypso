export interface WeatherItem {
  time: number;
  path: string;
}

export interface WeatherRadar {
  version: string;
  generated: number;
  host: string;
  radar: {
    past: WeatherItem[];
    nowcast: WeatherItem[];
  };
  satellite: {
    infrared: WeatherItem[];
  };
}
