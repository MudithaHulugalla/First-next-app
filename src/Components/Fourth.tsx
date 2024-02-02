import React from 'react'

const Fourth = () => {
  return (

    /*<div className=' mt-0 max-w-[1640px] mx-auto p-4'>*/
      <div className='max-h-[500px] relative mt-6 '>
        {/* Overlay */}
        <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
        <article className="text-wrap  items-center bg-blue-700  ml-80 mr-80">
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center '>
           Why Choose AIT
          </h1>
          <p className='break-normal text-center text-2xl pt-10 px-24'>
              “At Achievers Institute of Technology, we don’t just educate; We empower.
                Step into a realm where innovation meets, inspirayion, and dreams are 
                sculpted into achievements. Our dynamic learning environment,
                cutting-edge curriculum, and unwavering commitment to excellence 
                create a transformative educational experience, propelling you towards a 
                future where success knows no bounds. <span className='text-indigo-800 font-bold'> Join us at AIT,</span> where your aspirations
                find theie wings and soar.”
          </p>
          </article>
        </div>
        <div >
        <img
          className='bg-cover bg-cente w-full max-h-[500px] '
          src='https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='/'
        />
        </div>
      </div>
   /* </div>*/
    
      
    
  )
}

export default Fourth