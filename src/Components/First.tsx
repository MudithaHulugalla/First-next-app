// components/LeftAlignedText.js

import Link from "next/link";
import Image from 'next/image';

const fristContent = {
  text: {
    heading: 'Fuel Your Future at Achievers Institute of Technology',
    description: 'Ignite Innovation,Achieve Excellence,Soar Beyond Boundaries',
  },

  Image:{
      img1: 'image/Frist 1.jpg'
  }

  
}


const First = () => {
  return (
    <>

    <div className=" bg-center bg-cover bg-[url('https://media.istockphoto.com/id/1296681977/photo/flat-lay-top-view-office-table-desk-workspace-with-laptop-office-supplies-pencil-green-leaf.jpg?s=612x612&w=0&k=20&c=APqKJaF093qMLGJQi-XGrbyh0KQvlLY4fXNqpUC3kLY=')] brightness-50 duration-300 hover:brightness-100">
      
        <section className="py-40">
          <div className="container px-4 mx-auto">
            <div className="lg:flex justify-between text-center items-center">
              <div className="lg:w-5/12 mb-10 lg:mb-0">
                {fristContent.text.heading && (
                  <h1 className="text-black text-4xl lg:text-5xl font-bold text-heading mb-7 ">
                    {fristContent.text.heading}
                  </h1>
                )}

                {fristContent.text.description && (
                  <p className="leading-relaxed text-body mb-10">
                    {fristContent.text.description}
                  </p>
                )}

                <div className="flex space-x-3  ">
                  <Link
                    href="#_"
                    className="py-3 px-4 bg-blue-800 text-white text-center  rectangle-lg duration-300 transition-all ease-in-out hover:bg-black hover:shadow-lg inline-block relative top-0 hover:-top-1 z-10"
                  >Apply Now
                  </Link>
                </div>
              </div>

              
            </div>
          </div>
          
        </section>
        </div>
    </>
  );
};

  
  export default First;
  