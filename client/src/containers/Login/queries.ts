import {gql} from '@apollo/client'

export const LoginQuery = gql`
  query login($email: String! $password: String!){
    username
    email
    createdAt
  }
`