'use client'

import React from 'react';
import { useState } from 'react';
import client from '../../api/sanity'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { IoPeopleOutline, IoWifiOutline, IoWalletOutline } from 'react-icons/io5';
import { TbRulerMeasure  } from 'react-icons/tb';
import { MdTableBar } from "react-icons/md";
import { MdTableRestaurant } from "react-icons/md";
import Rooms from './Rooms';


const sizeData = [
    {
        id: 1,
        name: 'Banquet Style',
        amenities: ['Flatscreen TV', 'Refrigerator', 'Air conditioning'],
        coverIMage: 'https://bpb-us-w2.wpmucdn.com/voices.uchicago.edu/dist/b/1239/files/2019/08/Theatre-with-rounds.jpg',
        description: 'Banquet style is the most common setup for events serving meals, using 60″ round tables with up to 10 chairs around each table.',
        checkIn: '9688 sqft',
        people: '700 - 800',
        wifi: '60in wide round tables - 807 max',
        price: '72in wide round tables - 745 max'
    },
    {
        id: 2,
        name: 'Executive Room',
        amenities: ['Amenity 4', 'Amenity 5'],
        coverIMage: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        description: 'We invite you to experience the genuine warmth and coziness of a home away from home. Our attentive staff, charming accommodation. Spacious and elegantly designed suite with luxurious amenities and extra comfort.',
        checkIn: '08:00 - 13:00',
        people: '2 Adults & 2 children',
        wifi: 'Available',
        price: 'MK180,000'

    },
    {
        id: 3,
        name: 'Garden View Room',
        amenities: ['Amenity 4', 'Amenity 5'],
        coverIMage: 'https://images.unsplash.com/photo-1560185128-e173042f79dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60',
        description: 'We invite you to experience the genuine warmth and coziness of a home away from home. Our attentive staff, charming accommodations.  Stylish room tailored for business travelers, offering a productive workspace and modern amenities.',
        checkIn: '08:00 - 13:00',
        people: '2 Adults',
        wifi: 'Available',
        price: 'MK100,000'

    },
    // Add more rooms as needed
];

const Size = ({ titleFont }) => {
    const [selectedRoomIndex, setSelectedRoomIndex] = useState(0);

    const handleNextClick = () => {
        setSelectedRoomIndex((prevIndex) =>
            prevIndex === sizeData.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePreviousClick = () => {
        setSelectedRoomIndex((prevIndex) =>
            prevIndex === 0 ? sizeData.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className='my-12 w-full'>
            <div className=''>
                <div className='md:w-2/5 w-full text-center mx-auto flex flex-col items-center my-4'>
                    <h2 className={`${titleFont.className} md:text-5xl text-3xl text-center mb-8`}>Whether you're planning an intimate gathering or a grand celebration, Come and create cherished memories with us at The Shed Venue.</h2>
                    <p>Our dedicated team at The Shed Venue is committed to ensuring your event runs seamlessly. We offer state-of-the-art audiovisual equipment, professional event planning assistance, and top-notch catering services provided by our restaurant, all aimed at making your experience truly memorable.</p>
                    <div className='h-[75px] w-[2px] bg-[#E0956D] my-4'></div>
                </div>
                <div className='w-full'>
                    {sizeData.length > 0 && (
                        <div className='md:flex my-8 justify-start items-start'>
                            <div className='md:w-1/2 w-full md:pr-12 p-0'>
                                <div className='md:h-[500px] relative'>
                                    <div className='relative w-full h-full'>
                                        <img className='object-cover md:h-[400px] w-full h-[400px]' src={sizeData[selectedRoomIndex].coverIMage} alt="" />
                                        <div className="flex items-center  justify-between w-full my-5">
                                            {sizeData.map((room, index) => (
                                                <div
                                                    key={room.id}
                                                    className={`room-tab cursor-pointer p-[2px] gap-2 min-w-[60px] flex-auto transition-all ease-linear  ${index === selectedRoomIndex ? 'active' : 'inactive'}`}
                                                    onClick={() => setSelectedRoomIndex(index)}
                                                >
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div onClick={handlePreviousClick} className='cursor-pointer absolute top-[35%] ml-4 p-2 hover:bg-slate-950 hover:text-[#E0956D]'><BsArrowLeft size={30} /></div>
                                    <div onClick={handleNextClick} className='cursor-pointer absolute top-[35%] right-0 mr-4 p-2 hover:bg-slate-950 hover:text-[#E0956D]'><BsArrowRight size={30} /></div>
                                </div>
                            </div>
                            <div className='md:w-1/2 w-full md:flex md:justify-end md:pl-12 p-0'>
                                <div className='md:my-0 my-4 mb-4'>
                                    <h3 className={`${titleFont.className} text-2xl`}>{sizeData[selectedRoomIndex].name}</h3>
                                    <p>{sizeData[selectedRoomIndex].description}</p>
                                    <div className='mt-4'>
                                        <ul className='flex gap-8 flex-col'>
                                            <li className='flex gap-4 items-center'><TbRulerMeasure className='text-[#E0956D]' size={30} />{sizeData[selectedRoomIndex].checkIn}</li>
                                            <li className='flex gap-4 items-center'><IoPeopleOutline className='text-[#E0956D]' size={30} />{sizeData[selectedRoomIndex].people}</li>
                                            <li className='flex gap-4 items-center'><MdTableBar className='text-[#E0956D]' size={30} />{sizeData[selectedRoomIndex].wifi}</li>
                                            <li className='flex gap-4 items-center'><MdTableRestaurant className='text-[#E0956D]' size={30} />{sizeData[selectedRoomIndex].price}</li>
                                        </ul>
                                        

                                    </div>
                                </div>
                            </div>
                            {/* <Rooms/> */}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}


  
export default Size

