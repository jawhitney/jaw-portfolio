import React, { useEffect, useState } from "react";

import { API } from "aws-amplify";
import {
  resourcesByProjectIDAndTitle,
  tagsByProjectIDAndTitle,
  collaboratorsByProjectIDAndName,
} from "graphql/queries";
import {
  Project as ProjectType,
  Resource as ResourceType,
  Tag as TagType,
  Collaborator as CollaboratorType,
} from "API";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Dialog,
  DialogContent,
  Grid,
  ImageList,
  ImageListItem,
  Link,
  Typography,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Skill from "components/Skill";

interface Props {
  project: ProjectType;
}

export default function Project({ project }: Props) {
  const [open, setOpen] = useState<boolean>(false);
  const [resources, setResources] = useState<ResourceType[]>([]);
  const [tags, setTags] = useState<TagType[]>([]);
  const [collaborators, setCollaborators] = useState<CollaboratorType[]>([]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    async function fetchResources() {
      const response: any = await API.graphql({
        query: resourcesByProjectIDAndTitle,
        variables: {
          projectID: project.id,
        },
      });
      const resources = response.data.resourcesByProjectIDAndTitle.items;
      setResources(resources);
    }

    async function fetchTags() {
      const response: any = await API.graphql({
        query: tagsByProjectIDAndTitle,
        variables: {
          projectID: project.id,
        },
      });
      const tags = response.data.tagsByProjectIDAndTitle.items;
      setTags(tags);
    }

    async function fetchCollaborators() {
      const response: any = await API.graphql({
        query: collaboratorsByProjectIDAndName,
        variables: {
          projectID: project.id,
        },
      });
      const collaborators = response.data.collaboratorsByProjectIDAndName.items;
      setCollaborators(collaborators);
    }

    fetchResources();
    fetchTags();
    fetchCollaborators();
  }, [project.id]);

  return (
    <>
      <Card variant="outlined">
        <CardMedia
          sx={{ height: 150 }}
          image={project.thumbnail}
          title="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            color="primary"
            component="div"
            sx={{ textAlign: "center" }}
          >
            {project.title}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            startIcon={<InfoOutlinedIcon />}
            onClick={handleOpen}
            sx={{ margin: "0 auto" }}
          >
            Details
          </Button>
        </CardActions>
      </Card>
      <Dialog
        fullWidth={true}
        maxWidth={"md"}
        open={open}
        onClose={handleClose}
      >
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h4" color="primary">
                {project.title}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">{project.description}</Typography>
            </Grid>
            {project.url && (
              <Grid item xs={12}>
                <Link href={project.url}>
                  <Button
                    variant="contained"
                    color="primary"
                    aria-label="Project URL"
                    startIcon={<OpenInNewIcon />}
                  >
                    View Project
                  </Button>
                </Link>
              </Grid>
            )}
            <Grid item xs={12}>
              <Grid container spacing={1}>
                {tags.map((tag) => {
                  return (
                    <Grid item key={tag.id}>
                      <Skill key={tag.id} skill={tag} />
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
            <Grid item xs={12}>
              {collaborators.map((collaborator) => {
                return (
                  <div key={collaborator.id}>
                    <Typography variant="body2" color="text.secondary">
                      {collaborator.description}{" "}
                      <Link href={collaborator.url} color="primary">
                        {collaborator.name}
                      </Link>
                    </Typography>
                  </div>
                );
              })}
            </Grid>
          </Grid>
          <ImageList cols={2} gap={16}>
            <ImageListItem>
              <img
                src={project.thumbnail}
                srcSet={project.thumbnail}
                alt="Thumbnail"
                loading="lazy"
              />
            </ImageListItem>
            {resources.map((resource) => {
              return (
                <ImageListItem key={resource.id}>
                  <img
                    src={resource.name}
                    srcSet={resource.name}
                    alt={resource.title}
                    loading="lazy"
                  />
                </ImageListItem>
              );
            })}
          </ImageList>
        </DialogContent>
      </Dialog>
    </>
  );
}
