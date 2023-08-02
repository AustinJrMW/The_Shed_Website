import Hero from '@/components/venue/Hero'
import VenueSection from '@/components/venue/VenueSection'
import Size from '@/components/venue/Size'
import { Cinzel } from 'next/font/google';

export const title = Cinzel({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
  style: ['normal']
})

export default function Venue() {
  return (
    <main className='w-full'>
      <Hero titleFont={title}/>
      <VenueSection titleFont={title}/>
      <Size titleFont={title}/>
    </main>
  )
}
