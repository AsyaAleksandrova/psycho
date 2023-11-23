import React from 'react';
import { motion } from 'framer-motion';
import './Contacts.css';
import telegramLink from '../../images/telegram.svg';
import whatsAppLink from '../../images/whatsapp.svg';
import dzenLink from '../../images/dzen.svg';


function Contacts() {


  return (
      <section className='contacts'>
        <section className='contacts__location'>
           <motion.span animate={{ scale: 1 }} initial={{ scale: 0 }} transition={{ duration: 0.5, delay: 2.5, type: "spring", stiffness: 400, damping: 15 }}>
              <ion-icon name="location-outline" class='contacts__icon contacts__icon_static'></ion-icon>
           </motion.span>
            <motion.p className='contacts__city' animate={{ translateY: '0%' }} initial={{translateY: '300%' }} transition={{ duration: 0.5, delay: 2} }>г. Москва</motion.p>
         </section>
         <section className='contacts__social'>
            <motion.a href='https://t.me/Amelchenkopsy' target='blank' animate={{ scale: 1 }} initial={{scale: 0 }} transition={{ duration: 0.5, delay: 2.5, type: "spring", stiffness: 400, damping: 15} }><ion-icon src={telegramLink} class='contacts__icon_telegram'></ion-icon></motion.a>
            <motion.a href='https://api.whatsapp.com/send?phone=79168663128' target='blank' animate={{ scale: 1 }} initial={{scale: 0 }} transition={{ duration: 0.5, delay: 2.6, type: "spring", stiffness: 400, damping: 15} }><ion-icon src={whatsAppLink} class='contacts__icon_telegram'></ion-icon></motion.a>
            <motion.a href='https://dzen.ru/amelchenko' target='blank' animate={{ scale: 1 }} initial={{scale: 0 }} transition={{ duration: 0.5, delay: 2.7, type: "spring", stiffness: 400, damping: 15} }><ion-icon src={dzenLink} class='contacts__icon'></ion-icon></motion.a>
         </section>
        <motion.button className='contacts__button' animate={{ scale: 1 }} initial={{scale: 0 }} transition={{ duration: 0.3, delay: 2.7, type: "spring", stiffness: 4000, damping: 1500} }>Записаться</motion.button>
      </section>
   
  );
}

export default Contacts;