import { SHIP_VIEWS } from "../../types";
import { ShipGalleryView } from "./ShipGalleryView";
import { ShipListView } from "./ShipListView";
import { useShipStyles } from "./styles";
import { useShipData } from "./useShipData";
import { ViewSwitchAndFilterWrapper } from "./ViewSwitchAndFilterWrapper";

export const Ships = () => {
  const { classes } = useShipStyles();
  const { loading, error, ships, fetchedAllShips, fetchMoreShips } =
    useShipData();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <div className={classes.shipPageWrapper}>
      <ViewSwitchAndFilterWrapper
        views={[
          {
            key: SHIP_VIEWS.Gallery,
            component: (
              <ShipGalleryView
                fetchedAllShips={fetchedAllShips}
                fetchData={fetchMoreShips}
                ships={ships}
              />
            ),
          },
          {
            key: SHIP_VIEWS.List,
            component: (
              <ShipListView
                fetchedAllShips={fetchedAllShips}
                fetchData={fetchMoreShips}
                ships={ships}
              />
            ),
          },
        ]}
      />
    </div>
  );
};
