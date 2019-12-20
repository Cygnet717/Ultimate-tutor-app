import React, {Component} from 'react'
import CardResults from '../CardResults/CardResults'
import MTGCardSearchService from '../../services/mtgcard-api-service'
import logo from '../Images/731.gif'
import paramOptions from './SearchParamsData'

import './SearchCards.css'

export default class SearchCards extends Component {
    
    constructor(){
        super();
        this.handleSubmit= this.handleSubmit.bind(this)

        this.state = {
            cards: [],
            thinking: false,
            power: '',
            powerNum: '',
            toughness: '',
            toughnessNum: '',
            expanded: false,
            visible: 'hidden'
        }
    }

    executeScroll= () => {
        window.scrollTo({
            top: 600,
            behavior: 'smooth'
        })
    }

    setValidCards =(res)=> {
        let validCards = res.cards.filter(i =>
            i.imageUrl !== undefined
        )
        this.setState({
            cards: validCards,
            thinking: false
        })
        this.executeScroll()
    }

    handleSubmit=(event)=>{
        event.preventDefault();
        this.setState({
            thinking: true,
            cards: []
        })
        const data = new FormData(event.target);
        let string ='';
        let params = ['name', 'types', 'supertypes', 'subtypes', 'rarity']
        params.map(i=>{
            if(data.get(i)){
                string = string.concat(i+'='+data.get(i)+'&')
            }
        })
        if(this.state.power){
            string = string.concat('power='+this.state.power+'&')
        }
        if(this.state.toughness){
            string = string.concat('toughness='+this.state.toughness+'&')
        }
        if(data.get('colorIdentity')){
            string = string.concat('colorIdentity='+data.getAll('colorIdentity')+'&')
        }
        
        MTGCardSearchService.getSearchResults(string)
        .then(res => this.setValidCards(res))
    }

    expandCollapse = () => {
        if(this.state.expanded){
            this.setState({
                visible: 'hidden',
                expanded: false,
        })
        } else {
            this.setState({
                visible: '',
                expanded: true,
            })
        }
    }

    renderThinking() {return <img id='thinking' src={logo} alt='loading...'/>}

    render(){
        const cardResults = this.state.cards.map((card, i) =>{
            return <CardResults {...card} key={i}/>
        })
        const updatePower=(event)=>{
            this.setState({
                power: event.target.value
            })
        }
        const updatePowerNum=(event)=>{
            this.setState({
                powerNum: event.target.value
            })
        }
        const updateToughness=(event)=>{
            this.setState({
                toughness: event.target.value
            })
        }
        const updateToughnessNum=(event)=>{
            this.setState({
                toughnessNum: event.target.value
            })
        }
        return(
            <div>
                <section>
                    <form id='SearchForm' name='SearchForm' onSubmit={this.handleSubmit}>
                        <legend>Search for cards</legend>
                        <input className='formbutton' type='reset' value='Reset Form'/>
                        <label htmlFor='cardName' className='searchLabel'>Card Name: </label> 
                            <input id='cardName' type='text' className='selectStyle' name='name' placeholder='Black Lotus'/>

                        <label htmlFor='colorIdentity'>Color Identity:</label> 
                        <div className='colorCheckboxes'>
                            <input id='colorIdentityRed' type='checkbox' name='colorIdentity' value='r'/>Red
                            <input id='colorIdentityGreen' type='checkbox' name='colorIdentity' value='g'/>Green
                            <input id='colorIdentityWhite' type='checkbox' name='colorIdentity' value='w'/>White
                            <input id='colorIdentityBlack' type='checkbox' name='colorIdentity'value='b'/>Black
                            <input id='colorIdentityBlue' type='checkbox' name='colorIdentity' value='u'/>Blue
                        </div>
                        <label htmlFor='types' className='searchLabel'>Card Type: </label> 
                        <select name='types' id='types' className='selectStyle' defaultValue={'default'}>
                            <option disabled hidden value='default'>Select</option>
                            {paramOptions.types.map(i => {
                                return <option id='types' key={i} name='types' value={i}>{i}</option>
                            })}
                        </select>

                        <div className={`collapseSearch ${this.state.visible}`}>
                            <label htmlFor='supertypes' className='searchLabel'>Supertype:</label>
                            <select name='supertypes' id='supertypes' className='selectStyle' defaultValue={'default'}>
                                <option disabled hidden value='default'>Select</option>
                                    {paramOptions.supertypes.map(i => {
                                        return <option id='supertypes' key={i} name='supertypes' value={i}>{i}</option>
                                    })}
                            </select>

                            <label htmlFor='subtypes' className='searchLabel'>Subtype:</label>
                            <input type='text' list='subtypes' className='selectStyle' name='subtypes'/>
                            <datalist id='subtypes' >
                                {paramOptions.subtypes.map(i => {
                                        return <option id='subtypes' key={i} name='subtypes' value={i}>{i}</option>
                                    })}
                            </datalist>

                            <label htmlFor='rarity' className='searchLabel'>Rarity:</label>
                            <select name='rarity' id='rarity' className='selectStyle' defaultValue={'default'}>
                                <option disabled hidden value='default'>Select</option>
                                    {paramOptions.rarity.map(i => {
                                        return <option id='rarity' key={i} name='rarity' value={i}>{i}</option>
                                    })}
                            </select>

                            <label htmlFor='power' className='searchLabel'>Power:</label>
                            <div className='p_t'>
                                <div>
                                    <input type='radio' onChange={updatePower} id='power' value='*' name='power'/>
                                    <span className='variablep_t'>*</span>
                                </div>
                                <br/>
                                <div>
                                    <input type='radio' name='power' onChange={updatePower} value={this.state.powerNum}/>
                                    <input type='number'  onChange={updatePowerNum} id='powerNum' name='powerNum'/>
                                </div>
                            </div>
                            <label htmlFor='toughness' className='searchLabel'>Toughness:</label>
                            <div className='p_t'>
                                <div>
                                    <input type='radio' onChange={updateToughness} id='toughness' value='*' name='toughness'/>
                                    <span className='variablep_t'>*</span>
                                </div>
                                <br/>
                                <div>
                                    <input type='radio' id='toughnessRadio' name='toughness' onChange={updateToughness} value={this.state.toughnessNum}/>
                                    <input type='number'  onChange={updateToughnessNum} id='toughnessNum' name='toughnessNum'/>
                                </div>
                            </div>
                        </div>
                        <input className='collapseButton' onClick={this.expandCollapse} type='button' value='Expand'/>
                        <input className='formbutton' type='reset' value='Reset Form'/>
                        <input className='formbutton' type='submit' value='Search'/>
                    </form>
                </section>
                <div className='resultsSection'>
                {this.state.thinking || this.state.cards ===[] ? <span>Results</span>: <span><br/><br/></span>}
                </div>
                <br/>
                <div className='cardsDisplay'>
                {this.state.thinking ? this.renderThinking() : cardResults}
                </div>
            </div>
        )
    }
}
//