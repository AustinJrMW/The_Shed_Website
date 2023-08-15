import React from 'react'

const ContactForm = ({titleFont}) => {
  return (
    <div className='w-full my-20 full-width'>
        <div className={`relative md:h-[400px] h-[600px] bg-cover bg-center w-full flex flex-col justify-center items-center backdrop-brightness-50 bg-[url('https://images.unsplash.com/photo-1658562412479-4bfd84dda0c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')]`}>
        <div className='container mx-auto px-8 md:px-32 md:w-[850px] w-full'>
            <h3 className={`${titleFont.className} text-3xl text-center`}>Explore a world of wonder, leisure and pleasure</h3>
          <p>The Shed is located in the Heart of Lilongwe. Nearby is the Plaza de Colón and the well-known Retiro Park, and a few minutes away is the Paseo de la Castellana and the Santiago Bernabéu Stadium. Surrounded by famous boutiques and trendy restaurants, Tótem Madrid is on a quiet street between the city's two most luxurious shopping arteries: Calle Goya and Calle Serrano.</p><br/>
        </div>
        <a href='https://goo.gl/maps/tGrny2xfVMhLv8z78'>
          <button className='blur-button'>Open Google Map Link</button>
          </a>
        </div>
    </div>
  )
}

export default ContactForm