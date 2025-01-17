import React from 'react';
import './Menus.css';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import {FcHome,FcAbout} from 'react-icons/fc';
import { FaBook } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { MdOutlineContactPhone } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import LinkProfile from './avatar-1.PNG';
import { Link, animateScroll as scroll, scrollSpy } from 'react-scroll';
const Menus = ({toggle}) => {
  return (
    <>
        {toggle?(
            <>
            <Zoom>
                <div className='navbar-profile-pic'>
                    <img src={LinkProfile} alt="Sample Image" />
                </div>
            </Zoom>
            <Fade left>
            <div>
                <div className='nav-items'>
                    <div className='nav-item'>
                        <div className='nav-link'>
                            
                            <Link to='home' spy={true} smooth={true} offset={-100} duration={100}><FcHome/>Home</Link>
                            
                        </div>
                        <div className='nav-link'>
                            
                            <Link to='about' spy={true} smooth={true} offset={-100} duration={100}><FcAbout/>About</Link>
                            
                        </div>
                        <div className='nav-link'>
                            
                            <Link to='techstack' spy={true} smooth={true} offset={-100} duration={100}><GrTechnology />TechStack</Link>
                            
                        </div>
                        <div className='nav-link'>
                            
                            <Link to='education' spy={true} smooth={true} offset={-100} duration={0}><FaBook/>Education</Link>
                        </div>
                        <div className='nav-link'>
                            
                            <Link to='projects' spy={true} smooth={true} offset={-200} duration={100}><GrProjects />Projects</Link>
                            
                        </div>
                        <div className='nav-link'>
                            
                            <Link to='contact' spy={true} smooth={true} offset={-250} duration={100}><MdOutlineContactPhone />Contact</Link>
                            
                        </div>
                    </div>
                </div>
            </div>
            </Fade>
            </>
        ):(
            <>
            <Zoom>
            <h1 className='me self-center'>ME</h1>
            </Zoom>
            
            <div>
            <Fade left>
                <div className='nav-items'>
                    <div className='nav-item'>
                        <div className='nav-link'>
                            <Link to='home' spy={true} smooth={true} offset={-100} duration={100}><FcHome/></Link>
                        </div>
                        <div className='nav-link'>
                            <Link to='about' spy={true} smooth={true} offset={-100} duration={100}><FcAbout/></Link>
                            
                        </div>
                        <div className='nav-link'>
                            
                            <Link to='techstack' spy={true} smooth={true} offset={-100} duration={100}><GrTechnology /></Link>
                            
                        </div>
                        <div className='nav-link'>
                            <Link to='education' spy={true} smooth={true} offset={-100} duration={100}><FaBook/></Link>
                            
                        </div>
                        <div className='nav-link'>
                            <Link to='projects' spy={true} smooth={true} offset={-200} duration={100}><GrProjects /></Link>
                            
                        </div>
                        <div className='nav-link'>
                            <Link to='contact' spy={true} smooth={true} offset={-250} duration={100}><MdOutlineContactPhone /></Link>
                            
                        </div>
                        
                    </div>
                </div>
                </Fade>
            </div>
            
            </>
        )}
      
    </>
  )
}

export default Menus
