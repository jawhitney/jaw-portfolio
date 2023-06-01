import { useEffect, useState } from "react";
import "./App.css";
import headshot from "assets/headshot.jpeg";

import { orderBy } from "lodash";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Fab,
  Grid,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { API } from "aws-amplify";
import { listExperiences } from "graphql/queries";
import { Experience as ExperienceType } from "API";

import Experience from "components/Experience";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [experiences, setExperiences] = useState<ExperienceType[]>([]);

  async function fetchExperiences() {
    setLoading(true);
    const response: any = await API.graphql({ query: listExperiences });
    const experiences = response.data.listExperiences.items;
    const sortedExperiences = orderBy(experiences, ["dateBegin"], ["desc"]);
    setExperiences(sortedExperiences);
    setLoading(false);
  }

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const handleChangeTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    fetchExperiences();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ padding: `0 ${theme.spacing(8)}` }}>
        <Grid container spacing={3}>
          <Grid item md={5}>
            <Box sx={{ position: "sticky", top: 0 }}>
              <Grid container>
                <Grid item xs={12}>
                  <Avatar
                    alt="Jonathan Whitney"
                    src={headshot}
                    sx={{
                      marginTop: theme.spacing(8),
                      marginBottom: theme.spacing(1),
                      width: theme.spacing(20),
                      height: theme.spacing(20),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <Typography variant="h3">
                        <strong>Jonathan Whitney</strong>
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h5">
                        Full-Stack Developer/Engineer
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="caption">
                        <em>
                          B.S. in Aerospace Engineering from University of
                          Colorado
                        </em>
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="body1">
                        Fast-learning, self-motivated, and self-taught digital
                        developer. Experienced in full-stack development and
                        design, responsive web design, and web applications.
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography>
                        This site is a React application built and hosted on AWS
                        Amplify
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Link href="https://github.com/jawhitney/jaw-portfolio">
                        <Button
                          variant="outlined"
                          startIcon={<OpenInNewIcon />}
                        >
                          View Repo
                        </Button>
                      </Link>
                    </Grid>
                    <Grid item xs={12}>
                      <Link
                        href="https://github.com/jawhitney"
                        aria-label="GitHub"
                      >
                        <IconButton>
                          <GitHubIcon />
                        </IconButton>
                      </Link>
                      <Link
                        href="https://www.linkedin.com/in/jonathanawhitney/"
                        aria-label="LinkedIn"
                      >
                        <IconButton>
                          <LinkedInIcon />
                        </IconButton>
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item md={7}>
            <Box
              sx={{
                paddingTop: theme.spacing(8),
                paddingBottom: theme.spacing(8),
              }}
            >
              {loading ? (
                <CircularProgress />
              ) : (
                <Grid container spacing={6}>
                  {experiences.map((experience) => {
                    return (
                      <Grid item xs={12}>
                        <Experience
                          key={experience.id}
                          experience={experience}
                        />
                      </Grid>
                    );
                  })}
                </Grid>
              )}
            </Box>
          </Grid>
          <Box
            sx={{
              position: "fixed",
              bottom: theme.spacing(1),
              right: theme.spacing(1),
            }}
          >
            <Fab
              color="primary"
              aria-label="Theme Mode"
              onClick={handleChangeTheme}
            >
              {darkMode ? <Brightness7Icon /> : <DarkModeIcon />}
            </Fab>
          </Box>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default App;
