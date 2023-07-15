import Hero from '@/components/gallery/Hero'
import { Cinzel } from 'next/font/google';

export const title = Cinzel({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
  style: ['normal']
})


export default function Gallery() {
  return (
    <main className='w-full'>
      <Hero titleFont={title}/>
    </main>
  )
}
