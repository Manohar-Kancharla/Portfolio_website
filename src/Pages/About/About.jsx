import React from 'react';
import './About.css';
import Jump from 'react-reveal/Jump';
import LinkProfile from './avatar-2.PNG'
const About = () => {
  return (
    <>
    <Jump>
    <div className='about' id='about'>
        <div className='row'>
            <div className='col-md-6 co-xl-6 col-lg-6 col-xs-12 about-img'><img src={LinkProfile} alt="Sample Image" /></div>
            <div className='col-md-6 co-xl-6 col-lg-6 col-xs-12 about-content'>
                <h1>About Me</h1>
                <p>Hello, I'm Manohar from Andhra Pradesh. I'm currently pursuing my B.Tech at SASTRA University and am set to graduate in 2025. I have a strong foundation in programming and am highly interested in Machine Learning and Web Development. In line with my interests, I have worked on projects in Machine Learning (ASD) and Web Development (To-Do List and Portfolio).</p>

                </div>
        </div>
    </div>
    </Jump>
    </>
  )
}

export default About
