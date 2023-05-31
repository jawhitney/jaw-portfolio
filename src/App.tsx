import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import logo from 'assets/jw-logo.svg'

import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { FormControlLabel, Grid, Switch } from '@mui/material'

import { API } from "aws-amplify"
import { listExperiences, listTags } from "graphql/queries"

import Header from 'components/Header'
import Home from 'components/routing/Home'
import Projects from 'components/routing/Projects'
import Resume from 'components/routing/Resume'
import About from 'components/routing/About'
import Contact from 'components/routing/Contact'

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false)

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const apiData: any = await API.graphql({ query: listExperiences });
    const experiencesFromAPI = apiData.data.listExperiences.items

    console.log('[debug] experiencesFromAPI', experiencesFromAPI)

    // const notesFromAPI = apiData.data.listNotes.items;
    // setNotes(notesFromAPI);
  }

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  })

  const handleChangeTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDarkMode(event.target.checked)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <section>Left</section>
        <section>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </BrowserRouter>
        </section>
        <div className="darkMode">
          <FormControlLabel
            control={<Switch
              checked={darkMode}
              onChange={handleChangeTheme}
              inputProps={{ 'aria-label': 'dark mode' }}
            />}
            label="Dark Mode"
          />
        </div>
      </main>
    </ThemeProvider>
  )
}

export default App
