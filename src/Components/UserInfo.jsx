import React from 'react'
import Status from './Status'

const UserInfo = ({ name, age, isLogin }) => {
  return (
    <div>
      <h3>User Info</h3>

      <p>Name: {name}</p>
      <p>Age: {age}</p>

      {/* Prop Drilling again */}
      <Status isLogin={isLogin} />

    </div>
  )
}

export default UserInfo