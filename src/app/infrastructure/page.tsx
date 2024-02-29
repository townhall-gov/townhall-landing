import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import GetStarted from '@/components/GetStarted'
import Header from '@/components/Header'
import Customize from '@/components/Infra/Customize'
import GetInfraStarted from '@/components/Infra/GetStarted'
import Kit from '@/components/Infra/Kit'
import Main from '@/components/Infra/Main'
import Features from '@/components/Infra/Features'
import { InfraFaq } from '@/services/constants'
import React from 'react'

const infrastructure = () => {
  return (
    <main className="flex min-h-screen flex-col w-full items-center justify-between pt-24">
    <Header />
    <Main/>
    <Kit/>
     <Features/>
    <Customize/>
    <GetInfraStarted/>
   <div className='bg-[#2F45C6] w-full'>
    <FAQ faqData={InfraFaq} />
    <GetStarted />
    </div> 
    <Footer />
  </main>
  )
}

export default infrastructure