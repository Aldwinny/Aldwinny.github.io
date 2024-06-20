import React from 'react'
import Navlink from './Navlink'
import './Navbar.css'

function Navbar() {
  return (
    <nav>
        <ul className='flex flex-row justify-center items-center py-4 px-12 text-xl'>
            <li className='mr-auto'>Aldwin Dennis Reyes</li>
            <Navlink isList={true}>Contact</Navlink>
            <Navlink isList={true}>About</Navlink>
            <Navlink isList={true}>Projects</Navlink>
            <Navlink isList={true}>Stack</Navlink>
            <Navlink isList={true}>Resume</Navlink>
        </ul>
    </nav>
  )
}

export default Navbar