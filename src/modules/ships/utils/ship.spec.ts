import { getUniqueTypes } from "./ship-utils";

describe("getUniqueTypes", () => {
  it("should return only unqiue values", () => {
    const listOfTypes = [
      {
        type: "High Speed Craft",
      },
      {
        type: "Cargo",
      },
      {
        type: "Tug",
      },
      {
        type: "Cargo",
      },
      {
        type: "Cargo",
      },
      {
        type: "Barge",
      },
      {
        type: "Cargo",
      },
      {
        type: "Barge",
      },
      {
        type: "Tug",
      },
      {
        type: "Tug",
      },
      {
        type: "Tug",
      },
      {
        type: "Cargo",
      },
      {
        type: "Cargo",
      },
      {
        type: "Tug",
      },
      {
        type: "Tug",
      },
      {
        type: "Barge",
      },
      {
        type: "Barge",
      },
      {
        type: "Tug",
      },
      {
        type: "Tug",
      },
      {
        type: "Cargo",
      },
      {
        type: "Tug",
      },
      {
        type: "High Speed Craft",
      },
    ];
    expect(getUniqueTypes(listOfTypes).length).toBe(4);
  });
});
