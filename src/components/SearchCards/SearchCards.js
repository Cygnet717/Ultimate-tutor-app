import React, {Component} from 'react';
//import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import CardResults from '../CardResults/CardResults';
import MTGCardSearchService from '../../services/mtgcard-api-service';
import logo from '../Images/731.gif';
import paramOptions from './SearchParamsData';

import './SearchCards.css';

export default class SearchCards extends Component {
    
    constructor(props){
        super(props);
        this.handleSubmit= this.handleSubmit.bind(this)

        this.state = {
            cards: [],
            thinking: false,
            searched: false,
            text: [],
            validType: false,
            Creature: [],
            Planeswalker: [],
            powerTypes: [],
            toughnessTypes: [],
            setOptions: [],
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

    handleSubmit=(event)=> {
        event.preventDefault();
        this.setState({
            thinking: true,
            searched: true,
            cards: []
        })
        const data = new FormData(event.target);
        let string ='';
        let queryParams = [
            'types', 'supertypes', 'typeOption', 'additionalType'
        ];
        queryParams.map(i => {
            if(data.get(i)){
                string = string.concat(data.get(i))
            }
            return string;
        });
        console.log(this.state.text)
        if(this.state.text.length !== 0){
            this.state.text.map(t => 
                string = string.concat('o:"' + t + '"+')
                )
            
        }
        if(data.get('sets')){
            let selectedSet = this.state.setOptions.find(set => 
                JSON.stringify(set.name) === JSON.stringify(data.get('sets'))
            )
            console.log(selectedSet)
            if(data.get('blockSearch')){
                string = string.concat('b:'+ selectedSet.code+'+')
            } else {
                string = string.concat('s:'+ selectedSet.code+'+')
            }
        }
        console.log(string)
    }

    /*handleSubmit=(event)=>{
        
        
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
    }*/

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
                this.setState({ 
                    lastResults: true,
                    thinking: false 
                })
            } else if(res.cards.length < 100){
                this.setState({ lastResults: true});
                this.setValidCards(res)
            } else {
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
                <span className='alert'>No more cards match your criteria</span>
                <button className='moreoption button'>New Search</button>
                </div>)
        } else {
            return (<div>
                <button className='moreoption button' onClick={this.searchMore}>More Results</button>
                <button className='moreoption button' onClick={this.scrollUp}>New Search</button>
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

   keyPressed=(event)=>{
       if(event.key === 'Enter'){
           event.preventDefault()
        this.handleAddText()
       } 
   }

   removeItem=(event)=>{
       let index = event.target.value
       let currentText = this.state.text
        let newTextArr = currentText.slice(0, index).concat(currentText.slice(index+1, currentText.length))
        this.setState({ text: newTextArr})
   }

   

    componentDidMount(){
        let currentComponent = this;
        async function fetchDropdowns(){
            let creatTypes = await fetch('https://api.scryfall.com/catalog/creature-types').then(res=> res.json());
            let planeswTypes = await fetch('https://api.scryfall.com/catalog/planeswalker-types').then(res=> res.json());
            let powTypes = await fetch('https://api.scryfall.com/catalog/powers').then(res=> res.json());
            let toughTypes = await fetch('https://api.scryfall.com/catalog/toughnesses').then(res=> res.json());
            let setOpt = await fetch('https://api.scryfall.com/sets').then(res=> res.json());
            
            let filteredSetOptions = setOpt.data.filter(set => set.set_type !== "token")

            currentComponent.setState({
                Creature: creatTypes.data,
                Planeswalker: planeswTypes.data,
                powerTypes:powTypes.data,
                toughnessTypes: toughTypes.data,
                setOptions: filteredSetOptions
            })
        };

        fetchDropdowns();
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

        let showNewDropdown = <p>wrong</p>

        if(this.state.validType !== false){
            showNewDropdown = (
                <select name='additionalType' id='additionaltypes' className='additionaltypes' defaultValue={'default'}>
                    <option hidden value='default'>{this.state.validType[0]}</option> 
                    {this.state.validType[1][0].map(i => {
                        return <option id='power' key={i} name='power' value={'t:'+i+'+'}>{i}</option>
                    })} 
                </select>
            )
        }
    
        let additionalTypesDropdown = (event)=>{
            let type = event.target.value.slice(2, event.target.value.length-1);
            let typeArray = [];
            if(type === 'Creature'){
                typeArray.push(this.state.Creature)
            } else if (type === 'Planeswalker'){
                typeArray.push(this.state.Planeswalker)
            } else if (type === 'Land'){
                typeArray.push(paramOptions.landTypes)
            } else if (type === 'Enchantment'){
                typeArray.push(paramOptions.enchantmentTypes)
            } else if (type === 'Artifact'){
                typeArray.push(paramOptions.artifactTypes)
            } else if (type === 'Instant' || type === 't:Sorcery+'){
                typeArray.push(paramOptions.instSorcTypes)
            } 

            if(typeArray.length > 0){
            this.setState({ validType: [type, typeArray]})
            }
       }
        return(
            <div className='outer'>
                <section className='section'>
                    <form id='SearchForm' name='SearchForm' onSubmit={this.handleSubmit}>
                        <legend>Search for cards</legend>
                        <input className='formbutton button' type='reset' value='Reset Form' onClick={this.clearTextState}/>
                        <fieldset>
                            <label htmlFor='cardName' className='searchLabel'>Card Name</label> 
                            <input id='cardName' type='text' className='selectStyle' name='name' placeholder='Black Lotus'/>
                        </fieldset>
                        <fieldset>
                            <label className='searchLabel'>Color</label>
                            <div>
                                <input type='radio' name='atmost' value='c<='/>at most
                                <input type='radio' name='atleast' value='c>='/>at least
                            </div>
                            <div className='colorCheckboxes'>
                                <input id='colorIdentityWhite' type='checkbox' name='colorIdentity' value='w'/>White
                                <input id='colorIdentityBlue' type='checkbox' name='colorIdentity' value='u'/>Blue
                                <input id='colorIdentityBlack' type='checkbox' name='colorIdentity'value='b'/>Black
                                <input id='colorIdentityRed' type='checkbox' name='colorIdentity' value='r'/>Red
                                <input id='colorIdentityGreen' type='checkbox' name='colorIdentity' value='g'/>Green
                                <input id='colorIdentitycolorless' type='checkbox' name='colorIdentity' value='c'/>Colorless
                            </div>
                            <div className='cmcphyrexian'>
                                <label className='cmc'>CMC</label>
                                <input type='number' min='0' max='1000001'/>
                                <input type='checkbox' value='<='/><label>&lt;=</label>
                                <input type='checkbox' value='>='/><label>&gt;=</label>
                                <input type='checkbox' value='phyrexian'/><label>Phyrexian Mana</label>
                            </div>
                        </fieldset>
                        <fieldset>
                            <label className='searchLabel'>Types</label>
                            <select name='supertypes' id='supertypes'className='supertype' defaultValue={'default'}>
                                <option disabled hidden value='default'>SuperType</option>
                                {paramOptions.supertypes.map(i => {
                                    return <option id='supertypes' key={i} name='types' value={'t:'+i+'+'}>{i}</option>
                                })}
                            </select>
                            
                            <select name='types' id='types' className='types' defaultValue={'default'} onChange={(e) =>additionalTypesDropdown(e)}>
                            <option disabled hidden value='default'>Type</option>
                                {paramOptions.types.map(i => {
                                    return <option id='types' key={i} name='types' value={'t:'+i+'+'}>{i}</option>
                                })} 
                            </select>
                            <br/>
                            {!this.state.validType ? <span></span>: showNewDropdown}

                            <input type='radio' name='typeOption' value='is:modal+'/>Modal
                            <input type='radio' name='typeOption' value='is:historic+'/>Historic
                            <input type='radio' name='typeOption' value='is:vanilla+'/>Textless Creature
                        </fieldset>
                        <fieldset>
                        <label className='searchLabel'>Exact text</label> <span>you can use ~ inplace of card name</span>
                            <input id='text' type='text' className='selectStyle' name='text' onKeyPress={this.keyPressed} placeholder='hexproof'/>
                            <div className='exactTextButtons'>
                                <input type='button' className='button' value='Clear' onClick={this.clearTextState}/>
                                <input type='button' className='button' value='Add'  onClick={this.handleAddText}/>
                            </div>
                            <div>
                                <label>Searching for:</label>
                                {<ul className='textList'>
                                    {this.state.text.map((t, i)=>{
                                    return <li className='textListItem' onClick={this.removeItem} value={i} id={i} key={i}>
                                        {t} &#x02717;
                                        </li>
                                    })}
                                </ul>}
                            </div>
                        </fieldset>
                        <fieldset>
                            <div>
                                <label>Power</label>
                                <select>
                                <option hidden value='default'>Power</option> 
                                    {this.state.powerTypes.map(i => {
                                        return <option id='power' key={i} name='power' value={i}>{i}</option>
                                    })}
                                </select>
                            </div>
                            <div>
                                <label>Toughness</label>
                                <select>
                                <option hidden value='default'>Toughness</option> 
                                    {this.state.toughnessTypes.map(i => {
                                        return <option id='power' key={i} name='power' value={i}>{i}</option>
                                    })}
                                </select>
                            </div>
                            <div>
                                <label>Combined P and T</label>
                                <input type='number' name='combinedPT'/>
                            </div>
                            <div>
                                <label>Loyalty</label>
                                <select>
                                <option hidden value='default'>Loyalty</option> 
                                    {paramOptions.loyaltyTypes.map(i => {
                                        return <option id='power' key={i} name='power' value={i}>{i}</option>
                                    })}
                                </select>
                            </div>
                        </fieldset>
                        <fieldset>
                        <label htmlFor='rarity' className='searchLabel'>Rarity</label>
                            <select name='rarity' id='rarity' className='selectStyle' defaultValue={'default'}>
                                <option disabled hidden value='default'>Select</option>
                                    {paramOptions.rarity.map(i => {
                                        return <option id='rarity' key={i} name='rarity' value={i}>{i}</option>
                                    })}
                            </select>
                        </fieldset>
                        <fieldset>
                        <label htmlFor='sets' className='searchLabel'>Set</label>
                            <input type='text' list='sets' className='selectStyle' name='sets'/>
                            <datalist id='sets'>
                                {this.state.setOptions.map(set => {
                                    return <option id='setoption' key={set.id} name={set.code} value={set.name}></option>
                                })}
                                </datalist>
                            <input type='checkbox' name='blockSearch' value='b:'/>Search Block Containing This Set
                        </fieldset>
                        <div>
                            <input className='collapseButton button' onClick={this.expandCollapse} type='button' value={this.state.exp_col}/>
                            <input className='formbutton button' type='reset' value='Reset Form' onClick={this.clearTextState}/>
                            <input className='formbutton button' type='submit' value='Search'/>
                        </div>
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