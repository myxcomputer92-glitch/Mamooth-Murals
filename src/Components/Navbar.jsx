import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-[12vh] bg-[#FFD900]'>
      <nav className='p-8 flex justify-between'>
        <h1 className='text-xl bg-black text-white h-[5vh] pt-1 w-[14vw] text-center uppercase font-first border-2 border-transparent rounded-sm cursor-pointer'>
          <a href="http://localhost:5173">
          Mamooth Murals
          </a>
          </h1>
        <ul  className='flex gap-0'>
            <li className='text-[0.4cm] font-medium uppercase cursor-pointer text-center pt-2 w-[6vw] h-[5.5vh] border-t-2 border-l-2 border-r-2 border-black rounded-md mr-5 transition-all hover:bg-black hover:text-white hover:duration-75'>Home</li>
            <li className='text-[0.4cm] font-medium uppercase cursor-pointer text-center pt-2 w-[6vw] h-[5.5vh] border-t-2 border-l-2 border-r-2 border-black rounded-md mr-5 transition-all hover:bg-black hover:text-white hover:duration-75'>About</li>
            <li className='text-[0.4cm] font-medium uppercase cursor-pointer text-center pt-2 w-[6vw] h-[5.5vh] border-t-2 border-l-2 border-r-2 border-black rounded-md mr-5 transition-all hover:bg-black hover:text-white hover:duration-75'>Services</li>
        </ul>
          <a href="https://calendly.com/mammothmurals/meeting-with-andrew-clone" className='flex justify-evenly pt-1 bg-black text-white w-[10vw] border-2 border-transparent rounded-sm transition-all hover:bg-white hover:text-black hover:duration-75'>
          <img className='w-6 h-6 mt-1' src="/images/btn-img.avif" alt="" /> <span className='pt-1 uppercase font-medium text-sm'>Chat with us</span>
          </a>
      </nav>
    </div>
  )
}

export default Navbar
