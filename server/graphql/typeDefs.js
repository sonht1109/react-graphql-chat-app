const { gql } = require("apollo-server");

module.exports = gql`

  type User {
    username: String!
    email: String!
    id: Int!
    createdAt: String
    token: String!
  }

  # query
  type Query {
    getUsers: [User]!
    login(email: String! password: String!): User!
  }

  # mutation
  type Mutation {
    register(
      username: String!
      email: String!
      password: String!
      confirmPassword: String!
    ): User!
  }
`;
