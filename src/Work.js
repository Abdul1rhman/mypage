import React from 'react'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Col, Row } from 'react-bootstrap';
import fir from './firstweb.PNG'
import athkar from './athkar.PNG'
import sec from './secweb.PNG' 
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
                    <a href='https://abdul1rhman.github.io/athkar/'target='_blank' variant="dark" className="btn btn-dark">زيارة الموقع <AiOutlineArrowLeft/> </a>
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

            <Row className="g-4">
            <Col >
                <Card className='card' >
                    <Card.Img variant="top" src={sec} />
                    <Card.Body>
                    <Card.Title style={{marginBottom:'30px'}}>الموقع الثاني</Card.Title>
                    {/* <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text> */}
                    <a href='https://abdul1rhman.github.io/second-web/'target='_blank' variant="dark" className="btn btn-dark">زيارة الموقع <AiOutlineArrowLeft/></a>
                    </Card.Body>
                </Card>
            </Col>

            <Col >
                <Card className='card' >
                    <Card.Img variant="top" src={fir} />
                    <Card.Body>
                    <Card.Title style={{marginBottom:'30px'}}>الموقع الثاني</Card.Title>
                    {/* <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text> */}
                    <a href='https://abdul1rhman.github.io/athkar/'target='_blank' variant="dark" className="btn btn-dark">زيارة الموقع <AiOutlineArrowLeft/></a>
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
                    <a href='https://abdul1rhman.github.io/athkar/'target='_blank' variant="dark" className="btn btn-dark"> <AiOutlineArrowLeft/> Visit Now</a>
                    </Card.Body>
                </Card>
            </Col>

            <Col >
                <Card className='card' >
                    <Card.Img variant="top" src={fir} />
                    <Card.Body>
                    <Card.Title style={{marginBottom:'30px'}}>Firt Website</Card.Title>
                    {/* <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text> */}
                    <a href='https://abdul1rhman.github.io/'target='_blank' variant="dark" className="btn btn-dark"><AiOutlineArrowLeft/> Visit Now</a>
                    </Card.Body>
                </Card>
            </Col>


            
          
            </Row>

            <Row className="g-4">
            <Col >
                <Card className='card' >
                    <Card.Img variant="top" src={sec} />
                    <Card.Body>
                    <Card.Title style={{marginBottom:'30px'}}>  </Card.Title>
                    {/* <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text> */}
                    <a href='https://abdul1rhman.github.io/second-web/'target='_blank' variant="dark" className="btn btn-dark"><AiOutlineArrowLeft/> Visit Now</a>
                    </Card.Body>
                </Card>
            </Col>

            <Col >
                <Card className='card' >
                    <Card.Img variant="top" src={fir} />
                    <Card.Body>
                    <Card.Title style={{marginBottom:'30px'}}>Third Website</Card.Title>
                    {/* <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text> */}
                    <a href='https://abdul1rhman.github.io/athkar/'target='_blank' variant="dark" className="btn btn-dark"><AiOutlineArrowLeft/>  Visit Now</a>
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