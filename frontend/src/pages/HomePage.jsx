import React from 'react'
import User from '../components/ParentComponent/User'
import HomeContent from '../components/ParentComponent/HomeContent'
import Navbar from '../components/ParentComponent/Navbar'

function HomePage() {
  return (
    <>
    <User />
    <HomeContent />
    <Navbar />
    </>
  )
}

export default HomePage