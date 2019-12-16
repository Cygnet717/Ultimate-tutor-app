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
        user_id: null,
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

    setUserId= id => {
        this.setState({ user_id: id})
    }

    componentDidMount() {
        this.clearError()
        DeckApiService.getDecks()
        .then(res => this.setDecks(res))
        .catch(this.setError)

        let value = this.context
        this.setUserId(value)
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

    handleChange(event){
        this.setState({
            newDeckName:'malarku'
        })
    }

    addNewDeck = () => {
        console.log('add new deck')
        DeckApiService.postDeck(this.state.user_id, this.state.newDeckName)
        .then(deck => this.setState({
            ...this.state.decks, deck
        }))
        }

    render(){
        return(
            <>
                <p>My Decks</p>
                {this.state.error? <p className='red'>There was an error, try again</p>
                    : this.renderDecks()}
                <br/>
                <form onSubmit={this.addNewDeck}>
                    <legend>Start a new deck</legend>
                    <label>Deck Name: </label>
                    <input type='text' name='deck_name' onChange={this.handleChange}></input>
                    <button type='submit' >Go</button>
                </form>
                
            </>
        )
    }
}