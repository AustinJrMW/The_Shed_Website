import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import OverlayMenu from '../overlayMenu/OverlayMenu';
import {CgMenuRight} from 'react-icons/cg'

const mobileLinks = [
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
    title: 'Restaurant',
    url: '/eat+drink',
  },
  {
    id: 4,
    title: 'Gallery',
    url: '/gallery',
  },
  {
    id: 5,
    title: 'Booking',
    url: '/booking',
  },
  {
    id: 6,
    title: 'Contact',
    url: '/contact',
  },
];

const menuImages = [
  {
    id: 1,
    url:
      'https://images.unsplash.com/photo-1549294413-26f195200c16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
  },
  {
    id: 2,
    url:
      'https://images.unsplash.com/photo-1560624052-449f5ddf0c31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80',
  },
  {
    id: 3,
    url:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 4,
    url:
      'https://images.unsplash.com/photo-1549294413-26f195200c16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
  },
  {
    id: 5,
    url:
      'https://images.unsplash.com/photo-1560624052-449f5ddf0c31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80',
  },
  {
    id: 6,
    url:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  },
];

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
    <motion.div
      className={`w-full flex justify-between items-center py-4 fixed top-0 left-0 z-10 container mx-auto px-8 md:px-24 ${
        isScrolled ? 'bg-transparent' : 'bg-black'
      }`}
      initial="visible"
      animate={isScrolled ? 'hidden' : 'visible'}
      variants={navVariants}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div>
        <Link href={'/'}>
        <Image src="/Shed.svg" alt="The Shed Logo" width="50" height="50" />
      </Link>
      </div>
      <div>
        <button onClick={handleMenuToggle}><CgMenuRight size={30}/></button>
      </div>
      <OverlayMenu
        isOpen={isMenuOpen}
        onClose={handleMenuToggle}
        mobileLinks={mobileLinks}
        menuImages={menuImages}
      />
    </motion.div>
  );
};

export default MobileNav;
