'use client'
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { TbAirConditioning  } from "react-icons/tb";
import { CgScreen } from "react-icons/cg";

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
          <TbAirConditioning className='text-[#E0956D]' size={30}/>
            <div class="flex min-w-0 gap-x-4">
              <div class="min-w-0 flex-auto">
                <p class="text-sm font-semibold leading-6 text-gray-900">Airconditioning</p>
                <p class="mt-1 truncate text-xs leading-5 text-gray-500">Runs from 12pm to 7am </p>
              </div>
            </div>
          
          <CgScreen className='text-[#E0956D]' size={30} /><span>Flatscreen</span>
          <TbAirConditioning className='text-[#E0956D]' size={30} />
          <CgScreen className='text-[#E0956D]' size={30} />
          <TbAirConditioning className='text-[#E0956D]' size={30} />
          </div>
        </div>
      </div>
  );
};

export default Icongrid;
