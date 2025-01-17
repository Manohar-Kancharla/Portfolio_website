import React, { useState } from 'react';
import './MobileNav.css';
import {FcHome,FcAbout} from 'react-icons/fc';
import { FaBook } from "react-icons/fa";
import { GrProjects, GrTechnology } from "react-icons/gr";
import { MdOutlineContactPhone } from "react-icons/md";
import { Link, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { CiMenuFries } from "react-icons/ci";
import { IoIosMenu } from "react-icons/io";
const MobileNav = () => {
  const [open,setOpen]=useState(false);
  const handleOpen=()=>{
    setOpen(!open)
  };
  const handleMenuClick=()=>{
    setOpen(false);
  }
  return (
    <>
      <div className="mobile-nav">
        <div className="mobile-nav-header">
          {open?(<IoIosMenu size={30} color='white' className='mobile-nav-icon' onClick={handleOpen}/>):(<CiMenuFries size={30} color='white' className='mobile-nav-icon' onClick={handleOpen}/>)}
        
        <span className='mobile-nav-title'>My Portfolio App</span>
        </div>
        {open && (
                  <div className="mobile-nav-menu">
                  <div className='nav-items'>
                                      <div className='nav-item'>
                                          <div className='nav-link'>
                                              
                                              <Link to='home' onClick={handleMenuClick} spy={true} smooth={true} offset={-100} duration={100}><FcHome/>Home</Link>
                                              
                                          </div>
                                          <div className='nav-link'>
                                              
                                              <Link to='about' onClick={handleMenuClick} spy={true} smooth={true} offset={-100} duration={100}><FcAbout/>About</Link>
                                              
                                          </div>
                                          <div className='nav-link'>
                                              
                                              <Link to='techstack' onClick={handleMenuClick} spy={true} smooth={true} offset={-100} duration={100}><GrTechnology />TechStack</Link>
                                              
                                          </div>
                                          <div className='nav-link'>
                                              
                                              <Link to='education' onClick={handleMenuClick} spy={true} smooth={true} offset={-100} duration={0}><FaBook/>Education</Link>
                                          </div>
                                          <div className='nav-link'>
                                              
                                              <Link to='projects' onClick={handleMenuClick} spy={true} smooth={true} offset={-200} duration={100}><GrProjects />Projects</Link>
                                              
                                          </div>
                                          <div className='nav-link'>
                                              
                                              <Link to='contact' onClick={handleMenuClick} spy={true} smooth={true} offset={-250} duration={100}><MdOutlineContactPhone />Contact</Link>
                                              
                                          </div>
                                      </div>
                                  </div>
                </div>
        )}


      </div>
    </>
  )
}

export default MobileNav
