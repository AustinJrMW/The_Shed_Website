import React from 'react'
import {MdFormatQuote} from 'react-icons/md'

const TestimonialSection = ({titleFont}) => {
  return (
    <div className='full-width bg-[#161616] py-12'>
        <div className='container mx-auto px-8 md:px-24'>
           <div className='md:grid md:grid-cols-2 items-center'>
                <div className='md:text-left text-center'>
                    <h3 className={`${titleFont.className} md:text-4xl text-3xl`}>Our Customer <br/>Testimonial</h3>
                </div>
                <div className='flex flex-col justify-center w-full items-center text-center'>
                    <MdFormatQuote className='text-[#E0956D]' size={50}/>
                    <p>Excepteur esse exercitation esse reprehenderit ad aliquip enim esse est irure non dolor officia amet ut consequat occaecat. Aliquip do enim nisi pariatur. </p>
                    <p>Excepteur esse exercitation esse reprehenderit ad aliquip enim esse est irure non dolor officia amet ut consequat occaecat. Aliquip do enim nisi pariatur. </p>
                    <p>Excepteur esse exercitation esse reprehenderit ad aliquip enim esse est irure non dolor officia amet ut consequat occaecat. Aliquip do enim nisi pariatur. </p>
                    <p>Excepteur esse exercitation esse reprehenderit ad aliquip enim esse est irure non dolor officia amet ut consequat occaecat. Aliquip do enim nisi pariatur. </p>
                </div>
           </div>
        </div>
    </div>
  )
}

export default TestimonialSection;