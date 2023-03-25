import React from 'react'
import Img2 from '../assets/img2_1.jpg'
import Img3 from '../assets/img3_1.jpg'
import { PrimaryBtn } from './PrimaryBtn'
export const Enjoy = () => {
  return (
    <div>
        <div className='flex ml-24 my-20 flex-wrap lg:flex-nowrap'>
          <div className=' lg:mx-24 text-left'>
          <p className='text-5xl font-bold mt-24 mb-4 tracking-wide leading-tight '>Enjoy Your Life With Us Now!</p>
          <p className='font-light mb-6 tracking-wide leading-normal mr-20 text-sm'>Volunteer trail stewardship projects in America’s parks and forests designed specifically for college student groups and young professionals.</p>
          <PrimaryBtn/>
          </div>
          <img className='bg-cover bg-center w-[380px] h-[514px]' src={Img2}></img>
    </div>
    <div className='flex ml-24 my-20 flex-wrap lg:flex-nowrap'>
          <img className='bg-cover bg-center w-[380px] h-[514px]' src={Img3}></img>
          <div className=' lg:mx-24 text-left'>
          <p className='text-5xl font-bold mt-24 mb-4 tracking-wide leading-tight '>Enjoy Your Life With Us Now!</p>
          <p className='font-light mb-6 tracking-wide leading-normal mr-20 text-sm'>Volunteer trail stewardship projects in America’s parks and forests designed specifically for college student groups and young professionals.</p>
          <PrimaryBtn/>
          </div>
    </div>
    </div>
  )
}
