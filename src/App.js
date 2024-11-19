import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import MyNavbar from './components/Navbar';
import MainPage from './components/MainPage'
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Education';


function App() {
  return (
    <div className="App">
      <MyNavbar/>
      <MainPage/>
      <About/>
      <Education/>
      <Skills/>
      <Projects/>
      <Contact/>
    
    </div>
  );
}

export default App;
