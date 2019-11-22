import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default class Header extends Component {
    render() {
        return <>
        <nav className='header'>
            <h1>
                <Link to='/'>
                    Ultimate Tutor
                </Link>
            </h1>
            <Link to='/Login'>
                Login
            </Link>
            <Link to='/Register'>
                Register
            </Link>
        </nav>
        
        </>
    }
}