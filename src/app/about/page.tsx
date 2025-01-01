import React from 'react'

const About = () => {
  return (
    <div className="bg-cover h-screen flex justify-start items-center" style={{backgroundImage:"url('about-villa.jpg')"}}>
      <div className="bg-white opacity-60 text-black max-w-lg px-5 p-2 rounded-md space-y-3 m-4 overflow-auto">
        <h2 className='text-lg font-bold md:text-2xl'>About Us - Villa Agency</h2>
        <p className='text-md font-semibold md:text-xl'>At Villa Agency, we connect you with luxurious villas in prime locations worldwide. Our mission is to deliver exceptional service and handpicked properties that match your lifestyle and dreams. With expertise in the luxury market, we offer stunning retreats for vacations, investments, or permanent living.
        Our team is dedicated to making your villa journey seamless and memorable. Discover your perfect escape with Villa Agency – where luxury meets your vision.</p>
      </div>
    </div>
  )
}

export default About
