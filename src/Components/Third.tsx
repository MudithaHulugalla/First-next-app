import React from 'react'

const Third = () => {
  return (
    <div className='mt-6'>
        <h1 className="text-4xl text-center items-center  text-white font-bold pt-6 ">Study Options Offered at AIT</h1>

        <div className=" mx-auto w-full h-80 size-full grid grid-cols-2 gap-0 pt-6  ">
            <div className=" bg-cover bg-center bg-[url(https://images.pexels.com/photos/9654933/pexels-photo-9654933.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load)] brightness-50 duration-300 hover:brightness-100 pt-32">
                <h1 className='text-2xl text-center text-gray-200 font-extrabold duration-290  '>Physical learning Programs</h1>
                <p className='text-lg text-left text-gray-200 px-10 pt-6'> "Immerse yourself in a hands-on learning experience with 
                    Achievers Institute of Technology's physical learning programs. 
                    Our state-of-the-art facilities provide the perfect environment for 
                    practical exploration, ensuring that every moment on campus 
                    is a step towards expertise and success."</p>
            </div>
            <div className=" mx-auto w-screen h-80 size-full grid grid-cols-2 gap-0 ">
              <div className=' bg-cover bg-center  bg-[url(https://images.pexels.com/photos/4144144/pexels-photo-4144144.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load)] brightness-50 duration-300 hover:brightness-100 pt-32'>
                  <h1 className='text-2xl text-center text-gray-200 font-extrabold duration-290'>Online learning Platforms</h1>
                  <p className='text-lg text-left text-gray-200 px-10 pt-6'> Step into the future of education with Achievers Institute of 
                       Technology's online learning platform. From the comfort of your 
                       own space, dive into a world of virtual classrooms, interactive 
                       resources, and personalized guidance, empowering you to shape 
                       your educational journey on your terms."</p>
              </div>
            </div>
 
        </div>
    </div>
  )
}

export default Third