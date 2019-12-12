import React, { Component } from 'react'

const UserContext = React.createContext({
    user_id: null,
})

export default UserContext

export class UserProvider extends Component {
    state ={
        user_id: null,
    };

    setUserId = user_id => {
        console.log('setting id')
        this.setState({ user_id})
    }

    render() {
        const value = {
            user_id: this.state.user_id
        }

        return(
            <UserContext.Provider value={value}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}