import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { RiMagicLine } from "react-icons/ri";
import athkar from './athkar.PNG'
import cer1 from './freecode.PNG'
import cer2 from './Capture.JPG'
import cer3 from './I2CS__1.png'
import cer4 from './Capture2.JPG'
const Card = ({lan}) => {
  const [isFlipped, setIsFlipped] = useState(null);

  const handleCardClick = (cardId) => {
    setIsFlipped(cardId===isFlipped? null:cardId);
  };

  return (
    <div className='cert-cont'>
        <Container>
            { lan==='en'?
            <div>
                <h1>certificates <RiMagicLine/></h1>
                <div className='cert-card-cont' >

                
                    <div
                    className={`card-cert ${isFlipped===1 ? 'flipped' : ''}`}
                    onClick={()=>handleCardClick(1)}
                    >
                    <div className="card-cert-front">
                        <h2> Responsive Web Design</h2>
                        
                        <p>Developer Certification, representing approximately 300 hours of coursework.</p>
                        <p>company: freeCodeCamp.org </p>
                        <span>flip the card to show more info</span>
                    </div>
                    <div className="card-cert-back" >
                        
                        <img className='img-back' src={cer1} alt="" style={{width:'100%'}} />

                        
                    </div>
                    </div>

                    <div
                    className={`card-cert ${isFlipped===2 ? 'flipped' : ''}`}
                    onClick={()=>handleCardClick(2)}
                    >
                    <div className="card-cert-front">
                        <h2>Azure Infrastructure Solutions</h2>
                        
                        <p>Developer Certification, representing approximately 300 hours of coursework.</p>
                        <p>company: Microsoft and Misk</p>
                        <span>flip the card to show more info</span>
                    </div>
                    <div className="card-cert-back">
                    <img className='img-back' src={cer2} alt="" style={{width:'100%'}} />
                    </div>
                    </div>

                    <div
                    className={`card-cert ${isFlipped===3 ? 'flipped' : ''}`}
                    onClick={()=>handleCardClick(3)}
                    >
                    <div className="card-cert-front">
                        <h2>Introduction to Cybersecurity</h2>
                        
                        <p>This introductory course takes you inside the world of cybersecurity. You will learn cybersecurity basics to protect your personal digital life</p>
                        <p>company: Cisco</p>
                        <a className='badge' href='https://www.credly.com/badges/8b82addc-0047-4d79-a5c3-9d55235cbb95/public_url'target='_blank'>verify badge </a>
                        <span>flip the card to show more info</span>
                    </div>
                    <div className="card-cert-back">
                    <img className='img-back' src={cer3} alt="" style={{width:'100%'}} />
                    </div>
                    </div>


                    <div
                    className={`card-cert ${isFlipped===4 ? 'flipped' : ''}`}
                    onClick={()=>handleCardClick(4)}
                    >
                    <div className="card-cert-front">
                        <h2>Career Ready Badge</h2>
                        
                        <p>Proficiency in skills such as communication, project planning, and time management</p>
                        <p>company: Misk</p>
                        <a className='badge' href='https://www.credential.net/e2fce05f-25cb-40cf-9018-29ff6af565b2'target='_blank'>verify badge </a>

                        <span>flip the card to show more info</span>
                    </div>
                    <div className="card-cert-back">
                    <img className='img-back' src={cer4} alt="" style={{width:'100%'}} />
                    </div>
                    </div>

                </div>

            </div>:
            <div>
                <h1>الشهادات <RiMagicLine/></h1>
                <div className='cert-card-cont' >

                
                    <div
                    className={`card-cert ${isFlipped===1 ? 'flipped' : ''}`}
                    onClick={()=>handleCardClick(1)}
                    >
                    <div className="card-cert-front" dir='rtl'>
                        <h2> تصميم الويب المتجاوب</h2>
                        
                        <p>شهادة المطور، والتي تمثل حوالي 300 ساعة من الدورات الدراسية.</p>
                        <p>مقدمة من : freeCodeCamp.org </p>
                        <span>اقلب البطاقة لإظهار المزيد من المعلومات</span>
                    </div>
                    <div className="card-cert-back" >
                        
                        <img className='img-back' src={cer1} alt="" style={{width:'100%'}} />

                        
                    </div>
                    </div>

                    <div
                    className={`card-cert ${isFlipped===2 ? 'flipped' : ''}`}
                    onClick={()=>handleCardClick(2)}
                    >
                    <div className="card-cert-front" dir='rtl'>
                        <h2>Azure حلول البنية التحتية </h2>
                        
                        <p>يمثل نظام Azure النظام الأساسي للخدمة السحابية العامة يدعم مجموعة واسعة من أنظمة التشغيل ولغات البرمجة وأطر العمل والأدوات وقواعد البيانات والأجهزة.</p>
                        <p>مقدمة من : Microsoft and Misk</p>
                        <span>اقلب البطاقة لإظهار المزيد من المعلومات</span>
                    </div>
                    <div className="card-cert-back">
                    <img className='img-back' src={cer2} alt="" style={{width:'100%'}} />
                    </div>
                    </div>

                    <div
                    className={`card-cert ${isFlipped===3 ? 'flipped' : ''}`}
                    onClick={()=>handleCardClick(3)}
                    >
                    <div className="card-cert-front" dir='rtl'>
                        <h2>مقدمة في الأمن السيبراني</h2>
                        
                        <p>تأخذك هذه الدورة التمهيدية إلى داخل عالم الأمن السيبراني. سوف تتعلم أساسيات الأمن السيبراني لحماية حياتك الرقمية </p>
                        <p>مقدمة من : Cisco</p>
                        <a className='badge' href='https://www.credly.com/badges/8b82addc-0047-4d79-a5c3-9d55235cbb95/public_url'target='_blank'>التحقق من الشارة</a>
                        <span>اقلب البطاقة لإظهار المزيد من المعلومات</span>
                    </div>
                    <div className="card-cert-back">
                    <img className='img-back' src={cer3} alt="" style={{width:'100%'}} />
                    </div>
                    </div>


                    <div
                    className={`card-cert ${isFlipped===4 ? 'flipped' : ''}`}
                    onClick={()=>handleCardClick(4)}
                    >
                    <div className="card-cert-front" dir='rtl'>
                        <h2>مسك للإعداد المهني</h2>
                        
                        <p>إتقان مهارات مثل الاتصال وتخطيط المشاريع وإدارة الوقت</p>
                        <p>مقدمة من : Misk</p>
                        <a className='badge' href='https://www.credential.net/e2fce05f-25cb-40cf-9018-29ff6af565b2'target='_blank'>التحقق من الشارة</a>

                        <span>اقلب البطاقة لإظهار المزيد من المعلومات</span>
                    </div>
                    <div className="card-cert-back">
                    <img className='img-back' src={cer4} alt="" style={{width:'100%'}} />
                    </div>
                    </div>

                </div>

            </div>
            
            }
        </Container>
    </div>
  );
};

export default Card;
