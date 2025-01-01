"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const Properties = () => {
  const propertyDetail = [
    {id:1, name:"18 New Street Miami", price: 2264000, description:"Room: 8  Floor: 3", image:"/villa-ad1.jpg" },
    {id:2, name:"34 Old Street Ohio", price: 3386000, description:"Room: 7  Floor: 3", image:"/villa-ad2.jpg" },
    {id:3, name:"24 Mid Street Florida", price: 4274000, description:"Room: 6  Floor: 3", image:"/villa-ad3.jpg" },
    {id:4, name:"11 New Street Nevada", price: 6446000, description:"Room: 9  Floor: 3", image:"/villa-ad4.jpg" },
    {id:5, name:"6 Old Street Dakota", price: 6522000, description:"Room: 8  Floor: 3", image:"/villa-ad5.jpg" },
    {id:6, name:"41 Mid Street Arizona", price: 1083000, description:"Room: 8  Floor: 3", image:"/villa-ad6.jpg" }
  ]

  const router = useRouter();
  return (
    <div className='bg-gray-50'>
      <div className="text-center text-[#434343] text-3xl sm:text-4xl font-bold py-6 px-2">We Provide Best Property You Like</div>
      <div className="grid grid-col-1 sm:grid-cols-3 gap-10 px-2 sm:px-8 my-10">
        {propertyDetail.map((property) =>
        <div key={property.id} className='bg-white shadow-xl text-center p-5 rounded-xl'>
          <img src={property.image} alt={property.name} className='w-full rounded-lg transition-transform duration-300 transform hover:scale-110'/>
          <h3 className="pt-4 text-xl font-bold">{property.name}</h3>
          <p className="text-[#808080] text-[16px] py-2">{property.description}</p>
          <div className="text-[#ff6a00] text-[24px] font-semibold">${property.price}</div>
          <button onClick={()=>router.push("/contact")} className="bg-black text-white px-3 py-2 rounded-full mt-4">Schedule a visit</button>
        </div>
        )}
      </div>
    </div>
  )
}

export default Properties
