/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getExperience = /* GraphQL */ `
  query GetExperience($id: ID!) {
    getExperience(id: $id) {
      id
      name
      company
      location
      description
      dateBegin
      dateEnd
      tags {
        items {
          id
          experienceID
          title
          createdAt
          updatedAt
        }
        nextToken
      }
      resources {
        items {
          id
          experienceID
          title
          description
          url
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listExperiences = /* GraphQL */ `
  query ListExperiences(
    $filter: ModelExperienceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExperiences(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        company
        location
        description
        dateBegin
        dateEnd
        tags {
          nextToken
        }
        resources {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTag = /* GraphQL */ `
  query GetTag($id: ID!) {
    getTag(id: $id) {
      id
      experienceID
      title
      createdAt
      updatedAt
    }
  }
`;
export const listTags = /* GraphQL */ `
  query ListTags(
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        experienceID
        title
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getResource = /* GraphQL */ `
  query GetResource($id: ID!) {
    getResource(id: $id) {
      id
      experienceID
      title
      description
      url
      createdAt
      updatedAt
    }
  }
`;
export const listResources = /* GraphQL */ `
  query ListResources(
    $filter: ModelResourceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listResources(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        experienceID
        title
        description
        url
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const tagsByExperienceIDAndTitle = /* GraphQL */ `
  query TagsByExperienceIDAndTitle(
    $experienceID: ID!
    $title: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    tagsByExperienceIDAndTitle(
      experienceID: $experienceID
      title: $title
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        experienceID
        title
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const resourcesByExperienceIDAndTitle = /* GraphQL */ `
  query ResourcesByExperienceIDAndTitle(
    $experienceID: ID!
    $title: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelResourceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    resourcesByExperienceIDAndTitle(
      experienceID: $experienceID
      title: $title
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        experienceID
        title
        description
        url
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
