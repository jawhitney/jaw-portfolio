import React, { useEffect, useState } from 'react'

import { API } from 'aws-amplify'
import { Experience as ExperienceType, Skill as SkillType, Project as ProjectType } from 'API'
import { skillsByExperienceIDAndTitle, projectsByExperienceIDAndTitle } from "graphql/queries"

import { Grid, Typography } from '@mui/material'

import Skill from 'components/Skill'
import Project from 'components/Project'

interface Props {
  experience: ExperienceType
}

export default function Experience({ experience }: Props) {
  const [skills, setSkills] = useState<SkillType[]>([])
  const [projects, setProjects] = useState<ProjectType[]>([])

  useEffect(() => {
    async function fetchSkills() {
      const response: any = await API.graphql({
        query: skillsByExperienceIDAndTitle,
        variables: {
          experienceID: experience.id
        }
      });
      const skills = response.data.skillsByExperienceIDAndTitle.items
      setSkills(skills)
    }

    async function fetchProjects() {
      const response: any = await API.graphql({
        query: projectsByExperienceIDAndTitle,
        variables: {
          experienceID: experience.id
        }
      });
      const projects = response.data.projectsByExperienceIDAndTitle.items
      setProjects(projects)
    }

    fetchSkills()
    fetchProjects()
  }, [experience.id])

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography>{experience.name}</Typography>
          </Grid>
          <Grid item>
            <Typography>{experience.dateBegin} - {experience.dateEnd}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography>{experience.company} | {experience.location}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>{experience.description}</Typography>
      </Grid>
      {skills && skills.length > 0 && (
        <Grid item xs={12}>
          {skills.map((skill) => {
            return <Skill key={skill.id} skill={skill} />
          })}
        </Grid>
      )}
      {projects && projects.length > 0 && (
        <Grid item xs={12}>
          {projects.map((project) => {
            return <Project key={project.id} project={project} />
          })}
        </Grid>
      )}
    </Grid>
  )
}

export const getSkills = /* GraphQL */ `
  query GetSkills(
    $experienceID: String
  ) {
    getSkills(filter: { experienceID: $experienceID }) {
      items {
        id
        experienceID
        title
        createdAt
        updatedAt
      }
    }
  }
`
