import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from './Nav'
import { useTypewriter,Cursor } from 'react-simple-typewriter'

import Button from 'react-bootstrap/Button';
 
function Home({lan, handella}) {
  // const [lan, setLan]=useState('ar')
  const [text] = useTypewriter({
    words:['Abdulrhman','a Developer' ],
    loop:{}
  });

  const [text1] = useTypewriter({
    words:['عبدالرحمن','مبرمج' ],
    loop:{}
  });

  // const handella=()=>{
  //   if(lan==='ar')
  //   setLan('en')

  //   else setLan('ar')
  // }

  return (
    
    <div className='main-home' id='h'>
      
      {/* <button className="lang" style={{backgroundColor:'black'}} onClick={handella}>{lan==='ar'?'ar':'en'}</button>  */}
        <Container className='pt-5'>
        
           {
            lan==='ar'?
            <div className='heading' lan='ar' dir='rtl' >
            <h1>
            هلا<br/> انا {' '}
            <span className='red' style={{fontWeight: 'bold',color:'white' }}>{text1}</span>
            <span><Cursor cursorColor={'white'}/></span>
            
            </h1>
            

            <h2>مطور ويب </h2>
            <p>علوم حاسب، ابرع في عدت لغات برمجية. استمتع بجعل المشكلات المعقدة حلول بسيطة وجميلة </p>

              
           </div>:

            <div className='heading'>
            <h1>
            hello<br/> I'm {' '}
            <span className='red' style={{fontWeight: 'bold',color:'white' }}>{text}</span>
            <span><Cursor cursorColor={'white'}/></span>
            
            </h1>
            

            <h2>Full-Stack Developer</h2>
            <p>Computer Science, 
              proficient in several programming languages. I enjoy turning complex problems into <span style={{fontWeight: 'bold'}}>simple</span>, <span style={{fontWeight: 'bold'}} >beautiful</span>, and <span style={{fontWeight: 'bold'}}>intuitive solutions</span>.</p>

              
           </div>
           }
           
           {/* <Button style={{backgroundColor:'black'}} onClick={handella}> Hello</Button> */}
           
            
        </Container>
        
    </div>
  )
}

export default Home