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

export const getData = gql`
query GetData ($id_user:Int!) {
  plan(where: {id_user: {_eq: $id_user}}) {
    id_user
    catatan
    idPlan
    isDone
    namaDestinasi
    namaKota
  }
}
`

export const searchDestinasi = gql`
query SearchData($namaDestinasi: String!, $id_user: Int!) {
  plan(where: {plan_user: {}, namaDestinasi: {_eq: $namaDestinasi}, id_user: {_eq: $id_user}}) {
    id_user
    catatan
    idPlan
    isDone
    namaDestinasi
    namaKota
  }
}
`