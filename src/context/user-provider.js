import React, { Component } from 'react'
import UserContext from './user-context'

class UserProvider extends Component {
    state ={
        user_id: window.sessionStorage.user_id,
        decks: [],
        updateId: (id) => 
        this.setState({
            user_id: id
        }) ,
        updateDecks: (decks) =>
        this.setState({
            decks
        }),
        clearId: () =>
        this.setState({
            user_id: null
        })
    };

    render() {
        return(
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

export default UserProvider;