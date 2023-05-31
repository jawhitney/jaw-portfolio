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
  projects?: ModelProjectConnection | null,
  skills?: ModelSkillConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelProjectConnection = {
  __typename: "ModelProjectConnection",
  items:  Array<Project | null >,
  nextToken?: string | null,
};

export type Project = {
  __typename: "Project",
  id: string,
  experienceID: string,
  title: string,
  description: string,
  company: string,
  url?: string | null,
  thumbnail: string,
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
  projectID: string,
  title: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelResourceConnection = {
  __typename: "ModelResourceConnection",
  items:  Array<Resource | null >,
  nextToken?: string | null,
};

export type Resource = {
  __typename: "Resource",
  id: string,
  projectID: string,
  name: string,
  title: string,
  description: string,
  url: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelSkillConnection = {
  __typename: "ModelSkillConnection",
  items:  Array<Skill | null >,
  nextToken?: string | null,
};

export type Skill = {
  __typename: "Skill",
  id: string,
  experienceID: string,
  title: string,
  createdAt: string,
  updatedAt: string,
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

export type CreateProjectInput = {
  id?: string | null,
  experienceID: string,
  title: string,
  description: string,
  company: string,
  url?: string | null,
  thumbnail: string,
};

export type ModelProjectConditionInput = {
  experienceID?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  company?: ModelStringInput | null,
  url?: ModelStringInput | null,
  thumbnail?: ModelStringInput | null,
  and?: Array< ModelProjectConditionInput | null > | null,
  or?: Array< ModelProjectConditionInput | null > | null,
  not?: ModelProjectConditionInput | null,
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

export type UpdateProjectInput = {
  id: string,
  experienceID?: string | null,
  title?: string | null,
  description?: string | null,
  company?: string | null,
  url?: string | null,
  thumbnail?: string | null,
};

export type DeleteProjectInput = {
  id: string,
};

export type CreateSkillInput = {
  id?: string | null,
  experienceID: string,
  title: string,
};

export type ModelSkillConditionInput = {
  experienceID?: ModelIDInput | null,
  title?: ModelStringInput | null,
  and?: Array< ModelSkillConditionInput | null > | null,
  or?: Array< ModelSkillConditionInput | null > | null,
  not?: ModelSkillConditionInput | null,
};

export type UpdateSkillInput = {
  id: string,
  experienceID?: string | null,
  title?: string | null,
};

export type DeleteSkillInput = {
  id: string,
};

export type CreateTagInput = {
  id?: string | null,
  projectID: string,
  title: string,
};

export type ModelTagConditionInput = {
  projectID?: ModelIDInput | null,
  title?: ModelStringInput | null,
  and?: Array< ModelTagConditionInput | null > | null,
  or?: Array< ModelTagConditionInput | null > | null,
  not?: ModelTagConditionInput | null,
};

export type UpdateTagInput = {
  id: string,
  projectID?: string | null,
  title?: string | null,
};

export type DeleteTagInput = {
  id: string,
};

export type CreateResourceInput = {
  id?: string | null,
  projectID: string,
  name: string,
  title: string,
  description: string,
  url: string,
};

export type ModelResourceConditionInput = {
  projectID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  url?: ModelStringInput | null,
  and?: Array< ModelResourceConditionInput | null > | null,
  or?: Array< ModelResourceConditionInput | null > | null,
  not?: ModelResourceConditionInput | null,
};

export type UpdateResourceInput = {
  id: string,
  projectID?: string | null,
  name?: string | null,
  title?: string | null,
  description?: string | null,
  url?: string | null,
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

export type ModelProjectFilterInput = {
  id?: ModelIDInput | null,
  experienceID?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  company?: ModelStringInput | null,
  url?: ModelStringInput | null,
  thumbnail?: ModelStringInput | null,
  and?: Array< ModelProjectFilterInput | null > | null,
  or?: Array< ModelProjectFilterInput | null > | null,
  not?: ModelProjectFilterInput | null,
};

export type ModelSkillFilterInput = {
  id?: ModelIDInput | null,
  experienceID?: ModelIDInput | null,
  title?: ModelStringInput | null,
  and?: Array< ModelSkillFilterInput | null > | null,
  or?: Array< ModelSkillFilterInput | null > | null,
  not?: ModelSkillFilterInput | null,
};

export type ModelTagFilterInput = {
  id?: ModelIDInput | null,
  projectID?: ModelIDInput | null,
  title?: ModelStringInput | null,
  and?: Array< ModelTagFilterInput | null > | null,
  or?: Array< ModelTagFilterInput | null > | null,
  not?: ModelTagFilterInput | null,
};

export type ModelResourceFilterInput = {
  id?: ModelIDInput | null,
  projectID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  url?: ModelStringInput | null,
  and?: Array< ModelResourceFilterInput | null > | null,
  or?: Array< ModelResourceFilterInput | null > | null,
  not?: ModelResourceFilterInput | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


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

export type ModelSubscriptionProjectFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  experienceID?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  company?: ModelSubscriptionStringInput | null,
  url?: ModelSubscriptionStringInput | null,
  thumbnail?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProjectFilterInput | null > | null,
  or?: Array< ModelSubscriptionProjectFilterInput | null > | null,
};

export type ModelSubscriptionSkillFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  experienceID?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSkillFilterInput | null > | null,
  or?: Array< ModelSubscriptionSkillFilterInput | null > | null,
};

export type ModelSubscriptionTagFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  projectID?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTagFilterInput | null > | null,
  or?: Array< ModelSubscriptionTagFilterInput | null > | null,
};

export type ModelSubscriptionResourceFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  projectID?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  url?: ModelSubscriptionStringInput | null,
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
    projects?:  {
      __typename: "ModelProjectConnection",
      items:  Array< {
        __typename: "Project",
        id: string,
        experienceID: string,
        title: string,
        description: string,
        company: string,
        url?: string | null,
        thumbnail: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    skills?:  {
      __typename: "ModelSkillConnection",
      items:  Array< {
        __typename: "Skill",
        id: string,
        experienceID: string,
        title: string,
        createdAt: string,
        updatedAt: string,
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
    projects?:  {
      __typename: "ModelProjectConnection",
      items:  Array< {
        __typename: "Project",
        id: string,
        experienceID: string,
        title: string,
        description: string,
        company: string,
        url?: string | null,
        thumbnail: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    skills?:  {
      __typename: "ModelSkillConnection",
      items:  Array< {
        __typename: "Skill",
        id: string,
        experienceID: string,
        title: string,
        createdAt: string,
        updatedAt: string,
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
    projects?:  {
      __typename: "ModelProjectConnection",
      items:  Array< {
        __typename: "Project",
        id: string,
        experienceID: string,
        title: string,
        description: string,
        company: string,
        url?: string | null,
        thumbnail: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    skills?:  {
      __typename: "ModelSkillConnection",
      items:  Array< {
        __typename: "Skill",
        id: string,
        experienceID: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProjectMutationVariables = {
  input: CreateProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type CreateProjectMutation = {
  createProject?:  {
    __typename: "Project",
    id: string,
    experienceID: string,
    title: string,
    description: string,
    company: string,
    url?: string | null,
    thumbnail: string,
    tags?:  {
      __typename: "ModelTagConnection",
      items:  Array< {
        __typename: "Tag",
        id: string,
        projectID: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    resources?:  {
      __typename: "ModelResourceConnection",
      items:  Array< {
        __typename: "Resource",
        id: string,
        projectID: string,
        name: string,
        title: string,
        description: string,
        url: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProjectMutationVariables = {
  input: UpdateProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type UpdateProjectMutation = {
  updateProject?:  {
    __typename: "Project",
    id: string,
    experienceID: string,
    title: string,
    description: string,
    company: string,
    url?: string | null,
    thumbnail: string,
    tags?:  {
      __typename: "ModelTagConnection",
      items:  Array< {
        __typename: "Tag",
        id: string,
        projectID: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    resources?:  {
      __typename: "ModelResourceConnection",
      items:  Array< {
        __typename: "Resource",
        id: string,
        projectID: string,
        name: string,
        title: string,
        description: string,
        url: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProjectMutationVariables = {
  input: DeleteProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type DeleteProjectMutation = {
  deleteProject?:  {
    __typename: "Project",
    id: string,
    experienceID: string,
    title: string,
    description: string,
    company: string,
    url?: string | null,
    thumbnail: string,
    tags?:  {
      __typename: "ModelTagConnection",
      items:  Array< {
        __typename: "Tag",
        id: string,
        projectID: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    resources?:  {
      __typename: "ModelResourceConnection",
      items:  Array< {
        __typename: "Resource",
        id: string,
        projectID: string,
        name: string,
        title: string,
        description: string,
        url: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSkillMutationVariables = {
  input: CreateSkillInput,
  condition?: ModelSkillConditionInput | null,
};

export type CreateSkillMutation = {
  createSkill?:  {
    __typename: "Skill",
    id: string,
    experienceID: string,
    title: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSkillMutationVariables = {
  input: UpdateSkillInput,
  condition?: ModelSkillConditionInput | null,
};

export type UpdateSkillMutation = {
  updateSkill?:  {
    __typename: "Skill",
    id: string,
    experienceID: string,
    title: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSkillMutationVariables = {
  input: DeleteSkillInput,
  condition?: ModelSkillConditionInput | null,
};

export type DeleteSkillMutation = {
  deleteSkill?:  {
    __typename: "Skill",
    id: string,
    experienceID: string,
    title: string,
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
    projectID: string,
    title: string,
    createdAt: string,
    updatedAt: string,
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
    projectID: string,
    title: string,
    createdAt: string,
    updatedAt: string,
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
    projectID: string,
    title: string,
    createdAt: string,
    updatedAt: string,
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
    projectID: string,
    name: string,
    title: string,
    description: string,
    url: string,
    createdAt: string,
    updatedAt: string,
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
    projectID: string,
    name: string,
    title: string,
    description: string,
    url: string,
    createdAt: string,
    updatedAt: string,
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
    projectID: string,
    name: string,
    title: string,
    description: string,
    url: string,
    createdAt: string,
    updatedAt: string,
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
    projects?:  {
      __typename: "ModelProjectConnection",
      items:  Array< {
        __typename: "Project",
        id: string,
        experienceID: string,
        title: string,
        description: string,
        company: string,
        url?: string | null,
        thumbnail: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    skills?:  {
      __typename: "ModelSkillConnection",
      items:  Array< {
        __typename: "Skill",
        id: string,
        experienceID: string,
        title: string,
        createdAt: string,
        updatedAt: string,
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
      projects?:  {
        __typename: "ModelProjectConnection",
        nextToken?: string | null,
      } | null,
      skills?:  {
        __typename: "ModelSkillConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProjectQueryVariables = {
  id: string,
};

export type GetProjectQuery = {
  getProject?:  {
    __typename: "Project",
    id: string,
    experienceID: string,
    title: string,
    description: string,
    company: string,
    url?: string | null,
    thumbnail: string,
    tags?:  {
      __typename: "ModelTagConnection",
      items:  Array< {
        __typename: "Tag",
        id: string,
        projectID: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    resources?:  {
      __typename: "ModelResourceConnection",
      items:  Array< {
        __typename: "Resource",
        id: string,
        projectID: string,
        name: string,
        title: string,
        description: string,
        url: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProjectsQueryVariables = {
  filter?: ModelProjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProjectsQuery = {
  listProjects?:  {
    __typename: "ModelProjectConnection",
    items:  Array< {
      __typename: "Project",
      id: string,
      experienceID: string,
      title: string,
      description: string,
      company: string,
      url?: string | null,
      thumbnail: string,
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

export type GetSkillQueryVariables = {
  id: string,
};

export type GetSkillQuery = {
  getSkill?:  {
    __typename: "Skill",
    id: string,
    experienceID: string,
    title: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSkillsQueryVariables = {
  filter?: ModelSkillFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSkillsQuery = {
  listSkills?:  {
    __typename: "ModelSkillConnection",
    items:  Array< {
      __typename: "Skill",
      id: string,
      experienceID: string,
      title: string,
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
    projectID: string,
    title: string,
    createdAt: string,
    updatedAt: string,
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
      projectID: string,
      title: string,
      createdAt: string,
      updatedAt: string,
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
    projectID: string,
    name: string,
    title: string,
    description: string,
    url: string,
    createdAt: string,
    updatedAt: string,
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
      projectID: string,
      name: string,
      title: string,
      description: string,
      url: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ProjectsByExperienceIDAndTitleQueryVariables = {
  experienceID: string,
  title?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProjectsByExperienceIDAndTitleQuery = {
  projectsByExperienceIDAndTitle?:  {
    __typename: "ModelProjectConnection",
    items:  Array< {
      __typename: "Project",
      id: string,
      experienceID: string,
      title: string,
      description: string,
      company: string,
      url?: string | null,
      thumbnail: string,
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

export type SkillsByExperienceIDAndTitleQueryVariables = {
  experienceID: string,
  title?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSkillFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SkillsByExperienceIDAndTitleQuery = {
  skillsByExperienceIDAndTitle?:  {
    __typename: "ModelSkillConnection",
    items:  Array< {
      __typename: "Skill",
      id: string,
      experienceID: string,
      title: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type TagsByProjectIDAndTitleQueryVariables = {
  projectID: string,
  title?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TagsByProjectIDAndTitleQuery = {
  tagsByProjectIDAndTitle?:  {
    __typename: "ModelTagConnection",
    items:  Array< {
      __typename: "Tag",
      id: string,
      projectID: string,
      title: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ResourcesByProjectIDAndTitleQueryVariables = {
  projectID: string,
  title?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelResourceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ResourcesByProjectIDAndTitleQuery = {
  resourcesByProjectIDAndTitle?:  {
    __typename: "ModelResourceConnection",
    items:  Array< {
      __typename: "Resource",
      id: string,
      projectID: string,
      name: string,
      title: string,
      description: string,
      url: string,
      createdAt: string,
      updatedAt: string,
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
    projects?:  {
      __typename: "ModelProjectConnection",
      items:  Array< {
        __typename: "Project",
        id: string,
        experienceID: string,
        title: string,
        description: string,
        company: string,
        url?: string | null,
        thumbnail: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    skills?:  {
      __typename: "ModelSkillConnection",
      items:  Array< {
        __typename: "Skill",
        id: string,
        experienceID: string,
        title: string,
        createdAt: string,
        updatedAt: string,
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
    projects?:  {
      __typename: "ModelProjectConnection",
      items:  Array< {
        __typename: "Project",
        id: string,
        experienceID: string,
        title: string,
        description: string,
        company: string,
        url?: string | null,
        thumbnail: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    skills?:  {
      __typename: "ModelSkillConnection",
      items:  Array< {
        __typename: "Skill",
        id: string,
        experienceID: string,
        title: string,
        createdAt: string,
        updatedAt: string,
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
    projects?:  {
      __typename: "ModelProjectConnection",
      items:  Array< {
        __typename: "Project",
        id: string,
        experienceID: string,
        title: string,
        description: string,
        company: string,
        url?: string | null,
        thumbnail: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    skills?:  {
      __typename: "ModelSkillConnection",
      items:  Array< {
        __typename: "Skill",
        id: string,
        experienceID: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProjectSubscriptionVariables = {
  filter?: ModelSubscriptionProjectFilterInput | null,
};

export type OnCreateProjectSubscription = {
  onCreateProject?:  {
    __typename: "Project",
    id: string,
    experienceID: string,
    title: string,
    description: string,
    company: string,
    url?: string | null,
    thumbnail: string,
    tags?:  {
      __typename: "ModelTagConnection",
      items:  Array< {
        __typename: "Tag",
        id: string,
        projectID: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    resources?:  {
      __typename: "ModelResourceConnection",
      items:  Array< {
        __typename: "Resource",
        id: string,
        projectID: string,
        name: string,
        title: string,
        description: string,
        url: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProjectSubscriptionVariables = {
  filter?: ModelSubscriptionProjectFilterInput | null,
};

export type OnUpdateProjectSubscription = {
  onUpdateProject?:  {
    __typename: "Project",
    id: string,
    experienceID: string,
    title: string,
    description: string,
    company: string,
    url?: string | null,
    thumbnail: string,
    tags?:  {
      __typename: "ModelTagConnection",
      items:  Array< {
        __typename: "Tag",
        id: string,
        projectID: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    resources?:  {
      __typename: "ModelResourceConnection",
      items:  Array< {
        __typename: "Resource",
        id: string,
        projectID: string,
        name: string,
        title: string,
        description: string,
        url: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProjectSubscriptionVariables = {
  filter?: ModelSubscriptionProjectFilterInput | null,
};

export type OnDeleteProjectSubscription = {
  onDeleteProject?:  {
    __typename: "Project",
    id: string,
    experienceID: string,
    title: string,
    description: string,
    company: string,
    url?: string | null,
    thumbnail: string,
    tags?:  {
      __typename: "ModelTagConnection",
      items:  Array< {
        __typename: "Tag",
        id: string,
        projectID: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    resources?:  {
      __typename: "ModelResourceConnection",
      items:  Array< {
        __typename: "Resource",
        id: string,
        projectID: string,
        name: string,
        title: string,
        description: string,
        url: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSkillSubscriptionVariables = {
  filter?: ModelSubscriptionSkillFilterInput | null,
};

export type OnCreateSkillSubscription = {
  onCreateSkill?:  {
    __typename: "Skill",
    id: string,
    experienceID: string,
    title: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSkillSubscriptionVariables = {
  filter?: ModelSubscriptionSkillFilterInput | null,
};

export type OnUpdateSkillSubscription = {
  onUpdateSkill?:  {
    __typename: "Skill",
    id: string,
    experienceID: string,
    title: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSkillSubscriptionVariables = {
  filter?: ModelSubscriptionSkillFilterInput | null,
};

export type OnDeleteSkillSubscription = {
  onDeleteSkill?:  {
    __typename: "Skill",
    id: string,
    experienceID: string,
    title: string,
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
    projectID: string,
    title: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTagSubscriptionVariables = {
  filter?: ModelSubscriptionTagFilterInput | null,
};

export type OnUpdateTagSubscription = {
  onUpdateTag?:  {
    __typename: "Tag",
    id: string,
    projectID: string,
    title: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTagSubscriptionVariables = {
  filter?: ModelSubscriptionTagFilterInput | null,
};

export type OnDeleteTagSubscription = {
  onDeleteTag?:  {
    __typename: "Tag",
    id: string,
    projectID: string,
    title: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateResourceSubscriptionVariables = {
  filter?: ModelSubscriptionResourceFilterInput | null,
};

export type OnCreateResourceSubscription = {
  onCreateResource?:  {
    __typename: "Resource",
    id: string,
    projectID: string,
    name: string,
    title: string,
    description: string,
    url: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateResourceSubscriptionVariables = {
  filter?: ModelSubscriptionResourceFilterInput | null,
};

export type OnUpdateResourceSubscription = {
  onUpdateResource?:  {
    __typename: "Resource",
    id: string,
    projectID: string,
    name: string,
    title: string,
    description: string,
    url: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteResourceSubscriptionVariables = {
  filter?: ModelSubscriptionResourceFilterInput | null,
};

export type OnDeleteResourceSubscription = {
  onDeleteResource?:  {
    __typename: "Resource",
    id: string,
    projectID: string,
    name: string,
    title: string,
    description: string,
    url: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
