import React, {Component} from 'react'
import { Link } from 'react-router-dom'
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
            searched: false,
            text: [],
            power: 'P',
            toughness: 'T',
            expanded: false,
            visible: 'hidden',
            exp_col: 'Expand',
            string: '',
            count: 1,
            lastResults: false,
        }
    }

    executeScroll= () => {
        window.scrollTo({
            top: 680,
            behavior: 'smooth'
        })
    }

    scrollUp =()=>{
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        })
    }

    setValidCards =(res)=> {
        let validCards = res.cards.filter(i =>
            i.imageUrl !== undefined
        )
        this.setState({
            cards: this.state.cards.concat(validCards),
            thinking: false
        })
        if(this.state.count === 1){this.executeScroll()}
    }

    handleSubmit=(event)=>{
        event.preventDefault();
        this.setState({
            thinking: true,
            searched: true,
            cards: []
        })
        const data = new FormData(event.target);
        let string ='';
        let params = ['name', 'types', 'supertypes', 'subtypes', 'rarity']
        params.map(i=>{
            if(data.get(i)){
                string = string.concat(i+'='+data.get(i)+'&')
            }
            return string
        })
        if(data.get('sets')){
            let selectedSet = paramOptions.sets.find(set => set.name === data.get('sets'))
            string = string.concat('sets='+ selectedSet.code+'&')
        }
        if(this.state.text.length !== 0){
            string = string.concat('text='+this.state.text+'&')
        }
        if(this.state.power !== 'P'){
            string = string.concat('power='+this.state.power+'&')
        }
        if(this.state.toughness !== 'T'){
            string = string.concat('toughness='+this.state.toughness+'&')
        }
        if(data.get('colorIdentity')){
            string = string.concat('colorIdentity='+data.getAll('colorIdentity')+'&')
        }
        this.setState({ 
            string,
            count: 1,
            lastResults: false,
        })
       this.sendFetch(string)
    }

    searchMore =()=>{
        this.setState({ 
            count: this.state.count+1,
            thinking: true,
         });
        let moreString = this.state.string + 'page='+(this.state.count+1);
        this.sendFetch(moreString)
    }

    sendFetch = (parameters) => {
        MTGCardSearchService.getSearchResults(parameters)
        .then(res =>{
            if(res.cards.length === 0){
                console.log('nutten')
                this.setState({ 
                    lastResults: true,
                    thinking: false 
                })
            } else if(res.cards.length < 100){
                console.log('somemore but thats it')
                this.setState({ lastResults: true});
                this.setValidCards(res)
            } else {
                console.log('not last results')
                this.setValidCards(res)
            }
        })
    }

    expandCollapse = () => {
        if(this.state.expanded){
            this.setState({
                visible: 'hidden',
                expanded: false,
                exp_col: 'Expand',
        })
        } else {
            this.setState({
                visible: '',
                expanded: true,
                exp_col: 'Collapse',
            })
        }
    }

    renderThinking() {return <img id='thinking' src={logo} alt='loading...'/>}

    moreButon() {
        if(this.state.thinking){
            return <img id='thinking' src={logo} alt='loading...'/>
        } else if(this.state.lastResults){
            return (<div>
                <span>No more cards match your criteria</span>
                <button className='moreoption'>New Search</button>
                </div>)
        } else {
            return (<div>
                <button className='moreoption' onClick={this.searchMore}>More Results</button>
                <button className='moreoption' onClick={this.scrollUp}>New Search</button>
                </div>)
        }
    }

    handleAddText = () => {
        this.setState({
            text: this.state.text.concat(document.getElementById("text").value)
        })
        document.getElementById("text").value = ''
    }

    clearTextState=()=> {
        this.setState({text: []})
    }

    
    
    render(){
        
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

        let cardResults = this.state.cards.map((card, i) =>{
            return <CardResults {...card} key={i}/>
        })

        if(this.state.cards.length === 0 && this.state.searched){
            cardResults = <p>No cards were found matching your criteria</p>
        }

        const updatePowerNum=(event)=>{
            if(document.getElementById('powerNum').value 
                !== event.target.value){
                document.getElementById('powerNum').value = ''
            }
            this.setState({
                power: event.target.value
            })
        }
        const updateToughnessNum=(event)=>{
            if(document.getElementById('toughnessNum').value 
                !== event.target.value){
                document.getElementById('toughnessNum').value = ''
            }
            this.setState({
                toughness: event.target.value
            })
        }

        
        return(
            <div>
                <section>
                    <form id='SearchForm' name='SearchForm' onSubmit={this.handleSubmit}>
                        <legend>Search for cards</legend>
                        <input className='formbutton' type='reset' value='Reset Form' onClick={this.clearTextState}/>
                        <label htmlFor='cardName' className='searchLabel'>Card Name: </label> 
                            <input id='cardName' type='text' className='selectStyle' name='name' placeholder='Black Lotus'/>
                        
                        <label>Exact text</label>
                            <input id='text' type='text' className='selectStyle' name='text' placeholder='hexproof'/>
                            <input type='button' value='Add' onClick={this.handleAddText}/>
                            <input type='button' value='Clear' onClick={this.clearTextState}/>
                            {<ul>Searching for:
                            {this.state.text.map((t, i)=>{
                            return <li key={i}>{t}</li>
                            })}
                            </ul>}

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

                            <label htmlFor='sets' className='searchLabel'>Set:</label>
                            <input type='text' list='sets' className='selectStyle' name='sets'/>
                            <datalist id='sets' >
                            {paramOptions.sets.map(i => {
                                return <option id='setoption' key={i.code} name={i.code} value={i.name}>{i.name}</option>
                                })}
                            </datalist>

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

                            <div className='p_t'>
                                <div className='inputs'>
                                    <div className='powerInput'>
                                        <div className='black'>
                                            <label htmlFor='power' className='searchLabelPT'>Power:</label>
                                        </div>
                                        <div className='options'>
                                            <input type='button' value='*' className='variablePTbutton' onClick={updatePowerNum} />
                                            <div>
                                                <input type='number' className='numInput' onChange={updatePowerNum} id='powerNum' name='powerNum'/>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className='toughnessInput'>
                                        <div className='black'>
                                            <label htmlFor='toughness' className='searchLabelPT'>Toughness:</label>
                                        </div>
                                        <div className='options'>
                                            <input type='button' value='*' className='variablePTbutton' onClick={updateToughnessNum} />
                                            <div>
                                                <input type='number' className='numInput' onChange={updateToughnessNum} id='toughnessNum' name='toughnessNum'/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='p_tdisplay'>
                                    <span>{this.state.power}/{this.state.toughness}</span>
                                </div>
                            </div>
                        </div>
                        <input className='collapseButton' onClick={this.expandCollapse} type='button' value={this.state.exp_col}/>
                        <input className='formbutton' type='reset' value='Reset Form' onClick={this.clearTextState}/>
                        <input className='formbutton' type='submit' value='Search'/>
                    </form>
                </section>
                <div className='resultsSection'>
                {this.state.thinking || this.state.cards.length !== 0 ? <span>Results</span>: <span></span>}
                </div>
                <br/>
                <div className='cardsDisplay'>
                {this.state.thinking && this.state.count === 1? this.renderThinking() : cardResults}
                </div>
                {this.state.cards.length === 0 ?<div/>: this.moreButon()}
            </div>
        )
    }
}
//