import React from 'react'

const Questions = () => {
  return (
    <div className='w-full h-auto flex bg-[#FFF6E5] p-4'>
      <div className="left-in-questions w-[40%] flex flex-col gap-10">
         <img className='w-85 h-[55vh] object-cover ml-5' src="/images/questions-img-1.avif" alt="" srcset="" />
         <p className='w-[36%] ml-5'>Still got unanswered questions? Or still wondering if a mural is right for you?</p>


           <a href="https://calendly.com/mammothmurals/meeting-with-andrew-clone" className='font-third ml-4 flex justify-evenly pt-1 bg-black text-amber-100 w-[10vw] h-[6vh] border-2 border-black rounded-sm transition-all p hover:bg-white hover:text-black hover:duration-175'>
          <img className='w-7 h-7 mt-1' src="/images/btn-img.avif" alt="" /> <span className='pt-2 uppercase font-medium text-sm'>Chat with us</span>
          </a>

      </div>
      <div className="right-in-questions w-[60%]">
     <h1 className='text-[12rem] leading-40 uppercase'>Frequently</h1>
     <h1 className='text-[12rem] leading-45 uppercase'>Asked Questions</h1>
     <div className="contain-10-details pt-10">
        <details className='w-full border-t-2 border-b-2 border-black flex flex-col items-start gap-5 transition-all p p-2'>
        <summary className='text-lg font-first pt-5'>How do I share my ideas with a custom project?</summary>
        <p>Any file sharing platform will do. Google drive, pinterest, email, etc. Reach out to Andrew here. or email him at andrew@mammothmurals.com.</p>
        </details>

     <details className="contain-10-details w-full border-b-2 border-black  flex flex-col items-start gap-5 transition-all p p-2">
        <summary className='w-[35%] pt-5 text-lg font-first'>Can I collaborate with Mammoth
         Murals on a unique project?
        </summary>
        <p>Yes, please reach out to Andrew right here to discuss your project.</p>
     </details>
     <details className="contain-10-details w-full border-b flex flex-col items-start gap-5 transition-all p-2 border-black">
        <summary className='text-lg font-first pt-5'>Do you require a deposit for your services?</summary>
        <p>Yes, we typically run with a 50% down and a 50% due upon completion production schedule.</p>
     </details>
     <details className="contain-10-details w-full border-b flex flex-col items-start gap-5 transition-all p-2 border-black">
        <summary className='text-lg font-first pt-5'>Are your signs, murals, and ghost signs water resistant?</summary>
        <p>Yes, our signs are extremely weather resistant. We use ASTM I paint to ensure the light-fastness of our artwork. Additionally, a painted sign will ONLY fall off your wall if the wall itself falls down.
</p>
<p>This is an enormous liability release and maintentance saver. There's nothing more unprofessional than a sign missing a few letters or slightly "ajar". Plus, signs have been known to be ripped off of buildings during wind storms.</p>
     </details>
     <details className="contain-10-details w-full border-b flex flex-col items-start gap-5 transition-all p-2 border-black">
        <summary className='text-lg font-first pt-5'>What size options are available?</summary>
        <p>We don't do lettering under 1.5" tall. We can paint anything at any size above that. Our largest mural to date is 100'w x 25'tall and is located in Hunstville, AL at Back Forty Huntsvile.</p>
     </details>
     <details className="contain-10-details w-full border-b flex flex-col items-start gap-5 transition-all p-2 border-black">
        <summary className='text-lg font-first pt-5'>How long does it take to create a 
         custom sign, mural, or ghost sign</summary>
        <p>Every project is different, but on average most of our projects last about a month from start to finish. We have found that the more decision makers involved in the design process, the longer everything takes. Painting generally takes between 3 - 15 days depending on the size of the project.</p>
     </details>
     <details className="contain-10-details w-full border-b flex flex-col items-start gap-5 transition-all p-2 border-black">
        <summary className='text-lg font-first pt-5'>What kind of paint do you use?</summary>
        <p>We have a few brands of paint we love using: Nova Color Paint, Benjamin Moore Aura, and Loop Spray Paint. We've found these to be the best, most reliable paints currently on the market.</p>
     </details>
     <details className="contain-10-details w-full border-b flex flex-col items-start gap-5 transition-all p-2 border-black">
        <summary className='text-lg font-first pt-5'>How can i contact Mammoth 
         Murals for inquiries or quotes?</summary>
    <p>Please book a call with Andrew using this form.</p>
     </details>
     <details className="contain-10-details w-full border-b flex flex-col items-start gap-5 transition-all p-2 border-black">
        <summary className='text-lg font-first pt-5'>What areas do u surve?</summary>
        <p>We proudly work coast to coast. Around 2/3 of our jobs are "out of town" where we fly in to execute our project.</p>
     </details>
     <details className="contain-10-details w-full border-b flex flex-col items-start gap-5 transition-all p-2 border-black">
        <summary className='text-lg font-first pt-5'>How much does a project typically cost?</summary>
        <p>A multitude of factors affect our prices. The biggest factors are size, visual complexity, and wall access. Our project minimum is $1200.</p>
     </details>


 </div>

      </div>
    </div>
  )
}

export default Questions
