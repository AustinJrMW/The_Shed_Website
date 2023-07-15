import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Cinzel } from 'next/font/google';
import { CgClose } from 'react-icons/cg';

export const title = Cinzel({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
  style: ['normal']
});

const OverlayMenu = ({ isOpen, onClose, mobileLinks, menuImages }) => {
  const handleMenuToggle = () => {
    onClose();
  };

  const menuVariants = {
    hidden: {
      y: '-100%',
    },
    visible: {
      y: '0%',
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const linkVariants = {
    hidden: {
      y: -10,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className={`${isOpen ? '' : 'hidden'}`}>
      <motion.div
        className="menu absolute top-0 left-0 w-full h-screen bg-[#000000]"
        initial={isOpen ? 'hidden' : 'visible'}
        animate={isOpen ? 'visible' : 'hidden'}
        variants={menuVariants}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <motion.button
          className="absolute top-5 right-[34px] z-10"
          onClick={handleMenuToggle}
        >
          <CgClose size={30} />
        </motion.button>
        <motion.div
          className="absolute top-[10%] left-[15%] flex flex-col w-[200px] justify-center items-left text-left"
          variants={menuVariants}
        >
          {mobileLinks.map((link) => (
            <motion.div
              key={link.id}
              className={`my-[20px] z-10 ${title.className} text-4xl menulink ${link.id}`}
              variants={linkVariants}
            >
              <Link onClick={handleMenuToggle} href={link.url}>
                {link.title}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      {isOpen && (
        <motion.div
          className="fixed top-0 left-0 w-full h-screen bg-black opacity-50 -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
        ></motion.div>
      )}
    </div>
  );
};

export default OverlayMenu;
