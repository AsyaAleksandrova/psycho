import React from 'react';
import { Outlet } from 'react-router-dom';
import './Layout.css';
import Menu from '../Menu/Menu';
import Contacts from '../Contacts/Contacts';


function Layout() {


  return (
    <div className='root'>
      <Menu />
      <Outlet />
      <Contacts />
    </div>
   
  );
}

export default Layout;