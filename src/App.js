import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyNavbar from './components/Navbar';
import MainPage from './components/MainPage';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Education';
import Project1 from './pages/project1';
import Project2 from './pages/project2';
import Project3 from './pages/project3';
import Project4 from './pages/project4';
import Project5 from './pages/project5';

function App() {
  return (
    <Router>
      <div className="App">
        <MyNavbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/project1" element={<Project1 />} />
          <Route path="/project2" element={<Project2 />} />
          <Route path="/project3" element={<Project3 />} />
          <Route path="/project4" element={<Project4 />} />
          <Route path="/project5" element={<Project5 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
