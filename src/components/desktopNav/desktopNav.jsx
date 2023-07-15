import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import styles from './desktopNavStyle.module.css';

const leftLinks = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    title: 'Venue',
    url: '/venue',
  },
  {
    id: 3,
    title: 'Eat + Drink',
    url: '/eat+drink',
  },
];

const rightLinks = [
  {
    id: 1,
    title: 'Gallery',
    url: '/gallery',
  },
  {
    id: 2,
    title: 'Booking',
    url: '/booking',
  },
  {
    id: 3,
    title: 'Contact',
    url: '/contact',
  },
];

const DesktopNav = () => {
  const [isScrolled, setIsScrolled] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingUp = currentScrollPos < prevScrollPos;

      setIsScrolled(currentScrollPos > 10 && isScrollingUp);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const navVariants = {
    hidden: { y: '-100%' },
    visible: { y: 0 },
  };

  return (
    <motion.nav
      className={`${styles.navContainer} ${isScrolled ? styles.scrolled : ''}`}
      initial="visible"
      animate={isScrolled ? 'hidden' : 'visible'}
      variants={navVariants}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div className={styles.navWrapper}>
        <div className={`${styles.navContent} container mx-auto px-8 md:px-24`}>
          <div className={styles.navLeft}>
            {leftLinks.map((leftLink) => (
              <Link className="pr-8" key={leftLink.id} href={leftLink.url}>
                {leftLink.title}
              </Link>
            ))}
          </div>

          <div className={`p-4 ${styles.navLogo}`}>
            <Link href='/'>
            <Image src="/mainLogo.svg" alt="The Shed Logo" width="150" height="150" />
            </Link>
          </div>

          <div className={styles.navRight}>
            {rightLinks.map((rightLink) => (
              <Link className="pl-8" key={rightLink.id} href={rightLink.url}>
                {rightLink.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default DesktopNav;
