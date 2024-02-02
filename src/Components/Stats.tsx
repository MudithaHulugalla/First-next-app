import React from 'react'
import link from 'next/link'


{/*const statContent = {
    stats: [
        {
            number: '35+',
            lable:'COURSES'
        },

        {
            number: '56+',
            lable:'StartUps'
        },
        {
            number: '100+',
            lable:'Languages'
        },
        {
            number: '150+',
            lable:'Professors'
        }

        
    ]
}*/}

const Stats = () => {
  return (
    <section className='pt-20 pb-10 bg-cover bg-center brightness-75 bg-[url(https://www.smarttech.com/-/media/project/smart/www/resources/blogs/hero-and-opengraph/ijriecs3d4g_banner.jpg?h=750&iar=0&w=2250&rev=b572445b42d845c99d4072ba9ed2b798&hash=EFE4042F4D74C75561834EFF5C4D90D4)] h-96'>
        <div className='container px-4 max-auto'>
            {/*<div className='lg:flex justify-between items-center space-x-0'>
                <div className='w-full lg:w-7/12 mb-20 lg:mb-0'>*/}
                    <div className='grid grid-cols-4 pl-40 text-center pt-20 '>
                        <div>
                            <h1 className='text-primary text-gray-100 text-4xl xl:text-[70px] font-bold block leading-tight'>35+</h1>
                            <h1  className='text-primary text-white text-2xl xl:text-[40px] font-bold block leading-tight'>COURSES</h1>
                        </div>
                        <div>
                            <h1 className='text-primary text-gray-100 text-4xl xl:text-[70px] font-bold block leading-tight'>56+</h1>
                            <h1  className='text-primary text-white text-2xl xl:text-[40px] font-bold block leading-tight'>StartUps</h1>
                        </div>
                        <div>
                            <h1 className='text-primary text-gray-100 text-4xl xl:text-[70px] font-bold block leading-tight'>100+</h1>
                            <h1  className='text-primary text-white text-2xl xl:text-[40px] font-bold block leading-tight'>Languages</h1>
                        </div>
                        <div>
                            <h1 className='text-primary text-gray-100 text-4xl xl:text-[70px] font-bold block leading-tight'>150+</h1>
                            <h1  className='text-primary text-white text-2xl xl:text-[40px]  font-bold block leading-tight'>Professors</h1>
                        </div>
                        {/*{statContent.stats.map((stat,idx)=> (
                            <div className='text-center lg:text-left ' key={stat.lable}>
                                <strong className='text-primary text-4xl xl:text-[52px] font-bold block leading-tight'>
                                    {stat.lable}
                                </strong>
                                <span>{stat.lable}</span>
                            </div>
                        ))}*/}
                        </div>
               </div>
            
             {/*</div>

                        </div>*/}
    </section>
    
  )
}

export default Stats