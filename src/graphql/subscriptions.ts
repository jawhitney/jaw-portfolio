/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateExperience = /* GraphQL */ `
  subscription OnCreateExperience(
    $filter: ModelSubscriptionExperienceFilterInput
  ) {
    onCreateExperience(filter: $filter) {
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
export const onUpdateExperience = /* GraphQL */ `
  subscription OnUpdateExperience(
    $filter: ModelSubscriptionExperienceFilterInput
  ) {
    onUpdateExperience(filter: $filter) {
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
export const onDeleteExperience = /* GraphQL */ `
  subscription OnDeleteExperience(
    $filter: ModelSubscriptionExperienceFilterInput
  ) {
    onDeleteExperience(filter: $filter) {
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
export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject($filter: ModelSubscriptionProjectFilterInput) {
    onCreateProject(filter: $filter) {
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
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject($filter: ModelSubscriptionProjectFilterInput) {
    onUpdateProject(filter: $filter) {
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
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject($filter: ModelSubscriptionProjectFilterInput) {
    onDeleteProject(filter: $filter) {
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
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSkill = /* GraphQL */ `
  subscription OnCreateSkill($filter: ModelSubscriptionSkillFilterInput) {
    onCreateSkill(filter: $filter) {
      id
      experienceID
      title
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSkill = /* GraphQL */ `
  subscription OnUpdateSkill($filter: ModelSubscriptionSkillFilterInput) {
    onUpdateSkill(filter: $filter) {
      id
      experienceID
      title
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSkill = /* GraphQL */ `
  subscription OnDeleteSkill($filter: ModelSubscriptionSkillFilterInput) {
    onDeleteSkill(filter: $filter) {
      id
      experienceID
      title
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag($filter: ModelSubscriptionTagFilterInput) {
    onCreateTag(filter: $filter) {
      id
      projectID
      title
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag($filter: ModelSubscriptionTagFilterInput) {
    onUpdateTag(filter: $filter) {
      id
      projectID
      title
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag($filter: ModelSubscriptionTagFilterInput) {
    onDeleteTag(filter: $filter) {
      id
      projectID
      title
      createdAt
      updatedAt
    }
  }
`;
export const onCreateResource = /* GraphQL */ `
  subscription OnCreateResource($filter: ModelSubscriptionResourceFilterInput) {
    onCreateResource(filter: $filter) {
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
export const onUpdateResource = /* GraphQL */ `
  subscription OnUpdateResource($filter: ModelSubscriptionResourceFilterInput) {
    onUpdateResource(filter: $filter) {
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
export const onDeleteResource = /* GraphQL */ `
  subscription OnDeleteResource($filter: ModelSubscriptionResourceFilterInput) {
    onDeleteResource(filter: $filter) {
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
