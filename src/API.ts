/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateExperienceInput = {
  id?: string | null,
  name: string,
  company: string,
  location: string,
  description: string,
  dateBegin: string,
  dateEnd: string,
};

export type ModelExperienceConditionInput = {
  name?: ModelStringInput | null,
  company?: ModelStringInput | null,
  location?: ModelStringInput | null,
  description?: ModelStringInput | null,
  dateBegin?: ModelStringInput | null,
  dateEnd?: ModelStringInput | null,
  and?: Array< ModelExperienceConditionInput | null > | null,
  or?: Array< ModelExperienceConditionInput | null > | null,
  not?: ModelExperienceConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Experience = {
  __typename: "Experience",
  id: string,
  name: string,
  company: string,
  location: string,
  description: string,
  dateBegin: string,
  dateEnd: string,
  tags?: ModelTagConnection | null,
  resources?: ModelResourceConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelTagConnection = {
  __typename: "ModelTagConnection",
  items:  Array<Tag | null >,
  nextToken?: string | null,
};

export type Tag = {
  __typename: "Tag",
  id: string,
  title: string,
  experience?: Experience | null,
  createdAt: string,
  updatedAt: string,
  experienceTagsId?: string | null,
};

export type ModelResourceConnection = {
  __typename: "ModelResourceConnection",
  items:  Array<Resource | null >,
  nextToken?: string | null,
};

export type Resource = {
  __typename: "Resource",
  id: string,
  url: string,
  description: string,
  experience?: Experience | null,
  createdAt: string,
  updatedAt: string,
  experienceResourcesId?: string | null,
};

export type UpdateExperienceInput = {
  id: string,
  name?: string | null,
  company?: string | null,
  location?: string | null,
  description?: string | null,
  dateBegin?: string | null,
  dateEnd?: string | null,
};

export type DeleteExperienceInput = {
  id: string,
};

export type CreateTagInput = {
  id?: string | null,
  title: string,
  experienceTagsId?: string | null,
};

export type ModelTagConditionInput = {
  title?: ModelStringInput | null,
  and?: Array< ModelTagConditionInput | null > | null,
  or?: Array< ModelTagConditionInput | null > | null,
  not?: ModelTagConditionInput | null,
  experienceTagsId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateTagInput = {
  id: string,
  title?: string | null,
  experienceTagsId?: string | null,
};

export type DeleteTagInput = {
  id: string,
};

export type CreateResourceInput = {
  id?: string | null,
  url: string,
  description: string,
  experienceResourcesId?: string | null,
};

export type ModelResourceConditionInput = {
  url?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelResourceConditionInput | null > | null,
  or?: Array< ModelResourceConditionInput | null > | null,
  not?: ModelResourceConditionInput | null,
  experienceResourcesId?: ModelIDInput | null,
};

export type UpdateResourceInput = {
  id: string,
  url?: string | null,
  description?: string | null,
  experienceResourcesId?: string | null,
};

export type DeleteResourceInput = {
  id: string,
};

export type ModelExperienceFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  company?: ModelStringInput | null,
  location?: ModelStringInput | null,
  description?: ModelStringInput | null,
  dateBegin?: ModelStringInput | null,
  dateEnd?: ModelStringInput | null,
  and?: Array< ModelExperienceFilterInput | null > | null,
  or?: Array< ModelExperienceFilterInput | null > | null,
  not?: ModelExperienceFilterInput | null,
};

export type ModelExperienceConnection = {
  __typename: "ModelExperienceConnection",
  items:  Array<Experience | null >,
  nextToken?: string | null,
};

export type ModelTagFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  and?: Array< ModelTagFilterInput | null > | null,
  or?: Array< ModelTagFilterInput | null > | null,
  not?: ModelTagFilterInput | null,
  experienceTagsId?: ModelIDInput | null,
};

export type ModelResourceFilterInput = {
  id?: ModelIDInput | null,
  url?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelResourceFilterInput | null > | null,
  or?: Array< ModelResourceFilterInput | null > | null,
  not?: ModelResourceFilterInput | null,
  experienceResourcesId?: ModelIDInput | null,
};

export type ModelSubscriptionExperienceFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  company?: ModelSubscriptionStringInput | null,
  location?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  dateBegin?: ModelSubscriptionStringInput | null,
  dateEnd?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionExperienceFilterInput | null > | null,
  or?: Array< ModelSubscriptionExperienceFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionTagFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTagFilterInput | null > | null,
  or?: Array< ModelSubscriptionTagFilterInput | null > | null,
};

export type ModelSubscriptionResourceFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  url?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionResourceFilterInput | null > | null,
  or?: Array< ModelSubscriptionResourceFilterInput | null > | null,
};

export type CreateExperienceMutationVariables = {
  input: CreateExperienceInput,
  condition?: ModelExperienceConditionInput | null,
};

export type CreateExperienceMutation = {
  createExperience?:  {
    __typename: "Experience",
    id: string,
    name: string,
    company: string,
    location: string,
    description: string,
    dateBegin: string,
    dateEnd: string,
    tags?:  {
      __typename: "ModelTagConnection",
      items:  Array< {
        __typename: "Tag",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
        experienceTagsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    resources?:  {
      __typename: "ModelResourceConnection",
      items:  Array< {
        __typename: "Resource",
        id: string,
        url: string,
        description: string,
        createdAt: string,
        updatedAt: string,
        experienceResourcesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateExperienceMutationVariables = {
  input: UpdateExperienceInput,
  condition?: ModelExperienceConditionInput | null,
};

export type UpdateExperienceMutation = {
  updateExperience?:  {
    __typename: "Experience",
    id: string,
    name: string,
    company: string,
    location: string,
    description: string,
    dateBegin: string,
    dateEnd: string,
    tags?:  {
      __typename: "ModelTagConnection",
      items:  Array< {
        __typename: "Tag",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
        experienceTagsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    resources?:  {
      __typename: "ModelResourceConnection",
      items:  Array< {
        __typename: "Resource",
        id: string,
        url: string,
        description: string,
        createdAt: string,
        updatedAt: string,
        experienceResourcesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteExperienceMutationVariables = {
  input: DeleteExperienceInput,
  condition?: ModelExperienceConditionInput | null,
};

export type DeleteExperienceMutation = {
  deleteExperience?:  {
    __typename: "Experience",
    id: string,
    name: string,
    company: string,
    location: string,
    description: string,
    dateBegin: string,
    dateEnd: string,
    tags?:  {
      __typename: "ModelTagConnection",
      items:  Array< {
        __typename: "Tag",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
        experienceTagsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    resources?:  {
      __typename: "ModelResourceConnection",
      items:  Array< {
        __typename: "Resource",
        id: string,
        url: string,
        description: string,
        createdAt: string,
        updatedAt: string,
        experienceResourcesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTagMutationVariables = {
  input: CreateTagInput,
  condition?: ModelTagConditionInput | null,
};

export type CreateTagMutation = {
  createTag?:  {
    __typename: "Tag",
    id: string,
    title: string,
    experience?:  {
      __typename: "Experience",
      id: string,
      name: string,
      company: string,
      location: string,
      description: string,
      dateBegin: string,
      dateEnd: string,
      tags?:  {
        __typename: "ModelTagConnection",
        nextToken?: string | null,
      } | null,
      resources?:  {
        __typename: "ModelResourceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    experienceTagsId?: string | null,
  } | null,
};

export type UpdateTagMutationVariables = {
  input: UpdateTagInput,
  condition?: ModelTagConditionInput | null,
};

export type UpdateTagMutation = {
  updateTag?:  {
    __typename: "Tag",
    id: string,
    title: string,
    experience?:  {
      __typename: "Experience",
      id: string,
      name: string,
      company: string,
      location: string,
      description: string,
      dateBegin: string,
      dateEnd: string,
      tags?:  {
        __typename: "ModelTagConnection",
        nextToken?: string | null,
      } | null,
      resources?:  {
        __typename: "ModelResourceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    experienceTagsId?: string | null,
  } | null,
};

export type DeleteTagMutationVariables = {
  input: DeleteTagInput,
  condition?: ModelTagConditionInput | null,
};

export type DeleteTagMutation = {
  deleteTag?:  {
    __typename: "Tag",
    id: string,
    title: string,
    experience?:  {
      __typename: "Experience",
      id: string,
      name: string,
      company: string,
      location: string,
      description: string,
      dateBegin: string,
      dateEnd: string,
      tags?:  {
        __typename: "ModelTagConnection",
        nextToken?: string | null,
      } | null,
      resources?:  {
        __typename: "ModelResourceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    experienceTagsId?: string | null,
  } | null,
};

export type CreateResourceMutationVariables = {
  input: CreateResourceInput,
  condition?: ModelResourceConditionInput | null,
};

export type CreateResourceMutation = {
  createResource?:  {
    __typename: "Resource",
    id: string,
    url: string,
    description: string,
    experience?:  {
      __typename: "Experience",
      id: string,
      name: string,
      company: string,
      location: string,
      description: string,
      dateBegin: string,
      dateEnd: string,
      tags?:  {
        __typename: "ModelTagConnection",
        nextToken?: string | null,
      } | null,
      resources?:  {
        __typename: "ModelResourceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    experienceResourcesId?: string | null,
  } | null,
};

export type UpdateResourceMutationVariables = {
  input: UpdateResourceInput,
  condition?: ModelResourceConditionInput | null,
};

export type UpdateResourceMutation = {
  updateResource?:  {
    __typename: "Resource",
    id: string,
    url: string,
    description: string,
    experience?:  {
      __typename: "Experience",
      id: string,
      name: string,
      company: string,
      location: string,
      description: string,
      dateBegin: string,
      dateEnd: string,
      tags?:  {
        __typename: "ModelTagConnection",
        nextToken?: string | null,
      } | null,
      resources?:  {
        __typename: "ModelResourceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    experienceResourcesId?: string | null,
  } | null,
};

export type DeleteResourceMutationVariables = {
  input: DeleteResourceInput,
  condition?: ModelResourceConditionInput | null,
};

export type DeleteResourceMutation = {
  deleteResource?:  {
    __typename: "Resource",
    id: string,
    url: string,
    description: string,
    experience?:  {
      __typename: "Experience",
      id: string,
      name: string,
      company: string,
      location: string,
      description: string,
      dateBegin: string,
      dateEnd: string,
      tags?:  {
        __typename: "ModelTagConnection",
        nextToken?: string | null,
      } | null,
      resources?:  {
        __typename: "ModelResourceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    experienceResourcesId?: string | null,
  } | null,
};

export type GetExperienceQueryVariables = {
  id: string,
};

export type GetExperienceQuery = {
  getExperience?:  {
    __typename: "Experience",
    id: string,
    name: string,
    company: string,
    location: string,
    description: string,
    dateBegin: string,
    dateEnd: string,
    tags?:  {
      __typename: "ModelTagConnection",
      items:  Array< {
        __typename: "Tag",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
        experienceTagsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    resources?:  {
      __typename: "ModelResourceConnection",
      items:  Array< {
        __typename: "Resource",
        id: string,
        url: string,
        description: string,
        createdAt: string,
        updatedAt: string,
        experienceResourcesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListExperiencesQueryVariables = {
  filter?: ModelExperienceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListExperiencesQuery = {
  listExperiences?:  {
    __typename: "ModelExperienceConnection",
    items:  Array< {
      __typename: "Experience",
      id: string,
      name: string,
      company: string,
      location: string,
      description: string,
      dateBegin: string,
      dateEnd: string,
      tags?:  {
        __typename: "ModelTagConnection",
        nextToken?: string | null,
      } | null,
      resources?:  {
        __typename: "ModelResourceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTagQueryVariables = {
  id: string,
};

export type GetTagQuery = {
  getTag?:  {
    __typename: "Tag",
    id: string,
    title: string,
    experience?:  {
      __typename: "Experience",
      id: string,
      name: string,
      company: string,
      location: string,
      description: string,
      dateBegin: string,
      dateEnd: string,
      tags?:  {
        __typename: "ModelTagConnection",
        nextToken?: string | null,
      } | null,
      resources?:  {
        __typename: "ModelResourceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    experienceTagsId?: string | null,
  } | null,
};

export type ListTagsQueryVariables = {
  filter?: ModelTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTagsQuery = {
  listTags?:  {
    __typename: "ModelTagConnection",
    items:  Array< {
      __typename: "Tag",
      id: string,
      title: string,
      experience?:  {
        __typename: "Experience",
        id: string,
        name: string,
        company: string,
        location: string,
        description: string,
        dateBegin: string,
        dateEnd: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      experienceTagsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetResourceQueryVariables = {
  id: string,
};

export type GetResourceQuery = {
  getResource?:  {
    __typename: "Resource",
    id: string,
    url: string,
    description: string,
    experience?:  {
      __typename: "Experience",
      id: string,
      name: string,
      company: string,
      location: string,
      description: string,
      dateBegin: string,
      dateEnd: string,
      tags?:  {
        __typename: "ModelTagConnection",
        nextToken?: string | null,
      } | null,
      resources?:  {
        __typename: "ModelResourceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    experienceResourcesId?: string | null,
  } | null,
};

export type ListResourcesQueryVariables = {
  filter?: ModelResourceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListResourcesQuery = {
  listResources?:  {
    __typename: "ModelResourceConnection",
    items:  Array< {
      __typename: "Resource",
      id: string,
      url: string,
      description: string,
      experience?:  {
        __typename: "Experience",
        id: string,
        name: string,
        company: string,
        location: string,
        description: string,
        dateBegin: string,
        dateEnd: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      experienceResourcesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateExperienceSubscriptionVariables = {
  filter?: ModelSubscriptionExperienceFilterInput | null,
};

export type OnCreateExperienceSubscription = {
  onCreateExperience?:  {
    __typename: "Experience",
    id: string,
    name: string,
    company: string,
    location: string,
    description: string,
    dateBegin: string,
    dateEnd: string,
    tags?:  {
      __typename: "ModelTagConnection",
      items:  Array< {
        __typename: "Tag",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
        experienceTagsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    resources?:  {
      __typename: "ModelResourceConnection",
      items:  Array< {
        __typename: "Resource",
        id: string,
        url: string,
        description: string,
        createdAt: string,
        updatedAt: string,
        experienceResourcesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateExperienceSubscriptionVariables = {
  filter?: ModelSubscriptionExperienceFilterInput | null,
};

export type OnUpdateExperienceSubscription = {
  onUpdateExperience?:  {
    __typename: "Experience",
    id: string,
    name: string,
    company: string,
    location: string,
    description: string,
    dateBegin: string,
    dateEnd: string,
    tags?:  {
      __typename: "ModelTagConnection",
      items:  Array< {
        __typename: "Tag",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
        experienceTagsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    resources?:  {
      __typename: "ModelResourceConnection",
      items:  Array< {
        __typename: "Resource",
        id: string,
        url: string,
        description: string,
        createdAt: string,
        updatedAt: string,
        experienceResourcesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteExperienceSubscriptionVariables = {
  filter?: ModelSubscriptionExperienceFilterInput | null,
};

export type OnDeleteExperienceSubscription = {
  onDeleteExperience?:  {
    __typename: "Experience",
    id: string,
    name: string,
    company: string,
    location: string,
    description: string,
    dateBegin: string,
    dateEnd: string,
    tags?:  {
      __typename: "ModelTagConnection",
      items:  Array< {
        __typename: "Tag",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
        experienceTagsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    resources?:  {
      __typename: "ModelResourceConnection",
      items:  Array< {
        __typename: "Resource",
        id: string,
        url: string,
        description: string,
        createdAt: string,
        updatedAt: string,
        experienceResourcesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTagSubscriptionVariables = {
  filter?: ModelSubscriptionTagFilterInput | null,
};

export type OnCreateTagSubscription = {
  onCreateTag?:  {
    __typename: "Tag",
    id: string,
    title: string,
    experience?:  {
      __typename: "Experience",
      id: string,
      name: string,
      company: string,
      location: string,
      description: string,
      dateBegin: string,
      dateEnd: string,
      tags?:  {
        __typename: "ModelTagConnection",
        nextToken?: string | null,
      } | null,
      resources?:  {
        __typename: "ModelResourceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    experienceTagsId?: string | null,
  } | null,
};

export type OnUpdateTagSubscriptionVariables = {
  filter?: ModelSubscriptionTagFilterInput | null,
};

export type OnUpdateTagSubscription = {
  onUpdateTag?:  {
    __typename: "Tag",
    id: string,
    title: string,
    experience?:  {
      __typename: "Experience",
      id: string,
      name: string,
      company: string,
      location: string,
      description: string,
      dateBegin: string,
      dateEnd: string,
      tags?:  {
        __typename: "ModelTagConnection",
        nextToken?: string | null,
      } | null,
      resources?:  {
        __typename: "ModelResourceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    experienceTagsId?: string | null,
  } | null,
};

export type OnDeleteTagSubscriptionVariables = {
  filter?: ModelSubscriptionTagFilterInput | null,
};

export type OnDeleteTagSubscription = {
  onDeleteTag?:  {
    __typename: "Tag",
    id: string,
    title: string,
    experience?:  {
      __typename: "Experience",
      id: string,
      name: string,
      company: string,
      location: string,
      description: string,
      dateBegin: string,
      dateEnd: string,
      tags?:  {
        __typename: "ModelTagConnection",
        nextToken?: string | null,
      } | null,
      resources?:  {
        __typename: "ModelResourceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    experienceTagsId?: string | null,
  } | null,
};

export type OnCreateResourceSubscriptionVariables = {
  filter?: ModelSubscriptionResourceFilterInput | null,
};

export type OnCreateResourceSubscription = {
  onCreateResource?:  {
    __typename: "Resource",
    id: string,
    url: string,
    description: string,
    experience?:  {
      __typename: "Experience",
      id: string,
      name: string,
      company: string,
      location: string,
      description: string,
      dateBegin: string,
      dateEnd: string,
      tags?:  {
        __typename: "ModelTagConnection",
        nextToken?: string | null,
      } | null,
      resources?:  {
        __typename: "ModelResourceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    experienceResourcesId?: string | null,
  } | null,
};

export type OnUpdateResourceSubscriptionVariables = {
  filter?: ModelSubscriptionResourceFilterInput | null,
};

export type OnUpdateResourceSubscription = {
  onUpdateResource?:  {
    __typename: "Resource",
    id: string,
    url: string,
    description: string,
    experience?:  {
      __typename: "Experience",
      id: string,
      name: string,
      company: string,
      location: string,
      description: string,
      dateBegin: string,
      dateEnd: string,
      tags?:  {
        __typename: "ModelTagConnection",
        nextToken?: string | null,
      } | null,
      resources?:  {
        __typename: "ModelResourceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    experienceResourcesId?: string | null,
  } | null,
};

export type OnDeleteResourceSubscriptionVariables = {
  filter?: ModelSubscriptionResourceFilterInput | null,
};

export type OnDeleteResourceSubscription = {
  onDeleteResource?:  {
    __typename: "Resource",
    id: string,
    url: string,
    description: string,
    experience?:  {
      __typename: "Experience",
      id: string,
      name: string,
      company: string,
      location: string,
      description: string,
      dateBegin: string,
      dateEnd: string,
      tags?:  {
        __typename: "ModelTagConnection",
        nextToken?: string | null,
      } | null,
      resources?:  {
        __typename: "ModelResourceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    experienceResourcesId?: string | null,
  } | null,
};
