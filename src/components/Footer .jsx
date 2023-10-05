import React from 'react'
import {  FaWhatsappSquare,FaFacebookSquare,FaGithubSquare,FaInstagramSquare,
    FaTwitterSquare
} from 'react-icons/fa'
const Footer  = () => {
  return (
    <div className=' w-full  max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
     <div>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
   <p className='py-4'> Navigate to your various pages here.</p>
    <div className='flex md:w-[75%] my-6 justify-between'>
    <FaWhatsappSquare size={30}/>
    <FaFacebookSquare size={30}/>
    <FaGithubSquare size={30}/>
    <FaInstagramSquare size={30}/>
    <FaTwitterSquare size={30}/>
    </div>
    </div>
    <div className='lg:col-span-2 flex justify-between mt-6'>
<div>
    <h6 className=" font-medium text-gray">Solutions</h6>
    <ul className="">
        <li className="py-2 text-sm">Analytics</li>
        <li className="py-2 text-sm">Marketing</li>
        <li className="py-2 text-sm">Commerce</li>
        <li className="py-2 text-sm">Insights</li>
    </ul>
</div>

<div>
    <h6 className=" font-medium text-gray">Support</h6>
    <ul className="">
        <li className="py-2 text-sm">Pricing</li>
        <li className="py-2 text-sm">Documentation</li>
        <li className="py-2 text-sm">Guides</li>
        <li className="py-2 text-sm">API Status</li>
    </ul>
</div>

<div>
    <h6 className=" font-medium text-gray">Company</h6>
    <ul className="">
        <li className="py-2 text-sm">About</li>
        <li className="py-2 text-sm">Blog</li>
        <li className="py-2 text-sm">Jobs</li>
        <li className="py-2 text-sm">press</li>
        <li className="py-2 text-sm">Careers</li>
    </ul>
</div>

<div>
    <h6 className=" font-medium text-gray">Legal</h6>
    <ul className="">
        <li className="py-2 text-sm">Claim</li>
        <li className="py-2 text-sm">Police</li>
        <li className="py-2 text-sm">Terms</li>
     </ul>
</div>




    </div>
    </div>
  )
}

export default Footer 
