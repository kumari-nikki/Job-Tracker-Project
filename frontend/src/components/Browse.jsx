
import React from 'react'
import Navbar from './shared/Navbar'
import Job from './Job';
const randomJobs=[1,2,3,4,58];
function Browse() {
  return (
    <div className='pl-7'>
      <Navbar/>
      <div className='max-w-7xl mx-auto  border-gray-200 pt-6'>
        <h1 className='font-bold text-xl my-10'>Search Results ({randomJobs.length})</h1>
        <div className='grid grid-cols-3 gap-4'>
        {
            randomJobs.map((item, index)=>{
                return (
                    <Job key={index}/>
                )
            })
        }
        </div>
      </div>
    </div>
  )
}

export default Browse
