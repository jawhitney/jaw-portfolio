import React, { useEffect, useState } from 'react'

import { API } from 'aws-amplify'
import { resourcesByProjectIDAndTitle, tagsByProjectIDAndTitle } from "graphql/queries"
import { Project as ProjectType, Resource as ResourceType, Tag as TagType } from 'API'
import { Button, Card, CardActions, CardContent, CardMedia, Dialog, DialogContent, DialogTitle, ImageList, ImageListItem, Typography } from '@mui/material'
import Skill from 'components/Skill'

interface Props {
  project: ProjectType
}

export default function Project({ project }: Props) {
  const [open, setOpen] = useState<boolean>(false)
  const [resources, setResources] = useState<ResourceType[]>([])
  const [tags, setTags] = useState<TagType[]>([])

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    async function fetchResources() {
      const response: any = await API.graphql({
        query: resourcesByProjectIDAndTitle,
        variables: {
          projectID: project.id
        }
      });
      const resources = response.data.resourcesByProjectIDAndTitle.items
      setResources(resources)
    }

    async function fetchTags() {
      const response: any = await API.graphql({
        query: tagsByProjectIDAndTitle,
        variables: {
          projectID: project.id
        }
      });
      const tags = response.data.tagsByProjectIDAndTitle.items
      setTags(tags)
    }

    fetchResources()
    fetchTags()
  }, [project.id])

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 150 }}
          image={`/assets/projects/${project.thumbnail}`}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {project.title}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleOpen}>Learn More</Button>
        </CardActions>
      </Card>
      <Dialog
        fullWidth={true}
        maxWidth={'xl'}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>{project.title}</DialogTitle>
        <DialogContent>
          <Typography variant="body2" color="text.secondary">
            {project.description}
          </Typography>
          {tags.map((tag) => {
            return <Skill key={tag.id} skill={tag} />
          })}
          <ImageList cols={1}>
            <ImageListItem>
              <img
                src={`/assets/projects/${project.thumbnail}`}
                srcSet={`/assets/projects/${project.thumbnail}`}
                alt="Thumbnail"
                loading="lazy"
              />
            </ImageListItem>
            {resources.map((resource) => {
              return (
                <ImageListItem key={resource.id}>
                  <img
                    src={`/assets/projects/${resource.name}`}
                    srcSet={`/assets/projects/${resource.name}`}
                    alt={resource.title}
                    loading="lazy"
                  />
                </ImageListItem>
              )
            })}
          </ImageList>
        </DialogContent>
      </Dialog>
    </>
  )
}
