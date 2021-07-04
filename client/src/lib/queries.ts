import {gql} from "@apollo/client";

export const ME = gql`
  query Me {
    me {
      username
      email
      id
      token
      imageUrl
    }
  }
`

export const INFO_CLIENT = gql`
  query infoClient {
    infoClient @client
  }
`