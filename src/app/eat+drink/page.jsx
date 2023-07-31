import React from 'react'

const trioImages = [
  {
      id: 1,
      imageURL: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
      id: 2,
      imageURL: "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
      id: 3,
      imageURL: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },

]

const EatDrink = ({ titleFont }) => {
  return (
    <div className='my-16 md:flex justify-center items-center'>
            <div className='md:w-3/5 w-full md:h-full flex md:mt-0 mt-12 md:gap-0 gap-2'>
                {trioImages.map((image, index) => (
                    <div className='w-full h-full' key={index}>
                        <img className='object-cover md:w-[240px] md:h-[500px] w-full h-[400px]' src={image.imageURL} alt="" />
                    </div>
                ))}

            </div>
            <div className='md:w-2/5 w-full h-full md:flex items-center md:pr-4'>
                <div>
                    <h2 className={`${titleFont.className} text-4xl`}>The Restaurant</h2>
                    <p className='my-4 mb-8'>The Shed Restaurant is divided into restaurant and a wine bar; a small interpretation centre of the grass yard and a small garden with a granite fountain; a dining room for up 80 people, a porch where 60 people can be seated; and an outdoor space, ornamented with the typical vegetation, surrounded by the garden and olive groves that wrap the property, where is also possible to hold events.</p>                </div>
            </div>
    </div>
  )
}

export default EatDrink