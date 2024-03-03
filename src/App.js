import './App.css';
import About from './Components/About';
import Contact from './Components/Contacts';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import NavBar from './Components/NavBar';
import Projects from './Components/Projects';
import Skills from './Components/Skill';


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <NavBar/>
      </header>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
