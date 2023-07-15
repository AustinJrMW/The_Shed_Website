'use client'
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import Modal from 'react-modal';
import styles from './hero.module.css';
import style from './gallery.module.css';

const heroImage =
  "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80";

const images = [
  'https://images.unsplash.com/photo-1681497278731-56f3b1da9188?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
  'https://images.unsplash.com/photo-1557122764-dc9f8447fafb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
  'https://images.unsplash.com/photo-1681497278731-56f3b1da9188?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
  'https://images.unsplash.com/photo-1681497278731-56f3b1da9188?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
  'https://images.unsplash.com/photo-1681497278731-56f3b1da9188?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
  'https://images.unsplash.com/photo-1681497278731-56f3b1da9188?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
  'https://images.unsplash.com/photo-1681497278731-56f3b1da9188?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
  'https://images.unsplash.com/photo-1681497278731-56f3b1da9188?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
  'https://images.unsplash.com/photo-1681497278731-56f3b1da9188?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
  'https://images.unsplash.com/photo-1681497278731-56f3b1da9188?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
  'https://images.unsplash.com/photo-1681497278731-56f3b1da9188?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
];

const Hero = ({ titleFont }) => {
  const controls = useAnimation();

  const [selectedImage, setSelectedImage] = useState(null);

const openModal = (index) => {
  setSelectedImage(index);
};

const closeModal = () => {
  setSelectedImage(null);
};

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
            Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={controls}
            transition={{ duration: 0.6 }}
          >
            Escape to a world of refined relaxation and stylish seclusion at The Shed Boutique Hotel. Tucked away from the noise of the outside Lilongwe, Malawi, our exclusive retreat offers a sanctuary where you can unwind, rejuvenate, and reconnect with your inner peace.
          </motion.p>
        </div>
      </div>
      <div className={`${style.gallery} flex justify-start flex-wrap mt-20 w-full`}>
  {images.map((src, index) => (
    <div className={style.gallery__item} key={index}>
      <a className={style.gallery__link}>
        <div className={style.gallery__thumb}>
          <div className={style.gallery__aspectRatio}>
            <div className={style.gallery__imageContainer}>
              <Image src={src} layout="fill" objectFit="cover" className={style.gallery__image} />
            </div>
          </div>
          <figcaption className={style.gallery__caption}>Caption</figcaption>
        </div>
      </a>
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
