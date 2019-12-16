import React, { Component } from 'react'

export const UserContext = React.createContext()

class UserProvider extends Component {
    state ={
        user_id: 123,
        updateId: (id) => 
        this.setState({
            user_id: id
        }) 
    };

    setUserId(user_id) {
        console.log('setting id')
        this.setState({ user_id})
    }

    render() {
        return(
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

export default UserProvider;