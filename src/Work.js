import React from 'react'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Col, Row } from 'react-bootstrap';
import fir from './firstweb.PNG'
import athkar from './athkar.PNG'
import Ai from './Ai-blog.PNG' 
import post from './Post.PNG' 

import {BsCodeSlash} from 'react-icons/bs';
import {AiOutlineArrowLeft}from 'react-icons/ai';
function Work({lan}) {
  return (
    <div className='main-work' id='d'>
        <Container className='pt-5 pb-5'>
            
            
            
            
            {
                lan ==='ar'?<div className='work-cont' lang='ar' dir='rtl'>
                    <h2><BsCodeSlash/> بعض المشاريع:</h2>
                    <Row className="g-4">
            <Col >
                <Card className='card' >
                    <Card.Img variant="top" src={athkar} />
                    <Card.Body>
                    <Card.Title style={{marginBottom:'30px'}}>اذكاري</Card.Title>
                    {/* <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text> */}
                    <a href='https://athkary-sage.vercel.app/'target='_blank' variant="dark" className="btn btn-dark">زيارة الموقع <AiOutlineArrowLeft/> </a>
                    </Card.Body>
                </Card>
            </Col>

            <Col >
                <Card className='card' >
                    <Card.Img variant="top" src={post} />
                    <Card.Body>
                    <Card.Title style={{marginBottom:'30px'}}>المدونات</Card.Title>
                    {/* <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text> */}
                    <a href='https://posts-sh.vercel.app/'target='_blank' variant="dark" className="btn btn-dark">زيارة الموقع <AiOutlineArrowLeft/></a>
                    </Card.Body>
                </Card>
            </Col>


            
          
            </Row>

            <Row className="g-4">
            <Col >
                <Card className='card' >
                    <Card.Img variant="top" src={Ai} />
                    <Card.Body>
                    <Card.Title style={{marginBottom:'30px'}}>المتأصلة</Card.Title>
                    {/* <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text> */}
                    <a href='https://blog-ai-weld.vercel.app/'target='_blank' variant="dark" className="btn btn-dark">زيارة الموقع <AiOutlineArrowLeft/></a>
                    </Card.Body>
                </Card>
            </Col>

            <Col >
                <Card className='card' >
                    <Card.Img variant="top" src={fir} />
                    <Card.Body>
                    <Card.Title style={{marginBottom:'30px'}}>الموقع الاول</Card.Title>
                    {/* <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text> */}
                    <a href='https://abdul1rhman.github.io/'target='_blank' variant="dark" className="btn btn-dark">زيارة الموقع <AiOutlineArrowLeft/></a>
                    </Card.Body>
                </Card>
            </Col>


            
          
            </Row>
                </div>:



                <div className='work-cont'>
            <h2><BsCodeSlash/> Work:</h2>
            <Row className="g-4">
            <Col >
                <Card className='card' >
                    <Card.Img variant="top" src={athkar} />
                    <Card.Body>
                    <Card.Title style={{marginBottom:'30px'}}>athkary</Card.Title>
                    {/* <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text> */}
                    <a href='https://athkary-sage.vercel.app/'target='_blank' variant="dark" className="btn btn-dark"> <AiOutlineArrowLeft/> Visit Now</a>
                    </Card.Body>
                </Card>
            </Col>

            <Col >
            <Card className='card' >
                    <Card.Img variant="top" src={post} />
                    <Card.Body>
                    <Card.Title style={{marginBottom:'30px'}}>Posts</Card.Title>
                    {/* <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text> */}
                    <a href='https://posts-sh.vercel.app/'target='_blank' variant="dark" className="btn btn-dark"><AiOutlineArrowLeft/> Visit Now</a>
                    </Card.Body>
                </Card>
            </Col>


            
          
            </Row>

            <Row className="g-4">
            <Col >
                <Card className='card' >
                    <Card.Img variant="top" src={Ai} />
                    <Card.Body>
                    <Card.Title style={{marginBottom:'30px'}}>Ai-Blog</Card.Title>
                    {/* <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text> */}
                    <a href='https://blog-ai-weld.vercel.app/'target='_blank' variant="dark" className="btn btn-dark"><AiOutlineArrowLeft/> Visit Now</a>
                    </Card.Body>
                </Card>
            </Col>

            <Col >
                <Card className='card' >
                    <Card.Img variant="top" src={fir} />
                    <Card.Body>
                    <Card.Title style={{marginBottom:'30px'}}>First Website</Card.Title>
                    {/* <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text> */}
                    <a href='https://abdul1rhman.github.io/'target='_blank' variant="dark" className="btn btn-dark"><AiOutlineArrowLeft/>  Visit Now</a>
                    </Card.Body>
                </Card>
            </Col>


            
          
            </Row>


            
            

            </div>
            }
            

        </Container>
    </div>
  )
}

export default Work