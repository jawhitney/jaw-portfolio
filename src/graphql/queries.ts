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
          title
          createdAt
          updatedAt
          experienceTagsId
        }
        nextToken
      }
      resources {
        items {
          id
          url
          description
          createdAt
          updatedAt
          experienceResourcesId
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
      title
      experience {
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
      createdAt
      updatedAt
      experienceTagsId
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
        title
        experience {
          id
          name
          company
          location
          description
          dateBegin
          dateEnd
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        experienceTagsId
      }
      nextToken
    }
  }
`;
export const getResource = /* GraphQL */ `
  query GetResource($id: ID!) {
    getResource(id: $id) {
      id
      url
      description
      experience {
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
      createdAt
      updatedAt
      experienceResourcesId
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
        url
        description
        experience {
          id
          name
          company
          location
          description
          dateBegin
          dateEnd
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        experienceResourcesId
      }
      nextToken
    }
  }
`;
