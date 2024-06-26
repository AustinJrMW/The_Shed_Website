import React from 'react'

const venueImages = [
    {
        id: 1,
        imageURL: "https://images.unsplash.com/photo-1525476325627-1380280dcfab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1392&q=80"
    },
    {
        id: 2,
        imageURL: "https://images.unsplash.com/photo-1464491965784-a12f0f70642b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
        id: 3,
        imageURL: "https://images.unsplash.com/photo-1508172466753-aa5687ae25b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },

]

const VenueSection = ({ titleFont }) => {
    return (
        <div className='my-16 md:flex justify-center items-center'>
            <div className='md:w-2/5 w-full h-full md:flex items-center md:pr-4'>
                <div>
                    <h2 className={`${titleFont.className} text-4xl`}>Venue</h2>
                    <p className='my-4 mb-8'>As you step into The Hall, you'll be captivated by its elegant ambiance and versatile layout. Whether you're hosting a wedding reception, corporate event, gala dinner, or any other social gathering, the space can be customized to suit your unique requirements.</p>
                    <br></br><p><b>Come and create cherished memories with us at The Shed Venue.</b></p>
                </div>
            </div>
            <div className='md:w-3/5 w-full md:h-full flex md:mt-0 mt-12 md:gap-0 gap-2'>
                {venueImages.map((image, index) => (
                    <div className='w-full h-full' key={index}>
                        <img className='object-cover md:w-[240px] md:h-[500px] w-full h-[400px]' src={image.imageURL} alt="" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default VenueSection