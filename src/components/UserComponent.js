import React from 'react'
import './UserComponents.css';

function UserComponent({username, first_name, last_name}) {
  return (
    <div className='UserComponent'>
        <h2>{username}</h2>
        <p>First Name: {first_name}</p>
        <p>Last Name: {last_name}</p>
    </div>
  )
}

export default UserComponent