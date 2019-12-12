import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import DeckApiService from '../../services/deck-api-service'
import './AllDecks.css'

export default class AllDecks extends Component {

    state ={
        decks: [],
        error: null
    }

    setUserId(){
        console.log('testing this works')
    }
    
    setDecks(decks){
        this.setState({decks})
    }
    setError = error => {
        console.error(error)
        this.setState({ error })
      }

      clearError = () => {
        this.setState({ error: null })
      }

    componentDidMount() {
        this.clearError()
        DeckApiService.getDecks()
        .then(res => this.setDecks(res))
        .catch(this.setError)
    }

    renderDecks() {
        const {decks = []} = this.state
        return decks.map(deck =>
            <div className='deck'>
                    <Link key={deck.deck_id} className='deckLink' to='/deck/:deckId'>{deck.deck_name}</Link>
                    <button onClick={DeckApiService.deleteDeck(deck.deck_id)}>Delete deck</button>
                </div>
            )
    }

    testClick = ev => {
        ev.preventDefault()
        const { deck_name } = ev.target
        //console.log(this.state.decks)
        console.log(deck_name)
        }

    render(){
        return(
            <>
                <p>My Decks</p>
                {this.state.error? <p className='red'>There was an error, try again</p>
                    : this.renderDecks()}
                <br/>
                <form onSubmit={this.testClick}>
                    <legend>Start a new deck</legend>
                    <label>Deck Name: </label>
                    <input type='text' name='deck_name'></input>
                    <button type='submit' >Go</button>
                </form>
                
            </>
        )
    }
}