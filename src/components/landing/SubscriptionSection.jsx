import React from 'react'

const SubscriptionSection = ({titleFont}) => {
  return (
    <div>
        <div className='md:w-2/5 w-full text-center mx-auto flex flex-col items-center my-4'>
                    <h2 className={`${titleFont.className} md:text-4xl text-3xl mb-4`}>Embrace the Warmth of Homely Comfort</h2>
                    <p>We invite you to experience the genuine warmth and coziness of a home away from home. Our attentive staff, charming accommodations, and inviting ambiance create an environment where you can relax, unwind, and create lasting memories.</p>
                    <div className='h-[75px] w-[2px] bg-[#E0956D] my-4'></div>
                </div>
    </div>
  )
}

export default SubscriptionSection