import React from "react";
import { InfiniteScroll, GalleryCard } from "../../../shared_components";
import { IShip } from "../types";
import { getStats } from "../utils/ship-utils";
import { useShipStyles } from "../styles";

type ShipListViewProps = {
  fetchedAllShips: boolean;
  ships: IShip[] | undefined;
  fetchData: () => void;
};

export const ShipListView = ({
  ships = [],
  fetchData,
  fetchedAllShips,
}: ShipListViewProps) => {
  const { classes } = useShipStyles();
  return (
    <InfiniteScroll
      hasMore={!fetchedAllShips}
      items={ships.map((ship) => (
        <div className={classes.listItemWrapper}>
          <GalleryCard
            status={ship.active}
            image={ship.image}
            title={ship.name}
            description={ship.type + ""}
            stats={getStats(ship)}
          />
        </div>
      ))}
      fetchData={fetchData}
    />
  );
};
