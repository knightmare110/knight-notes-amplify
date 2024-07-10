/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCreateNotesForm = /* GraphQL */ `
  query GetCreateNotesForm($id: ID!) {
    getCreateNotesForm(id: $id) {
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
export const listCreateNotesForms = /* GraphQL */ `
  query ListCreateNotesForms(
    $filter: ModelCreateNotesFormFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCreateNotesForms(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        text
        createdAt
        updatedAt
        createNotesFormNotesId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getNotes = /* GraphQL */ `
  query GetNotes($id: ID!) {
    getNotes(id: $id) {
      id
      title
      text
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNotesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        text
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
