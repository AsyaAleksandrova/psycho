import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';
import { motion } from 'framer-motion';


function Menu() {


  return (
      <header className='menu'>
        <nav>
            <ul className='menu__list'>  
               <motion.li className='menu__item' animate={{ translateY: '0%' }} initial={{translateY: '300%'}} transition={{ duration: 0.5, delay: 2} }>
                  <NavLink to='/about'  className='menu__text'>Обо мне</NavLink>
               </motion.li>
               <motion.li className='menu__item' animate={{ translateY: '0%' }} initial={{translateY: '300%'}} transition={{ duration: 0.5, delay: 2} }>
                  <NavLink to='/cases' className='menu__text'>Кейсы</NavLink>
               </motion.li>
               <motion.li className='menu__item' animate={{ translateY: '0%' }} initial={{translateY: '300%'}} transition={{ duration: 0.5, delay: 2} }>
                  <NavLink to='/contacts' className='menu__text'>Контакты</NavLink>
               </motion.li>
         </ul>           
        </nav>
      </header>
   
  );
}

export default Menu;