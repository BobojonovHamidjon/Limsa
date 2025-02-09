import React, { useState, useEffect } from 'react'
import "aos/dist/aos.css";
import Aos from 'aos'
import Main from './Components/Main/Main'

import { Routes,Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import Work from './Pages/Work/Work';
import Prices from './Pages/Prices/Prices';

function App() {
  useEffect(() => {
    Aos.init({
        duration: 900,
        offset: 50,
        easing: 'ease-in-out', 
    });
}, []);

  return (
    <>
      <Routes>
      <Route path="/" element={<Main />}>
      <Route index element={<Home />} />
      <Route path='/services' element={<Services/>}/>
      <Route path='/work' element={<Work/>}/>
      <Route  path='/prices'  element={<Prices/>}/>

      
      </Route>
      </Routes>
   
    </>
  )
}

export default App