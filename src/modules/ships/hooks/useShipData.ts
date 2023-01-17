/* eslint-disable react-hooks/exhaustive-deps */
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_SHIPS, GET_SHIP_TYPES } from "../../../api";
import { IShip } from "../types";

export const useShipData = (selectedType?: string | null) => {
  // API doesnt provide a way to get the total count
  const [fetchedAllShips, setFetchedAllShips] = useState(false);
  const { loading, error, data, fetchMore } = useQuery<
    { ships: IShip[] },
    { offset: number; limit: number; find?: { type: string } }
  >(GET_SHIPS, {
    variables: {
      offset: 0,
      limit: 20,
    },
  });
  const {
    loading: typeLoading,
    error: typeError,
    data: typeData,
  } = useQuery<{ ships: IShip[] }, { offset: number; limit: number }>(
    GET_SHIP_TYPES
  );
  const fetchMoreShips = (selectedShipType: string | null) => {
    if (data?.ships && !fetchedAllShips) {
      const filterVariable = selectedShipType
        ? { find: { type: selectedShipType } }
        : {};
      fetchMore({
        variables: { ...filterVariable, offset: data?.ships.length },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (fetchMoreResult.ships.length === 0) {
            setFetchedAllShips(true);
          }
          return {
            ships: [...prev.ships, ...fetchMoreResult.ships],
          };
        },
      });
    }
  };

  useEffect(() => {
    if (selectedType && data?.ships) {
      fetchMore({
        variables: {
          offset: 0,
          find: { type: selectedType },
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          return {
            ships: [...fetchMoreResult.ships],
          };
        },
      });
    }
  }, [fetchMore, selectedType]);

  return {
    loading,
    error,
    ships: data?.ships,
    fetchedAllShips,
    fetchMoreShips,
    typeLoading,
    typeError,
    typeData,
    selectedType,
  };
};
