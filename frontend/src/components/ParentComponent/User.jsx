import React from 'react'
import userProfile from '../../assets/Profile Picture.png'
import '../../styles/ParentComponent/user.css'

function User() {
  return (
    <div class='UserContainer'>
        <img src={userProfile} alt="Profile Picture" />
        <div>
            <p class="welcomeText">Hi, welcome!</p>
            <p class="userName">Gilbert Burgos</p>
        </div>
        <i class='bx bxs-bell-ring'></i>
    </div>
    
  )
}

export default User