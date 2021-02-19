import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Account = (props) => {
    const [user, setUser] = useState({})

    useEffect(() => {
        axios.get('http://dct-user-auth.herokuapp.com/users/account', {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then((response) => {
                const result = response.data
                setUser(result)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }, [])
    return (
        <div>
            <h2> User Account  </h2>
            <p> UserName:- {user.username} </p>
            <p> Email:- {user.email} </p>
        </div>
    )
}

export default Account 