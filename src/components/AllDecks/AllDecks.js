import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import DeckApiService from '../../services/deck-api-service'
import DecksContext from '../../Context/decksContext'
import './AllDecks.css'

export default class AllDecks extends Component {
    static contextType = DecksContext

    state ={
        decks: [],
        error: null
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
                    <button>Delete deck</button>
                </div>
            )
    }

    render(){
        return(
            <>
                <p>My Decks</p>
                {this.state.error? <p className='red'>There was an error, try again</p>
                    : this.renderDecks()}
                <button>Start New Deck</button>
            </>
        )
    }
}