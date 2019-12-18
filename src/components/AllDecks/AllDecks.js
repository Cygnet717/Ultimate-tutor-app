import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import DeckApiService from '../../services/deck-api-service'
import UserContext from '../../context/user-context'
import './AllDecks.css'

export default class AllDecks extends Component {
    static contextType = UserContext;
   constructor(props){
       super(props)
       this.state ={

        newDeckName: '',
        error: null
    }
   }
   
    deleteDeck = (event, deck) => {
        event.preventDefault()
        DeckApiService.deleteDeck(deck)
        let lessDecks = this.context.decks.filter(d => d.deck_id !== deck)
        this.setState({
            decks: lessDecks
        })
    }

    renderDecks() {
        const {decks = []} = this.context
        return decks.map(deck =>
            <div className='deck' key={deck.deck_id}>
                    <Link className='deckLink' to={`/deck/${deck.deck_id}`}>{deck.deck_name}</Link>
                    <button onClick={e => this.deleteDeck(e, deck.deck_id)}>Delete deck</button>
                </div>
            )
    }

    addNewDeck = (event) => {
        event.preventDefault()
        DeckApiService.postDeck(this.context.user_id, this.state.newDeckName)
        .then(deck => this.context.addDeck(deck))
        }

    render(){
        const handleChange=(event)=>{
            this.setState({
                newDeckName:event.target.value
            })
        }

        
        return(
            <>
                <p>My Decks</p>
                {this.state.error? <p className='red'>There was an error, try again</p>
                    : this.renderDecks()}
                <br/>
                <form onSubmit={this.addNewDeck}>
                    <legend>Start a new deck</legend>
                    <label>Deck Name: </label>
                    <input type='text' name='deck_name' onChange={handleChange}></input>
                    <button type='submit' >Go</button>
                </form>
                
            </>
        )
    }
}