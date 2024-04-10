const typeDefs = `#graphql
  type User {
    _id: ID
    username: String
    email: String
    password: String
    plants: [Plant]
  }

  type Plant {
    commonName: String!
    scientificName: String
    sunlight: String
    directOrIndirect: String
    water: String
    annualOrPerennial: String
    blooms: String
    flowers: String
    deciduous: String
    notes: String
}

  type Auth {
    token: ID!
    user: User
  }

  input PlantInput {
   commonName: String!
   scientificName: String
   sunlight: String
   directOrIndirect: String
   water: String
   annualOrPerennial: String
   blooms: String
   flowers: String
   deciduous: String
   notes: String
   }
   
  type Query {
    users: [User]
    user(id: ID!): User
    me: User
    plants: [Plant]
  }

  type Mutation {
    addUser(email:String!, username:String!, password:String!): Auth
    login(email:String!, password:String!): Auth
    savePlant(plants: PlantInput!): User
    removePlant(plant: String): User
  }
`;

module.exports = typeDefs;
