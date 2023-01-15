import { gql } from "@apollo/client";
export const GET_SHIPS = gql`
  query Ships($offset: Int, $limit: Int) {
    ships(offset: $offset, limit: $limit) {
      id
      active
      image
      name
      type
      model
      class
      status
      weight_kg
      year_built
    }
  }
`;

// API had no endpoint to get type
export const GET_SHIP_TYPES = gql`
  {
    ships(offset: 0, limit: 1000000) {
      type
    }
  }
`;
