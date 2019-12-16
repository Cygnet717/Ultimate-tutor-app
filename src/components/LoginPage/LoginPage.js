import React, {Component} from 'react'
import AuthApiService from '../../services/auth-api-service'
import TokenService from '../../services/token-service'
import './LoginPage.css'
import  UserProvider  from '../../context/user-context'

export default class LoginPage extends Component {
    constructor(props){
      super(props)
      this.state = { 
        error: null, 
        user_id: null,
      }
    }

  static defaultProps = {
        location: {},
        history: {
          push: () => {},
        },
        
      }

      

      setUserId(user_id) {
        console.log('setting id')
        this.setState({ user_id})
    }

    handleLoginSuccess = (id) => {
        const { location, history } = this.props
        const destination = (location.state || {}).from || '/MyDecks'
        history.push(destination)
        console.log('attempting update id')
        UserProvider.updateId(id)
        console.log('updated id')
      }
      

    handleSubmitJwtAuth = ev => {
        ev.preventDefault()
        this.setState({ error: null })
        const { username, password} = ev.target
        AuthApiService.postLogin({
          username: username.value,
          password: password.value,
        })
        .then(res => 
            {
          username.value = ''
          password.value = ''
          TokenService.saveAuthToken(res.authToken)
          this.handleLoginSuccess(res.payload.user_id)
        })
        .catch(res => {
          this.setState({ error: res.error })
        })
      }

    render(){
        return(
                <form onSubmit= {this.handleSubmitJwtAuth}>
                <div role='alert'>
                    {this.state.error && <p className='red'>{this.state.error}</p>}
                </div>
                    <fieldset>
                        <legend>Login</legend>
                            <label>User Name: </label>
                            <input required type='text' name='username'></input>
                            <br/>
                            <label>Password: </label>
                            <input required type='password' name='password'></input>
                            <br/>
                            <button type='submit' >Login</button>
                    </fieldset>
                </form>
        )
    }
}