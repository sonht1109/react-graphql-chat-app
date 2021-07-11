import gql from "graphql-tag";

export const GET_USERS = gql`
  query getUsers ($username: String!){
    getUsers (username: $username){
      username
      id
      imageUrl
    }
  }
`