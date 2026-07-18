import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-auto bg-[#FFD900] relative p-5 flex">
      <div className="left-2-1 w-[60%] flex flex-col justify-between">
        <h1 className="font-second text-[10.5rem] font-black uppercase leading-36 pt-12">
          Murals that make
        </h1>
          <h1 className="font-second text-[10.5rem] font-black uppercase leading-36">your business</h1>
<h1 className="font-second text-[10.5rem] font-black uppercase leading-36 w-full text-nowrap">impossible to ignore.</h1>
        <p className="w-[58%] text-2xl font-semibold mt-20 font-first">
          We paint bold, hand-crafted walls for real estate developers, and
          design-driven brands that stop traffic, spark conversation, and turn
          every space into a landmark.
        </p>
<div className="two-divs flex gap-4 mt-5">

        <a href="https://calendly.com/mammothmurals/meeting-with-andrew-clone">
          <div
            className="1 p-2 flex gap-2 bg-black text-white text-[0.34cm] font-bold uppercase
            text-center w-[14vw] h-[5vh] border-2 border-black rounded-sm cursor-pointer transition-all hover:bg-white hover:text-black"
            >
            <img className="w-6 h-6" src="/images/btn-img.avif" alt="" />
            book a discovery call
          </div>
        </a>

<a href="https://mammothmurals.com/work">
        <div className="2 bg-transparent w-34 h-10 pt-2 text-center text-sm uppercase font-bold cursor-pointer border-2 border-black rounded-sm transition-all  hover:bg-black hover:text-white">see our work</div>
        </a>
      </div>

            </div>


      <div className="right-2-1 w-[40%] flex flex-col justify-center items-end font-third">
        <video muted autoPlay loop playsInline className="w-[65%] h-[28vh] cursor-pointer mt-25 mr-10 object-cover border-2 border-transparent rounded-md" src="/images/e22379bd.mp4"></video>
        <h2 className="mr-56 mt-2 font-medium">Showreel (2023—2025)</h2>
      </div>
    </div>
  );
};

export default Hero;
