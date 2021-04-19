import { gql } from '@apollo/client'


export const CREATE_USER = gql`
mutation AddUser($firstname:String, $lastname:String, $is_admin:Boolean) {
  addUser(firstname: $firstname, lastname: $lastname, is_admin: $is_admin) {
    user_id
    firstname
    lastname
    is_admin
  }
}
`