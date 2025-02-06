import React, { useState, useEffect } from 'react'
import "aos/dist/aos.css";
import Aos from 'aos'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import FaqSection from './Pages/FaqSelection/FaqSection'
import Work from './Pages/Work/Work';
import Services from './Pages/Services/Services';
import Footer from './Components/Footer/Footer';
import Connection from './Pages/Connection/Connection';
import Contact from './Pages/Contact/Contact';

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
      <Header/>
      <Main/>
      <FaqSection/>
      <Work/>
      <Services/>
      <Connection/>
      <Contact/>
      <Footer/>
   
    </>
  )
}

export default App
