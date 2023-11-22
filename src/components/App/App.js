import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from '../Layout/Layuot.js';
import Main from '../Main/Main';



function App() {


  return (
      <Routes>
        <Route path='/' element={<Layout />}>
          
          <Route path='/' element={<Main />} />

        </Route>
      </Routes>
   
  );
}

export default App;
