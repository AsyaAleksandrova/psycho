import React from 'react';
import './Main.css';
import { motion } from 'framer-motion';


function Main() {


   return (
     <>
      <section className='subtitle'>
         <motion.p className='subtitle__name' animate={{ translateY: '0%' }} initial={{translateY: '300%' }} transition={{ duration: 0.5, delay: 1} }>Специализация</motion.p>
         <motion.h2 className='subtitle__text' animate={{ translateY: '0%' }} initial={{translateY: '300%' }} transition={{ duration: 0.5, delay: 1} }>Психолог, гештальт-терапевт</motion.h2>
      </section>
      <section className='content'>
         <div className='content__container'>
            <motion.h3 className='content__title' animate={{ translateY: '0%' }} initial={{translateY: '300%' }} transition={{ duration: 0.5, delay: 2} }>Чем я могу вам помочь</motion.h3>  
         </div>
            <div className='content__container'>
               <div className='content__wrapper'>
                  <motion.p className='content__text' animate={{ translateY: '0%' }} initial={{ translateY: '300%' }} transition={{ duration: 0.5, delay: 2.1 }}>
                     Работаю с запросами:
                  </motion.p>
               </div>
               <div className='content__wrapper'>
                  <motion.p className='content__text' animate={{ translateY: '0%' }} initial={{ translateY: '300%' }} transition={{ duration: 0.5, delay: 2.2 }}>
                     - разобраться в себе, своих желаниях и целях;
                  </motion.p>
               </div>
               <div className='content__wrapper'>
                  <motion.p className='content__text' animate={{ translateY: '0%' }} initial={{ translateY: '300%' }} transition={{ duration: 0.5, delay: 2.3 }}>
                     - обрести уверенность в себе;
                  </motion.p>
               </div>
               <div className='content__wrapper'>
                  <motion.p className='content__text' animate={{ translateY: '0%' }} initial={{ translateY: '300%' }} transition={{ duration: 0.5, delay: 2.4 }}>
                     - снизить стресс, страх и тревогу;
                  </motion.p>
               </div>
               <div className='content__wrapper'>
                  <motion.p className='content__text' animate={{ translateY: '0%' }} initial={{ translateY: '300%' }} transition={{ duration: 0.5, delay: 2.5 }}>
                     - выстроить отношения с родителями;
                  </motion.p>
               </div>
               <div className='content__wrapper'>
                  <motion.p className='content__text' animate={{ translateY: '0%' }} initial={{ translateY: '300%' }} transition={{ duration: 0.5, delay: 2.6 }}>
                     - преодолеть выгорание, упадок сил;
                  </motion.p>
               </div>
               <div className='content__wrapper'>
                  <motion.p className='content__text' animate={{ translateY: '0%' }} initial={{ translateY: '300%' }} transition={{ duration: 0.5, delay: 2.7 }}>
                     - улучшить взаимоотношения с партнёром;
                  </motion.p> 
               </div>
         </div>
      </section>
      <section className='content__wrapper content__title'>
            <motion.h1 className='content__title-text' animate={{ translateY: '0%' }} initial={{ translateY: '300%' }} transition={{ duration: 0.5, delay: 1 }}>Дмитрий Амельченко</motion.h1>
      </section>
      <motion.div className='main__photo' animate={{ opacity:1 }} initial={{opacity:0}} transition={{ duration: 1, delay: 2} }></motion.div>         

     </>

   
  );
}

export default Main;