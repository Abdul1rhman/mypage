import React from 'react'
import { Container } from 'react-bootstrap'
import { FaJava, FaReact, FaDrupal, FaDatabase, FaAtlassian } from 'react-icons/fa';
import { SiPython, SiJavascript,SiFirebase } from 'react-icons/si';
import { TbBrandNextjs} from 'react-icons/tb';
import { GrMysql} from 'react-icons/gr';




function Tec({lan}) {
  return (
    <div className='tec-cont'>
    

    <Container>
        {lan==='en'?
        <div>
        <h1>Technical Skills</h1>
        
        <div className='one-two'>
            <div className='one-tec'>
                <h3><FaJava/> Java</h3>
                <h3><SiPython/> Python</h3>
                <h3><FaReact/> React js</h3>
                <h3><TbBrandNextjs/> Next js</h3>
                <h3><FaDrupal/> Drupal</h3>
                
                
            </div>

            <div className='two-tec'>
            <h3><SiJavascript/> JavaScript.</h3>
                <h3><FaDatabase/> Database Management</h3>
                <h3><GrMysql/> SQL (MySQL)</h3>
                <h3><FaAtlassian/> MongoDB Atlas</h3>
                
                <h3><SiFirebase/>Firebase</h3>
            </div>
        </div>
        </div>
        :
        <div>
        <h1>المهارات التقنية</h1>
        
        <div className='one-two'>
            <div className='one-tec'>
                <h3><FaJava/> Java</h3>
                <h3><SiPython/> Python</h3>
                <h3><FaReact/> React js</h3>
                <h3><TbBrandNextjs/> Next js</h3>
                <h3><FaDrupal/> Drupal</h3>
                
                
            </div>

            <div className='two-tec'>
            <h3><SiJavascript/> JavaScript.</h3>
                <h3><FaDatabase/> Database Management</h3>
                <h3><GrMysql/> SQL (MySQL)</h3>
                <h3><FaAtlassian/> MongoDB Atlas</h3>
                
                <h3><SiFirebase/>Firebase</h3>
            </div>
        </div>
        </div>
        }
    </Container>
    </div>
  )
}

export default Tec