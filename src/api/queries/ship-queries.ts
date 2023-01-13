import { gql } from "@apollo/client";
export const GET_SHIPS = gql`
  {
    ships(limit: 10) {
      id
      active
      image
    }
  }
`;
