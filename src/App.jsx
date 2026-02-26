import React from 'react'
import Sample from './Components/Sample'

const App = () => {

  const name = "Dhivya"
  const age = 22
  const isLogin = true

  return (
    <div>
      <Sample 
        name={name}
        age={age}
        isLogin={isLogin}
      />
    </div>
  )
}

export default App