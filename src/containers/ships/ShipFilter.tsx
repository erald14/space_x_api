import { Select } from "@mantine/core";
import React from "react";
import { getUniqueTypes } from "./ship-utils";
import { useShipData } from "./useShipData";

type Props = {};

export const ShipFilter = (props: Props) => {
  const { typeData, typeError, typeLoading } = useShipData();
  const uniqueTypes = getUniqueTypes(typeData?.ships || []);
  if (typeLoading) return <p>Loading...</p>;
  if (typeError) return <p>Error : {typeError.message}</p>;
  return (
    <Select
      label="Ship type"
      placeholder="Pick one"
      data={uniqueTypes.map((type) => ({ value: type, label: type }))}
    />
  );
};
