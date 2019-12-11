import React, {Component} from 'react'
import AuthApiService from '../../services/auth-api-service'
import './RegisterPage.css'

export default class RegisterPage extends Component {
    state= {
        error:null
    }

    static defaultProps = {
        history: {
          push: () => {},
        },
      }
    
      handleRegistrationSuccess = user => {
        const { history } = this.props
        history.push('/LoginPage')
      }

    handleSubmitNewUser = ev => {
        ev.preventDefault()
        this.setState({ error: null })
        const { username, password} = ev.target
        AuthApiService.postUser({
          username: username.value,
          password: password.value,
        })
        .then(res => 
            {
          username.value = ''
          //user_id.value = ''
          this.handleRegistrationSuccess()
        })
        .catch(res => {
          this.setState({ error: res.error })
        })
      }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmitNewUser}>
                <div role='alert'>
                    {this.state.error && <p className='red'>{this.state.error}</p>}
                </div>
                    <fieldset>
                        <legend>Register New User</legend>
                            <label>User Name: </label>
                            <input type='text' name='username'></input>
                            <br/>
                            <label>Password: </label>
                            <input type='text' name='password'></input>
                            <br/>
                            <button type='submit'>Register</button>
                    </fieldset>
                </form>
            </div>
        )
    }
}