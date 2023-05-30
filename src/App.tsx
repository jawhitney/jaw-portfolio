import { useState } from 'react'
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

import Header from 'Components/Header'
import Home from 'Components/routing/Home'
import Projects from 'Components/routing/Projects'
import Resume from 'Components/routing/Resume'
import About from 'Components/routing/About'
import Contact from 'Components/routing/Contact'

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false)

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
        <Header />
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
