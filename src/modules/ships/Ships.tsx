import { useState } from "react";
import { SHIP_VIEWS } from "./types";
import { ShipFilter } from "./ui/ShipFilter";
import { ShipGalleryView } from "./ui/ShipGalleryView";
import { ShipListView } from "./ui/ShipListView";
import { useShipStyles } from "./styles";
import { useShipData } from "./hooks/useShipData";
import { ViewSwitchAndFilterWrapper } from "./ui/ViewSwitchAndFilterWrapper";

export const Ships = () => {
  const { classes } = useShipStyles();

  // normally this would have to be hoisted up to shared state.
  const [selectedType, setSelectedType] = useState<null | string>(null);
  const { loading, error, ships, fetchedAllShips, fetchMoreShips } =
    useShipData(selectedType);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <div className={classes.shipPageWrapper}>
      <ViewSwitchAndFilterWrapper
        filterComponent={
          <ShipFilter
            selectedType={selectedType}
            setSelectedType={setSelectedType}
          />
        }
        views={[
          {
            key: SHIP_VIEWS.Gallery,
            component: (
              <ShipGalleryView
                fetchedAllShips={fetchedAllShips}
                fetchData={() => fetchMoreShips(selectedType)}
                ships={ships}
              />
            ),
          },
          {
            key: SHIP_VIEWS.List,
            component: (
              <ShipListView
                fetchedAllShips={fetchedAllShips}
                fetchData={() => fetchMoreShips(selectedType)}
                ships={ships}
              />
            ),
          },
        ]}
      />
    </div>
  );
};
