import React from 'react'



const Achivement  = () => {
  return (
    <div className='mt-10'>
        <h1 className='text-white text-5xl text-center uppercase font-bold'>ACHIEVEMENTS</h1>
        <p className='text-white text-lg text-center   pt-6'>Our commitment to excellence has led us to achieve significant milestones along our journey. Here are some of our notable achievements</p>

        <div className='grid grid-cols-2 grid-rows-2 gap-20 pt-10 pl-20 pr-20 '>
           
            
            <div className='bg-white rounded-lg py-32'>
                <h1 className='text-left text-black text-lg font-black pl-14 '>Trusted by Thousands</h1>
                <p className='text-gray-500 font-semibold text-left pl-14 px-32 mt-6'>We have successfully served thousands of students, helping them unlock their potential and achieve their career goals.</p>
            </div>
            <div className='bg-white rounded-lg'>
                <h1 className='text-left text-black text-lg font-black pl-14 pt-32'>Award-Winning Courses</h1>
                <p className='text-gray-500 font-semibold text-left pl-14 mt-6 px-32'>Our courses have received recognition and accolades in the industry for their quality, depth of content, and effective teaching methodologies.</p>
            </div>
            <div className='bg-white rounded-lg'>
                <h1 className='text-left text-black text-lg font-black pl-14 pt-32'>Positive Student Feedback</h1>
                <p className='text-gray-500 font-semibold text-left pl-14 mt-6 px-32'>We take pride in the positive feedback we receive from our students, who appreciate the practicality and relevance of our course materials</p>
            </div>
            <div className='bg-white rounded-lg'>
                <h1 className='text-left text-black text-lg font-black  pl-14 pt-32'>Industry Partnerships</h1>
                <p className='text-gray-500 font-semibold text-left pl-14 mt-6 px-32'>We have established strong partnerships with industry leaders, enabling us to provide our students with access to the latest tools and technologies</p>
            </div>

        </div>
        <div className="flex flex-col justify-center items-center text-center  p-5  border-t-4 border-neutral-800 mt-20"></div>
    </div>
  )
}

export default Achivement