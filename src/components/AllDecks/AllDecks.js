import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import DeckApiService from '../../services/deck-api-service'
import UserContext from '../../context/user-context'
import config from '../../../src/config'
import './AllDecks.css'

export default class AllDecks extends Component {
    static contextType = UserContext;
   constructor(props){
       super(props)
       this.state ={
        decks: [],
        newDeckName: '',
    }
    this.clearDeckName = this.clearDeckName.bind(this)
   }
   
   
    deleteDeck = (event, deck) => {
        event.preventDefault()
        DeckApiService.deleteDeck(deck)
        let lessDecks = this.context.decks.filter(d => d.deck_id !== deck)
        this.context.updateDecks(lessDecks)
        this.setState({decks: lessDecks})
    }

    renderDecks() {
        const {decks = []} = this.context
        let parsed = JSON.parse(window.sessionStorage.decks)
        console.log(parsed[0].deck_id)
        return decks.map(deck =>
            <div className='deck' key={deck.deck_id}>
                    <Link className='deckLink' to={`/deck/${deck.deck_id}`}>{deck.deck_name}</Link>
                    <button onClick={e => this.deleteDeck(e, deck.deck_id)}>Delete deck</button>
                </div>
            )
    }

    clearDeckName = () => {
        this.setState({
            newDeckName: '',
           
        })
    }

    setNewDecks = (deck) => {
        this.context.addDeck(deck)
        this.setState({decks: this.context.decks})
        window.sessionStorage.setItem(config.DECKS, this.context.decks)
    }

    addNewDeck = (event) => {
        event.preventDefault()
        DeckApiService.postDeck(this.context.user_id, this.state.newDeckName)
        .then(deck => this.setNewDecks(deck))
        this.clearDeckName()
        }

    render(){
        const handleChange=(event)=>{
            this.setState({
                newDeckName:event.target.value
            })
        }
        
        return(
            <>
            <p>My Decks Number of decks {this.state.decks.length}</p>
                {this.renderDecks()}
                <br/>
                <form onSubmit={this.addNewDeck}>
                    <legend>Start a new deck</legend>
                    <label>Deck Name: </label>
                    <input type='text' name='deck_name' value={this.state.newDeckName} onChange={handleChange}></input>
                    <input type='submit' value='Go'/>
                </form>
                
            </>
        )
    }
}