'use client'
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';


const features = [
    { name: 'Bed', description: 'Queen Size Bed for Two' },
    { name: 'Breakfast', description: 'Breakfast Avaialble from: English, Continental to Malawi' },
    { name: 'Room Size', description: '38sqm' },
    { name: 'Entertainment', description: 'TV & Wifi is Available to all paying guests' },
    { name: 'Meals', description: 'We have a restaurant on site' },
    { name: 'Check-in & Check-Out', description: 'Check-in: 14:00 to 18:00 & Check-Out: 10:00 to 14:00' },
  ]

const Descriptive = ({ titleFont }) => {
  const controls = useAnimation();

  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <div className="bg-black">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white-1000 sm:text-4xl">Little Corner of Heaven</h2>
          <p className="mt-4 text-white-500">
          The highlight of our Deluxe Double Room is the private balcony, where you can immerse yourself in breathtaking views of the surrounding countryside or enjoy a cup of coffee as you bask in the morning sun. 
          Take a moment to unwind and let the stress melt away in this peaceful outdoor space.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-white-200 pt-4">
                <dt className="font-medium text-white-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-white-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src="https://images.unsplash.com/photo-1539569304312-b6fffd864948?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
            alt="Hotel Room Angle 1"
            className="rounded-lg bg-gray-200"
          />
          <img
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Hotel Room Angle 2"
            className="rounded-lg bg-gray-200"
          />
          <img
            src="https://images.unsplash.com/photo-1584132923901-cd27c0cdd88e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Hotel Room Angle 3"
            className="rounded-lg bg-gray-200"
          />
          <img
            src="https://images.unsplash.com/photo-1584132905271-512c958d674a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Hotel Bathroom"
            className="rounded-lg bg-gray-200"
          />
        </div>
      </div>
    </div>
  );
};

export default Descriptive;
