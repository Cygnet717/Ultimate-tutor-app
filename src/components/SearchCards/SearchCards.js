import React, {Component} from 'react'
import CardResults from '../CardResults/CardResults'
import MTGCardSearchService from '../../services/mtgcard-api-service'

import './SearchCards.css'

export default class SearchCards extends Component {
    
    constructor(){
        super();
        this.handleSubmit= this.handleSubmit.bind(this)

        this.state = {
            cards: [],
        }
    }

    

    handleSubmit(event){
        event.preventDefault();
        const data = new FormData(event.target);
        let string ='';
        if(data.get('name')){
            string = string.concat('name='+data.get('name')+'&')
        }
        if(data.get('colorIdentity')){
            string = string.concat('colorIdentity='+data.getAll('colorIdentity')+'&')
        }
        if(data.get('cardType')){
            string = string.concat('type='+data.get('cardType')+'&')
        }
        MTGCardSearchService.getSearchResults(string)
        .then(res => {
            this.setState({
                cards: res.cards,
            })
        })
    }

    render(){
        const cardResults = this.state.cards.map((card, i) =>{
           return <CardResults {...card} key={i}/>
        })
        return(
            <div>
                <section>
                    <form id='SearchForm' name='SearchForm' onSubmit={this.handleSubmit}>
                        <legend>Search for cards</legend>
                        <label htmlFor='cardName'>Card Name: </label> 
                            <input id='cardName' type='text' name='name' placeholder='Black Lotus'/>
                        <br/>
                        <label htmlFor='colorIdentity'>Color Identity:</label> 
                        <br/>
                            <input id='colorIdentityRed' type='checkbox' name='colorIdentity' value='r'/>Red
                            <input id='colorIdentityGreen' type='checkbox' name='colorIdentity' value='g'/>Green
                            <input id='colorIdentityWhite' type='checkbox' name='colorIdentity' value='w'/>White
                            <input id='colorIdentityBlack' type='checkbox' name='colorIdentity'value='b'/>Black
                            <input id='colorIdentityBlue' type='checkbox' name='colorIdentity' value='u'/>Blue
                        <br/>
                        <label htmlFor='cardType'>Card Type: </label> 
                        <select name='cardType' id='cardType' defaultValue={'default'}>
                            <option disabled hidden value='default'>Select</option>
                            <option id='cardType' name='type' value='Creature'>
                                Creature</option>
                            <option id='cardType' name='type' value='Instant'>
                                Instant</option>
                            <option id='cardType' name='type' value='Sorcery'>
                                Sorcery</option>
                            <option id='cardType' name='type' value='planeswalker'>
                                PlanesWalker</option>
                            <option id='cardType' name='type' value='enchantment'>
                                Enchantment</option>
                        </select>
                        <br/>
                        <input type='reset'/>
                        <input type='submit' value='Search'/>
                    </form>
                </section>
                Results:<br/>
                <div className='cardsDisplay'>
                {cardResults}
                </div>
            </div>
        )
    }
}
//