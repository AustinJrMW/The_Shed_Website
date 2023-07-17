import './globals.css'
import { DM_Sans } from 'next/font/google';
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import { Cinzel } from 'next/font/google';

// const inter = Inter({ subsets: ['latin'] })
export const dmSans = DM_Sans(
  { subsets: ['latin'], 
  display: 'swap',
  weight: ['400', '700'],
    style: ['normal', 'italic'] 
  })

  
export const title = Cinzel({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
  style: ['normal']
})


  



export const metadata = {
  title: 'The Shed',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} container mx-auto px-8 md:px-24`}>
        <Navbar />
        {children}
        <Footer titleFont={title} />
      </body>
    </html>
  )
}