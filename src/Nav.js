import React,{useState} from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import { HiMenu } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';


function Nav({lan, handella}) {
  const [clicked, setClicked] = useState(false);
  const [isOpen, setOpen] = useState(false)


  const handel = () => {
    setClicked(!clicked)
    setOpen(!isOpen)
  }

  const handela=()=>{
    setTimeout(()=>{
      setOpen(false)
    },500)
    
    setClicked(!clicked)
  }

  return (
    <nav>
        <Container>
        
            {
              lan==='ar' ?
              <div className='nav-cont' lang='ar' dir='rtl'>
                <h2>عبدالرحمن</h2>
                <button className="lang"  onClick={handella}>{lan==='ar'?'English':'العربية'}</button>
                
                <button className='nav-btn' onClick={handel}>{clicked?

                    <MdClose style={{width:'30px',height:'30px'}}/>:

                    <HiMenu style={{width:'30px',height:'30px',}}/>}

                </button>
        
                
                <ul className={`nav-menu ${isOpen?'active':''}`}>
                    <li ><a href="#h" onClick={handela}>الرئيسية</a></li>
                    <li ><a href="#d" onClick={handela}>الاعمال</a></li>
                    <li ><a href="#c" onClick={handela}>التواصل</a></li>
                </ul>
            </div>:

            <div className='nav-cont'>
                <h2>Abdulrhman</h2>
                <button className="lang" onClick={handella}>{lan==='ar'?'English':'العربية'}</button>
                
                <button className='nav-btn' onClick={handel}>{clicked?

                    <MdClose style={{width:'30px',height:'30px'}}/>:

                    <HiMenu style={{width:'30px',height:'30px',}}/>}

                </button>
                <ul className={`nav-menu ${isOpen?'active':''}`}>
                    <li ><a href="#h" onClick={handela}>Home</a></li>
                    <li ><a href="#d" onClick={handela}>Work</a></li>
                    <li ><a href="#c" onClick={handela}>Contact</a></li>
                </ul>
            </div>
            }
            
            
        </Container>
        

    </nav>
  )
}

export default Nav