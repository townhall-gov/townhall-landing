import Footer from '@/components/Footer'
import GetStarted from '@/components/GetStarted'
import Header from '@/components/Header'
import React from 'react'

const bountybird = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24">
    <Header />
    BOunty Bird
    <GetStarted />
    <Footer />
  </main>
  )
}

export default bountybird