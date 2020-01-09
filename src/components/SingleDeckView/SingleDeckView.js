import React, { Component } from 'react'
import SingleDeckApiService from '../../services/Single-deck-api-service'
import UserContext from '../../context/user-context'
import { Link } from 'react-router-dom'
import './SingleDeckView.css'

export default class SingleDeckView extends Component {
    static contextType = UserContext;
    static defaultProps ={
        match: { params: {}},
    }

    constructor(props){
        super(props)

        this.state ={
            deckList: [],
            deck_id: null,
            deckName: '',
            Creature: 0,
            Sorcery: 0,
            Instant: 0,
            Enchantment: 0,
            Land: 0,
            Planeswalker: 0,
            listview: 'Card View',
        }
    }

    countType(currenttype){
        let obj = {}
        let count = this.state.deckList.filter(card =>{ 
           return card.type === currenttype
        })
        if(count.length !== 0){
            let name = count[0].type
            obj[name] = count.length
            this.setState(obj)
        }
    }

    sortByType=()=> {
        let types = ['Creature', 'Sorcery', 'Instant', 'Enchantment', 'Land', 'Planeswalker']
        types.map(currentType => 
            this.countType(currentType)
        )
    }

    listCardView =()=>{
        if(this.state.listview === 'Card View'){
            this.setState({listview: 'List View'})
        } else {
            this.setState({listview: 'Card View'})
        }
    }

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
    }

    deleteCard(e, id){
        e.preventDefault()
        SingleDeckApiService.deleteCard(id)
        let lessCards = this.state.deckList.filter(c => c.card_id !== id)
        this.setState({
            deckList: lessCards
        })
    }

    render() {
        if(!sessionStorage.user_id){
            return (<div>
                <h4>Oops you arn't logged in!</h4>
                <Link 
                    className='homeLink'
                    to='/'>
                    Home Page
                </Link>
                </div>)
        }
        
        return(
            <section>
            <h2 className='deckName'>{this.state.deckName}</h2>
            <div className='deckDetails'>
                <div className='tally'>Total: {this.state.deckList.length} </div>
                <div className='tally'>Creatures: {this.state.Creature} </div>
                <div className='tally'>Instants: {this.state.Instant} </div>
                <div className='tally'>Enchantments: {this.state.Enchantment}</div>
                <div className='tally'>Sorceries: {this.state.Sorcery}</div>
                <div className='tally'>Lands: {this.state.Land}</div>
                <div className='tally'>Planeswalkers: {this.state.Planeswalker}</div>
            </div>
            <button type='button' className='listview button' onClick={this.listCardView}>{this.state.listview}</button>
            <br/>
            {this.state.listview === 'Card View'
                ?
                <div className='cardsListDisplay'>
                    {this.state.deckList.map(card =>
                        <div key={card.card_id}>
                            <p>{card.card_name}</p>
                        </div>
                    )}
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
}