import React from 'react';
import './Main.css';
import { motion } from 'framer-motion';


function Main() {


   return (
     <>
      <section className='subtitle'>
         <motion.p className='subtitle__name' animate={{ scaleY:1 }} initial={{scaleY:0}} transition={{ duration: 0.5, delay: 0.5} }>Специализация</motion.p>
         <motion.h2 className='subtitle__text' animate={{ scaleY:1 }} initial={{scaleY:0}} transition={{ duration: 0.5, delay: 0.75} }>Психолог, гештальт-терапевт</motion.h2>
      </section>
      <section className='content'>
         <div className='content__container'>
            <h3 className='content__title'>Чем я могу вам помочь</h3>  
         </div>
         <div className='content__container'>
             <p className='content__text'>Работаю с запросами:<br></br>
                  - уверенность в себе;<br></br>
                  - проблемы в отношениях с партнёром;<br></br>
                  - выгорание, упадок сил;<br></br>
                  - отношения с родителями;<br></br>
                  - стресс, страх и тревога;<br></br>
                  - разобраться в себе, своих желаниях и целях.
               </p>
         </div>
      </section>
      <section className='title'>
         <motion.h1 className='title__text' animate={{ scaleY: 1 }} initial={{ scaleY: 0 }} transition={{ duration: 0.5, delay: 1 }}>Дмитрий Амельченко</motion.h1>
      </section>
      <motion.div className='main__photo' animate={{ opacity:1 }} initial={{opacity:0}} transition={{ duration: 1, delay: 2} }></motion.div>         

     </>

   
  );
}

export default Main;