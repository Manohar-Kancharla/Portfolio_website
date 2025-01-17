import React from 'react';
import './Education.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { IoMdSchool } from "react-icons/io";
import { FaSchool } from "react-icons/fa";
import { LiaSchoolSolid } from "react-icons/lia";
import 'react-vertical-timeline-component/style.min.css';
const Education = () => {
  return (
    <>
      <div className="education" id='education'>
      <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>Education Details</h2>
      <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'black' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2021 - present"
            iconStyle={{ background: '#138781', color: '#fff' }}
            icon={<IoMdSchool />}
        >
            <h3 className="vertical-timeline-element-title">B.Tech</h3>
            <h4 className="vertical-timeline-element-subtitle">SASTRA UNIVERSITY</h4>
            <p>CSE 8.83 CGPA (current)</p>
            
        </VerticalTimelineElement>

        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'black' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2019 - 2021"
            iconStyle={{ background: '#138781', color: '#fff' }}
            icon={<FaSchool />}
        >
            <h3 className="vertical-timeline-element-title">Intermediate</h3>
            <h4 className="vertical-timeline-element-subtitle">SRI CHAYTANYA</h4>
            <p>MPC 96.4%</p>
            
        </VerticalTimelineElement>

        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'black' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2018 - 2019"
            iconStyle={{ background: '#138781', color: '#fff' }}
            icon={<LiaSchoolSolid />}
        >
            <h3 className="vertical-timeline-element-title">High School</h3>
            <h5 className="vertical-timeline-element-subtitle">Dr.KKR.Gowtham</h5>
            <p>9.8CGPA</p>
            
        </VerticalTimelineElement>
      </VerticalTimeline>
      </div>
    </>
  )
}

export default Education
