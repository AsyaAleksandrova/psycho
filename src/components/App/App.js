import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from '../Layout/Layuot.js';



function App() {


  return (
      <Routes>
        <Route path='/' element={<Layout />}>
          
        

        </Route>
      </Routes>
   
  );
}

export default App;
