import { gql } from "@apollo/client";


export const userLogin = gql `
query userLogin($email: String!, $password: String!) {
    user(where: {email: {_eq: $email}, password: {_eq: $password}}) {
      id
      email
      password
      username
    }
  }
`