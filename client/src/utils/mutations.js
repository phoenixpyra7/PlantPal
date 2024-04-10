import { gql } from "@apollo/client";

// mutations for plantpal
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_PLANT = gql`
  mutation savePlant($plants: PlantInput!) {
    savePlant(plants: $plants) {
      _id
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
        notes
      }
    }
  }
`;

export const REMOVE_PLANT = gql`
  mutation removePlant($plant: String) {
    removePlant(plant: $plant) {
      _id
      plants {
        commonName
        scientificName
        sunlight
        directOrIndirect
        water
        annualOrPerennial
        blooms
        flowers
        notes
      }
    }
  }
`;