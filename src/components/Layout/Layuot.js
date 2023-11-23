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
      <motion.div className='root__lineright' animate={{ width: '100%', top: '100px', left: 0 }} initial={{ width: 0, top: '100px', left: 0 }} transition={{ duration: 1, delay: 0 }}></motion.div>
      <motion.div className='root__lineright' animate={{ width: '100%', top: '190px', left: 0 }} initial={{ width: 0, top: '190px', left: 0 }} transition={{ duration: 1, delay: 0.5 }}></motion.div>
      <motion.div className='root__lineright' animate={{ width: ['0%', '100%', '45%'], top: '260px', left: ['0%', '0%', '55%'] }} initial={{ width: 0, top: '260px', left: 0 }} transition={{ duration: 1, delay: 1 }}></motion.div>
      <motion.div className='root__lineright' animate={{ width: ['0%', '100%', '45%'], top: '500px', left: ['0%', '0%', '55%'] }} initial={{ width: 0, top: '500px', left: 0 }} transition={{ duration: 1, delay: 1.25 }}></motion.div>
      <motion.div className='root__linedown' animate={{ height: ['0px', '100px', '50px'], right: '45%', top: ['0px', '0px', '50px'] }} initial={{ height: 0, right: '45%', top: 0 }} transition={{ duration: 0.5, delay: 0 }}></motion.div>
      <motion.div className='root__linedown' animate={{ height: ['0px', '100px', '50px'], right: '30%', top: ['0px', '0px', '50px'] }} initial={{ height: 0, right: '30%', top: 0 }} transition={{ duration: 0.5, delay: 0.5 }}></motion.div>
      <motion.div className='root__linedown' animate={{ height: ['0px', '100px', '50px'], right: '15%', top: ['0px', '0px', '50px'] }} initial={{ height: 0, right: '15%', top: 0 }} transition={{ duration: 0.5, delay: 1 }}></motion.div>
      <motion.div className='root__linedown' animate={{ height: '310px', right: '45%', top: '190px' }} initial={{ height: 0, right: '45%', top: '190px' }} transition={{ duration: 1, delay: 0.5 }}></motion.div>
      <motion.div className='root__linedown' animate={{ height: '310px', right: '15%', top: '190px' }} initial={{ height: 0, right: '15%', top: '190px' }} transition={{ duration: 1, delay: 1.5 }}></motion.div>
      <motion.div className='root__linedeco' animate={{ width: '55%', top: 0, left: 0 }} initial={{ width: 0, top: 0, left: 0 }} transition={{ duration: 1, delay: 2 }}></motion.div>
      <motion.div className='root__linedeco' animate={{ width: ['0%', '100%', '45%'], bottom: 0, left: ['0%', '0%', '55%'] }} initial={{ width: 0, bottom: 0, left: 0 }} transition={{ duration: 1, delay: 0 }}></motion.div>
    </div>
   
  );
}

export default Layout;