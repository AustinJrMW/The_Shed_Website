'use client'
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styles from './hero.module.css';

const heroImage = "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80";

const data = [
    {
      title: 'Book a Room',
      description: 'Escape to a world of refined relaxation and stylish seclusion at The Shed Boutique Hotel. Tucked away from the noise of the outside Lilongwe, Malawi.',
      image: 'https://images.unsplash.com/photo-1578898886615-0c4719f932dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
    },
    {
      title: 'Book a Table',
      description: 'Escape to a world of refined relaxation and stylish seclusion at The Shed Boutique Hotel. Tucked away from the noise of the outside Lilongwe, Malawi.',
      image: 'https://images.unsplash.com/photo-1529543544282-ea669407fca3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
    },
    {
      title: 'Book a Venue',
      description: 'Escape to a world of refined relaxation and stylish seclusion at The Shed Boutique Hotel. Tucked away from the noise of the outside Lilongwe, Malawi.',
      image: 'https://images.unsplash.com/photo-1681497278731-56f3b1da9188?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
    }
  ];
  
const Hero = ({ titleFont }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <div className="w-full md:mt-[10%] mt-36">
      <div className="flex justify-center flex-col md:w-3/6 w-full mx-auto h-full">
        <div className="mx-auto text-center mt-8 md:mb-32 mb-16">
          <motion.h1
            className={`${titleFont.className} md:text-5xl text-3xl text-center mb-8`}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.6 }}
          >
            Make Reservations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={controls}
            transition={{ duration: 0.6 }}
          >
            Escape to a world of refined relaxation and stylish seclusion at The Shed Boutique Hotel. Tucked away from the noise of the outside Lilongwe, Malawi, our exclusive retreat offers a sanctuary where you can unwind, rejuvenate, and reconnect with your inner peace.
          </motion.p>
          <a href='https://b12f7607df90c4e1.sirvoy.me/?rooms=%7B%2213124727%22%3A%5B%5B%5D%5D%7D'>
          <button className='blur-button'>Open Google Map Link</button>
          </a>
        </div>
      </div>
{/*       <div className="md:grid md:grid-cols-3 flex flex-col justify-around md:gap-4 gap-0 mt-20 h-full">
  {data.map((item, index) => (
    <div className={styles.tab} key={index}>
      <motion.div className={styles.tabImageWrapper}>
        <motion.img
          src={item.image}
          alt={item.title}
          className={styles.tabImage}
          whileHover={{ scale: 1.1 }}
        />
        <motion.div className={styles.tabOverlay}>
          <h3 className={`${styles.tabTitle} ${titleFont.className}`}>{item.title}</h3>
          <motion.div className={`${styles.tabDescription} flex flex-col`}>
            <p>{item.description}</p>
            <motion.button className={styles.tabButton}>Book Now</motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  ))}
</div> */}

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
