import Image from 'next/image'
import React from 'react'

const Compete = () => {
  return (
    <section className="flex flex-col gap-8 justify-between items-center w-full m-24">
        <div className="flex flex-col items-start gap-4">
            <h1 className="text-6xl font-semibold">Compete for leaderboard</h1>
            <p className="text-lg font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.</p>
        </div>
        <Image className="mt-12" src="/assets/bountybirdCompete.svg" width={700} height={700} alt="Compete" loading='lazy'/>
        
    </section>
  )
}

export default Compete