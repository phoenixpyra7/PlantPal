import { gql } from "@apollo/client";

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
  mutation savePlant($plant: PlantInput!) {
    savePlant(plant: $plant) {
      _id
      email
      savedPlants {
        plantId
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
  mutation removePlant($userId: ID!, $plant: String!) {
    removePlant(userId: $userId, plant: $plant) {
      _id
      username
      savedPlants
    }
  }
`;