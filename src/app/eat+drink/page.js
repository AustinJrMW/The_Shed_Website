import Hero from '@/components/eatdrink/Hero'
import { Cinzel } from 'next/font/google';

export const title = Cinzel({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
  style: ['normal']
})


export default function EatDrink() {
  return (
    <main className='w-full'>
      <Hero titleFont={title}/>
    </main>
  )
}
