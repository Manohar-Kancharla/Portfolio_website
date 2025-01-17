import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Tada from 'react-reveal/Tada';
import Layot from './Components/Layot';
import About from './Pages/About/About';
import TechStack from './Pages/TechStack/TechStack';
import Projects from './Pages/Projects/Projects';
import Contact from './Pages/Contact/Contact';
import Education from './Pages/Education/Education';
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from './Context/ThemeContext';
import MobileNav from './Components/MobileNav/MobileNav';


function App() {
  const [theme] = useTheme();

  

  return (
    <div className='first-div'>
    
    <div className='maindiv' id={theme}>
    <MobileNav/>
    <Layot/>
    <div className='container'>
        <About/>
        <TechStack/>
        <Education/>
        <Projects/>
        <Contact/>
      </div>
      <div className='footer thankyou-note  '>
      <Tada> <h4 className='text-center'>Thanks for being here❤️let’s connect soon!</h4></Tada>
      <ScrollToTop smooth color='#f29f67' style={{backgroundColor:'#1e1e2c', borderRadius:'80px'}}/>
      </div>
      
      
      </div>
      
    </div>
  )
}

export default App
