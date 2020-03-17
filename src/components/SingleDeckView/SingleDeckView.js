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
        }
    };

    countType(currenttype){
        let obj = {};
        let typeFilteredList = this.state.deckList.filter(card =>{ 
            if(card.type.search(currenttype) >= 0){
                return card
            }
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

    //consolidateCardDisplay(type){
        
        //add up all of the same card
        //type.state.map(card =>
        //    <div key={card.card_id}>
        //        <p>{card.card_name}</p>
        //    </div>
        //)
    //}

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
                        return <div className='typedisplay' key={type.name}>
                        <h4>{type.name} X {type.state.length}</h4>
                    {type.state.map(card => {
                        if(card.count > 1){
                        return <p key={card.card_id}>{card.card_name} X {card.count}</p>}
                        else { return <p key={card.card_id}>{card.card_name}</p>}
                        })}
                        </div>
                    })}
                </div>
                : 
                <div className='cardsDisplay'>
                    {this.state.deckList.map(card => 
                        <div className='card' key={card.card_id}>
                            <p className='cardName'>{card.card_name}</p>
                            <img alt={card.card_name} src={card.image_url}/>
                            <br/>
                            <button onClick={e => this.deleteCard(e, card.card_id)}>remove</button>
                        </div>
                    )}
                </div> 
                }

            <Link to='/SearchCards'><button className='button'>Add Cards</button></Link>
            </section>
        )
    }
};