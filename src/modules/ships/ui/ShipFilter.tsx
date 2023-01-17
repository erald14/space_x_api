import { Select } from "@mantine/core";
import React from "react";
import { getUniqueTypes } from "../utils/ship-utils";
import { useShipData } from "../hooks/useShipData";

type ShipFilterProps = {
  selectedType: string | null;
  setSelectedType: React.Dispatch<React.SetStateAction<string | null>>;
};
export const ShipFilter = ({
  selectedType,
  setSelectedType,
}: ShipFilterProps) => {
  const { typeData, typeError, typeLoading } = useShipData();

  const uniqueTypes = getUniqueTypes(typeData?.ships || []);

  if (typeLoading) return <p>Loading...</p>;
  if (typeError) return <p>Error : {typeError.message}</p>;

  return (
    <Select
      clearable
      label="Ship type"
      value={selectedType}
      onChange={setSelectedType}
      placeholder="Pick one"
      data={uniqueTypes.map((type) => ({ value: type, label: type }))}
    />
  );
};
