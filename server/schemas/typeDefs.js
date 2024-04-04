const typeDefs = `#graphql
  type User {
    _id: ID
    username: String
    email: String
    password: String
    plantCount: Int
    savedPlants: [Plant]
    savedPlantsIds: [ID]
  }

  type Plant {
    plantId: String!
    commonName: String!
    scientificName: String
    sunlight: String
    directOrIndirect: Boolean
    water: String
    annualOrPerennials: Boolean
    blooms: [String]
    flowers: Boolean
    deciduous: Boolean
}

  type Auth {
    token: ID!
    user: User
  }

  input PlantInput {
   commonName: String!
   scientificName: String
   sunlight: String
   directOrIndirect: Boolean
   water: String
   annualOrPerennials: Boolean
   blooms: [String]
   flowers: Boolean
   deciduous: Boolean
   }
   
  type Query {
    users: [User]
    user(id: ID!): User
    me: User
  }

  type Mutation {
    addUser(email:String!, username:String!, password:String!): Auth
    login(email:String!, password:String!): Auth
    savePlant(plant: PlantInput!): User
    removePlant(plantId: String!): User
  }
`;

module.exports = typeDefs;
