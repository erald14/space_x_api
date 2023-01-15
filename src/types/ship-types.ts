export interface IShip {
  abs: number;
  active: boolean;
  attempted_landings: number;
  class: number;
  course_deg: number;
  home_port: string;
  id: string;
  image: string;
  imo: number;
  //missions: [ShipMission];
  mmsi: number;
  model: string;
  name: string;
  // position: ShipLocation;
  roles: [string];
  speed_kn: number;
  status: string;
  successful_landings: number;
  type: string;
  url: string;
  weight_kg: number;
  weight_lbs: number;
  year_built: number;
}

export interface IShipWithType {
  type: string;
}

export enum SHIP_VIEWS {
  List = "List",
  Gallery = "Gallery",
}
