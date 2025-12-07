import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login( $email: String!, $password: String!){
    login(email: $email, password: $password) {
      token
      user {
        _id
        username        
      }
    }
  }
`;

        export const CREATE_USER = gql`
        mutation crateUser($username: String!, $email: String!, $password: String!) {
          createUser (username: $username, email:$email, password: $password) {
            user {
              username
              email
              _id
            }
              token 
              }
              }
`; 

export const UPDATE_USER = gql`
  mutation updateUser(
    $avatar: String,
    $username:String,
    $email: String,
    $password: String
  ) {
    updateUser(
      avatar: $avatar,
      username: $username,
      email: $email,
      password: $password {
        _id
        avatar
        username
        email
      } 
    )
    }
`;

export const DELETE_USER = gql`
  mutation deleteUser {
    deleteUser {
      _id
      username
      email
    }
  }
`;

