import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import UserContext from '../../context/user-context';
import './Header.css';
import logo from '../Images/SBBLogo.png';

export default class Header extends Component {
  static contextType = UserContext;

  handleLogoutClick = () => {
    TokenService.clearAuthToken()
    this.context.clearId()
  };

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
          to='/'
          onClick={this.handleLogoutClick}>
            Logout
        </Link>
      </div>
    )
  };
    
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
  };

  render() {
    return <>
      <nav className='header'>
        <Link 
          className='navLink logo'
          to='/'>
            <img className='utlogo' src={logo} alt='UT logo'/>
        </Link>
        <div className='headerbottom'>
          {this.context.user_id?this.renderLogoutLink() :this.renderLoginLink()}
        </div>
      </nav>
    </>
  }
};