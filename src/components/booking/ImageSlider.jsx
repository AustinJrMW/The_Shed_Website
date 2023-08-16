'use client'

import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import gsap from 'gsap';
import styles from './imageSlider.module.css'


const imageCarousel = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1576354302919-96748cb8299e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1529&q=80"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1584132923901-cd27c0cdd88e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1584132905271-512c958d674a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1539569304312-b6fffd864948?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1595514535316-b8c85bf9bbf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1527986654082-0b5b3fef2632?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
]

const ImageSlider = () => {
  const wrapperRef = useRef(null);
  const imagesRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const images = imagesRef.current;

    const imageCount = images.children.length;
    const slideWidth = images.offsetWidth;

    // Clone the images to create a seamless loop
    for (let i = 0; i < imageCount; i++) {
      const clone = images.children[i].cloneNode(true);
      images.appendChild(clone);
    }

    gsap.set(images, {
      width: `${slideWidth * (imageCount * 2)}px`,
      x: `-${slideWidth}px`,
    });

    gsap.to(images, {
      duration: 15,
      x: `-=${slideWidth}px`,
      ease: 'none',
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % slideWidth),
      },
      repeat: -1,
    });

    return () => {
      // Clean up
    };
  }, []);




  return (
    <div className="h-full w-full my-20">
      <div className="mt-8 md:flex md:align-top gap-4 md:text-left text-center">
        <div className="md:w-1/2 w-full">
          <motion.h2
            className={`${titleFont.className} md:text-4xl text-3xl md:w-8/12 md:my-0 my-8`}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.6 }}
          >
            Our Deluxe Double Room with Balcony
          </motion.h2>
        </div>
        <div className="md:w-1/2">
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={controls}
            transition={{ duration: 0.9 }}
          >
            A delightful retreat for those seeking a serene getaway. Step into a haven of tranquility as you enter this spacious room. The rustic decor, inspired by nature, creates a cozy atmosphere that instantly puts you at ease. The room features a comfortable double bed, adorned with soft linens and plush pillows, ensuring a restful night's sleep.
          </motion.p>
        </div>
      </div>
    <div className={`${styles.wrapper} m-[1em calc(50% - 50vw);]`} ref={wrapperRef}>
      <div className={`${styles.images}`} ref={imagesRef}>
        {imageCarousel.map( image => (
          <img key={image.id} className={`${styles.image}`} src={image.url} alt="Image 1" />
        ))}
      </div>
    </div>
    </div>
  );
};

export default ImageSlider;
