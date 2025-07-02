import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage'
import ProjectOne from './pages/ProjectOne'
import ProjectTwo from './pages/ProjectTwo'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/projects" element = {<HomePage/>}></Route>
        <Route path="/projects/project-one" element = {<ProjectOne/>}></Route>
        <Route path="/projects/project-two" element = {<ProjectTwo/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
