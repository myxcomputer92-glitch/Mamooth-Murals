import React from 'react'

const Services = () => {
  return (
    <div className='w-full h-auto relative flex flex-col items-center bg-[#47A0FF] p-10'>
        <div className="top-left absolute left-5 top-14">
        <h1 className='text-5xl font-medium uppercase'>25+years</h1>
        <p className='text-lg font-medium w-[55%] mt-2'>Of turning clients’ walls into landmarks</p>
        </div>
      <p className='text-5xl font-medium text-center pt-5 w-[55%] leading-14'>Here’s how we help you transform empty walls into local landmarks and lasting brand impressions.</p>

<div className="contain-3-services mt-8 w-full">
    <div className="1st-service flex justify-between w-full h-auto border-t-4 border-black p-1">
        <h1 className='text-[4cm] font-bold leading-40'>01.</h1>
        <h1 className='text-[4.5cm] font-medium uppercase text-center leading-50 pl-30'>Murals</h1>
        <img className='w-60 h-34 object-cover object-center mt-8 border-2 border-transparent rounded-md' src="/images/services-img/services-img-1.avif" alt="" />
    </div>
    <div className="2nd-service flex justify-between items-center w-full h-auto border-t-4 border-black p-5">
       <h1 className='text-[4cm] font-bold leading-40'>02.</h1>
        <h1 className='text-[4.5cm] font-medium uppercase text-center leading-40 pl-34'>Signs</h1>
        <img className='w-60 h-34 object-cover object-center' src="/images/services-img/services-img-2.avif" alt="" />
    </div>

<div className="3rd-service flex justify-between items-center w-full h-auto border-t-4 border-b-4 border-black p-5">
   <h1 className='text-[4cm] font-bold leading-40'>03.</h1>
        <h1 className='text-[4.5cm] font-medium uppercase text-center leading-40 pl-28'>Ghost Signs</h1>
        <img className='w-60 h-34 object-cover object-center' src="/images/services-img/services-img-3.avif" alt="" />
</div>

</div>

<h1 className='text-6xl font-medium uppercase p-8 underline'><a href=""><span className='trainsition-all hover:text-yellow-300'>→→→</span>Learn About Our Services<span className='trainsition-all hover:text-yellow-300'>←←←</span> </a></h1>

    </div>
  )
}

export default Services
