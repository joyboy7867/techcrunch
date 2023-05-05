
import { useState } from 'react';
import './App.css';
import Comp from './Comp';
import Navbar from './Navbar';
import Front from './Front';
import Front2 from './Front2';
import {
  BrowserRouter,
  Routes,
  Route,
  
  
} from "react-router-dom";
import Footer from './Footer';


function App() {
  const[mode,setmode]=useState("light")
  const[lab,setlab]=useState("Enable Dark Mode")
  const toggle=()=>{
    if(mode==='light'){
      document.querySelector(".carbback").style.backgroundColor="black";
      document.querySelector(".today").style.color="white";
      document.body.style.color="white";
      setmode('dark')
      setlab('Enable Light Mode')
    }
    else{
      document.querySelector(".carbback").style.backgroundColor="#146C94";
      document.body.style.color="black";
      document.querySelector(".today").style.color="black";
      setmode('light')
      setlab('Enable Dark Mode')
      console.log("helkk")
    }
   
  }
  return (
    <div  className="App">
      
      <BrowserRouter basename='/reactapp'>
      <Navbar togglemode={toggle} lab={lab}/>
      <Front/>
      <Front2/>
      <Routes>
      <Route path="/reactapp"element={ <Comp key={'general'} category={'general'}/>}/>
      <Route path="/technology"element={ <Comp key={'technology'} category={'technology'}/>}/>
      <Route path="/business"element={ <Comp key={'business'} category={'business'}/>}/>
      <Route path="/science"element={ <Comp key={'science'} category={'science'}/>}/>
      <Route path="/health"element={ <Comp key={'health'} category={'health'}/>}/>
      <Route path="/sport"element={ <Comp key={'sport'} category={'sport'}/>}/>
      
      
      
      </Routes>
      <Footer/>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
