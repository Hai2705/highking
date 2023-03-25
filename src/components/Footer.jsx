import React from 'react'
import { Contact } from './Contact'
import { PrimaryBtn } from './PrimaryBtn'
import { Des } from './Des'

export const Footer = () => {
  return (
    <div className='bg-sky-100 bg-opacity-40'>
        <div className='pt-14 mx-20 text-center'>
            <h2 className='my-10 font-semibold text-xl tracking-wide'>Subscribe to Our Newsletter For Weekly Article Update.</h2>
            <h3 className='text-sm tracking-wide my-6'>We have hiking-related blog so we can share our thought and rutinity in our blog that updated weekly. We will not spam you, we promise.</h3>
            <input type="text" className='focus:caret-sky-500 border-[0.5px] border-sky-500 placeholder-sky-500 py-[9px] pl-4 pr-36 rounded-xl mx-4' placeholder='Enter Your e-mail address'/>
            <PrimaryBtn>Subscribe</PrimaryBtn>
        </div>
        <div className='flex'>
            <Contact/>
            <Des/>
        </div>
        <p className='text-center my-10 font-light'>Copyright © 2021. All Right Reserved.</p>
        <p>                                                                                                           </p>
    </div>
  )
}
