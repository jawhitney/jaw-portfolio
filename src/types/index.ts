export type Experience = {
  id: string
  name: string
  company: string
  location: string
  description: string
  dateBegin: string
  dateEnd: string
  projects: Project[]
  skills: Skill[]
}

export type Project = {
  id: string
  experienceID: string
  title: string
  description: string
  company: string
  url?: string
  thumbnail: string
  tags: Tag[]
  resources: Resource[]
}

export type Skill = {
  id: string
  experienceID: string
  title: string
}

export type Tag = {
  id: string
  projectID: string
  title: string
}

export type Resource = {
  id: string
  projectID: string
  title: string
  description: string
  url: string
}
