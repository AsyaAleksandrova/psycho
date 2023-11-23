import React from 'react';
import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Layout.css';
import Menu from '../Menu/Menu';
import Contacts from '../Contacts/Contacts';


function Layout() {


  return (
    <div className='root'>
      <Menu />
      <Outlet />
      <Contacts />
      <motion.p className='root__copy' animate={{ opacity: 0.5 }} initial={{opacity: 0}} transition={{ duration: 0.5, delay: 2} }>&copy; 2023</motion.p>
    </div>
   
  );
}

export default Layout;