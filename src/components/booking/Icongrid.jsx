'use client'
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { TbAirConditioning, TbMicrowave, TbFridge } from "react-icons/tb";
import { CgScreen } from "react-icons/cg";
import { GiTeapotLeaves } from "react-icons/gi";

const Icongrid = ({ titleFont }) => {
  const controls = useAnimation();

  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <div className="bg-black py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-white-1800">
          Room Amenities
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <div class="flex min-w-0 gap-x-4">
            <TbAirConditioning className='h-12 w-12 text-[#E0956D]' size={60}/>
              <div class="min-w-0 flex-auto">
                <p class="text-m font-semibold leading-6 text-white-900">Airconditioning</p>
              </div>
            </div>
            <div class="flex min-w-0 gap-x-4">
            <CgScreen className='h-12 w-12 text-[#E0956D]' size={60}/>
              <div class="min-w-0 flex-auto">
                <p class="text-m font-semibold leading-6 text-white-900">Flatscreen</p>
              </div>
            </div>
            <div class="flex min-w-0 gap-x-4">
            <GiTeapotLeaves className='h-12 w-12 text-[#E0956D]' size={60}/>
              <div class="min-w-0 flex-auto">
                <p class="text-m font-semibold leading-6 text-white-900">Electric Kettle</p>
              </div>
            </div>
            <div class="flex min-w-0 gap-x-4">
            <TbMicrowave className='h-12 w-12 text-[#E0956D]' size={60}/>
              <div class="min-w-0 flex-auto">
                <p class="text-m font-semibold leading-6 text-white-900">Microwave</p>
              </div>
            </div>
            <div class="flex min-w-0 gap-x-4">
            <TbFridge className='h-12 w-12 text-[#E0956D]' size={60}/>
              <div class="min-w-0 flex-auto">
                <p class="text-m font-semibold leading-6 text-white-900">Mini-Fridge</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Icongrid;
