import React, {Component} from 'react'
import AuthApiService from '../../services/auth-api-service'
import './RegisterPage.css'
import thinking from '../Images/477.gif'

export default class RegisterPage extends Component {
    state= {
        error:null,
        registerthinking: false,
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
        this.setState({ 
          error: null,
          registerthinking: true,
         })
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
                            <label>New User Name: </label>
                            <span className='criteria'>*Case sensitive</span>
                            <br/>
                            <input type='text' name='username'></input>
                            <br/>
                            <br/>
                            <label>Password: </label>
                            <br/>
                            <span className='criteria'>*Must be 8 characters long and inclue Capital, number, and one of #?!@$%^&*-</span>
                            <br/>
                            <input type='text' name='password'></input>
                            <br/>
                            {this.state.registerthinking?<img id='thinking' src={thinking} alt='loading...'/> : <button type='submit'>Register</button>}
                    </fieldset>
                </form>
            </div>
        )
    }
}