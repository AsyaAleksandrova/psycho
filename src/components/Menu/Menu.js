import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';
import { motion } from 'framer-motion';


function Menu() {


  return (
      <header className='menu'>
        <p className='menu__copy menu__text'>&copy; 2023</p>
        <nav>
            <ul className='menu__list'>  
               <motion.li className='menu__item' animate={{ scaleY:1 }} initial={{scaleY:0}} transition={{ duration: 0.5, delay: 0} }>
                  <NavLink to='/about'  className='menu__text'>Обо мне</NavLink>
                  <motion.div className='menu__lineup' animate={{ height:'100%' }} initial={{height:0}} transition={{ duration: 0.5, delay: 0.5} }></motion.div>
               </motion.li>
               <motion.li className='menu__item' animate={{ scaleY:1 }} initial={{scaleY:0}} transition={{ duration: 0.5, delay: 0} }>
                  <NavLink to='/cases' className='menu__text'>Кейсы</NavLink>
                  <motion.div className='menu__lineup' animate={{ height:'100%' }} initial={{height:0}} transition={{ duration: 0.5, delay: 0.75} }></motion.div>
               </motion.li>
               <motion.li className='menu__item' animate={{ scaleY:1 }} initial={{scaleY:0}} transition={{ duration: 0.5, delay: 0} }>
                  <NavLink to='/contacts' className='menu__text'>Контакты</NavLink>
                  <motion.div className='menu__lineup' animate={{ height:'100%' }} initial={{height:0}} transition={{ duration: 0.5, delay: 1} }></motion.div>
               </motion.li>
         </ul>           
        </nav>

        <motion.div className='menu__lineright' animate={{ width:'100%' }} initial={{width:0}} transition={{ duration: 1, delay: 0} }></motion.div>
      </header>
   
  );
}

export default Menu;