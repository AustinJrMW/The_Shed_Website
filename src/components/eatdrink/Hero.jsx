'use client'
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styles from './hero.module.css';

const heroImage = "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80";

const data = [
    {
      title: 'Quiant Inlet',
      description: 'The Shed Restaurant is divided into restaurant and a wine bar, a dining room for up 80 people. The Restaurant and our impeccable Wine selection offers a touch of luxury and gourmet and a search for constant quality, while keeping the true essence of the traditional cuisine. Always prepared with fresh products of the land, the restaurant dishes are a real temptation.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      title: 'Wine Bar',
      description: 'The Restaurant and our Impeccable Wine Selection offers a touch of luxury and gourmet and a search for constant quality, while keeping the true essence of the traditional cuisine. Delicious gourmet dishes of the restaurant are perfectly harmonized with the award-winning wines from all over the world making the meals a unique experience.',
      image: 'https://images.unsplash.com/photo-1623157874827-7a5786ef51e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      title: 'Sunny Veranda',
      description: 'The Outdoor Area overlooks a small interpretation centre of the grass yard and a small garden with a granite fountain. A Porch area that can accomdate 60 people seating; and an outdoor space, ornamented with the typical vegetation, surrounded by the garden and olive groves that wrap the property, where is also possible to hold events.',
      image: 'https://images.unsplash.com/photo-1528735000313-039ec3a473b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80'
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
            The Menus from our Chef reveal comprehensive conjugations of flavours, together with the regional and local gastronomy, but also our selection of our wines gives the food its own identity. With a Deep Passion for introducing memborable tastes and unforgettable experiences with your loved ones or just a hell of a night with your day ones. You'll feel and be drawn back to The Shed.
          </motion.p>
        </div>
      </div>
      <div>
        <h2>
        You have at your disposal a service made and served by a surprisingly young team. The signature cuisine of our Chef and his team is characterized by the beautifully balanced flavours and textures, the vibrant colours, and the use of fresh high-quality products that meet the wines produced in the region and across the oceans, culminating in a meal designed to surprise and satisfy the expectations of its guests.
        </h2>
      </div>
      <div className="md:grid md:grid-cols-3 flex flex-col justify-around md:gap-4 gap-0 mt-20 h-full">
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
            <motion.button className={styles.tabButton}>Seating Styles</motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  ))}
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
