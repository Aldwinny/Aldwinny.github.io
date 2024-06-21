import React from 'react'

function Card({isWeb = false}) {
  return (
    <div className={`my-4 w-4/5 p-6 rounded-md flex flex-row justify-center items-center 
        bg-gradient-to-r from-pink-400 to-purple-400
        duration-500
        ${isWeb ? "hover:-translate-x-4 ml-auto mr-4" : "hover:translate-x-4"}`}>
        <div className='flex flex-col'>
            <h1 className='text-center'>Title</h1>
            <h2>Description</h2>
        </div>
        <figure>
            <img className='max-h-32' alt='placeholder image' src='https://placehold.co/600x400'/>
        </figure>
    </div>
  )
}

export default Card