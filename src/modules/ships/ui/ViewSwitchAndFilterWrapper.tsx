import { Tabs } from "@mantine/core";
import { useState } from "react";
import { SHIP_VIEWS } from "../types";
import { useShipStyles } from "../styles";

type Props = {
  filterComponent: JSX.Element;
  views: { key: SHIP_VIEWS; component: JSX.Element }[];
};

export const ViewSwitchAndFilterWrapper = ({
  views,
  filterComponent,
}: Props) => {
  const [currentSelectedView, setCurrentSelectedView] = useState<SHIP_VIEWS>(
    views[0].key
  );
  const { classes } = useShipStyles();

  return (
    <Tabs
      onTabChange={(el) => el && setCurrentSelectedView(el as SHIP_VIEWS)}
      value={currentSelectedView}
      defaultValue="first"
    >
      <div className={classes.tabWrapper}>
        <Tabs.List className={classes.tabList}>
          {views.map((view, index) => (
            <Tabs.Tab key={index} value={view.key}>
              {view.key}
            </Tabs.Tab>
          ))}
        </Tabs.List>
        <div className={classes.filter}>{filterComponent}</div>
      </div>
      {views.map((view, index) => (
        <Tabs.Panel key={index} value={view.key}>
          {view.component}
        </Tabs.Panel>
      ))}
    </Tabs>
  );
};
