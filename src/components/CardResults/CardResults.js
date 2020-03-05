import React, {Component} from 'react';
import './CardResults.css';
import UserContext from '../../context/user-context';
import SingleDeckApiService from '../../services/Single-deck-api-service';

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
            this.props.image_uris.normal, 
            this.props.id, 
            this.state.selectedDeck,
            this.props.type_line,
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
        /*const cardRulings = this.props.rulings.map((ruling, i) =>{
            return <p key={i}> {ruling.date}: {ruling.text} </p>
         })

        const legalFormats = this.props.legalities.map(i =>{ 
            return <p>{i}</p>
        })*/
console.log(this.props.legalities[0])
         
        function image(card) {
             if(card.layout === 'transform'){
                 return card.card_faces[1].image_uris.normal
//send both sides and make them flipable
             } else {
                 return card.image_uris.normal
             }
         }
    return(
        <section>
            <div className='card'>
                <p className='cardName'>{this.props.name}</p>
                <img alt={this.props.name} src={image(this.props)} onClick={this.closeUp}/><br/>
                <form 
                id={this.props.id} 
                onSubmit={this.addCardToDeck}
                >
                    <select name='decklist' id='decklist' form='decklist' value={this.state.selectedDeck} onChange={this.handleDeckChange}>
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
                    <img className="modal-content" alt={this.props.name} src={image(this.props)}/>
                        
                    <div id="caption">Rulings: 'rulings'</div>
                </div>
            </div>    
        </section>
    )
}
}
