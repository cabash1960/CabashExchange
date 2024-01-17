import React from 'react'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Why from '../Components/Why'
import Solutions from '../Components/Solutions'

const LandingPage = () => {
  return (
    <div>
      <div className='bg-gray-200'><Hero/></div>
      <div className='bg-slate-300'><About/></div>
      <div className='bg-gray-200'><Why/></div>
      <div className='bg-slate-300'><Solutions/></div>
    </div>
  )
}

export default LandingPage
