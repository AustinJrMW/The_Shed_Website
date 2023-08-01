'use client'
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styles from './hero.module.css';

const heroImage = "https://images.unsplash.com/photo-1529636120425-66f3708694e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80";

const venueImages = [
  {
      id: 1,
      imageURL: "https://images.unsplash.com/photo-1525476325627-1380280dcfab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1392&q=80"
  },
  {
      id: 2,
      imageURL: "https://images.unsplash.com/photo-1464491965784-a12f0f70642b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
      id: 3,
      imageURL: "https://images.unsplash.com/photo-1508172466753-aa5687ae25b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },

]

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
            The Shed Venue
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={controls}
            transition={{ duration: 0.6 }}
          >
            Welcome to The Shed Venue, an exquisite event space designed to host a wide range of gatherings and celebrations. Our spacious hall spans an impressive 9688 square feet, providing ample room for your special occasion.
          </motion.p>
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

    return (
        <div className='my-16 md:flex justify-center items-center'>
                        <div className='md:w-2/5 w-full h-full md:flex items-center md:pr-4'>
                <div>
                    <h2 className={`${titleFont.className} text-4xl`}>Venue</h2>
                    <p className='my-4 mb-8'>As you step into The Hall, you'll be captivated by its elegant ambiance and versatile layout. Whether you're hosting a wedding reception, corporate event, gala dinner, or any other social gathering, the space can be customized to suit your unique requirements.</p>
                </div>
        </div>    
            <div className='md:w-3/5 w-full md:h-full flex md:mt-0 mt-12 md:gap-0 gap-2'>
                {venueImages.map((image, index) => (
                    <div className='w-full h-full' key={index}>
                        <img className='object-cover md:w-[240px] md:h-[500px] w-full h-[400px]' src={image.imageURL} alt="" />
                    </div>
                ))}

            </div>
        </div>
    )

};

export default Hero;
