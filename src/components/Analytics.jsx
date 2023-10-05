import React from 'react'
import laptop from "../assets/laptop.jpg"
const Analytics = () => {
  return (
    <div className='bg-white w-full py-16 px-4'>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
<img  className ='w-[500px] mx-auto my-4 'src={laptop} alt="" />

        <div className="flex flex-col justify-center">
            <p className="text-[#00df9a] font-bold">DATA ANALYTIC DASHBOARD </p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
            <p className="">
            The graphic design   data analytics is as follows; 
            Total design projects: 100,
Top design categories: Branding (40%), Illustration (30%), User
 Interface (UI) Design (20%), Print Design (10%)
Client satisfaction rating: 4.5 out of 5, and the data analytics
 for Web development is as follows;Total website development projects: 50
Top programming languages used: JavaScript (50%), HTML/CSS (30%), 
Website performance metrics: Average page load time (3 seconds), Conversion rate (10%) 
and that of Mobile is as follows;Total mobile app projects: 10,
Average app development time: 8 weeks,
App platforms: iOS (60%), Android (40%),
User ratings: Average app rating (4.2 out of 5), Number of app downloads (10,000).
 </p>
 <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 '>Get Started</button>
     
            </div>
      </div>
    </div>
  )
}

export default Analytics
