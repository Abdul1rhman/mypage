import React from 'react'
import Container from 'react-bootstrap/Container';
import {AiFillStar} from 'react-icons/ai';
import {RiTeamLine, RiLoader2Fill, RiSettings5Line, RiCactusLine, RiFlashlightLine, RiLightbulbLine,RiCalendarCheckFill} from 'react-icons/ri';
function Skills({lan}) {
  return (
    <div className='skills-main-cont'>
      <Container>

      {
      lan ==='en'? 
        <div className='skills-ar'>
          <h1>Skills <AiFillStar/></h1>
          <div className='skills-card-cont'>
            <div className='skills-card'>
              <h2><RiTeamLine/></h2>
              <h3>Teamwork</h3>
             
            </div>

            <div className='skills-card'>
            <h2><RiLightbulbLine/></h2>
              <h3>Problem Solving</h3>
             

            </div>

            <div className='skills-card'>
            <h2><RiSettings5Line/></h2>
              <h3>Critical Thinking</h3>
             

            </div>

            <div className='skills-card'>
              <h2><RiCalendarCheckFill/></h2>
              <h3>Time Management</h3>
              

            </div>

            <div className='skills-card'>
              <h2><RiFlashlightLine/></h2>
              <h3>Continuous Improvement</h3>
             

            </div>

            <div className='skills-card'>
              <h2><RiCactusLine/></h2>
              <h3>Adaptability</h3>
              

            </div>

          </div>
        </div>
      :
      <div className='skills-ar'>
      <h1>المهارات <AiFillStar/></h1>
      <div className='skills-card-cont'>
        <div className='skills-card'>
          <h2><RiTeamLine/></h2>
          <h3>العمل الجماعي</h3>
          

        </div>

        <div className='skills-card'>
        <h2><RiLightbulbLine/></h2>
          <h3>حل المشكلات</h3>
          

        </div>

        <div className='skills-card'>
        <h2><RiSettings5Line/></h2>
          <h3>التفكير الناقد</h3>
          

        </div>

        <div className='skills-card'>
          <h2><RiCalendarCheckFill/></h2>
          <h3>إدارة الوقت</h3>
          

        </div>

        <div className='skills-card'>
          <h2><RiFlashlightLine/></h2>
          <h3>التعلم المستمر</h3>
          

        </div>

        <div className='skills-card'>
          <h2><RiCactusLine/></h2>
          <h3>التكييف</h3>
          

        </div>

      </div>
    </div>
        
        }

      </Container>
        
        
    </div>
  )
}

export default Skills
