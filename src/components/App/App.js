import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from '../Layout/Layuot.js';
import Main from '../Main/Main';
import About from '../About/About';
import Cases from '../Cases/Cases';
import ContactMe from '../ContactMe/ContactMe';


function App() {


  return (
      <Routes>
        <Route path='/' element={<Layout />}>
          
        <Route path='/' element={<Main />} />
        <Route path='/about' element={<About />} />
        <Route path='/cases' element={<Cases />} />
        <Route path='/contacts' element={<ContactMe />} />

        </Route>
      </Routes>
   
  );
}

export default App;
