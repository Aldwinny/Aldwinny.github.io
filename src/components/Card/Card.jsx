import React from 'react'

function Card({title, description, isWeb = false}) {
  return (
    <div className={`my-4 w-4/5 h-60 p-7 rounded-lg flex justify-evenly items-start bg-gradient-to-r duration-500
        ${isWeb ? "hover:-translate-x-4 ml-auto mr-4 flex-row from-themic-grad-tomato to-themic-grad-purple" : "hover:translate-x-4 flex-row-reverse from-themic-grad-purple-2 to-themic-grad-magenta"}`}
        >
        <div className='flex flex-col flex-1 text-2xl m-6'>
            <h1 className='text-center font-bold mb-4'>{title}</h1>
            <h2 className='text-left text-xl'>{description}</h2>
        </div>
        <figure className='self-center'>
            <img className='max-h-32 rounded-sm' alt='placeholder image' src='https://placehold.co/600x400'/>
        </figure>
    </div>
  )
}

export default Card