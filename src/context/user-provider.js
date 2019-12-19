import React, { Component } from 'react'
import UserContext from './user-context'
import config from '../config'


class UserProvider extends Component {
    state ={
        user_id: window.sessionStorage.user_id,
        decks: [],
        updateDecks: (decks) => {
            
            this.setState({
                user_id: window.sessionStorage.user_id,
                decks: decks
            })
            
        },
        saveDecksLocally(decks){
            window.sessionStorage.setItem(config.DECKS, JSON.stringify(decks))
          },
        addDeck: (deck) => {
            this.state.decks.push(deck)
        },
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