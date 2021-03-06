/* This example requires Tailwind CSS v2.0+ */

import { motion } from 'framer-motion'




export default function HeroComp() {


  const headerAnim = {
    initial:{
      opacity:0,
      y:30
    },
    animate:{
      opacity:1,
      y:0,
      transition:{duration:0.6}
    },
    exit:{
      opacity:0,
      x:30,
      transition:{duration:0.6}
    }
  }

  return (
    <div className="relative bg-slate-800 overflow-hidden -z-10">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-slate-800 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-48 pt-12 xl:pb-48 pt-12 ">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-slate-800 transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          

          <main className="mt-0 mx-auto max-w-7xl px-4 sm:pt-0 mt-12 sm:px-6 md:mt-16 lg:mt-0 lg:pt-16 px-8 xl:mt-0">
            <div className="sm:text-center lg:text-left">
              <motion.h1 variants={headerAnim} className="text-4xl tracking-tight font-extrabold text-slate-500 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Welcome to the</span>{' '}
                <span className="block text-gray-300 xl:inline">Space Ranch</span>
              </motion.h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto  md:mt-5 md:text-xl  lg:mx-0">
                {`Space... da final frontier... It's the place where the people in the funny suits go up and get data or whatever and then
                come back down. It's truly a place to float around and have a grand ol' time.`}
              </p>
              <div className="mt-14 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="/theTeam"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    Live demo
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">

      <video loop autoPlay muted
      className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
      >
       <source src={'/badQual.webm'} type="video/webm"/>
       </video>
        
      </div>
    </div>
  )
}
