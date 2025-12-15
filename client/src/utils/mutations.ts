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
  }`;

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
  }`; 

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
  }`;

export const DELETE_USER = gql`
  mutation deleteUser {
    deleteUser {
      _id
      username
      email
    }
  }`;

export const CREATE_PROJECT = gql`
  mutation createProject(
    $title: String!,
    $description: String,
    $type: String,
    $estimatedBudget: Float,
    $dimensions: DimensionsInput,
    $completionGoalDate: String,
    $materialIds: [ID],
    $userID: ID!
  ) {
    createProject(
      title: $title,
      description: $description,
      type: $type,
      estimatedBudget: $estimatedBudget,
      dimensions: $dimensions,
      completionGoalDate: $completionGoalDate,
      materialIds: $materialIds,
      userId: $userId
    ) {
      _id
      title
      description
      type
      estimatedBudget
      dimensions {
        length
        width
        height
        depth
      }
      completionGoalDate
    }  
  }`;

export const UPDATE_PROJECT = gql`
mutation updateProject(
  $id: ID!,
  $title: String,
  $description: String,
  $type: String,
  $estimatedBudget: Float,
  $dimensions: DimensionsInput,
  $completionGoalDate: String,
  $materialIds: [ID!]
) {
  updateProject(
    id: $id,
    title: $title,
    description: $description,
    type: $type,
    estimatedBudget: $estimatedBudget,
    dimensions: $dimensions,
    materialIds: $materialIds
  ) {
    _id
    title
    description
    type
    estimatedBudget,
    dimensions {
      length
      width
      height
      depth
    }
    completionGoalDate
  }
}`;

export const DELETE_PROJECT = gql`
mutation deleteProject($id: ID!) {
  deleteProject(id: $id) {
    _id
    title
    description
    estimatedBudget
    type
    dimensions {
      length
      width
      height
      depth
    }
    completionGoalDate
  }
}`

)`