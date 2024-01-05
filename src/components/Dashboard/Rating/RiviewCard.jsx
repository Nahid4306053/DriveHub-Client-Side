/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import Rating from 'react-rating'
import { useMood } from '../../../Context/TemplateMoodContext'

export default function RiviewCard({data}) {
  const {createdAt,rating,reviewer,review} = data       
  const { Darkmood } = useMood()            
  return (
   <div className={`reviewcard flex items-center gap-4  bg-opacity-75 rounded-lg ${Darkmood ? "bg-base-300" : "bg-red-100"}   p-5`}>
     <div className="w-20">
        <img className='md:w-16 mx-auto md:h-16  h-16 w-16 object-cover rounded-full ' src={reviewer?.photoURL} alt="" />
     </div> 
     <div className=" break-words ">
      <h3 className='text-xl'>{reviewer?.displayName}</h3>
      <div  className=' text-yellow-500 '>
      <Rating
        emptySymbol="far fa-star"
        fullSymbol="fas fa-star"
        fractions={2}
        initialRating={rating}
        readonly
      />
      </div>
       <p className='mt-1 opacity-75 leading-7'>{review}</p>
     </div>
   </div>
  )
}
