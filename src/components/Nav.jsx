import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import { LinkNav } from './LinkNav'
export const Nav = () => {
    const [open ,setOpen] = useState(false)
  return (
    <nav className='flex justify-between'>
        <img className='h-9 cursor-pointer' src={Logo} alt=''/>
        <ul className="md:flex hidden items-center">
            <LinkNav/>
        </ul>
        <ul className={`md:hidden flex flex-col py-20 px-20 bg-white h-screen fixed top-0 right-0 duration-500 ease-in-out ${open ? 'right-0' : 'right-[-100%]'}`}
        >
        <LinkNav/>
        </ul>
        <div className='text-3xl z-50 md:hidden font-semibold mr-5' onClick={()=>setOpen(!open)}>
            <ion-icon name="menu"></ion-icon>
        </div>
    </nav>
  )
}
