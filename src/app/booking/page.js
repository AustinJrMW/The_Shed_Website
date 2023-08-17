import Hero from '@/components/booking/Hero'
import RoomTitle from '@/components/booking/RoomTitle'
import Icongrid from '@/components/booking/Icongrid'
import Descriptive from '@/components/booking/Descriptive'
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
      <Icongrid titleFont={title}/>
      <Descriptive titleFont={title}/>
    </main>
  )
}
