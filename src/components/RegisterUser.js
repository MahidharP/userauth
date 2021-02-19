import React, { useState } from 'react'
import axios from 'axios'

const RegisterUser = (props) => {
    const [username, setusername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleUsernameChange = (e) => {
        const result = e.target.value
        setusername(result)
    }

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
            username: username,
            email: email,
            password: password
        }
        console.log(formData)

        axios.post('http://dct-user-auth.herokuapp.com/users/register', formData)
            .then((response) => {
                const result = response.data
                if (result.hasOwnProperty('errors')) {
                    alert(result.errors)
                } else {
                    alert('Successfully created an account')
                    props.history.push('/login')
                }
            })
            .catch((err) => {
                alert(err.message)
            })
    }

    return (
        <div>
            <h2> Register User  </h2>
            <form onSubmit={handleSubmit}>
                <label> username:-  </label> <br />
                <input type="text" placeholder="please enter username" value={username} onChange={handleUsernameChange} required />
                <br />
                <label> Email:-  </label> <br />
                <input type="text" placeholder="please enter Email" value={email} onChange={handleEmailChange} required />
                <br />
                <label> Password:-  </label> <br />
                <input type="password" placeholder="please enter Password" value={password} onChange={handlePasswordChange} required />
                <br />
                <input type="submit" />
            </form>
        </div>
    )
}


export default RegisterUser