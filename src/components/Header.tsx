import React from 'react'
import { Box, Button, Grid, IconButton, Link, Menu } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import logo from '../assets/jw-logo.svg'

export default function Header() {
  const theme = useTheme()
  return (
    <Box sx={{ padding: theme.spacing(2), backgroundColor: '#027fa2' }} >
      <Grid container justifyContent="space-between">
        <Grid item>
          <img src={logo} style={{ width: 'auto', height: theme.spacing(4) }} />
        </Grid>
        <Grid item>
          <Button variant="text">Text</Button>
        </Grid>
        <Grid item>
          <Link href="https://www.linkedin.com/in/jonathanawhitney/">
            <IconButton aria-label="LinkedIn">
              <LinkedInIcon sx={{ color: '#fff' }} />
            </IconButton>
          </Link>
          <Link href="https://github.com/jawhitney">
            <IconButton aria-label="GitHub">
              <GitHubIcon sx={{ color: '#fff' }} />
            </IconButton>
          </Link>
        </Grid>
      </Grid>
    </Box>
  )
}
