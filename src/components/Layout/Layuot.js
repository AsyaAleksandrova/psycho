import React from 'react';
import './Layout.css';
import telegramLink from '../../images/telegram.svg';
import whatsAppLink from '../../images/whatsapp.svg';
import dzenLink from '../../images/dzen.svg';


function Layout() {


  return (
     <div className='root'>
        <nav className='menu'>
           <ul className='menu__list'>
              <li className='menu__item'>
                 
              </li>
              <li className='menu__item'>
                 <p className='menu__text'>Обо мне</p>
              </li>
              <li className='menu__item'>
                 <p className='menu__text'>Кейсы</p>
              </li>
              <li className='menu__item'>
                 <p className='menu__text'>Контакты</p>
              </li>
           </ul>
        </nav>
        <p className='subtitle__name'>Специализация</p>
        <h2 className='subtitle'>Психолог, гештальт-терапевт</h2>

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
        <h1 className='title'>Дмитрий Амельченко</h1>
        <div className='photo'></div>
    </div>
   
  );
}

export default Layout;