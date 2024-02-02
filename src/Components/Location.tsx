import React from 'react'

const Location = () => {
  return (
    <>
    {/*<div className='mt-6 pb-0'> */}
   {/* <div className='max-w-[1640px] mx-auto p-4 ' >*/}
    <div className='max-h-[500px] relative'>
      {/* Overlay */}
      <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
        <h1 className=' px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center text-white'>
         Where We Are Located 
        </h1>
        <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center text-white  '>
        Bambalapitiya
        </h1>
        <h3 className='text-xl font-bold text-center text-white'> 39 Bauddhaloka Mawatha, Colombo 00400</h3>
      </div>
      <img
        className='w-full max-h-[500px] object-cover '
        src='https://media.istockphoto.com/id/1003228586/photo/office-room-of-many-desktop-computers.jpg?b=1&s=612x612&w=0&k=20&c=vN_DmFSUmlglEt_XVxqjvpUXySdcttjbPwl3Oh_Sa2o='
        alt='/'
      />
    </div>
  {/*</div>*/}
  {/*</div>*/}

  <article className="text-wrap  items-center bg-blue-700  p-12 w-full  ">
    <p className='break-normal text-center text-2xl text-white'>Welcome to the AIT campus in the bustling central hub of Bambalapitiya, where cutting-edge innovation harmoniously coexists with the vibrant surroundings of shopping malls and restaurants. Our location offers a dynamic environment for collaboration and creativity, making AIT the perfect nexus for tech enthusiasts and professionals seeking inspiration. Join us at the heart of progress.</p>
  
  </article>
    
  </>
  )
}

export default Location