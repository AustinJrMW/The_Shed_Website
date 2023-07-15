'use client'

import React, { useState, useEffect } from 'react';
import { gsap, Power3, Expo } from 'gsap'
import MobileNav from '../mobileNav/mobileNav';
import DesktopNav from '../desktopNav/desktopNav'
// CgMenuRight



const Navbar = () => {
    //gsap
    let tl = new gsap.timeline();
    let ease = new Power3.easeOut();
    let expo = new Expo.easeInOut()

    const [isMobile, setIsMobile] = useState(false);


    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // Define the breakpoint as per your mobile device threshold
        };

        // Add event listener to handle window resize
        window.addEventListener('resize', handleResize);

        // Initial check on component mount
        handleResize();

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="w-full">
            {isMobile ? <MobileNav timeline={tl} ease={ease}  expo={expo}/> : <DesktopNav timeline={tl} ease={ease}/>}
        </div>
    )
}

export default Navbar