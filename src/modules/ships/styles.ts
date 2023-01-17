import { createStyles } from "@mantine/core";

export const useShipStyles = createStyles((theme) => ({
  shipPageWrapper: {
    padding: 30,
  },
  tabWrapper: {
    padding: 10,
    paddingBottom: 30,
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
  },
  tabList: {
    width: "30%",
    borderBottom: 0,
  },
  filter: {
    width: "20%",
  },
  listItemWrapper: {
    padding: 20,
  },
}));
