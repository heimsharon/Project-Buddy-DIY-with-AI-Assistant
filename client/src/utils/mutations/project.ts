import { gql } from '@apollo/client';

export const CREATE_PROJECT = gql`
  mutation createProject(
    $ticketNumber: String!
    $userId: ID!
    $userName: String
    $projectName: String!
    $description: String
    $dimensions: DimensionsInput
    $createdAt: Date
    $updatedAt: Date
    $startDay: Date
    $projectEndDate: Date
    $projectBudget: Float
    $materialIds: [ID]
    $status: ProjectStatus
  ) {
    createProject(
      ticketNumber: $ticketNumber
      userId: $userId
      userName: $userName
      projectName: $projectName
      description: $description
      dimensions: $dimensions
      createdAt: $createdAt
      updatedAt: $updatedAt
      startDay: $startDay
      projectEndDate: $projectEndDate
      projectBudget: $projectBudget
      materialIds: $materialIds
      status: $status
    ) {
      ticketNumber
      userId
      userName
      projectName
      description
      dimensions {
        length
        width
        height
        unit
      }
      createdAt
      updatedAt
      startDay
      projectEndDate
      projectBudget
      materialIds
      status
    }
  }
`;

export const UPDATE_PROJECT = gql`
  mutation updateProject(
    $ticketNumber: String!
    $userId: ID!
    $userName: String
    $projectName: String
    $description: String
    $dimensions: DimensionsInput
    $createdAt: Date
    $updatedAt: Date
    $startDay: Date
    $projectEndDate: Date
    $projectBudget: Float
    $materialIds: [ID!]
    $status: ProjectStatus
  ) {
    updateProject(
      ticketNumber: $ticketNumber
      userId: $userId
      userName: $userName
      projectName: $projectName
      description: $description
      dimensions: $dimensions
      createdAt: $createdAt
      updatedAt: $updatedAt
      startDay: $startDay
      projectEndDate: $projectEndDate
      projectBudget: $projectBudget
      materialIds: $materialIds
      status: $status
    ) {
      ticketNumber
      userId
      userName
      projectName
      description
      dimensions {
        length
        width
        height
        unit
      }
      createdAt
      updatedAt
      startDay
      projectEndDate
      projectBudget
      materialIds
      status
    }
  }
`;

export const DELETE_PROJECT = gql`
  mutation deleteProject($ticketNumber: String!) {
    deleteProject(ticketNumber: $ticketNumber) {
      ticketNumber
      userId
      userName
      projectName
      description
      dimensions {
        length
        width
        height
        unit
      }
      createdAt
      updatedAt
      startDay
      projectEndDate
      projectBudget
      materialIds
      status
    }
  }
`;
