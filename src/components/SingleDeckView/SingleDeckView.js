import React, { Component } from 'react';
import SingleDeckApiService from '../../services/Single-deck-api-service';
import UserContext from '../../context/user-context';
import { Link } from 'react-router-dom';
import './SingleDeckView.css';

export default class SingleDeckView extends Component {
    static contextType = UserContext;
    static defaultProps ={
        match: { params: {}},
    };

    constructor(props){
        super(props)

        this.state ={
            deckList: [],
            deck_id: null,
            deckName: '',
            Creature: [],
            Sorcery: [],
            Instant: [],
            Enchantment: [],
            Land: [],
            Planeswalker: [],
            Artifact: [],
            listview: 'Card View',
            imageModalView: 'hidemodal',
            closeView: '',
        }
    };

    closeUp = (cardId) => {
        let selectedCardImage;
        for(let i=0; i<this.state.deckList.length; i++){
            if(this.state.deckList[i].card_id === cardId){
                selectedCardImage = this.state.deckList[i]
            }
        }
        this.setState({ 
            imageModalView: 'showmodal',
            closeView: selectedCardImage
        });
    };

    removeImageCloseUp = () => {
        this.setState({ 
            imageModalView: 'hidemodal',
            closeView: ''
        });
    };

    countType(currenttype){
        let obj = {};
        let typeFilteredList = this.state.deckList.filter(card =>{ 
            if(card.type.search(currenttype) >= 0){
                return card
            }
            return '';
        });
        let consolidated = [];
        typeFilteredList.forEach(card => {
            if(consolidated.find(j => j.card_name === card.card_name)){
                let index = consolidated.findIndex(j => j.card_name === card.card_name)
                consolidated[index].count++
            } else {
                consolidated.push({...card, count: 1})
            } 
        }, Object.create(null));
        if(typeFilteredList.length !== 0){
            let name = currenttype
            obj[name] = consolidated
            this.setState(obj)
        };
    };

    sortByType=()=> {
        let types = ['Creature', 'Sorcery', 'Instant', 'Enchantment', 'Land', 'Planeswalker', 'Artifact'];
        types.map(currentType => {
            this.countType(currentType);
            return 'return';
        })
    };

    listCardView =()=>{
        if(this.state.listview === 'Card View'){
            this.setState({listview: 'List View'})
        } else {
            this.setState({listview: 'Card View'})
        }
    };

    componentDidMount() {
        if(sessionStorage.user_id){
        const {deckId} = this.props.match.params
        let deckName = this.context.decks.find(deck => deck.deck_id === Number(deckId))
        this.setState({ 
            deck_id: deckId,
            deckName: deckName.deck_name,
        })
        SingleDeckApiService.getDeckList(deckId)
            .then(cards => {this.setState({
                deckList: cards,
            });
            this.sortByType()
            }
            )
        }
    };

    deleteCard(e, id){
        e.preventDefault()
        SingleDeckApiService.deleteCard(id)
        let lessCards = this.state.deckList.filter(c => c.card_id !== id)
        this.setState({
            deckList: lessCards
        })
    };

    totalCards(cardlist){
        let total = 0;
        for(let i=0; i<cardlist.length; i++){
            total= total + cardlist[i].count
        }
        return total
    };

    scrollToTop(){
        window.scrollTo(0, 0)
    }

    render() {
        if(!sessionStorage.user_id){
            return (
                <div>
                    <h4>Oops you arn't logged in!</h4>
                    <Link 
                    className='homeLink'
                    to='/'>
                        Home Page
                    </Link>
                </div>)
        };
        const types = [{name: 'Creature', state: this.state.Creature}, 
        {name: 'Sorcery', state: this.state.Sorcery}, 
        {name: 'Instant', state: this.state.Instant}, 
        {name: 'Enchantment', state: this.state.Enchantment}, 
        {name: 'Land', state: this.state.Land}, 
        {name: 'Planeswalker', state: this.state.Planeswalker},
        {name: 'Artifact', state: this.state.Artifact}]

        function closeUpGenerator (card) {
             if(card.closeView === ''){
                return
            }else if(card.closeView.image_url.indexOf(',') !== -1){
                let index = card.closeView.image_url.indexOf(',');
                let front = card.closeView.image_url.slice(0, index);
                let back = card.closeView.image_url.slice(index+2);
            return (
                <div>
                    <img className="modal-content" alt={card.closeView.card_name} src={front}/>
                    <img className="modal-content" alt={card.closeView.card_name} src={back}/>
                </div>
            )
            } else {
                return <img className="modal-content" alt={card.closeView.card_name} src={card.closeView.image_url}/>;
            }
        };
        return(
            <section>
                <h2 className='deckName'>{this.state.deckName}</h2>
                <div className='deckDetails'>
                    <div className='tally'>Total: {this.state.deckList.length} </div>
                    <div className='tally'>Creatures: {this.state.Creature.length} </div>
                    <div className='tally'>Instants: {this.state.Instant.length} </div>
                    <div className='tally'>Enchantments: {this.state.Enchantment.length}</div>
                    <div className='tally'>Sorceries: {this.state.Sorcery.length}</div>
                    <div className='tally'>Lands: {this.state.Land.length}</div>
                    <div className='tally'>Planeswalkers: {this.state.Planeswalker.length}</div>
                </div>
                <button type='button' className='listview button' onClick={this.listCardView}>{this.state.listview}</button>
                <br/>

                {this.state.listview === 'Card View'
                ?
                <div className='cardsListDisplay'>
                    {types.map(type => {
                        return (
                            <div className='typedisplay' key={type.name}>
                            <h4>{type.name} X {this.totalCards(type.state)}</h4>
                                {type.state.map(card => {
                                    if(card.count > 1){
                                    return <p className='viewCard' onClick={() => this.closeUp(card.card_id)} key={card.card_id}>{card.card_name} X {card.count}</p>}
                                    else { return <p className='viewCard'  onClick={() => this.closeUp(card.card_id)} key={card.card_id}>{card.card_name}</p>}
                                })}
                                
                            </div>
                        )
                    })}
                    <div className='dev typedisplay'>
                        SideBoard
                    </div>
                </div>
                : 
                <div className='cardsDisplay'>
                    {this.state.deckList.map(card => 
                        <div className='card' key={card.card_id}>
                            <p className='cardName'>{card.card_name}</p>
                            <img className='cardImage' alt={card.card_name} src={card.image_url}/>
                            <br/>
                            <button onClick={e => this.deleteCard(e, card.card_id)}>remove</button>
                        </div>
                    )}
                </div> 
                }

                <div id="imageModal" className={this.state.imageModalView}>
                    <span className="close" onClick={this.removeImageCloseUp}>&#x02717;</span>
                    {closeUpGenerator(this.state)}
                </div>

            <Link to='/SearchCards'><button onClick={() => this.scrollToTop()} className='button'>Add Cards</button></Link>
            </section>
        )
    }
};

/* */