import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default class Header extends Component {
 

    renderLogoutLink() {
        return (
          <div className='header-buttons'>
            <Link 
                className='navLink'
                to='/MyDecks'>
                My Decks
            </Link>
            <Link 
                className='navLink'
                to='/SearchCards'>
                Search
            </Link>
            <Link
                className='navLink'
                to='/'>
                Logout
            </Link>
          </div>
        )
      }
    
      renderLoginLink() {
        return (
          <div className='header-buttons'>
            <Link 
                className='navLink'
                to='/LoginPage'>
                Login
            </Link>
            <Link 
                className='navLink'
                to='/RegisterPage'>
                Register
            </Link>
          </div>
        )
      }
    render() {
        return <>
        <nav className='header'>
            <h1>
                <Link 
                    className='navLink'
                    to='/'>
                    Ultimate Tutor
                </Link>
            </h1>
            {1<10?this.renderLogoutLink() :this.renderLoginLink()}
        </nav>
        
        </>
    }
}