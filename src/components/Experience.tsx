import React, { useEffect, useState } from "react";

import { API } from "aws-amplify";
import {
  Experience as ExperienceType,
  Skill as SkillType,
  Project as ProjectType,
} from "API";
import {
  skillsByExperienceIDAndTitle,
  projectsByExperienceIDAndTitle,
} from "graphql/queries";

import { Box, Grid, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Skill from "components/Skill";
import Project from "components/Project";

interface Props {
  experience: ExperienceType;
}

export default function Experience({ experience }: Props) {
  const [dateMessage, setDateMessage] = useState<string>("");
  const [skills, setSkills] = useState<SkillType[]>([]);
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const theme = useTheme();

  useEffect(() => {
    async function fetchSkills() {
      const response: any = await API.graphql({
        query: skillsByExperienceIDAndTitle,
        variables: {
          experienceID: experience.id,
        },
      });
      const skills = response.data.skillsByExperienceIDAndTitle.items;
      setSkills(skills);
    }

    async function fetchProjects() {
      const response: any = await API.graphql({
        query: projectsByExperienceIDAndTitle,
        variables: {
          experienceID: experience.id,
        },
      });
      const projects = response.data.projectsByExperienceIDAndTitle.items;
      setProjects(projects);
    }

    fetchSkills();
    fetchProjects();
  }, [experience.id]);

  useEffect(() => {
    const begin = new Date(experience.dateBegin).toLocaleDateString("en-us", {
      year: "numeric",
      month: "short",
    });
    const end = new Date(experience.dateEnd).toLocaleDateString("en-us", {
      year: "numeric",
      month: "short",
    });
    setDateMessage(`${begin} - ${end}`);
  }, [experience.dateBegin, experience.dateEnd]);

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="subtitle2">{experience.name}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2">{dateMessage}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1">
          <strong>
            {experience.company} | {experience.location}
          </strong>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="caption">{experience.description}</Typography>
      </Grid>
      {skills && skills.length > 0 && (
        <Grid item xs={12}>
          <Box
            sx={{ marginTop: theme.spacing(1), marginBottom: theme.spacing(2) }}
          >
            <Grid container spacing={1}>
              {skills.map((skill) => {
                return (
                  <Grid item>
                    <Skill key={skill.id} skill={skill} />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Grid>
      )}
      {projects && projects.length > 0 && (
        <Grid item xs={12}>
          <Grid container spacing={2}>
            {projects.map((project) => {
              return (
                <Grid item xs={12} md={6}>
                  <Project key={project.id} project={project} />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}

export const getSkills = /* GraphQL */ `
  query GetSkills($experienceID: String) {
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
`;
