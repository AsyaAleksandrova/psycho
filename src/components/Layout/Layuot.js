import React from 'react';
import './Layout.css';
import Menu from '../Menu/Menu';
import Contacts from '../Contacts/Contacts';
import { Outlet } from 'react-router-dom';


function Layout() {


  return (
      <div className='root'>
         <Menu />
         <Outlet />
         <Contacts/>
    </div>
   
  );
}

export default Layout;