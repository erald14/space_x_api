export interface IShip {
  active: boolean;

  class: number;

  id: string;
  image: string;

  name: string;

  type: string;

  year_built: number;
}

export interface IShipWithType {
  type: string;
}

export enum SHIP_VIEWS {
  List = "List",
  Gallery = "Gallery",
}
