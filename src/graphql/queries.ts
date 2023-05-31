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
      projects {
        items {
          id
          experienceID
          title
          description
          company
          url
          thumbnail
          createdAt
          updatedAt
        }
        nextToken
      }
      skills {
        items {
          id
          experienceID
          title
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
        projects {
          nextToken
        }
        skills {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
      id
      experienceID
      title
      description
      company
      url
      thumbnail
      tags {
        items {
          id
          projectID
          title
          createdAt
          updatedAt
        }
        nextToken
      }
      resources {
        items {
          id
          projectID
          name
          title
          description
          url
          createdAt
          updatedAt
        }
        nextToken
      }
      collaborators {
        items {
          id
          projectID
          name
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
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        experienceID
        title
        description
        company
        url
        thumbnail
        tags {
          nextToken
        }
        resources {
          nextToken
        }
        collaborators {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSkill = /* GraphQL */ `
  query GetSkill($id: ID!) {
    getSkill(id: $id) {
      id
      experienceID
      title
      createdAt
      updatedAt
    }
  }
`;
export const listSkills = /* GraphQL */ `
  query ListSkills(
    $filter: ModelSkillFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSkills(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
export const getTag = /* GraphQL */ `
  query GetTag($id: ID!) {
    getTag(id: $id) {
      id
      projectID
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
        projectID
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
      projectID
      name
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
        projectID
        name
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
export const getCollaborator = /* GraphQL */ `
  query GetCollaborator($id: ID!) {
    getCollaborator(id: $id) {
      id
      projectID
      name
      description
      url
      createdAt
      updatedAt
    }
  }
`;
export const listCollaborators = /* GraphQL */ `
  query ListCollaborators(
    $filter: ModelCollaboratorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCollaborators(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        projectID
        name
        description
        url
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const projectsByExperienceIDAndTitle = /* GraphQL */ `
  query ProjectsByExperienceIDAndTitle(
    $experienceID: ID!
    $title: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    projectsByExperienceIDAndTitle(
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
        company
        url
        thumbnail
        tags {
          nextToken
        }
        resources {
          nextToken
        }
        collaborators {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const skillsByExperienceIDAndTitle = /* GraphQL */ `
  query SkillsByExperienceIDAndTitle(
    $experienceID: ID!
    $title: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSkillFilterInput
    $limit: Int
    $nextToken: String
  ) {
    skillsByExperienceIDAndTitle(
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
export const tagsByProjectIDAndTitle = /* GraphQL */ `
  query TagsByProjectIDAndTitle(
    $projectID: ID!
    $title: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    tagsByProjectIDAndTitle(
      projectID: $projectID
      title: $title
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        projectID
        title
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const resourcesByProjectIDAndTitle = /* GraphQL */ `
  query ResourcesByProjectIDAndTitle(
    $projectID: ID!
    $title: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelResourceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    resourcesByProjectIDAndTitle(
      projectID: $projectID
      title: $title
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        projectID
        name
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
export const collaboratorsByProjectIDAndName = /* GraphQL */ `
  query CollaboratorsByProjectIDAndName(
    $projectID: ID!
    $name: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCollaboratorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    collaboratorsByProjectIDAndName(
      projectID: $projectID
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        projectID
        name
        description
        url
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
