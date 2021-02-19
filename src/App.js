import React, { useState, useEffect } from 'react'
import NavBar from './components/NavBar'

const App = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false)

  const handleAuth = () => {
    setUserLoggedIn(!userLoggedIn)
  }

  useEffect(() => {
    if (localStorage.getItem('token')) {
      handleAuth()
    }
  }, [])

  return (
    <div>
      <h1> User Authentication</h1>
      <NavBar userLoggedIn={userLoggedIn} handleAuth={handleAuth} />
    </div>
  )
}

export default App;
