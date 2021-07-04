const { gql } = require("apollo-server");

module.exports = gql`

  # types
  type User {
    username: String!
    email: String!
    id: Int!
    createdAt: String
    token: String!
    imageUrl: String
    # friends: [String!]
  }

  type Message {
    from: String!
    content: String!
    uuid: String!
    createdAt: String!
    to: String!
  }

  # query
  type Query {

    me: User!

    getUsers: [User]!

    login(email: String! password: String!): User!

    getMessages(from: String!): [Message]!
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
