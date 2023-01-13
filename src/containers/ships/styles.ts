import { createStyles } from "@mantine/core";

export const useShipStyles = createStyles((theme) => ({
  tabWrapper: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
  },
  tabList: {
    width: "8%",
  },
  filter: {
    width: "20%",
  },
}));
