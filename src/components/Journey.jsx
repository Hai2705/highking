import React from 'react'
import Img1 from '../assets/com-1.png'
import Img2 from '../assets/com-2.png'
import Img3 from '../assets/com-3.png'
import Img4 from '../assets/com-4.png'
import Img5 from '../assets/com-5.png'
export const Journey = () => {
  return (
    <div className=''>
        <p className='text-sky-500'>Safe Journey</p>
        <p className='mt-6 mb-16 text-3xl font-semibold'>Trusted by Big Companies</p>
        <div className='flex justify-around flex-wrap  gap-x-12 gap-y-14 md:w-2/3 mx-auto'>
            <img className='h-7' src={Img1}/>
            <img className='h-7' src={Img2}/>
            <img className='h-7' src={Img3}/>
            <img className='h-7' src={Img4}/>
            <img className='h-7' src={Img5}/>
        </div>
    </div>
  )
}
