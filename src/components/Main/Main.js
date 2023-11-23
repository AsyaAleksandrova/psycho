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
         <div className='content__container content__container_small'>
            <motion.h3 className='content__text' animate={{ translateY: '0%' }} initial={{translateY: '300%' }} transition={{ duration: 0.5, delay: 2} }>Чем я могу вам помочь:</motion.h3>  
         </div>
            <div className='content__container'>
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
                     - улучшить взаимоотношения с партнёром.
                  </motion.p> 
               </div>
         </div>
      </section>
      <section className='content__wrapper content__title'>
            <motion.h1 className='content__title-text' animate={{ translateY: '0%' }} initial={{ translateY: '300%' }} transition={{ duration: 0.5, delay: 1 }}>Дмитрий Амельченко</motion.h1>
      </section>
      <motion.section className='photo' animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1, delay: 2 }}>
         <motion.div className='photo__picture' ></motion.div>
      </motion.section>
         

      
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

     </>

   
  );
}

export default Main;