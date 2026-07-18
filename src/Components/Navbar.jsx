import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React,{useRef,useEffect} from 'react'

const Navbar = () => {
  const span_ref = useRef()
  const span_ref2 = useRef()
  

  const tl=gsap.timeline()
  
    const mouseAnimation=()=>{

      tl.to(span_ref.current,{
        opacity:0,
        y:-60,
        // rotate:-6,
        duration:0.1
      },0)
      tl.to(span_ref2.current,{
        opacity:1,
        y:34,
        x:45,
        visibility:'visible',
        duration:0.2
      },0)

    }


   const mouseAnimation2=()=>{
    tl.add('same')
    tl.to(span_ref2.current,{
        // rotate:10,
        duration:0.1,
        opacity:0,
        // visibility:'visible'
      },0)     
    
    tl.from(span_ref.current,{
        opacity:1,
        y:30,
        rotate:0,
        duration:0.1
      },0)
    }

  
  return (
    <div className='w-full h-[12vh] bg-[#FFD900]'>
      <nav className='p-8 flex justify-between'>
        <h1 onMouseEnter={mouseAnimation} onMouseLeave={mouseAnimation2} className='font-second text-3xl bg-black text-white h-[5vh] w-[11vw] text-center uppercase border-2 border-transparent rounded-sm cursor-pointe relativer'>
          <a href="http://localhost:5173">
          <span ref={span_ref}>Mamooth Murals</span>
          <span ref={span_ref2} className='absolute top-0 left-0 invisible'>Mamooth Murals</span>
          </a>
          </h1>
        <ul  className='flex gap-0 font-third'>
            <li className='text-[0.35cm] font-bold uppercase cursor-pointer text-center pt-3 w-[5vw] h-[5.5vh] border border-b-0 border-black rounded-md mr-5 transition-all hover:bg-black hover:text-white hover:duration-75'>work</li>
            <li className='text-[0.35cm] font-bold uppercase cursor-pointer text-center pt-3 w-[5vw] h-[5.5vh] border border-b-0 border-black rounded-md mr-5 transition-all hover:bg-black hover:text-white hover:duration-75'>About</li>
            <li className='text-[0.35cm] font-bold uppercase cursor-pointer text-center pt-3 w-[6vw] h-[5.5vh] border border-b-0 border-black rounded-md mr-5 transition-all hover:bg-black hover:text-white hover:duration-75'>Services</li>
        </ul>
        
          <a href="https://calendly.com/mammothmurals/meeting-with-andrew-clone" className='font-third flex justify-evenly pt-1 bg-black text-amber-100 w-[10vw] border-2 border-transparent rounded-sm transition-all hover:bg-white hover:text-black hover:duration-175'>
          <img className='w-6 h-6 mt-1' src="/images/btn-img.avif" alt="" /> <span className='pt-1.5 uppercase font-medium text-sm'>Chat with us</span>
          </a>
      </nav>
    </div>
  )
}

export default Navbar
