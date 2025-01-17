import React from 'react';
import './Home.css';
import Fade from 'react-reveal/Fade';
import Typewriter from 'typewriter-effect';
import Resume from '../../assets/docs/Resume.pdf';
import { Link} from 'react-scroll';
import { useTheme } from '../../Context/ThemeContext';
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
const Home = () => {
  const [theme,setTheme]=useTheme()
  const handleTheme=()=>{
    setTheme((prevState)=>(prevState==='light'?'dark':'light'))
  }
  return (
    <>
      <div className='container-fluid home-container' id='home'>
        <div className="theme-btn" onClick={handleTheme}>
          {theme==='light'?(<BsFillMoonStarsFill size={20}/>):(<FaSun size={20}/>)}
        </div>
        <div className='container home-content'>
          <Fade right><h2>Hi 🙌 I'm a</h2></Fade>
          <h1>
          <Typewriter
            options={{
              strings: ['Student!','Full Stack Developer!', 'Data Analyst!'],
              autoStart: true,
              loop: true,
            }}
          /></h1>
          <Fade bottom>
          <div className='home-buttons'>
            <a href='https://api.whatsapp.com/send?phone=1234567890' target='_blank' className='btn btn-hire' >Hire Me</a>
            <a className='btn btn-resume' href={Resume} download>My Resume</a>
          </div>
          </Fade>
        </div>
      </div>
      </>
  )
}

export default Home;
