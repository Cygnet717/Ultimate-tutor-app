import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default class Header extends Component {
    renderLogoutLink() {
        return (
          <div className='header-buttons'>
            <Link 
                to='/MyDecks'>
                My Decks
            </Link>
            <Link 
                to='/SearchCards'>
                Search
            </Link>
            <Link
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
                to='/LoginPage'>
                Login
            </Link>
            <Link 
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
                <Link to='/'>
                    Ultimate Tutor
                </Link>
            </h1>
            {5>10? this.renderLoginLink():this.renderLogoutLink()}
        </nav>
        
        </>
    }
}