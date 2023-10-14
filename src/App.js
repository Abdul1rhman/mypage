import Footer from "./Footer";
import { useState } from "react";
import Home from "./Home";
import Nav from "./Nav";
import Work from "./Work";
import Button from 'react-bootstrap/Button';
import Skills from "./Skills";
import Cert from "./Cert";
import Tec from "./Tec";
function App() {
  const [lan, setLan]=useState('en')
  
  const handella=()=>{
    if(lan==='ar')
    setLan('en')

    else setLan('ar')
  }


  return (
    <div className="App">
        <Nav lan={lan} handella={handella}/> 
             

      <Home lan={lan} handella={handella}/>
      <Tec lan={lan}/>
      <Cert lan={lan}/>
      <Skills lan={lan}/>
      <Work lan={lan}/>
      
      
      <Footer lan={lan}/>
    </div>
  );
}

export default App;
