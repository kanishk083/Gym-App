import React from 'react'

const Hero = () => {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto'>
      <div className='flex flex-col gap-4 p-4'>
        <p>IT'S TIME TO GET LOCK-IN</p>
        <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Super <span className='text-blue-400'>Fit</span></h1>
      </div>
      <p className='text-sm md:text-base font-light'><span className='text-blue-400 font-medium'>Push yourself harder</span> than yesterday, your future self will thank you.
        Embrace the burn, it's the feeling of <span className='text-blue-400 font-medium'>progress</span>, not pain.
      <span className='text-blue-400 font-medium'>Invest in your health</span>, it's the best return you'll ever get.
      <span>Join Us Now</span>
      </p>
      <button className='px-8 py-4 rounded-medium border-[2px] bg-slate-950 border-blue-400 border-solid blueShadow duration-200'><p>Get Started</p></button>
    </div>
  )
}

export default Hero