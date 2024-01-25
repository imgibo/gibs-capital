import React from 'react'
import userProfile from '../../assets/Profile Picture.png'
import '../../styles/ParentComponent/user.css'

function User() {
  return (
    <div className='UserContainer'>
        <img src={userProfile} alt="Profile Picture" />
        <div>
            <p className="welcomeText">Hi, welcome!</p>
            <p className="userName">Gilbert Burgos</p>
        </div>
        <i className='bx bxs-bell-ring'></i>
    </div>
    
  )
}

export default User