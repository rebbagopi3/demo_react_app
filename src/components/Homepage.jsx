import React from 'react'
import Navbar from './Navbar'
import Loginone from './Loginone'
import Register from './Register'
const Homepage = () => {
  return (
    <>
      <Navbar/>
      <div className="container">
        <h1>Welcome to Homepage</h1>
        <Loginone/>
      </div>
      
      
    </>
  )
}

export default Homepage
