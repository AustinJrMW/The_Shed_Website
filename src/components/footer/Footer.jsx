import React from 'react'
import Image from 'next/image'
import {IoLogoFacebook, IoLogoInstagram, IoLogoTwitter} from 'react-icons/io5'


const Footer = ({ titleFont }) => {
  return (
    <div className='my-12 w-full'>
      <div className='md:w-2/5 w-full text-center mx-auto flex flex-col items-center my-4'>
        <h2 className={`${titleFont.className} md:text-4xl text-3xl mb-4`}>Subscribe to our newsletter</h2>
        <p>Do not miss out on events, tastings and new experiences</p>
      </div>
      <div className='flex items-center w-full justify-center mx-auto'>
        <form className='md:block flex flex-auto md:flex-none'>
          <input className='outline-none md:py-[13px] md:px-[20px] px-[10px] py-[13px] md:w-80 rounded-none' type="email" placeholder="Email Address" />
          <button className='primary_button'>Subscribe</button>
        </form>
      </div>
      <div className='md:flex md:flex-row md:space-y-0 space-y-8 gap-y-8 justify-between items-center flex-col w-full my-16 md:text-left text-center'>
        <div className='md:flex-none flex md:justify-left justify-center'>
          <Image src="/primaryLogo.svg" alt="The Shed Logo" width="250" height="250" />
        </div>
        <div className='space-y-4'>
          <span className='font-bold'>Contact</span>
          <ul>
            <li>+27 123 456 7890</li>
            <li>+265 991 197 920</li>
          </ul>
        </div>
        <div className='space-y-4'>
          <span className='font-bold'>Visit Us</span>
          <ul>
            <li>P.O.Box 3179, Lilongwe, Malawi</li>
            <li>14KM from Gateway Mall</li>
          </ul>
        </div>
        <div className='space-y-4'>
          <span className='font-bold'>Email</span>
          <ul>
            <li>kelvin@theshed.com</li>
            <li>kelvin@theshed.com</li>
          </ul>
        </div>
      </div>
      <div className='flex md:flex-row flex-col items-center justify-between'>
        <div className='w-full mxb-4 md:text-left text-center'>
          <span className='text-sm'>Copyright 2023 &copy; The Shed, Venue & Boutique Hotel</span>
        </div>
        <div className='flex space-x-4 md:order-last order-first mb-4'>
          <IoLogoFacebook size={20}/>
          <IoLogoInstagram size={20}/>
          <IoLogoTwitter size={20}/>
        </div>
      </div>
    </div>
  )
}

export default Footer