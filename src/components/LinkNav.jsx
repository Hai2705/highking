import React from 'react'

export const LinkNav = () => {
    const Link = [
        {
            name: 'Location',
            link: './',
        },
        {
            name: 'Blogs',
            link: './',
        },
        {
            name: 'Testimoials',
            link: './',
        },
        {
            name: 'Contact',
            link: './',
        },
    ];
  return (
    <div className="flex md:flex-row gap-10 flex-col">
        {Link.map((nav, id)=>(
            <li key={id} className="font-semibold text-lg hover:text-cyan-500 float-right">
                <a href={nav.link}>{nav.name}</a>
            </li>
        ))}
    </div>
  )
}
