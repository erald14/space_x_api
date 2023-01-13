import React from "react";
import { InfiniteScroll, GalleryCard } from "../../components";
import { IShip } from "../../types";

type ShipListViewProps = {
  ships: IShip[] | undefined;
};

export const ShipListView = ({ ships = [] }: ShipListViewProps) => {
  return (
    <InfiniteScroll
      items={ships.map((el) => (
        <GalleryCard image={""} title={""} description={""} stats={[]} />
      ))}
      fetchData={function (): void {
        throw new Error("Function not implemented.");
      }}
    />
  );
};
