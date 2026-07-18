import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-fit relative p-4'>
      <div className="phase-1-in-footer w-full p-5 flex justify-between">

<div className="left-in-footer">
    <h1 className='text-3xl font-medium uppercase pt-8 relative z-50'><a href="">andrew@mammothmurals.com</a></h1>
    <p className='font-second text-lg font-extrabold'>2816 Crestwood Blvd</p>
    <p className='font-second text-lg font-extrabold'>Irondale, AL 35210, United States</p>
</div>
<div className="center-in-footer relative z-50">
    <h1 className='text-5xl pt-18 pr-20'><a href="https:\\instagram.com">Instagram</a></h1>
    </div>

 <div className="right-in-footer relative z-50">
<h1 className='text-3xl font-medium uppercase pt-10'><a href="">Website by huy</a></h1>
<p className='text-lg'>©2026 — All rights reserved</p>

</div>

      </div>
      <div className="phase-2-in-footer flex flex-col items-center gap-0 w-full h-fit overflow-hidden">
        {/* <h1 className='uppercase text-[14.5cm] font-bold m-0 leading-[0.8] w-fit max-h-fit bg-blue-500 relative z-0'>Mammoth</h1>
        <h1 className='uppercase text-[17.5cm] font-bold m-0 mt-1 leading-[0.8] bg-green-500 relative z-0'>Murals</h1> */}
      <h1 className='uppercase text-[14.5cm] text-center font-bold m-0 mt-1 leading-[0.8] relative z-0 text-[#120011]'>Mamooth</h1>
      <h1 className='uppercase text-[17.5cm] text-center font-bold m-0 mt-1 leading-[0.8] relative z-0 text-[#120011]'>Murals</h1>
      </div>
    </div>
  )
}

export default Footer
