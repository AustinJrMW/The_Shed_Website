import Hero from '@/components/venue/Hero'
import Hero from '@/components/venue/Venue'
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
    </main>
  )
}
