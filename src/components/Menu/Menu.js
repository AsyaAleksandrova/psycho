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
               </motion.li>
               <motion.li className='menu__item' animate={{ scaleY:1 }} initial={{scaleY:0}} transition={{ duration: 0.5, delay: 0} }>
                  <NavLink to='/cases' className='menu__text'>Кейсы</NavLink>
               </motion.li>
               <motion.li className='menu__item' animate={{ scaleY:1 }} initial={{scaleY:0}} transition={{ duration: 0.5, delay: 0} }>
                  <NavLink to='/contacts' className='menu__text'>Контакты</NavLink>
               </motion.li>
         </ul>           
        </nav>
      </header>
   
  );
}

export default Menu;