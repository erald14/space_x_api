import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_SHIPS, GET_SHIP_TYPES } from "../../api";
import { IShip } from "../../types";

export const useShipData = () => {
  // API doesnt provide a way to get the total count
  const [fetchedAllShips, setFetchedAllShips] = useState(false);
  const { loading, error, data, fetchMore } = useQuery<
    { ships: IShip[] },
    { offset: number; limit: number }
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
  const fetchMoreShips = () => {
    if (data?.ships && !fetchedAllShips) {
      fetchMore({
        variables: { offset: data?.ships.length },
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
  return {
    loading,
    error,
    ships: data?.ships,
    fetchedAllShips,
    fetchMoreShips,
    typeLoading,
    typeError,
    typeData,
  };
};
