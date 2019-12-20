import React, { Component } from 'react'
import UserContext from './user-context'
import config from '../config'


class UserProvider extends Component {
    state ={
        user_id: window.sessionStorage.user_id,
        decks: JSON.parse(sessionStorage.getItem('decks')),

        updateDecks: (decks) => {
            let stringDecks = JSON.stringify(decks)
            window.sessionStorage.setItem(config.DECKS, stringDecks)
            this.setState({
                user_id: window.sessionStorage.user_id,
                decks: JSON.parse(window.sessionStorage.decks),
            }
            )
        },
        
        addDeck: (deck) => {
            let moreDecks = this.state.decks.push(deck)
            let stringDecks= JSON.stringify(moreDecks)
            window.sessionStorage.setItem(config.DECKS, stringDecks)
        },
        clearId: () =>
            this.setState({
                user_id: null,
               
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