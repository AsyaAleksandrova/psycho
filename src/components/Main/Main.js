import React from 'react';
import './Main.css';
import { motion } from 'framer-motion';


function Main() {


   return (
     <>
      <section className='subtitle'>
         <p className='subtitle__name'>Специализация</p>
         <h2 className='subtitle__text'>Психолог, гештальт-терапевт</h2>
         <motion.div className='menu__lineright' animate={{ width:'100%' }} initial={{width:0}} transition={{ duration: 1, delay: 0.5} }></motion.div>
      </section>
      
      <h1 className='main__title'>Дмитрий Амельченко</h1>
      <motion.div className='main__photo' animate={{ opacity:1 }} initial={{opacity:0}} transition={{ duration: 1.5, delay: 0.5} }></motion.div>         

     </>

   
  );
}

export default Main;