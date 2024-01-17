
import './App.css'

import './components/navbar'
import Navbar from './components/navbar';
import { useState } from 'react';
import RrgistForm  from'./components/registrationForm';
import UserDetails from './components/UseDetails';
function App() {

const company = "Bati";
const about = "about us"
const[isLoged, setIsLoged]= useState (false);

const [userData,setData]= useState({
  userName:'',
  email:'',
  address:'',
  password:'',
  
  
   })  ;
  return ( <>
   
<Navbar companyN={company} aboutTxt={about} isLoged={isLoged} setIsLoged={setIsLoged}/>
<UserDetails user={userData}/>
{isLoged? <h3>welcome back</h3>: <RrgistForm  setIsLoged={setIsLoged} isLoged={isLoged} userData={userData} setData={setData}/>}


    </>
    
    );
   
  
}

export default App
