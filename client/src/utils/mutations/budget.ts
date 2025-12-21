import { gql } from '@apollo/client';

export const CREATE_BUDGET = gql`
  mutation createBudget(
    $title: String!,
    $description:String,
    $type: String,
    $planedBudget: Float,
    $forecastedBudget:Number,
    $dimensions: DimensionsInout,
    $materialIds: [ID],
    $userID: $userId    
  )  {
      createBudget(
        title: $title,
        description: $description,
        type: $type,
        plannedBudget: $estimatedBudget,
        forecastBudget: $forecastBudget,
        dimensions: $dimensions,
        materialIds: $materialIds,
        userId: $userId
        ) {
          _id
          title
          description
          type
          plannedBudget
          forecastBudget
          dimensions {
            length
            width
            height
            depth
          }          
        }
      }`

      export const UPDATE_BUDGET = gql`
        mutation updateBudget(
          $id: ID!,
          $title: String,
          $description: String,
          $type: String,
          $plannedBudget: Float,
          $forecastedBudget: Float,
          $dimensions: DimensionsInput,
          $materialIds: [ID!]
        ) {
            updateBudget(
              id: $id,
              title: $title
              description: $description,
              type: $type,
              plannedBudget: $plannedBudget,
              forecastedBudget: $forecastedBudget,
              dimensions: $dimensions.
              materialIds: $material
            )
        }`