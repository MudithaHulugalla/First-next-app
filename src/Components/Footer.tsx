import React from 'react'
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
			<div className="bg-blue-950 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
				<div className="p-5 ">
					<ul>
						<p className="text-gray-200 font-bold text-3xl pb-6 underline underline-offset-4">
							Follow us
						</p>
						<div className="flex gap-6 pb-5">
							<FaInstagram className="text-2xl  text-white cursor-pointer hover:text-yellow-600" />
							<FaTwitter className="text-2xl   text-white cursor-pointer hover:text-blue-600" />
							<FaLinkedin className="text-2xl   text-white cursor-pointer hover:text-blue-600" />
							<FaYoutube className="text-2xl  text-white cursor-pointer hover:text-red-600" />
						</div>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-200 font-bold text-2xl pb-4">Quick Link</p>
						<li className="text-gray-100 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Home
						</li>
						<li className="text-gray-100 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Our Courses
						</li>
						<li className="text-gray-100 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Our Offers
						</li>
						<li className="text-gray-100 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Student Life
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-200 font-bold text-2xl pb-4">Important Link</p>
						<li className="text-gray-100 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							About
						</li>
						<li className="text-gray-100 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Courses
						</li>
						<li className="text-gray-100 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Contact US
						</li>
						
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-200 font-bold text-2xl pb-4">Quick Link</p>
						<div className="flex gap-6 pb-5">
							
						<li className="text-gray-100 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							ait@gmail.com
						</li>
						</div>
						<li className="text-gray-100 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							+91 91813 23 2309
						</li>
						<li className="text-gray-100  text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Somewhere in the world
						</li>
					</ul>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center text-center  p-5 bg-blue-950 border-t-4 border-white
			">
				<h1 className=" text-gray-100 font-semibold">
					© 2023 AIT. All rights reserved.{" "}
				
				</h1>
			</div>
		</>
  )
}

export default Footer