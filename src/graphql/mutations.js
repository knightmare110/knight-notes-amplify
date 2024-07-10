/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCreateNotesForm = /* GraphQL */ `
  mutation CreateCreateNotesForm(
    $input: CreateCreateNotesFormInput!
    $condition: ModelCreateNotesFormConditionInput
  ) {
    createCreateNotesForm(input: $input, condition: $condition) {
      id
      title
      text
      Notes {
        id
        title
        text
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      createNotesFormNotesId
      __typename
    }
  }
`;
export const updateCreateNotesForm = /* GraphQL */ `
  mutation UpdateCreateNotesForm(
    $input: UpdateCreateNotesFormInput!
    $condition: ModelCreateNotesFormConditionInput
  ) {
    updateCreateNotesForm(input: $input, condition: $condition) {
      id
      title
      text
      Notes {
        id
        title
        text
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      createNotesFormNotesId
      __typename
    }
  }
`;
export const deleteCreateNotesForm = /* GraphQL */ `
  mutation DeleteCreateNotesForm(
    $input: DeleteCreateNotesFormInput!
    $condition: ModelCreateNotesFormConditionInput
  ) {
    deleteCreateNotesForm(input: $input, condition: $condition) {
      id
      title
      text
      Notes {
        id
        title
        text
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      createNotesFormNotesId
      __typename
    }
  }
`;
export const createNotes = /* GraphQL */ `
  mutation CreateNotes(
    $input: CreateNotesInput!
    $condition: ModelNotesConditionInput
  ) {
    createNotes(input: $input, condition: $condition) {
      id
      title
      text
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateNotes = /* GraphQL */ `
  mutation UpdateNotes(
    $input: UpdateNotesInput!
    $condition: ModelNotesConditionInput
  ) {
    updateNotes(input: $input, condition: $condition) {
      id
      title
      text
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteNotes = /* GraphQL */ `
  mutation DeleteNotes(
    $input: DeleteNotesInput!
    $condition: ModelNotesConditionInput
  ) {
    deleteNotes(input: $input, condition: $condition) {
      id
      title
      text
      createdAt
      updatedAt
      __typename
    }
  }
`;
