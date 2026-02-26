import React from 'react'

const Status = ({ isLogin }) => {
  return (
    <div>
      <h4>Status Component</h4>
      <p>
        {isLogin ? "Login" : "Logout"}
      </p>
    </div>
  )
}

export default Status