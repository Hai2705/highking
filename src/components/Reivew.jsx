import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import Ava from '../assets/avatar.png'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";
export const Reivew = () => {
  return (
    <div  className='text-center'>
        <p className='text-sky-500'>Happy Clients</p>
        <p className='text-3xl font-semibold'>Client's Say About Us</p>
        <div className='my-10'>
        <Swiper
        loop={true}
        grabCursor={true}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper px-20 py-5"
      >
        <SwiperSlide className='drop-shadow-2xl mb-10'>
            <div className=''>
                <img className='bg-cover h-20 inline-block' src={Ava}/>
                <p className='text-base font-semibold'>Omar Gouse</p>
                <p className='text-xs text-red-500'>Happy Client</p>
                <span className='text-xs'>“Everyone working in the office is very knowledgeable about all types of dental work and options for your individual needs.”</span>
            </div>
        </SwiperSlide>
        <SwiperSlide className='drop-shadow-2xl mb-10'>
            <div className=''>
                <img className='bg-cover h-20 inline-block' src={Ava}/>
                <p className='text-base font-semibold'>Omar Gouse</p>
                <p className='text-xs text-red-500'>Happy Client</p>
                <span className='text-xs'>“Everyone working in the office is very knowledgeable about all types of dental work and options for your individual needs.”</span>
            </div>
        </SwiperSlide>
        <SwiperSlide className='drop-shadow-2xl mb-10'>
            <div className=''>
                <img className='bg-cover h-20 inline-block' src={Ava}/>
                <p className='text-base font-semibold'>Omar Gouse</p>
                <p className='text-xs text-red-500'>Happy Client</p>
                <span className='text-xs'>“Everyone working in the office is very knowledgeable about all types of dental work and options for your individual needs.”</span>
            </div>
        </SwiperSlide>
        <SwiperSlide className='drop-shadow-2xl mb-10'>
            <div className=''>
                <img className='bg-cover h-20 inline-block' src={Ava}/>
                <p className='text-base font-semibold'>Omar Gouse</p>
                <p className='text-xs text-red-500'>Happy Client</p>
                <span className='text-xs'>“Everyone working in the office is very knowledgeable about all types of dental work and options for your individual needs.”</span>
            </div>
        </SwiperSlide>
        <SwiperSlide className='drop-shadow-2xl mb-10'>
            <div className=''>
                <img className='bg-cover h-20 inline-block' src={Ava}/>
                <p className='text-base font-semibold'>Omar Gouse</p>
                <p className='text-xs text-red-500'>Happy Client</p>
                <span className='text-xs'>“Everyone working in the office is very knowledgeable about all types of dental work and options for your individual needs.”</span>
            </div>
        </SwiperSlide>
      </Swiper>
        </div>
    </div>
  )
}
