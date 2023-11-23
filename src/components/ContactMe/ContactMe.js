import React from 'react';
import './ContactMe.css';
import { motion } from 'framer-motion';


function ContactMe() {


   return (
     <>
      <section className='subtitle'>
         <motion.p className='subtitle__name' animate={{ translateY: '0%' }} initial={{translateY: '300%' }} transition={{ duration: 0.5, delay: 1} }>Статус</motion.p>
         <motion.h2 className='subtitle__text' animate={{ translateY: '0%' }} initial={{translateY: '300%' }} transition={{ duration: 0.5, delay: 1} }>Открыт к общению</motion.h2>
      </section>
      <section className='content'>
         <div className='content__container'>
               <div className='content__wrapper'>
                  <motion.p className='content__text' animate={{ translateY: '0%' }} initial={{ translateY: '300%' }} transition={{ duration: 0.5, delay: 2.2 }}>
                     Я всегда открыт для клиентов, их мнений и пожеланий, на моих сессиях мы сможем обсудить, как именно вам бы хотелось построить общение, и создать пространство, где вы будете собой. Я считаю, что именно в открытом взаимодействии рождается нечто важное, что помогает справится с жизненными сложностями.<br></br>
                  </motion.p>
               </div>
               <div className='content__wrapper'>
                  <motion.p className='content__text' animate={{ translateY: '0%' }} initial={{ translateY: '300%' }} transition={{ duration: 0.5, delay: 2.2 }}>
                     Если у вас есть какие-либо вопросы, комментарии о моей работе или вы хотите зписаться на прием, можно оформить обращение через сайт, связаться со мной через мессенджеры или по телефону:<br></br>
                  </motion.p>
               </div>
               <div className='content__wrapper'>
                  <motion.p className='content__text' animate={{ translateY: '0%' }} initial={{ translateY: '300%' }} transition={{ duration: 0.5, delay: 2.4 }}>
                     + 7 (916) 866-31-28
                  </motion.p>
               </div>
            </div>
      </section>
      <section className='content__wrapper content__title'>
            <motion.h1 className='content__title-text' animate={{ translateY: '0%' }} initial={{ translateY: '300%' }} transition={{ duration: 0.5, delay: 1 }}>Контакты</motion.h1>
         </section>
         
      <motion.div className='root__lineright' animate={{ width: '100%', top: '100px', left: 0 }} initial={{ width: 0, top: '100px', left: 0 }} transition={{ duration: 1, delay: 0 }}></motion.div>
      <motion.div className='root__lineright' animate={{ width: '100%', top: '190px', left: 0 }} initial={{ width: 0, top: '190px', left: 0 }} transition={{ duration: 1, delay: 0.5 }}></motion.div>
      <motion.div className='root__lineright' animate={{ width: ['0%', '100%', '15%'], top: '260px', left: ['0%', '0%', '85%'] }} initial={{ width: 0, top: '260px', left: 0 }} transition={{ duration: 1, delay: 1 }}></motion.div>
      <motion.div className='root__lineright' animate={{ width: ['0%', '100%', '45%'], top: '510px', left: ['0%', '0%', '55%'] }} initial={{ width: 0, top: '510px', left: 0 }} transition={{ duration: 1, delay: 1.25 }}></motion.div>
      <motion.div className='root__linedown' animate={{ height: ['0px', '100px', '50px'], right: '45%', top: ['0px', '0px', '50px'] }} initial={{ height: 0, right: '45%', top: 0 }} transition={{ duration: 0.5, delay: 0 }}></motion.div>
      <motion.div className='root__linedown' animate={{ height: ['0px', '100px', '50px'], right: '30%', top: ['0px', '0px', '50px'] }} initial={{ height: 0, right: '30%', top: 0 }} transition={{ duration: 0.5, delay: 0.5 }}></motion.div>
      <motion.div className='root__linedown' animate={{ height: ['0px', '100px', '50px'], right: '15%', top: ['0px', '0px', '50px'] }} initial={{ height: 0, right: '15%', top: 0 }} transition={{ duration: 0.5, delay: 1 }}></motion.div>
      <motion.div className='root__linedown' animate={{ height: '320px', right: '45%', top: '190px' }} initial={{ height: 0, right: '45%', top: '190px' }} transition={{ duration: 1, delay: 0.5 }}></motion.div>
      <motion.div className='root__linedown' animate={{ height: '320px', right: '15%', top: '190px' }} initial={{ height: 0, right: '15%', top: '190px' }} transition={{ duration: 1, delay: 1.5 }}></motion.div>
      <motion.div className='root__linedeco' animate={{ width: '55%', top: 0, left: 0 }} initial={{ width: 0, top: 0, left: 0 }} transition={{ duration: 1, delay: 2 }}></motion.div>
      <motion.div className='root__linedeco' animate={{ width: ['0%', '100%', '45%'], bottom: 0, left: ['0%', '0%', '55%'] }} initial={{ width: 0, bottom: 0, left: 0 }} transition={{ duration: 1, delay: 0 }}></motion.div>

     </>

   
  );
}

export default ContactMe;