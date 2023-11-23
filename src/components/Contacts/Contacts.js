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
           </section>
           <section className='contacts__social'>
              <a href='https://t.me/Amelchenkopsy'><ion-icon src={telegramLink} class='contacts__icon_telegram'></ion-icon></a>
              <a href='https://t.me/Amelchenkopsy'><ion-icon src={whatsAppLink} class='contacts__icon_telegram'></ion-icon></a>
              <a href='https://dzen.ru/amelchenko'><ion-icon src={dzenLink} class='contacts__icon'></ion-icon></a>
           </section>
        <button className='contacts__button'>Записаться</button>
      </section>
   
  );
}

export default Contacts;