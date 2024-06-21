import React from 'react'
import Card from '../Card/Card'

function Content() {
  return (
    <>
        <h3 className='text-center text-5xl font-bold'>I AM YOUR</h3>
        <div className='flex flex-row w-full mt-10 [&>div]:w-1/2'>
            <div className='break-words ml-4'>
                <p className='text-3xl font-bold'><span className='text-text-highlight'>Mobile</span><br />Developer</p>
                <Card />
            </div>
            <div className=''>
                <p className='text-end mr-4 text-3xl font-bold'><span className='text-text-highlight'>Web</span><br />Developer</p>
                <Card isWeb/>
            </div>
        </div>
        <div>Vertical line</div>
    </>
  )
}

export default Content