import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'

const About = () => {
  
  useGSAP(()=>{

    const tl= gsap.timeline({
      repeat:-1,
    })
   
    tl.to('.last-4-img',{
      opacity:0,
      delay:3,
    })

  tl.to('.first-4-img',{
    opacity:1,
    duration:3,
    // delay:3,
  })

  tl.to('.first-4-img',{
    opacity:0,
    // duration:0.51,
    // delay:3,
  })
  
  tl.to('.last-4-img',{
    opacity:1,
    duration:3,
    // delay:3,
  })

  // const time = setTimeout(() => {
  
  //   gsap.fromTo(".img-1-3",{
  //   opacity:0,
  //   },{
  //     opacity:1,
  //     duration:1,
  //     y:5,
  //   })

  // }, 3000);
  
  })

  // console.log(time)
  return (
    <div className='w-full h-[160vh] bg-[#FFD900] relative flex flex-col items-center justify-center'>
      <div className="contain-big-img bg-[url('/images/big-img.avif')] bg-cover bg-center border-2 border-[#FFD900] rounded-sm mt-5 w-[95%] brightness-100 h-[110vh]">
        {/* <img className='w-[160%] h-[70vh] object-cover' src="/images/big-img.avif" alt="" srcset="" /> */}
      </div>
      <h2 className='text-lg font-medium mt-5'>Partners that trusted our work</h2>
      <div className="contain-8-images flex justify-between items-center pt-24 w-full h-[20vh]">
        <img className='img-1-3 first-4-img h-7 opacity-0 absolute left-10' src="/images/img-1.avif" alt="" />
        <img className='img-2-3 first-4-img w-42 object-cover opacity-0 absolute right-20' src="/images/img-2.avif" alt="" />
        <img className='img-3-3 first-4-img w-32 object-cover opacity-0 absolute left-[35vw]' src="/images/img-3.avif" alt="" />
        <img className='img-4-3 first-4-img w-28 object-cover opacity-0 absolute right-[30vw]' src="/images/img-4.avif" alt="" />
        <img className='img-5-3 last-4-img w-32 object-cover opacity-100 absolute left-[56vw]' src="/images/img-5.avif" alt="" />
        <img className='img-6-3 last-4-img w-32 object-cover opacity-100 absolute right-[60vw]' src="/images/img-6.png" alt="" />
        <img className='img-7-3 last-4-img w-32 object-cover opacity-100 absolute left-[80vw]' src="/images/special-img.avif" alt="" />
        <img className='img-8-3 last-4-img w-32 object-cover opacity-100 absolute right-[85vw] mt-5' src="/images/special-me.avif" alt="" />
      </div>
    </div>
  )
}

export default About
