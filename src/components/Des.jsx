import React from 'react'

export const Des = () => {
    const Links = [
        {tittle: "Location", links: ["America","Asia","Eurpoe","Africa"]},
        {tittle: "Contact", links: ["About Me","Teams","Profile","FAQ"]},
        {tittle: "Legals", links: ["Privacy","Disclaimer","Terms","Company"]}
    ]
  return (
    <div className='w-2/4 ml-[20%] flex-1 flex flex-wrap gap-20 mt-6'>
            {
                Links.map((link, index)=>(
                    <ul className='' key={index}>
                        <p className='text-lg font-semibold'>{link.tittle}</p>
                        {
                             link.links.map((lk ,i)=>(
                                <li className='text-sm py-2' key={i}>
                                    {lk}
                                </li>
                             ))   
                        }
                    </ul>
                ))
            }
    </div>
  )
}
