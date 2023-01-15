import { Grid } from "@mantine/core";
import { GalleryCard, InfiniteScroll } from "../../components";
import { IShip } from "../../types";
import { getStats } from "./ship-utils";

type ShipGalleryViewProps = {
  fetchedAllShips: boolean;
  ships: IShip[] | undefined;
  fetchData: () => void;
};

export const ShipGalleryView = ({
  ships = [],
  fetchData,
  fetchedAllShips,
}: ShipGalleryViewProps) => {
  const shipViews = (
    <Grid>
      {ships.map((ship) => (
        <Grid.Col xs={6} sm={4} md={3}>
          <GalleryCard
            status={ship.active}
            image={ship.image}
            title={ship.name}
            description={ship.type + ""}
            stats={getStats(ship)}
          />
        </Grid.Col>
      ))}
    </Grid>
  );
  return (
    <Grid>
      <InfiniteScroll
        hasMore={!fetchedAllShips}
        items={[shipViews]}
        fetchData={fetchData}
      />
    </Grid>
  );
};
