import Hero from '@/components/booking/Hero'
import ImageSlider from '@/components/booking/ImageSlider'
import RoomTitle from '@/components/booking/RoomTitle'
import { IoTimeOutline} from 'react-icons/io5';
import { Cinzel } from 'next/font/google';

export const title = Cinzel({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
  style: ['normal']
})


export default function Booking() {
  return (
    <main className='w-full'>
      <Hero titleFont={title}/>
      <RoomTitle titleFont={title}/>
      <ImageSlider titleFont={title}/>
      <div className="bg-black py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Room Amenities
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <IoTimeOutline className='text-[#E0956D]' size={30} />
          <IoTimeOutline className='text-[#E0956D]' size={30} />
          <IoTimeOutline className='text-[#E0956D]' size={30} />
          <IoTimeOutline className='text-[#E0956D]' size={30} />
          <IoTimeOutline className='text-[#E0956D]' size={30} />
          </div>
        </div>
      </div>
    </main>
  )
}
