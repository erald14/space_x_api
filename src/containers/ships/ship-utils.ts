import { IShip, IShipWithType } from "./../../types/ship-types";
export const numberWithCommas = (x: number) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const getStats = (ship: IShip) => {
  return [
    { title: "Class", value: ship.class + "" },
    { title: "Year Built", value: ship.year_built + "" },
  ];
};

export const getUniqueTypes = (shipWithTypes: IShipWithType[]) => {
  const listOfTypes: string[] = shipWithTypes.map(
    (shipWithType) => shipWithType.type
  );
  function onlyUnique(value: string, index: number, self: string[]) {
    return self.indexOf(value) === index;
  }
  return listOfTypes.filter(onlyUnique);
};
