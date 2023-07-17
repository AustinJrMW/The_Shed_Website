'use client'

import React, { useEffect } from 'react';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import styles from './hero.module.css';
import { IoBedOutline, IoPin } from 'react-icons/io5';
import { CiForkAndKnife } from 'react-icons/ci';

const heroImages = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1658562412479-4bfd84dda0c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1683914791867-7d65ac8893de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1683914791874-2dcb78e58e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1648130578634-c7c6954aa694?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1196&q=80"
  }
];

const heroLinks = [
  {
    id: 1,
    title: "Book a Room",
    icon: <IoBedOutline size={20} />,
    url: "https://b12f7607df90c4e1.sirvoy.me/?rooms=%7B%2213124727%22%3A%5B%5B%5D%5D%7D"
  },
  {
    id: 2,
    title: "Book a Table",
    icon: <CiForkAndKnife size={20} />,
    url: "/"
  },
  {
    id: 3,
    title: "Book a Venue",
    icon: <IoPin size={20} />,
    url: "/"
  }
];

const Hero = ({ titleFont }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <div className="h-screen w-full">
      <div className="flex justify-center flex-col md:w-3/6 w-full mx-auto h-full">
        <div className="mx-auto text-center">
          <motion.h1
            className={`${titleFont.className} md:text-5xl text-3xl text-center mb-8`}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.6 }}
          >
            Discover the Quaint charm of the Shed
          </motion.h1>
          <motion.p
          initial={{ opacity: 0, y: -50 }}
          animate={controls}
          transition={{ duration: 0.6 }}
          >Escape to a world of refined relaxation and stylish seclusion at The Shed Boutique Hotel. Tucked away from the noise of the outside Lilongwe, Malawi, our exclusive retreat offers a sanctuary where you can unwind, rejuvenate, and reconnect with your inner peace.</motion.p>
        </div>
        <div className="flex md:flex-row flex-col gap-4 w-full justify-between my-8 items-center">
          {heroLinks.map((link,index) => (
            <motion.div key={link.id} className={`flex items-center gap-2 ${styles.heroButton}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.6, delay: index * 0.2 }
            }}
            >
              <div>
                <div>{link.icon}</div>
              </div>
              <Link className="text-[#000000]" href={link.url}>
                {link.title}
              </Link>
            </motion.div>
          ))}
        </div>
        <div>
          {/* Your additional content here */}
        </div>
      </div>
      <div className={styles.gallery}>
        {heroImages.map((image, index) => (
          <motion.div
            key={image.id}
            className={styles.heroImage}
            style={{ backgroundImage: `url(${image.image})` }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.6, delay: index * 0.2 }
            }}
          ></motion.div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
