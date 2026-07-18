import React from 'react'

const Why = () => {
  return (
    <div className='w-full h-auto bg-[#FFD900] p-5 relative'>
      <h2 className='font-bold text-sm uppercase pt-10'>Why work with us</h2>
      <h2 className='pt-5 text-5xl font-bold w-[65%]'>Mammoth Murals exists to help brands, developers, and institutions stand out with work that lasts. Our obsession with craft, detail, and bold ideas comes from a simple belief: great paint should outlive trends and make a place impossible to forget.</h2>
      <div className="contain-images w-full flex justify-between">
      <img className='w-[45%] h-[90vh] mt-14 object-cover' src="/images/why-us/why-img-1.avif" alt="" />
      <img className='w-[25%] h-[30vh] relative right-[14vw] top-[20vw]' src="/images/why-us/why-img-2.avif" alt="" srcset="" />
      </div>
      <h2 className='text-lg font-medium relative left-[58vw] bottom-52 w-fit'>People judge your business the second they see it.</h2>
      <p className='w-[25%] text-md font-medium relative left-[58vw] bottom-50'>Cheap, printed signs fade fast and blend in, costing you trust and attention. Real paint and true craft do the opposite. When your brand shows up with care and quality, people notice and remember</p>
      <div className="contain-btn relative left-[60vw] bottom-[12vw] w-[15vw] h-[5vh] pt-1 text-center bg-black text-white cursor-pointer transition-all hover:text-black hover:bg-white">
        <span className='text-lg font-medium uppercase'>Learn more about us</span>
      </div>
    </div>
  )
}

export default Why
