import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './Welcome.css'

export default function Welcome() {
  return (
    <div>
      <Navbar />
      <div className='welcome-container'>
        <h1 className='welcomedHeading'>Welcome to Login System</h1>
      </div>
      <Footer />

    </div>

  )
}
