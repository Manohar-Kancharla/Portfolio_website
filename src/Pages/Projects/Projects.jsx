import React from 'react';
import './Projects.css';
import Spin from 'react-reveal/Spin';
import ToDoListImage from './ToDoListImage.PNG';
import Project2 from './project2.PNG';
import Portfolio from './portfolioimage.PNG';
const Projects = () => {
  return (
    <>
        <div className='container project' id='projects'>
        <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>Projects</h2>
        <p className='pb-3 text-center'>👇here are my projects with source codes</p>
        <div className='row' id='ads'>
            <Spin>
            <div className='col-md-6 col-lg-4 col-sm-12'>
                <div className="card rounded">
                    <div className="card-image">
                        <span className='card-notify-badge'>Full Stack</span>
                        <img src={ToDoListImage} alt='project1'/>
                    </div>
                    <div className="card-image-overly m-auto mt-3">
                        
                    </div>
                    <div className="card-body">
                        <div className='ad-title'>
                            <h5 className='text-uppercase text-center'>ToDoList</h5>
                        </div>
                        <a className='ad-btn' href='#'>view</a>
                    </div>
                </div>
            </div>
            </Spin>

            <Spin>
            <div className='col-md-6 col-lg-4 col-sm-12'>
                <div className="card rounded">
                    <div className="card-image">
                        <span className='card-notify-badge'>Machine Learning</span>
                        <img src={Project2} alt='project2'/>
                    </div>
                    <div className="card-image-overly m-auto mt-3">
                        
                    </div>
                    <div className="card-body">
                        <div className='ad-title'>
                            <h5 className='text-uppercase text-center'>Early Detection of ASD</h5>
                        </div>
                        <a className='ad-btn' href='https://github.com/Manohar-Kancharla/Project_on_asd' target="_blank">view</a>
                    </div>
                </div>
            </div>
            </Spin>

            <Spin>
            <div className='col-md-6 col-lg-4 col-sm-12'>
                <div className="card rounded">
                    <div className="card-image">
                        <span className='card-notify-badge'>Full Stack</span>
                        <img src={Portfolio} alt='project3'/>
                    </div>
                    <div className="card-image-overly m-auto mt-3">
                        
                    </div>
                    <div className="card-body">
                        <div className='ad-title'>
                            <h5 className='text-uppercase text-center'>Portfolio</h5>
                        </div>
                        <a className='ad-btn' href='#'>view</a>
                    </div>
                </div>
            </div>
            </Spin>
        </div>
        </div>
    </>
  )
}

export default Projects
