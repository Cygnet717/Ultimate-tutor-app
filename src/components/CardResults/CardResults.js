import React, {Component} from 'react';
import './CardResults.css';
import UserContext from '../../context/user-context';
import MTGCardSearchService from '../../services/mtgcard-api-service';
import SingleDeckApiService from '../../services/Single-deck-api-service';

export default class CardResults extends Component{
    static contextType = UserContext;
    constructor(props){
        super(props);
        this.state = {
            imageModalView: "hidemodal",
            rulingsModalView: "hidemodal",
            selectedDeck: 0,
            buttonAbility: true,
            rulings: [],
            added: false,
            addedCard: '',
            addedToDeck: ''
        }
    }

    getCardRulings(uri) {
        MTGCardSearchService.getRulings(uri)
        .then(res =>{
            if(res.data.length > 0){
                this.setState({
                    rulingsModalView: 'showmodal',
                    rulings: res.data,
            })
            } else {
                this.setState({
                    rulingsModalView: 'showmodal',
                    rulings: [],
                })
            }
        })
        .catch(res => console.log(res.warnings))
    }
    
    closeUp = () => {
        this.setState({ imageModalView: 'showmodal'});
    };

    removeImageCloseUp = () => {
        this.setState({ imageModalView: 'hidemodal'});
    };

    removeRulingsCloseUp = () => {
        this.setState({ rulingsModalView: 'hidemodal'})
    }

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
        
        console.log(this.state.selectedDeck)
        
        SingleDeckApiService.postNewCard(
            this.props.name, 
            this.props.image_uris.normal, 
            this.props.multiverse_ids[0], 
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
        function image(card) {
             if(card.layout === 'transform'){
                 //console.log(card.card_faces[0].image_uris.border_crop)
                 return card.card_faces[1].image_uris.border_crop
//send both sides and make them flipable
             } else {
                 return card.image_uris.border_crop
             }
         }
        const rulingsUri = this.props.rulings_uri

        let foundRulings= <p className='caption'>There are no rulings for this card at this time.</p>;
        if(this.state.rulings.length > 0){
            foundRulings = this.state.rulings.map(rulingObj => {
                return <p className='caption'>{rulingObj.published_at}: {rulingObj.comment}</p>
            })
        } 
        
    return(
            <div className='card'>
                <p className='cardName'>{this.props.name}</p>
                <div className='bottomCard'>
                    <img className='cardImage' alt={this.props.name} src={image(this.props)} onClick={this.closeUp}/><br/>
                    <button className='cardButton' onClick={() => this.getCardRulings(rulingsUri)}>Rulings</button>
                    <form id={this.props.id} onSubmit={this.addCardToDeck}>
                        <select className='pickDeckOption' name='decklist' id='decklist' form='decklist' value={this.state.selectedDeck} onChange={this.handleDeckChange}>
                            <option value='none'>Pick a deck</option>
                            {this.context.decks.map(deck =>
                                <option type='select' name='deck' key={deck.deck_id} value={deck.deck_id}>{deck.deck_name}</option>
                                )}   
                        </select>
                        <br/>
                        <input className='addToDeckButton cardButton' type='submit' value='Add to deck' disabled={this.state.buttonAbility}/>
                    </form>
                </div>
                <div className='addedConfirmation'>
                    {this.state.added? <span>Added {this.state.addedCard} to {this.state.addedToDeck}</span>: <span></span>}
                </div>
                <div id="rulingsModal"className={this.state.rulingsModalView}>
                    <span className="close" onClick={this.removeRulingsCloseUp}>&#x02717;</span>
                    {foundRulings}
                    <div id="legalities" className='caption'>
                        <p>Standard: {this.props.legalities.standard}</p>
                        <p>Pioneer: {this.props.legalities.pioneer}</p>
                        <p>Modern: {this.props.legalities.modern}</p>
                        <p>Legacy: {this.props.legalities.legacy}</p>
                        <p>Vintage: {this.props.legalities.vintage}</p>
                        <p>Brawl: {this.props.legalities.brawl}</p>
                    </div>
                </div>
                <div id="imageModal" className={this.state.imageModalView}>
                    <span className="close" onClick={this.removeImageCloseUp}>&#x02717;</span>
                    <img className="modal-content" alt={this.props.name} src={image(this.props)}/>
                    
                </div>
            </div>    
    )
}
}
