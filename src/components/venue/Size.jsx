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
        description: 'Banquet style is the most common setup for events serving meals, using 60in or 72in round tables with up to 10 or 12 respectively chairs around each table.',
        checkIn: '9688 sqft',
        people: '700 - 800',
        wifi: '60in wide round tables - 807 max',
        price: '72in wide round tables - 745 max'
    },
    {
        id: 2,
        name: 'Conference Style',
        amenities: ['Amenity 4', 'Amenity 5'],
        coverIMage: 'https://image-tc.galaxy.tf/wijpeg-ag3czgm99myvplqtiz0uc54fg/salons-n-o-3.jpg?width=1920',
        description: 'For larger groups, conference room style consists of 6-foot tables arranged in a square with chairs around the outside. For groups of 25 or more people consider using 5,6,7,8 sided hollow set for better sight lines. This setup facilitates discussion and is ideal for group meetings and discussion sessions.',
        checkIn: '9688 sqft',
        people: '272 - 322',
        wifi: 'Standard 6ft Table - 80 each side (4 side max)',
        price: 'U shaped 8ft table setup - 92 each side (3 side max)'

    },
    {
        id: 3,
        name: 'Theater (Lecture) Style',
        amenities: ['Amenity 6', 'Amenity 7'],
        coverIMage: 'https://cdn.forum-theatre.com/1663645348015.jpg',
        description: 'Theater style is ideal for lectures, presentations, and group meetings of any size. It consists of chairs in rows facing a panel table or podium at the front of the room.',
        checkIn: '9688 sqft',
        people: '1211 - 1614',
        wifi: 'Spacious Rows of Chairs - 1211',
        price: 'Maximum Rows of Chairs - 1614'

    },
    {
        id: 4,
        name: 'Reception Style',
        amenities: ['Amenity 8', 'Amenity 9'],
        coverIMage: 'https://i.pinimg.com/736x/11/ae/49/11ae49ffccf4e6d32fb78b6ff2df0af8--reception-table-reception-ideas.jpg',
        description: 'Stand-up receptions are the ideal, flexible setup to allow participants in your event to socialize. This setup uses high-boy tables scattered throughout the room.',
        checkIn: '9688 sqft',
        people: '1076',
        wifi: 'With high-boy or poseur tables',
        price: 'With Dance Floor'

    },
    {
        id: 5,
        name: 'Classroom Style',
        amenities: ['Amenity 8', 'Amenity 9'],
        coverIMage: 'https://www.royalcaribbeanincentives.com/content/uploads/RCI_Enchant_ConferenceRoom-sized-1240x660.jpg',
        description: 'Classroom. Tables and chairs are arranged in parallel rows facing the front of the room. Classroom style, as its name suggests, is best for activities requiring a learning component such as trainings, tests and workshops.',
        checkIn: '9688 sqft',
        people: '569 - 692',
        wifi: '18in wide desks - 692',
        price: '30" wide desks - 569'

    },
    {
        id: 6,
        name: 'Trade Style',
        amenities: ['Amenity 8', 'Amenity 9'],
        coverIMage: 'https://pas-wordpress-media.s3.amazonaws.com/content/uploads/2017/05/14-Tips-for-Your-First-Trade-Show.png',
        description: 'A trade style event is where companies in a particular industry gather to showcase their products and services. Companies typically set up booths and displays to showcase their products and services, and visitors to the trade show attend to learn more about the companies and their offerings.',
        checkIn: '9688 sqft',
        people: '48 - 60 Booths',
        wifi: '8in by 10in Booth - 60',
        price: '10in by 10in Booth - 48'

    },
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
                    <h2 className={`${titleFont.className} md:text-5xl text-3xl text-center mb-8`}>Whether you're planning an intimate gathering or a grand celebration.</h2>
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

