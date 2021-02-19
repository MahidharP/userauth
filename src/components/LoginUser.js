import React, { useState } from 'react'
import axios from 'axios'

const LoginUser = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmailChange = (e) => {
        const result = e.target.value
        setEmail(result)
    }

    const handlePasswordChange = (e) => {
        const result = e.target.value
        setPassword(result)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            email: email,
            password: password
        }
        axios.post('http://dct-user-auth.herokuapp.com/users/login', formData)
            .then((response) => {
                const result = response.data
                if (result.hasOwnProperty('errors')) {
                    alert(result.errors)
                } else {
                    alert('Successfully Logged In')
                    localStorage.setItem('token', result.token)
                    props.history.push('/home')
                    props.handleAuth()
                }
            })
            .catch((err) => {
                alert(err.message)
            })
    }

    return (
        <div>
            <h2> Login User </h2>
            <form onSubmit={handleSubmit}>
                <label> Email:-  </label> <br />
                <input type="text" placeholder="please enter Email" value={email} onChange={handleEmailChange} required />
                <br />
                <label> Password:-  </label> <br />
                <input type="password" placeholder="please enter Password" value={password} onChange={handlePasswordChange} required />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default LoginUser