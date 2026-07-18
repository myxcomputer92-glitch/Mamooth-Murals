import React from 'react'

const Testimonial = () => {
  return (
    <div className='w-full h-auto relative flex flex-col items-center'>
      <p className='text-sm font-medium uppercase pt-12'>Hear from our clients</p>
      <h1 className='text-[11cm] uppercase font-medium leading-92'>Testimonials</h1>
      <p className='text-lg font-medium text-center w-[40%]'>From national campaigns to neighborhood landmarks, hear how our clients use hand-painted murals to boost visibility, build trust, and make a bold first impression that lasts.</p>


<div className="contain-3-testimonials flex justify-between w-full p-3">
  
    <div className="1st-testimonial h-auto w-[30%] bg-transparent border-2 border-black rounded-sm border-dashed flex flex-col items-center p-5 mt-20">
<img className='border-2 border-transparent rounded-lg' src="/images/Testimonial-img/Test-img-1.avif" alt="" srcset="" />
<p className='pt-4 text-md'>"Andrew and Shane turn rough ideas into extraordinary murals. They consistently exceed expectations."</p>
    
    <h1 className='mr-[15vw] pt-5 font-bold text-2xl min-w-max uppercase'>Olivia (Harris) Jenks</h1>
    <h1 className='mr-[9.5vw] font-bold text-2xl min-w-max w-auto uppercase'>Project Supervisor at North Italia</h1>
    </div>



   <div className="2nd-testimonial h-auto w-[30%] bg-transparent border-2 border-black rounded-sm border-dashed flex flex-col items-center p-5 mt-20">
<img className='border-2 border-transparent rounded-lg' src="/images/Testimonial-img/Test-img-2.avif" alt="" srcset="" />
<p className='pt-4 text-md'>"Mammoth Murals transformed our vision into a bold storefront that stops people in their tracks. The process was seamless and the execution was flawless."</p>
    
    <h1 className='mr-[9vw] pt-5 font-bold text-2xl min-w-max uppercase'>Birmingham Tattoo Company</h1>
    <h1 className='mr-[5.5vw] font-bold text-2xl min-w-max w-auto uppercase'>Client at Birmingham Tattoo Company</h1>
    </div>


   <div className="3rd-testimonial h-auto w-[30%] bg-transparent border-2 border-black rounded-sm border-dashed flex flex-col items-center p-5 mt-20">
<img className='w-[96%] h-[61vh] border-2 border-transparent rounded-lg' src="/images/Testimonial-img/Test-img-3.avif" alt="" srcset="" />
<p className='pt-4 text-md'>"Andrew and the team brought Avondale’s story to life with precision and energy. Every detail was perfect and the project was completed on time."</p>
    
    <h1 className='mr-[16vw] pt-5 font-bold text-2xl min-w-max uppercase'>Thornton Ratliff</h1>
    <h1 className='mr-[10.2vw] font-bold text-2xl min-w-max w-auto uppercase'>Founder at SRV Housing Partners</h1>
    </div>


</div>

    </div>
  )
}

export default Testimonial
