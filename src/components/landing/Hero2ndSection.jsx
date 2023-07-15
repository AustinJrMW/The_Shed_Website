'use client'
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './landing.module.css';

const Hero2ndSection = ({ titleFont }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.1, // Set the threshold value for intersection
  });

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [controls, inView]);

  return (
    <div className="h-full w-full my-20">
      <div
        className={`${styles.image_wrapper} w-full md:h-[498px] h-[398px]`}
        ref={ref}
      >
        <motion.div
          className={styles.image}
          animate={controls}
          transition={{ duration: 0.6 }}
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')`,
          }}
        />
      </div>
      <div className="mt-8 md:flex md:align-top gap-4 md:text-left text-center">
        <div className="md:w-1/2 w-full">
          <motion.h2
            className={`${titleFont.className} md:text-4xl text-3xl md:w-8/12 md:my-0 my-8`}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.6 }}
          >
            Immerse Yourself in Timeless Elegance
          </motion.h2>
        </div>
        <div className="md:w-1/2">
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={controls}
            transition={{ duration: 0.9 }}
          >
            The Shed Boutique Hotel. Indulge in the timeless elegance of The Shed Boutique Hotel, where sophistication and comfort intertwine effortlessly. From our beautifully designed rooms to our exquisite amenities, every detail has been meticulously crafted to offer an elevated experience for the discerning traveler.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Hero2ndSection;
