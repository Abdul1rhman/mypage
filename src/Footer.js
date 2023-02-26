import React from 'react'
import { Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { BsLinkedin, BsGithub, BsInstagram, BsTwitter} from 'react-icons/bs';
function Footer({lan}) {
  return (
    <div className='main-fot' id='c'>
        <Container className='pt-5 pb-5'>
             
             {
                lan==='ar'?
                <div className='footer-head' lang='ar' dir='rtl'>
                <h4>تواصل معي على الشبكات الاجتماعية:</h4>

                <div className='footer-icon'>
                    <BsLinkedin style={{fontSize:'25px' ,cursor:'pointer'}}/>
                    <BsGithub style={{fontSize:'25px' ,cursor:'pointer'}}/>
                    <BsInstagram style={{fontSize:'25px' ,cursor:'pointer'}}/>
                    <BsTwitter style={{fontSize:'25px' ,cursor:'pointer'}}/>

                </div>
             </div>
                :
                <div className='footer-head'>
                <h4>Get connected with me on social networks:</h4>

                <div className='footer-icon'>
                    <BsLinkedin style={{fontSize:'25px' ,cursor:'pointer'}}/>
                    <BsGithub style={{fontSize:'25px' ,cursor:'pointer'}}/>
                    <BsInstagram style={{fontSize:'25px' ,cursor:'pointer'}}/>
                    <BsTwitter style={{fontSize:'25px' ,cursor:'pointer'}}/>

                </div>
             </div>
                
             }

             {
                lan=='ar'?
                <div className='footer-body' lang='ar' dir='rtl'>
                <Row>
                    <Col sm={8}>
                        <h4>الايميل</h4>
                        <p>يمكنك التواصل معي عبر الايميل : <span style={{fontWeight:'bold'}}>alotaibiabdulrhman1@gmail.com</span> </p>
                    </Col>

                    {/* <Col>
                    
                    </Col> */}

                    <Col >
                        <h4>الاقسام:</h4>
                        <p><a href="#">الرئيسية</a></p>
                        <p><a href="#">الاعمال</a></p>
                        <p><a href="#">التواصل</a></p>
                    </Col>

                    {/* <Col >
                    <h4>الاقسام:</h4>
                        <p><a href="#">الرئيسية</a></p>
                        <p><a href="#">الاعمال</a></p>
                        <p><a href="#">التواصل</a></p>
                    </Col> */}
                </Row>
             </div>
             :
             <div className='footer-body'>
                <Row>
                    <Col sm={8}>
                        <h4>Email</h4>
                        <p>You can contact me via email: <span style={{fontWeight:'bold'}}>alotaibiabdulrhman1@gmail.com</span></p>
                    </Col>

                    {/* <Col>
                    
                    </Col> */}

                    <Col >
                        <h4>Section:</h4>
                        <p><a href="#h">Home</a></p>
                        <p><a href="#d">Wrok</a></p>
                        <p><a href="#c">Contact</a></p>
                    </Col>

                    {/* <Col >
                    <h4>Section:</h4>
                        <p><a href="#">Home</a></p>
                        <p><a href="#">Wrok</a></p>
                        <p><a href="#">Contact</a></p>
                    </Col> */}
                </Row>
             </div>

             }
             

             


             <div className='footer-copy'>
             <p>{new Date().getFullYear()} ©Copyright: <span style={{fontWeight:'bold'}}>Abdulrhman</span></p>

             </div>



             
        </Container>
        
        
    </div>
  )
}

export default Footer