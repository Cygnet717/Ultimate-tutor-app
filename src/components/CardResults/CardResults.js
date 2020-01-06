import React, {Component} from 'react'
import './CardResults.css'
import UserContext from '../../context/user-context'
import SingleDeckApiService from '../../services/Single-deck-api-service';
//import styled, {keyframes} from 'styled-components'
//import {bounce} from 'react-animations'
//const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;



export default class CardResults extends Component{
    static contextType = UserContext;
    constructor(props){
        super(props);
        this.state = {
            classNames: "modal",
            selectedDeck: 0,
            buttonAbility: true,
            added: false,
            addedCard: '',
            addedToDeck: ''
        }
    }
    
    closeUp = () => {
        this.setState({ classNames: 'showmodal'});
    };

    removeCloseUp = () => {
        this.setState({ classNames: 'modal'});
    };

    revealConfirmation = (card) => {
        let thisDeck = this.context.decks.find(deck => Number(card.deck_id) === deck.deck_id);
        this.setState({
            added: true,
            addedCard: card.card_name,
            addedToDeck: thisDeck.deck_name
        });
    };

    addCardToDeck=(event)=>{
        event.preventDefault();
        SingleDeckApiService.postNewCard(
            this.props.name, 
            this.props.imageUrl, 
            this.props.multiverseid, 
            this.state.selectedDeck,
            this.props.types[this.props.types.length -1],
            )
        .then(res=> this.revealConfirmation(res))
    };

    handleDeckChange=(event)=>{
        event.preventDefault();
        this.setState({
            selectedDeck: event.target.value,
            buttonAbility: false,
        })
    };

    render(){
        const cardRulings = this.props.rulings.map((ruling, i) =>{
            return <p key={i}> {ruling.date}: {ruling.text} </p>
         })
    return(
        <section>
            <div className='card'>
                <p className='cardName'>{this.props.name}</p>
                <img alt={this.props.name} src={this.props.imageUrl} onClick={this.closeUp}/><br/>
                <form 
                id={this.props.multiverseid} 
                onSubmit={this.addCardToDeck}
                >
                    <select name='decklist' form='decklist' value={this.state.selectedDeck} onChange={this.handleDeckChange}>
                        <option value='none'>Pick a deck</option>
                        {this.context.decks.map(deck =>
                            <option type='select' name='deck' key={deck.deck_id} value={deck.deck_id}>{deck.deck_name}</option>
                            )}   
                    </select>
                    <br/>
                    <input className='addToDeckButton' type='submit' value='Add to deck' disabled={this.state.buttonAbility}/>
                </form>

                <div className='addedConfirmation'>
                    {this.state.added? <span>Added {this.state.addedCard} to {this.state.addedToDeck}</span>: <span></span>}
                </div>
                    
                <div id="myModal" className={this.state.classNames}>
                    <span className="close" onClick={this.removeCloseUp}>&times;</span>
                    <img className="modal-content" alt={this.props.name} src={this.props.imageUrl}/>
                    <div id="caption">Rulings: {cardRulings}</div>
                </div>
            </div>    
        </section>
    )
}
}
