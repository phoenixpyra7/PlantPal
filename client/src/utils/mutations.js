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
  mutation addPlant($userId: ID!, $plant: String!) {
    addPlant(userId: $userId, plant: $plant) {
      _id
      username
      plants
    }
  }
`;

export const UPDATE_PLANT = gql`
  mutation updatePlant(
    $plantId: ID!
    $commonName: String!
    $scientificName: String!
    $sunlight: String!
    $directOrIndirect: Boolean!
    $water: String!
    $annualOrPerenial: Boolean!
    $blooms: String!
    $flowers: Boolean!
    $deciduous: Boolean!
    $notes: String
  ) {
    updatePlant(
    plantId: $plantId
    commonNmae: $commonName
    scientificName: $scientificName
    sunlight: $sunlight
    directOrIndirect: $directOrIndirect
    water:  $water
    annualOrPerenial: $annualOrPerenial
    blooms: $blooms
    flowers: $flowers
    deciduous: $deciduous
    notes: $notes

    )

export const REMOVE_PLANT = gql`
  mutation removePlant($plant: String!) {
    removePlant(plant: $plant) {
      _id
      username
      plants
    }
  }
`;


