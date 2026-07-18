import React from 'react'

const Section = () => {
  return (
    <div className='w-full h-auto relative p-5'>
      <div className="parent-in-section flex flex-col items-center bg-black text-white overflow-hidden">
<h1 className='text-[4.5cm] font-bold uppercase pt-44 leading-10'>Let's Paint something</h1>
<h1 className='text-[4.5cm] font-bold uppercase'>Unforgettable</h1>
<h2 className='text-lg font-medium w-[26%] pt-4 text-center'>Let’s talk strategy, locations, and how a mural can give your brand a powerful local presence.</h2>
   <a href="https://calendly.com/mammothmurals/meeting-with-andrew-clone" className='mt-5 font-third flex justify-evenly pt-1 bg-white text-black w-[15vw] h-[5vh] border-2 border-transparent rounded-sm transition-all hover:bg-yellow-300 hover:duration-175'>
          <img className='w-8 h-8' src="/images/btn-img.avif" alt="" /> <span className='pt-1.5 uppercase font-medium text-sm text-nowrap'>Book a discovery call</span>
          </a>

<div className="contain-5-img flex ga-4 mt-[10vw]">
    <img className='w-[22%] transform rotate-12' src="/images/section-img/img-1.avif" alt="" />
    <img className='w-[22%] transform -rotate-12' src="/images/section-img/img-2.avif" alt="" />
    <img className='w-[22%] transform rotate-12' src="/images/section-img/img-3.avif" alt="" />
    <img className='w-[22%] transform -rotate-12' src="/images/section-img/img-4.avif" alt="" />
    <img className='w-[22%] transform rotate-12' src="/images/section-img/img-5.avif" alt="" />
</div>
      </div>
      <div className="contain-5-h4 w-full flex justify-between pt-5 text-7xl font-bold uppercase cursor-pointer">
        <h1> <a href="">Home</a></h1>
        <h1> <a href="">Work</a></h1>
        <h1> <a href="">About</a></h1>
        <h1> <a href="">Services</a></h1>
        <h1> <a href="">Contact</a></h1>
      </div>
    </div>
  )
}

export default Section
