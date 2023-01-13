import { useQuery } from "@apollo/client";
import { GET_SHIPS } from "../../api";
import { IShip, SHIP_VIEWS } from "../../types";
import { GalleryListView } from "./GalleryListView";
import { ShipListView } from "./ShipListView";
import { ViewSwitchAndFilterWrapper } from "./ViewSwitchAndFilterWrapper";

export const Ships = () => {
  const { loading, error, data } = useQuery<{ ships: IShip[] }>(GET_SHIPS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <>
      <ViewSwitchAndFilterWrapper
        views={[
          {
            key: SHIP_VIEWS.List,
            component: <ShipListView ships={data?.ships} />,
          },
          { key: SHIP_VIEWS.Gallery, component: <GalleryListView /> },
        ]}
      />
    </>
  );
};
