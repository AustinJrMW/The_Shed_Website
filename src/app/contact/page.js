import Hero from '@/components/contact/Hero'
import ContactForm from '@/components/contact/ContactForm';
import { Cinzel } from 'next/font/google';

export const title = Cinzel({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
  style: ['normal']
})


export default function Contact() {
  return (
    <main className='w-full'>
      <Hero titleFont={title}/>
    
      <ContactForm titleFont={title}/>
    </main>
  )
}
