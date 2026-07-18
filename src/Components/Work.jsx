import React from 'react'

const Work = () => {
  return (
    <div className='w-full h-auto relative bg-white text-black'>
      <h1 className='text-[14cm] uppercase text-center font-medium leading-120'>Our&nbsp;work</h1>
      <p className='text-center text-2xl font-bold w-[40%] bg-white absolute top-48 left-[30vw]'>Don't let blank walls waste potential.
See how our clients turn empty space into buzz, foot traffic, and business results.</p>


<div className="contain-6-cards grid grid-cols-2 grid-rows-3 p-4 gap-10">


<div className="card-1-4 bg-transparent w-[95%] h-[70vh] border-2 border-transparent rounded-md">
  <a className='font-second' href="">
<div className="contain-img bg-black">
  <img className='object-cover transition-all hover:scale-[0.8] hover:saturate-200 hover:sepia-[1] duration-175' src="/images/our-work-img/1st-img-our-work.avif" alt="" />
</div>
<h2 className='font-bold text-4xl uppercase pt-2 pl-3'>Live Nation: The Magic City</h2>
</a>
</div>


<div className="card-2-4  bg-transparent w-[95%] h-[70vh] border-2 border-transparent rounded-md">

  <a className='font-second' href="">
<div className="contain-img bg-black">
  <img className='object-cover transition-all hover:scale-[0.8] hover:saturate-200 hover:sepia-[1] duration-175' src="/images/our-work-img/2nd-img-our-work.avif" alt="" />
</div>
<h2 className='font-bold text-4xl uppercase pt-2 pl-3'>Girl the pearl earing</h2>
</a>

</div>
<div className="card-3-4  bg-transparent w-[95%] h-[70vh] border-2 border-transparent rounded-md">

  <a className='font-second' href="">
<div className="contain-img bg-black">
  <img className='object-cover transition-all hover:scale-[0.8] hover:saturate-200 hover:sepia-[1] duration-175' src="/images/our-work-img/3rd-img-our-work.avif" alt="" />
</div>
<h2 className='font-bold text-4xl uppercase pt-2 pl-3'>Axel row</h2>
</a>
  
</div>
<div className="card-4-4  bg-transparent w-[95%] h-[70vh] border-2 border-transparent rounded-md">

  <a className='font-second' href="">
<div className="contain-img bg-black">
  <img className='object-cover transition-all hover:scale-[0.8] hover:saturate-200 hover:sepia-[1] duration-175' src="/images/our-work-img/4th-img-our-work.avif" alt="" />
</div>
<h2 className='font-bold text-4xl uppercase pt-2 pl-3'>Culinary Drpoout</h2>
</a>

</div>
<div className="card-5-4  bg-transparent w-[95%] h-[70vh] border-2 border-transparent rounded-md">

  <a className='font-second' href="">
<div className="contain-img bg-black">
  <img className='object-cover transition-all hover:scale-[0.8] hover:saturate-200 hover:sepia-[1] duration-175' src="/images/our-work-img/5th-img-our-work.avif" alt="" />
</div>
<h2 className='font-bold text-4xl uppercase pt-2 pl-3'>South Eastern</h2>
</a>

</div>
<div className="card-6-4  bg-transparent w-[95%] h-[70vh] border-2 border-transparent rounded-md">

  <a className='font-second' href="">
<div className="contain-img bg-black">
  <img className='object-cover transition-all hover:scale-[0.8] hover:saturate-200 hover:sepia-[1] duration-175' src="/images/our-work-img/6th-img-our-work.avif" alt="" />
</div>
<h2 className='font-bold text-4xl uppercase pt-2 pl-3'>Mountain top</h2>
</a>

</div>

</div>
<h1 className='text-8xl font-bold uppercase underline relative left-[70vw] mt-20 w-fit'><a href="">View all work</a><span className='text-sm'>(6)</span></h1>
    </div>
  )
}

export default Work
