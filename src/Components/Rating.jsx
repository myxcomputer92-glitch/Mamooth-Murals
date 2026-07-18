import React from 'react'

const Rating = () => {
  return (
    <div className='h-screen w-[full] p-5'>
        <div className="parent-in-rating flex flex-col items-center bg-black text-white border-2 border-transparent rounded-md">
      <h2 className='text-sm font-bold uppercase mt-8'>
        5/5 rating on google reviews</h2>
      <div className="contain-5-img flex gap-1 mt-2">
      <img className='w-10' src="/images/rating-img/star-img.avif" alt="" />
      <img className='w-10' src="/images/rating-img/star-img.avif" alt="" />
      <img className='w-10' src="/images/rating-img/star-img.avif" alt="" />
      <img className='w-10' src="/images/rating-img/star-img.avif" alt="" />
      <img className='w-10' src="/images/rating-img/star-img.avif" alt="" />
      </div>
      <h2 className='text-5xl font-bold text-center mt-32 w-[67%]'>“Fantastic artistry topped off with great communication and service. Andrew, Shane, and the team were very professional and obviously extremely talented.”</h2>
      <h2 className='text-md font-medium uppercase mt-30'>Featured on</h2>
    <div className="contain-3-reviews flex gap-8 mt-5 p-4">
        <img className='w-38 object-contain brightness-[1] saturate-0' src="/images/rating-img/webp-1.avif" alt="" />
        <img className='w-38 object-contain brightness-[1] saturate-0' src="/images/rating-img/webp-2.webp" alt="" />
        <img className='w-38 object-contain brightness-[1] saturate-0' src="/images/rating-img/webp-3.webp" alt="" />
    </div>
        </div>
    </div>
  )
}

export default Rating
