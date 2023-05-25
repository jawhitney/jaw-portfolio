import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './components/routing/Home'
import Projects from './components/routing/Projects'
import Resume from './components/routing/Resume'
import About from './components/routing/About'
import Contact from './components/routing/Contact'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
