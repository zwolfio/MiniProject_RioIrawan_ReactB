import { gql } from "@apollo/client";


export const userLogin = gql `
query userLogin($email: String!, $password: String!) {
    user(where: {email: {_eq: $email}, password: {_eq: $password}}) {
      id
      email
      password
    }
  }
`

export const userSignup = gql`
mutation signup( 
  $email: String!, 
  $password: String!, 
  $firstname: String!, 
  $lastname: String!) {
  insert_user_one(
    object: {
      email: $email, 
      firstname: $firstname, 
      password: $password, 
      lastname: $lastname, 
    }) {
      id
  }
}


`