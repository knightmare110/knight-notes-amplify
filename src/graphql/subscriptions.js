/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCreateNotesForm = /* GraphQL */ `
  subscription OnCreateCreateNotesForm(
    $filter: ModelSubscriptionCreateNotesFormFilterInput
  ) {
    onCreateCreateNotesForm(filter: $filter) {
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
export const onUpdateCreateNotesForm = /* GraphQL */ `
  subscription OnUpdateCreateNotesForm(
    $filter: ModelSubscriptionCreateNotesFormFilterInput
  ) {
    onUpdateCreateNotesForm(filter: $filter) {
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
export const onDeleteCreateNotesForm = /* GraphQL */ `
  subscription OnDeleteCreateNotesForm(
    $filter: ModelSubscriptionCreateNotesFormFilterInput
  ) {
    onDeleteCreateNotesForm(filter: $filter) {
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
export const onCreateNotes = /* GraphQL */ `
  subscription OnCreateNotes($filter: ModelSubscriptionNotesFilterInput) {
    onCreateNotes(filter: $filter) {
      id
      title
      text
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateNotes = /* GraphQL */ `
  subscription OnUpdateNotes($filter: ModelSubscriptionNotesFilterInput) {
    onUpdateNotes(filter: $filter) {
      id
      title
      text
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteNotes = /* GraphQL */ `
  subscription OnDeleteNotes($filter: ModelSubscriptionNotesFilterInput) {
    onDeleteNotes(filter: $filter) {
      id
      title
      text
      createdAt
      updatedAt
      __typename
    }
  }
`;
