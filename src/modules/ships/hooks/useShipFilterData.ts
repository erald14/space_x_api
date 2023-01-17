import { useQuery } from "@apollo/client";
import { GET_SHIP_TYPES } from "../../../api";
import { IShip } from "../types";

export const useShipFilterData = () => {
  const {
    loading: typeLoading,
    error: typeError,
    data: typeData,
  } = useQuery<{ ships: IShip[] }, { offset: number; limit: number }>(
    GET_SHIP_TYPES
  );

  return {
    typeLoading,
    typeError,
    typeData,
  };
};
