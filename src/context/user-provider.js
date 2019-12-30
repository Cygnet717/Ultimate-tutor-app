import React, { Component } from 'react'
import UserContext from './user-context'
import config from '../config'


class UserProvider extends Component {
    state ={
        user_id: window.localStorage.user_id,
        decks: JSON.parse(localStorage.getItem('decks')),

        updateDecks: (decks) => {
            let stringDecks = JSON.stringify(decks)
            window.localStorage.setItem(config.DECKS, stringDecks)
            this.setState({
                user_id: window.localStorage.user_id,
                decks: JSON.parse(window.localStorage.decks),
            }
            )
            return 'done'
        },
        
        addDeck: (deck) => {
            let moreDecks = this.state.decks.push(deck)
            let stringDecks= JSON.stringify(moreDecks)
            window.localStorage.setItem(config.DECKS, stringDecks)
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