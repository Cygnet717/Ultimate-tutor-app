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
        }
    }
    
    closeUp = () => {
        this.setState({ classNames: 'showmodal'})
    }

    removeCloseUp = () => {
        this.setState({ classNames: 'modal'})
    }

    addCardToDeck=(event)=>{
        event.preventDefault()
        SingleDeckApiService.postNewCard(
            this.props.name, 
            this.props.imageUrl, 
            this.props.multiverseid, 
            this.state.selectedDeck
            )
        .then(res=> console.log(res))
    }

    handleDeckChange=(event)=>{
        event.preventDefault()
        this.setState({selectedDeck: event.target.value})
    }

    render(){
        const cardRulings = this.props.rulings.map((ruling, i) =>{
            return <p key={i}> {ruling.date}: {ruling.text} </p>
         })
    return(
        <section>
            
                <div className='card'>
                    <p>{this.props.name}</p>
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
                        
                        </select><br/>
                        <input type='submit' value='Add to deck'/>
                    </form>
                    
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
