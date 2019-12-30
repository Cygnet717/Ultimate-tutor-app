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
            hidden: 'hidden',
            buttonClass: '',
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
        this.setState({hidden: 'flex',
            buttonClass: 'hidden'})
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
        const {deckId} = this.props.match.params
        let deckName = this.context.decks.find(deck => deck.deck_id === Number(deckId))
        this.setState({ 
            deck_id: deckId,
            deckName: deckName.deck_name,
        })
        SingleDeckApiService.getDeckList(deckId)
            .then(cards => this.setState({
                deckList: cards,
            }))
            
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
        return(
            <section>
            <h2>{this.state.deckName}</h2>
            <button type='button' className={`viewButton ${this.state.buttonClass}`} onClick={this.sortByType}>View Deck Tally</button>
            <div className={`deckDetails ${this.state.hidden}`}>
                <span>Total:<br/> {this.state.deckList.length} </span>
                <span>Creatures:<br/> {this.state.Creature} </span>
                <span>Instants:<br/> {this.state.Instant} </span><br/>
                <span>Enchantments:<br/> {this.state.Enchantment}</span>
                <span>Sorceries:<br/> {this.state.Sorcery}</span>
                <span>Lands:<br/>{this.state.Land}</span>
                <span>Planeswalkers: <br/>{this.state.Planeswalker}</span>
            </div>
    <button type='button' className='listview button' onClick={this.listCardView}>{this.state.listview}</button>
            <br/>
            {this.state.listview === 'Card View'?
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
                            <br/><button onClick={e => this.deleteCard(e, card.card_id)}>remove</button>
                        </div>
                        )}
                </div> 
                }
                <Link className='searchLink' to='/SearchCards'>Add Cards</Link>
            </section>
        )
    }
}