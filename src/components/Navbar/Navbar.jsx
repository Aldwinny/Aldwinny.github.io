import React from 'react'
import Navlink from './Navlink'
import './Navbar.css'

function Navbar() {
  return (
    <nav>
        <ul className='flex flex-row justify-center items-center py-4 px-12 text-xl 
        [&_a:hover]:text-highlight-color [&_a]:text-xl [&_a]:mx-5 [&_a]:relative [&_a]:duration-200'>
            <li className='mr-auto text-2xl'>Aldwin Dennis Reyes</li>
            <Navlink goto='#contact' isList={true}>Contact</Navlink>
            <Navlink goto='#about' isList={true}>About</Navlink>
            <Navlink goto='#projects' isList={true}>Projects</Navlink>
            <Navlink goto='#stack' isList={true}>Stack</Navlink>
            <Navlink goto='#resume' isList={true}>Resume</Navlink>
        </ul>
    </nav>
  )
}

export default Navbar