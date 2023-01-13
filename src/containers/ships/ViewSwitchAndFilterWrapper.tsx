import { Tabs } from "@mantine/core";
import React, { useState } from "react";
import { SHIP_VIEWS } from "../../types";
import { useShipStyles } from "./styles";

type Props = {
  views: { key: SHIP_VIEWS; component: JSX.Element }[];
};

export const ViewSwitchAndFilterWrapper = ({ views }: Props) => {
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
          {views.map((view) => (
            <Tabs.Tab value={view.key}>{view.key}</Tabs.Tab>
          ))}
        </Tabs.List>
        <div className={classes.filter}>filter</div>
      </div>
      {views.map((view) => (
        <Tabs.Panel value={view.key}>{view.component}</Tabs.Panel>
      ))}
    </Tabs>
  );
};
