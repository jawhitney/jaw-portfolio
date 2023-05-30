/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createExperience = /* GraphQL */ `
  mutation CreateExperience(
    $input: CreateExperienceInput!
    $condition: ModelExperienceConditionInput
  ) {
    createExperience(input: $input, condition: $condition) {
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
export const updateExperience = /* GraphQL */ `
  mutation UpdateExperience(
    $input: UpdateExperienceInput!
    $condition: ModelExperienceConditionInput
  ) {
    updateExperience(input: $input, condition: $condition) {
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
export const deleteExperience = /* GraphQL */ `
  mutation DeleteExperience(
    $input: DeleteExperienceInput!
    $condition: ModelExperienceConditionInput
  ) {
    deleteExperience(input: $input, condition: $condition) {
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
export const createTag = /* GraphQL */ `
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
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
export const updateTag = /* GraphQL */ `
  mutation UpdateTag(
    $input: UpdateTagInput!
    $condition: ModelTagConditionInput
  ) {
    updateTag(input: $input, condition: $condition) {
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
export const deleteTag = /* GraphQL */ `
  mutation DeleteTag(
    $input: DeleteTagInput!
    $condition: ModelTagConditionInput
  ) {
    deleteTag(input: $input, condition: $condition) {
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
export const createResource = /* GraphQL */ `
  mutation CreateResource(
    $input: CreateResourceInput!
    $condition: ModelResourceConditionInput
  ) {
    createResource(input: $input, condition: $condition) {
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
export const updateResource = /* GraphQL */ `
  mutation UpdateResource(
    $input: UpdateResourceInput!
    $condition: ModelResourceConditionInput
  ) {
    updateResource(input: $input, condition: $condition) {
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
export const deleteResource = /* GraphQL */ `
  mutation DeleteResource(
    $input: DeleteResourceInput!
    $condition: ModelResourceConditionInput
  ) {
    deleteResource(input: $input, condition: $condition) {
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
