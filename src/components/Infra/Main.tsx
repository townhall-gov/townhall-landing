import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

const Main = () => {
  return (
    <section className='flex flex-col md:grid md:grid-cols-12 h-full justify-between items-center overflow-hidden w-full  pl-8 md:pl-24'>
        <div className="col-span-7 inline-flex flex-col items-start relative">
            <h1 className='text-4xl md:text-5xl font-semibold md:leading-6'>Governance that fits “You”</h1>
            <h2 className='text-xl font-light mt-4'>With Usability at it&apos;s core , experience governance like never before</h2>
            <Button className="audiowide-bold mt-8" size='lg'>Book Demo</Button>
        
        </div>
        <div className="col-span-5  w-full flex justify-end">
				<Image className="object-contain"  src='/assets/infraBanner.png' width='800' height='800' alt='crystal' />
			</div>
    </section>
  )
}

export default Main