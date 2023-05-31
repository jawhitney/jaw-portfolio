import { useEffect, useState } from "react";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import headshot from "assets/headshot.jpeg";

import { orderBy } from "lodash";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Avatar,
  Box,
  FormControlLabel,
  Grid,
  IconButton,
  Link,
  Switch,
  Typography,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import { API } from "aws-amplify";
import { listExperiences } from "graphql/queries";
import { Experience as ExperienceType } from "API";

import Experience from "components/Experience";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [experiences, setExperiences] = useState<ExperienceType[]>([]);

  async function fetchExperiences() {
    const response: any = await API.graphql({ query: listExperiences });
    const experiences = response.data.listExperiences.items;
    const sortedExperiences = orderBy(experiences, ["dateBegin"], ["desc"]);
    setExperiences(sortedExperiences);
  }

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const handleChangeTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDarkMode(event.target.checked);
  };

  useEffect(() => {
    fetchExperiences();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container>
        <Grid item md={5}>
          <Box sx={{ position: "sticky", top: 0 }}>
            <Avatar
              alt="Jonathan Whitney"
              src={headshot}
              sx={{ width: 250, height: 250 }}
            />
            <Typography>Jonathan Whitney</Typography>
            <Typography>Full-Stack Developer/Engineer</Typography>
            <Typography>
              Fast-learning, self-motivated, and self-taught digital developer.
              Experienced in full-stack development and design, responsive web
              design, and web applications.
            </Typography>
            <Typography>
              B.S. in Aerospace Engineering from University of Colorado
              (Boulder, Colorado, 2001 - 2005)
            </Typography>
            <Typography>
              This site is a React application hosted on AWS
              <Link href="https://github.com/jawhitney/jaw-portfolio">
                <IconButton aria-label="Link to GitHub Repo">
                  <OpenInNewIcon />
                </IconButton>
              </Link>
            </Typography>
          </Box>
        </Grid>
        <Grid item md={7}>
          {experiences.map((experience) => {
            return <Experience key={experience.id} experience={experience} />;
          })}
        </Grid>
        <div className="darkMode">
          <FormControlLabel
            control={
              <Switch
                checked={darkMode}
                onChange={handleChangeTheme}
                inputProps={{ "aria-label": "dark mode" }}
              />
            }
            label="Dark Mode"
          />
        </div>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
