'use client'

import React from 'react';
import { useState } from 'react';
import client from '../../api/sanity'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { IoTimeOutline, IoPeopleOutline, IoWifiOutline, IoWalletOutline } from 'react-icons/io5';
import Rooms from './Rooms';


const roomsData = [
    {
        id: 1,
        name: 'Deluxe Double Room with Balcony',
        amenities: ['Flatscreen TV', 'Refrigerator', 'Air conditioning'],
        coverIMage: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        description: 'Our Deluxe Double Room with Balcony offers a delightful retreat for those seeking a serene getaway. Step into a haven of tranquility as you enter this spacious room. The room features a comfortable double bed, adorned with soft linens and plush pillows, ensuring a restful nights sleep.',
        checkIn: '14:00 - 18:00',
        people: '2 Adults',
        wifi: 'Available',
        price: '$45'
    },
    {
        id: 2,
        name: 'Indoor Ground Level Rooms',
        amenities: ['Flatscreen TV', 'Refrigerator', 'Air conditioning'],
        coverIMage: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        description: 'We invite you to experience the genuine warmth and coziness of a home away from home. Our attentive staff, charming accommodation. Spacious and elegantly designed suite with luxurious amenities and extra comfort.',
        checkIn: '14:00 - 18:00',
        people: '2 Adults',
        wifi: 'Available',
        price: '$40'

    },
    // Add more rooms as needed
];

const RoomsSection = ({ titleFont }) => {
    const [selectedRoomIndex, setSelectedRoomIndex] = useState(0);

    const handleNextClick = () => {
        setSelectedRoomIndex((prevIndex) =>
            prevIndex === roomsData.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePreviousClick = () => {
        setSelectedRoomIndex((prevIndex) =>
            prevIndex === 0 ? roomsData.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className='my-12 w-full'>
            <div className=''>
                <div className='md:w-2/5 w-full text-center mx-auto flex flex-col items-center my-4'>
                    <h2 className={`${titleFont.className} md:text-4xl text-3xl mb-4`}>Embrace the Warmth of Homely Comfort</h2>
                    <p>We invite you to experience the genuine warmth and coziness of a home away from home. Our attentive staff, charming accommodations, and inviting ambiance create an environment where you can relax, unwind, and create lasting memories.</p>
                    <div className='h-[75px] w-[2px] bg-[#E0956D] my-4'></div>
                </div>
                <div className='w-full'>
                    {roomsData.length > 0 && (
                        <div className='md:flex my-8 justify-start items-start'>
                            <div className='md:w-1/2 w-full md:pr-12 p-0'>
                                <div className='md:h-[500px] relative'>
                                    <div className='relative w-full h-full'>
                                        <img className='object-cover md:h-[400px] w-full h-[400px]' src={roomsData[selectedRoomIndex].coverIMage} alt="" />
                                        <div className="flex items-center  justify-between w-full my-5">
                                            {roomsData.map((room, index) => (
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
                                    <h3 className={`${titleFont.className} text-2xl`}>{roomsData[selectedRoomIndex].name}</h3>
                                    <p>{roomsData[selectedRoomIndex].description}</p>
                                    <div className='mt-4'>
                                        <ul className='flex gap-8 flex-col'>
                                            <li className='flex gap-4 items-center'><IoTimeOutline className='text-[#E0956D]' size={30} />{roomsData[selectedRoomIndex].checkIn}</li>
                                            <li className='flex gap-4 items-center'><IoPeopleOutline className='text-[#E0956D]' size={30} />{roomsData[selectedRoomIndex].people}</li>
                                            <li className='flex gap-4 items-center'><IoWifiOutline className='text-[#E0956D]' size={30} />{roomsData[selectedRoomIndex].wifi}</li>
                                            <li className='flex gap-4 items-center'><IoWalletOutline className='text-[#E0956D]' size={30} />{roomsData[selectedRoomIndex].price}</li>
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


  
export default RoomsSection

