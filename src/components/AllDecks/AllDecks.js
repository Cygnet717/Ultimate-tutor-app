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
        decks: [],
        newDeckName: '',
        
        error: null
    }
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

    deleteDeck = (event, deck) => {
        event.preventDefault()
        DeckApiService.deleteDeck(deck)
        let lessDecks = this.state.decks.filter(d => d.deck_id !== deck)
        this.setState({
            decks: lessDecks
        })
    }

    renderDecks() {
        const {decks = []} = this.state
        return decks.map(deck =>
            <div className='deck' key={deck.deck_id}>
                    <Link className='deckLink' to='/deck/:deckId'>{deck.deck_name}</Link>
                    <button onClick={e => this.deleteDeck(e, deck.deck_id)}>Delete deck</button>
                </div>
            )
    }

    addNewDeck = (event) => {
        event.preventDefault()
        DeckApiService.postDeck(this.context.user_id, this.state.newDeckName)
        .then(deck => this.setState({
            ...this.state.decks.push(deck)
        }))
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