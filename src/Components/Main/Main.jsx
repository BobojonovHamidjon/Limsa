import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import Connection from '../../Pages/Connection/Connection';
import Contact from '../../Pages/Contact/Contact';



function Main  ()  {
  return (
   <>
    <Header/>
    <main>
       <Outlet/>
    </main>
    <Connection/>
    <Contact/>
  <Footer/>
   </>
  );
}

export default Main; 

