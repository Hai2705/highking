import React from 'react'
import Logo from '../assets/logo.png'
import Fb from '../assets/f.png'
import Ins from '../assets/i.png'
import Tw from '../assets/t.png'
export const Contact = () => {
  return (
    <div className='ml-24 w-1/4'>
        <img className='h-12 my-5' src={Logo} />
        <span className='text-sm tracking-wide leading-tight mb-5'>We envision a world where everyone feels welcome in the American hiking community.</span>
        <div className='flex gap-2 mt-5 mb-10'>
        <img className='h-8 hover:scale-150 duration-300' src={Fb}/>
        <img className='h-8 hover:scale-150 duration-300' src={Ins}/>
        <img className='h-8 hover:scale-150 duration-300' src={Tw}/>
        </div>
    </div>
  )
}
