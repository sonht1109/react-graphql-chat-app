import { gql } from "@apollo/client";

export const REGISTER_MUTATION = gql`
  mutation register(
    $email: String!
    $username: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      email: $email
      username: $username
      password: $password
      confirmPassword: $confirmPassword
    ) {
      id
      username
    }
  }
`;
