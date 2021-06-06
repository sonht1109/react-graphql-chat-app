const { gql } = require("apollo-server");

module.exports = gql`

  # types
  type User {
    username: String!
    email: String!
    id: Int!
    createdAt: String
    token: String!
  }

  type Message {
    from: String!
    content: String!
    uuid: String!
    createdAt: String
    to: String!
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

    sendMessage(
      to: String!
      content: String!
    ): Message!
  }
`;
