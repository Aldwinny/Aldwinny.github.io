import React from 'react'
import Card from '../Card/Card'

function Content() {
  return (
    <>
        <h3 className='text-center text-5xl font-bold'>I AM YOUR</h3>
        <div className='flex flex-row w-full mt-10 [&>div]:w-1/2'>
            <div className='break-words ml-4'>
                <p className='text-3xl font-bold'><span className='text-themic-txt-highlight'>Mobile</span><br />Developer</p>
                <Card title="Travelore" description="This is etc etc" />
                <Card title="Travelore" description="This is etc etc" />
                <Card title="Travelore" description="This is etc etc" />
            </div>
            <div>
                <p className='text-end mr-4 text-3xl font-bold'><span className='text-themic-txt-highlight'>Web</span><br />Developer</p>
                <Card title="Not so Travelore" description="Not so whatever" isWeb/>
                <Card title="Travelore" description="This is etc etc" isWeb />
                </div>
        </div>
        <div>Vertical line</div>
    </>
  )
}

export default Content