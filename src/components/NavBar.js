import React from 'react'
import { Route, Link, withRouter } from 'react-router-dom'
import Home from './Home'
import RegisterUser from './RegisterUser'
import LoginUser from './LoginUser'
import Account from './Account'

const NavBar = (props) => {
    const { userLoggedIn, handleAuth } = props
    return (
        <div>
            <ul>
                <li> <Link to="/home"> Home </Link> </li>
                {
                    userLoggedIn ? (
                        <>
                            <li> <Link to='/account'> Account </Link> </li>
                            <li> <Link onClick={() => {
                                localStorage.removeItem('token')
                                alert('Successfully Logged Out')
                                handleAuth()
                                props.history.push('/')
                            }}> LogOut </Link> </li>
                        </>
                    ) : (
                            <>
                                <li> <Link to="/register"> Register </Link> </li>
                                <li> <Link to="/login"> Login </Link> </li>
                            </>
                        )
                }
            </ul>
            <Route path="/home" component={Home} />
            <Route path="/register" component={RegisterUser} />
            <Route path="/account" component={Account} />
            <Route path="/login" render={(props) => {
                return <LoginUser
                    {...props}
                    handleAuth={handleAuth}
                />
            }} />
        </div>
    )
}

const wrappedComponent = withRouter(NavBar)

export default wrappedComponent