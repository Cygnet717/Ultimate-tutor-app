import React, {Component} from 'react'
import './LoginPage.css'

export default class LoginPage extends Component {

    render(){
        return(
            <div>
                <form >
                    <fieldset>
                        <legend>Login</legend>
                            <label>User Name: </label>
                            <input type='text'></input>
                            <br/>
                            <label>Password: </label>
                            <input type='text'></input>
                            <br/>
                            <button type='submit' >Login</button>
                    </fieldset>
                </form>
            </div>
        )
    }
}