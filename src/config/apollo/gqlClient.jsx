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
  plan(where: {id_user: {_eq: $id_user},isDone: {_eq: false}}) {
    id_user
    catatan
    idPlan
    isDone
    namaDestinasi
    namaKota
  }
}
`
export const getHistory = gql`
query GetData ($id_user:Int!) {
  plan(where: {id_user: {_eq: $id_user},isDone: {_eq: true}}) {
    id_user
    catatan
    idPlan
    isDone
    namaDestinasi
    namaKota
  }
}
`
export const getDetail = gql`
query GetData ($idPlan:Int!) {
  plan(where: {idPlan: {_eq: $idPlan}}) {
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
export const insertPlan = gql`
mutation insertPlan(
  $tanggalPergi: date!, 
  $namaKota: String!, 
  $namaDestinasi: String!, 
  $catatan: String!, 
  $id_user:Int!) {
  insert_plan_one(object: {
    
    tanggalPergi: $tanggalPergi, 
    namaKota: $namaKota, 
    namaDestinasi: $namaDestinasi, 
    catatan: $catatan, 
    id_user: $id_user}) {
    
    id_user
    catatan
    idPlan
    isDone
    namaDestinasi
    namaKota

  }
}
`

export const deletePlan = gql `
    mutation deleteProduct($idPlan: Int!) {
        delete_plan_by_pk(idPlan: $idPlan){
            idPlan
        }  
    }
`

export const editPlan = gql `
mutation updatePlan( 
  $idPlan : Int!
  $namaKota: String!, 
  $namaDestinasi: String!, 

  ) {
  update_plan(
            where: { idPlan: { _eq: $idPlan } }
            _set: {

              namaKota: $namaKota, 
              namaDestinasi: $namaDestinasi, 
              
            }
        ) {
          affected_rows
        }
}
`
export const done = gql `
mutation done( 
  $idPlan : Int! 

  ) {
  update_plan(
            where: { idPlan: { _eq: $idPlan } }
            _set: {

              isDone : true
              
            }
        ) {
          affected_rows
        }
}
`

