import React from 'react';
import './Contacts.css';
import { motion } from 'framer-motion';
import telegramLink from '../../images/telegram.svg';
import whatsAppLink from '../../images/whatsapp.svg';
import dzenLink from '../../images/dzen.svg';


function Contacts() {


  return (
      <section className='contacts'>
           <section className='contacts__location'>
              <ion-icon name="location-outline" class='contacts__icon'></ion-icon>
               <p className='contacts__city'>г. Москва</p>
               <motion.div className='contacts__lineleft' animate={{ width:'100%' }} initial={{width:0}} transition={{ duration: 0.5, delay: 0.5} }></motion.div>
           </section>
           <section className='contacts__social'>
              <a href='https://t.me/Amelchenkopsy'><ion-icon src={telegramLink} class='contacts__icon_telegram'></ion-icon></a>
              <a href='https://t.me/Amelchenkopsy'><ion-icon src={whatsAppLink} class='contacts__icon_telegram'></ion-icon></a>
              <a href='https://dzen.ru/amelchenko'><ion-icon src={dzenLink} class='contacts__icon'></ion-icon></a>
           </section>
        <button className='contacts__button'>Записаться</button>
        <motion.div className='contacts__lineleft' animate={{ width: '100%' }} initial={{ width: 0 }} transition={{ duration: 0.5, delay: 1 }}></motion.div>
        <motion.div className='contacts__linedown' animate={{ height:'100%' }} initial={{height:0}} transition={{ duration: 0.5, delay: 1.5} }></motion.div>
      </section>
   
  );
}

export default Contacts;