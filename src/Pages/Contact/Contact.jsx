import React from 'react';
import './Contact.css';
import Rotate from 'react-reveal/Rotate';
import LightSpeed from 'react-reveal/LightSpeed';
import Contact_image from './contact_image.PNG';
import { FaLinkedin,FaGithubSquare,FaPhoneAlt } from "react-icons/fa";
const Contact = () => {
  return (
    <>
      <div className="contact" id='contact'>
        <h2 className='text-center'>Contact Details</h2>
        <div className="card card0 border-0">
            <div className="row">
              <LightSpeed>
                <div className="col-md-6 col-lg-6 col-xk-6 col-sm-12">
                    <div className="card1">
                        <div className="row border-line">
                            <img className='image px-5' src={Contact_image} alt='contact'/>
                        </div>
                    </div>
                </div>
                </LightSpeed>

                <Rotate>
                <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                    <div className="row contact-row">
                        <div className="card2   border-0 py-3 ">
                            <h6 className='text-center'>Contact via  <a href='https://www.linkedin.com/in/nvp-manohar-kancharla-333882269' target="_blank"><FaLinkedin color='blue' size={25} className='icons'/></a><a href='https://github.com/Manohar-Kancharla' target='_blank'><FaGithubSquare color='black' size={25} className='icons'/></a><a href='#'><FaPhoneAlt color='green' size={25} className='icons'/></a>  </h6>
                        </div>
                        <div className="row px-5 mb-4">
                             <div className="line"/>
                                <small className='or text-center'>OR</small>
                                <div className="line"/>
                        </div>
                        <form action='https://formsubmit.co/125003xyz@sastra.ac.in' method='POST' target='_blank'>
                        <div className="row px-5">
                          <input type='text' name='name' placeholder='enter your name' className='mb-3' required/>
                        </div>
                        <div className="row px-5">
                          <input type='text' name='email' placeholder='enter your email' className='mb-3' required/>
                        </div>
                        <div className="row px-5">
                          <textarea type='text' name='msg' placeholder='write your message' className='mb-3' required/>
                        </div>
                        <div className="row px-5 ">
                          <button className='button-submit' type='submit'>SEND MESSAGE</button>
                        </div>
                        </form>
                    </div>
                </div>
                </Rotate>
            </div>
        </div>
        
      </div>
    </>
  )
}

export default Contact
