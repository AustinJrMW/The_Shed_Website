'use client'
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styles from './hero.module.css';


const heroImage = "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80";

const Hero = ({ titleFont }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <div className="w-full md:mt-[10%] mt-36">
      <div className="flex justify-center flex-col md:w-3/6 w-full mx-auto h-full">
        <div className="mx-auto text-center md:mb-32 mb-16">
          <motion.h1
            className={`${titleFont.className} md:text-5xl text-3xl text-center mb-8`}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.6 }}
          >
            Get in touch with us to discover secret of The Shed
          </motion.h1>
        </div>
      </div>
      <div className="w-full md:flex block">
        <div className={`md:w-1/2 w-full relative md:my-0 my-8`}>
          <div className={`flex`}>
            <div className={`md:w-[50%] w-[75%] h-full mt-32 md:ml-0 ml-12`}>
              <img className='object-cover md:h-[400px] h-[300px] w-full md:w-[600px]' src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80" alt="" />
            </div>
            <div className={`w-2/3 absolute md:top-0 md:right-8 -z-10`}>
              <img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
            </div>
            <div className={`w-1/2 absolute md:bottom-4 bottom-8 right-0 md:right-20 z-1`}>
              <img src="https://images.unsplash.com/photo-1560185128-e173042f79dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60" alt="" />
            </div>
          </div>
        </div>
        <div className='md:w-1/2 w-full'>
          <p>The Shed is located in the Heart of Lilongwe. Nearby is the Plaza de Colón and the well-known Retiro Park, and a few minutes away is the Paseo de la Castellana and the Santiago Bernabéu Stadium. Surrounded by famous boutiques and trendy restaurants, Tótem Madrid is on a quiet street between the city's two most luxurious shopping arteries: Calle Goya and Calle Serrano.</p><br />
          <form className='flex-col flex flex-auto gap-4'>
            <div className='grid grid-cols-2 gap-4'>
              <input className='outline-none md:py-[13px] md:px-[20px] px-[10px] py-[13px] w-full rounded-none' type="text" placeholder="Full Name *" />
              <input className='outline-none md:py-[13px] md:px-[20px] px-[10px] py-[13px] w-full rounded-none' type="email" placeholder="Email Address *" />
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-4 md:my-4 my-0'>
              <input className='outline-none md:py-[13px] md:px-[20px] px-[10px] py-[13px] w-full rounded-none' type="text" placeholder="Phone Number *" />
              <input className='outline-none md:py-[13px] md:px-[20px] px-[10px] py-[13px] w-full rounded-none' type="text" placeholder="Subject *" />
            </div>
            <div className='grid grid-cols-1 gap-4'>
              <textarea className='outline-none md:py-[13px] md:px-[20px] px-[10px] py-[13px] w-full rounded-none' rows={4} type="email" placeholder="Message *"></textarea>
            </div>
            <button className='primary_button md:my-8 my-0'>Send Message</button>
          </form>

        </div>
      </div>

      <div className={`${styles.gallery} h-screen/2`}>
        <motion.div
          className={styles.heroImage}
          style={{ backgroundImage: `url(${heroImage})` }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6, delay: 0.2 }
          }}
        ></motion.div>
      </div>
    </div>
  );
};

export default Hero;
