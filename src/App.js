import { Routes, Route } from 'react-router-dom';


// Components
import NavBar from './components/Nav';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Projects from './pages/Projects/Projects';
import Resume from './pages/Resume/Resume';
import ProjectDetails from './pages/ProjectDetails';

// import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='about' element={<About />} />
        <Route path='/' element={<Home />} />
        <Route path='contact' element={<Contact />} />
        <Route path='resume' element={<Resume />} />
        <Route path='projects' element={<Projects />} />
        <Route path='projects/:projectDetails' element={<ProjectDetails />} />
      </Routes>
    </>
  )
}



export default App;
