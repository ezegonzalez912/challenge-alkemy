import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../context/auth/AuthContext'
import { types } from '../../types/types'

export const Navbar = () => {

    const {dispatch} = useContext(AuthContext)

    return (
        <div className="Navbar">
            <h3>Hi <span className="fw-400">alkemer!</span></h3>
            <NavLink to="/">HEROES APP</NavLink>
            <p onClick={() => dispatch({type: types.logout})}>Logout</p>
        </div>
    )
}
