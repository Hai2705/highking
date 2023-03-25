import React from 'react'
import Img1 from '../assets/img1_1.jpg'
import { PrimaryBtn } from './PrimaryBtn'
export const Blogs = () => {
  return (
    <section className='my-20'>
    <div>
        <p className='inline-block mx-1'>Don’t hesitate to contact us to get better Information.</p>
        <span className='italic text-red-500 inline-block font-extrabold'>EXPLORE ALL TREKKING.</span>
    </div>
    <div className='flex ml-24 my-14 flex-wrap lg:flex-nowrap'>
          <img className='bg-cover bg-center w-[380px] h-[514px]' src={Img1}></img>
          <div className=' lg:mx-24 text-left'>
          <p className='text-5xl font-bold mt-24 mb-4 tracking-wide leading-tight '>Safe, Affordable, And Trusted</p>
          <p className='font-light mb-6 tracking-wide leading-normal mr-20 text-sm'>Volunteer trail stewardship projects in America’s parks and forests designed specifically for college student groups and young professionals.</p>
          <PrimaryBtn/>
          </div>
    </div>
    </section>
  )
}
