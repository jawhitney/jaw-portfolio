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
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag($filter: ModelSubscriptionTagFilterInput) {
    onCreateTag(filter: $filter) {
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
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag($filter: ModelSubscriptionTagFilterInput) {
    onUpdateTag(filter: $filter) {
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
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag($filter: ModelSubscriptionTagFilterInput) {
    onDeleteTag(filter: $filter) {
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
export const onCreateResource = /* GraphQL */ `
  subscription OnCreateResource($filter: ModelSubscriptionResourceFilterInput) {
    onCreateResource(filter: $filter) {
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
export const onUpdateResource = /* GraphQL */ `
  subscription OnUpdateResource($filter: ModelSubscriptionResourceFilterInput) {
    onUpdateResource(filter: $filter) {
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
export const onDeleteResource = /* GraphQL */ `
  subscription OnDeleteResource($filter: ModelSubscriptionResourceFilterInput) {
    onDeleteResource(filter: $filter) {
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
