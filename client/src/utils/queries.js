import { gql } from "@apollo/client";

// Queries for plantpal
export const QUERY_USERS = gql`
  query users {
    users {
      _id
      username
      email
    }
  }
`;

export const QUERY_USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      _id
      username
      email
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
   plants {
        commonName
        scientificName
        sunlight
        directOrIndirect
        water
        annualOrPerennial
        blooms
        flowers
        deciduous
        notes
      }
    }
  }
`;


export const QUERY_PLANT = gql`
  query plant($id: ID!) {
    plant(id: $id) {
      _id
      name
      description
    }
  }
`;