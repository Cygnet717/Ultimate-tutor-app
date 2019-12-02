import React, {Component} from 'react'
import './RegisterPage.css'

export default class RegisterPage extends Component {
    render(){
        return(
            <div>
                <form>
                    <fieldset>
                        <legend>Register New User</legend>
                            <label>User Name: </label>
                            <input type='text'></input>
                            <br/>
                            <label>Password: </label>
                            <input type='text'></input>
                            <br/>
                            <label>Retype Password: </label>
                            <input type='text'></input>
                            <br/>
                            <button type='submit'>Register</button>
                    </fieldset>
                </form>
            </div>
        )
    }
}