import React from 'react'
import '../../styles/ParentComponent/navbar.css'

function Navbar() {
  return (
    <div className='NavbarContainer'>
        <i className='bx bx-home-alt-2'></i>
        <i className='bx bx-credit-card-alt' ></i>
        <i className='bx bx-history'></i>
        <i className='bx bx-user-circle'></i>
    </div>
  )
}

export default Navbar