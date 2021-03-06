import React, {Component} from 'react';
import AuthApiService from '../../services/auth-api-service';
import TokenService from '../../services/token-service';
import './LoginPage.css';
import UserContext from '../../context/user-context';
import DeckApiService from '../../services/deck-api-service';
import thinking from '../Images/731.gif';

export default class LoginPage extends Component {
  static contextType = UserContext;

  constructor(props){
    super(props)
    this.state = { 
      error: null, 
      user_id: null,
      thinking: false,
    }
  }

  static defaultProps = {
        location: {},
        history: {
          push: () => {},
        },
      }

  async handleSetUserInfo() {
    let decks = await DeckApiService.getDecks()
    let contextSet = await this.context.updateDecks(decks)
    this.handleLoginSuccess(contextSet)
  };
      
  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/MyDecks'
    history.push(destination)
  };

  handleSubmitJwtAuth = ev => {
    ev.preventDefault()
    this.setState({ 
      error: null,
      thinking: true,
    })
    const { username, password} = ev.target
    AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
    .then(res => 
      {
        username.value = ''
        password.value = ''
        TokenService.saveAuthToken(res.authToken, res.payload.user_id)
        this.handleSetUserInfo()
    })
    .catch(res => {
      console.log(res.error.message)
      this.setState({ 
        error: res.error.message,
        thinking: false
      })
      })
    };

  render(){
    return(<>
      <form  onSubmit= {this.handleSubmitJwtAuth}>
        <div role='alert'>
          {this.state.error && <p className='red'>{this.state.error} try again</p>}
        </div>
        <fieldset className="loginForm">
          <legend>Login</legend>
            <label>User Name: </label>
            <input required type='text' name='username'></input>
            <br/>
            <label>Password: </label>
            <input required type='password' name='password'></input>
            <br/>
            <input type='submit' value='Login'/>
        </fieldset>
      </form>
      <br/>
      {this.state.thinking? <img id='thinking' src={thinking} alt='loading...'/>: <span></span>}
    </>
  )
}
};