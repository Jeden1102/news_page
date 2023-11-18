interface weatherObject {
  icon: string;
}
export interface Forecast {
  dt_txt: string;
  dt: number;
  timezone: number;
  main: {
    temp: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  weather: weatherObject[];
}
