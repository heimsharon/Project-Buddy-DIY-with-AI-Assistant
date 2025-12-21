import { gql } from '@apollo/client';

export const CREATE_PROJECT = gql`
  mutation createProject(
    $title: String!,
    $description: String,
    $type: String,
    $completionGoalDate: String,
    $planedBudget: Float,
    $forecastedBudget: Float,
    $dimensions: DimensionsInput,
    $materialIds: [ID],
    $userID: ID!
  ) {
    createProject(
      title: $title,
      description: $description,
      type: $type,
      completionGoalDate: $completionGoalDate,
      plannedBudget: $planedBudget,
      forecastedBudget:$forecastedBudget,
      dimensions: $dimensions,
      materialIds: $materialIds,
      userId: $userId
    ) {
      _id
      title
      description
      type
      plannedBudget
      forecastedBudget
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
    $completionGoalDate: String,
    $plannedBudget: Float,
    $forecastedBudget: Float,
    $dimensions: DimensionsInput,  
    $materialIds: [ID!]
  ) {
    updateProject(
      id: $id,
      title: $title,
      description: $description,
      type: $type,
      plannedBudger: $plannedBudget
      forecastedBudget: $estimatedBudget,
      dimensions: $dimensions,
      materialIds: $materialIds
      ) {
    _id
    title
    description
    type
    plannedBudget,
    forecastedBudget,
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
    plannedBudget
    forecastedBudger
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
