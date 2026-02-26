import React from 'react'
import UserInfo from './UserInfo'

const Sample = ({ name, age, isLogin }) => {
  return (
    <div>
      <h2>Sample Component</h2>

      {/* Prop Drilling */}
      <UserInfo 
        name={name}
        age={age}
        isLogin={isLogin}
      />

    </div>
  )
}

export default Sample