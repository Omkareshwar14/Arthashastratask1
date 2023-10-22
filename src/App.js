import React from 'react'
import Navbar from "./components/Navbar";

import Table from "./components/Table";
import './App.css';

import {Routes, Route} from 'react-router-dom';
import Chartt from './components/Chartt';




export const App = () => {
  return (
    <>
    
    <Navbar/>

   
 
     
    
       <Routes>
                
                
                <Route exact path='/chart' element={<Chartt />}></Route>
                <Route exact path='/Table' element={<Table />}></Route>
               
        </Routes>
       
 

   

    

   
    </>
  )
}

export default App;
