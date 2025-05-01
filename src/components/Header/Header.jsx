import React from 'react'
import Navlink from '../Navbar/Navlink'

function Header() {
  return (
    <header className='mx-16 my-40'>
        <h1 className='text-5xl mb-8 font-bold'>Hello, I'm <span className='text-themic-txt-highlight'>Aldwin Dennis Reyes</span></h1>
        <h2 className='text-xl mb-5 text-themic-txt-secondary w-3/4'>I'm a 23 yr old Filipino presently taking Bachelor of Science in Information Technology at Technological Institute of the Philippines. I enjoy programming because it challenges my mind by building software and solving problems.</h2>
        <Navlink goto="https://github.com/Aldwinny" target='_blank' className='inline-block duration-200 hover:translate-x-4 hover:text-themic-highlight-color'>My Github &gt;</Navlink>
    </header>
  )
}

export default Header