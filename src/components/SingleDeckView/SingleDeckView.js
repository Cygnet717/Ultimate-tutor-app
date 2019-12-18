import React, { Component } from 'react'
import SingleDeckApiService from '../../services/Single-deck-api-service'
import UserContext from '../../context/user-context'

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
            <br/>
                <div className='cardsDisplay'>
                    {this.state.deckList.map(card => 
                        <div className='card' key={card.card_id}>
                            <img alt={card.card_name} src={card.image_url}/>
                            <br/><button onClick={e => this.deleteCard(e, card.card_id)}>remove</button>
                        </div>
                        )}
                </div>
            </section>
        )
    }
}