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
            setOptions: [],
            expanded: false,
            visible: 'hidden',
            exp_col: 'Expand',
            string: '',
            nextPage: null,
            lastResults: false,
            error: 'hidden'
        }
    }

    executeScroll= () => {
        window.scrollTo({
            top: 800,
            behavior: 'smooth'
        })
    }

    scrollUp =()=>{
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        })
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

        if(data.get('name')){
            const regex= / /gi;
            let nameString = data.get('name').replace(regex, '+')
            this.sendNameFetch(nameString)
        } else {
            queryParams.map(i => {
                if(data.get(i)){
                    string = string.concat(data.get(i))
                }
                return string;
            });
            
            let operatorParams = ['power', 'toughness', 'combinedPT', 'loyalty', 'rarity', 'cmc'];
            //check that there is an operator value
            operatorParams.map(i => {
                if(data.get(i) === 'default' || data.get(i) === ''){
                    return 'return';
                } else {
                    string = string.concat(data.get(i+'Operator') + data.get(i) + '+')
                }
                return string;
            })

            if(data.get('color')){
                let collectColors='';
                data.getAll('color').map(c => collectColors = collectColors.concat(c))
                string = string.concat(data.get('colorOperator') +collectColors+'+')
            }
            
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
            this.setState({ 
                string,
                lastResults: false,
            })
            this.sendFetch(string)
        }
    }

    searchMore =()=>{
        this.setState({ 
            thinking: true,
         });
        MTGCardSearchService.getNextPageResults(this.state.nextPage)
        .then(res =>{
            if(res.has_more){
                this.setState({
                    thinking: false,
                    lastResults:false,
                    nextPage: res.next_page
                })
            } else {
                this.setState({ 
                    lastResults: true,
                    thinking: false,
                    nextPage: null
                })
                
            }
            this.setState({
                cards: this.state.cards.concat(res.data),
            })
            if(this.state.cards.length > 0){this.executeScroll()}
        })
        .catch(res => console.log(res.warnings))
    }

    sendNameFetch = (name) => {
        MTGCardSearchService.getNameSearchResults(name)
        .then(res => {
                if(!res){
                    throw res
                } else {
                    let cardArr = [res]
                this.setState({ 
                    lastResults: true,
                    thinking: false,
                    nextPage: null,
                    cards: cardArr
                })
                }
                
            
            if(this.state.cards.length > 0){this.executeScroll()}
        })
        .catch(res => {
            this.setState({
                error: 'error'
            })
        })
    }

    sendFetch = (parameters) => {
        MTGCardSearchService.getSearchResults(parameters)
        .then(res =>{
            if(res.has_more){
                this.setState({
                    thinking: false,
                    lastResults:false,
                    nextPage: res.next_page
                })
            } else {
                this.setState({ 
                    lastResults: true,
                    thinking: false,
                    nextPage: null
                })
            }
            this.setState({
                cards: this.state.cards.concat(res.data),
            })
            if(this.state.cards.length > 0){this.executeScroll()}
        })
        .catch(res => console.log(res.warnings))
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
            let setOpt = await fetch('https://api.scryfall.com/sets').then(res=> res.json());
            
            let filteredSetOptions = setOpt.data.filter(set => set.set_type !== "token")

            currentComponent.setState({
                Creature: creatTypes.data,
                Planeswalker: planeswTypes.data,
                setOptions: filteredSetOptions
            })
        };
        fetchDropdowns();
    };

    uncheckColorless(){
        document.getElementById('colorColorless').checked = false
    };

    uncheckColors(){
       for(let i=0; i<5; i++){
           document.getElementsByName('color')[i].checked = false
       }
    };
    
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

        let cardResults = this.state.cards.map(card =>{
                return <CardResults {...card} key={card.id}/>   
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
                        <fieldset className='fieldsetBox'>
                            <label htmlFor='cardName' className='searchLabel'>Card Name</label> 
                            <input id='cardName' type='text' className='selectStyle' name='name' placeholder='Black Lotus'/>
                            <br/>
                            <span className={this.state.error}>Too many cards match ambiguous name</span>
                        </fieldset>
                        <fieldset className='fieldsetBox'>
                            <label className='searchLabel'>Color</label>
                            <div className='colorOperator'>
                                <label>at most<input type='radio' name='colorOperator' defaultChecked value='c<='/></label>
                            </div>
                            <div className='colorOperator'>
                                <label>at least<input type='radio' name='colorOperator' value='c>='/></label>
                            </div>
                            <div className='colorCheckboxes' onClick={() => this.uncheckColorless()}>
                                <label className='colorLabel'>White<input id='colorWhite' type='checkbox' name='color' value='w'/></label>
                                <label className='colorLabel'>Blue<input id='colorBlue' type='checkbox' name='color' value='u'/></label>
                                <label className='colorLabel'>Black<input id='colorBlack' type='checkbox' name='color'value='b'/></label>
                                <label className='colorLabel'>Red<input id='colorRed' type='checkbox' name='color' value='r'/></label>
                                <label className='colorLabel'>Green<input id='colorGreen' type='checkbox' name='color' value='g'/></label>
                            </div>
                            <div className='colorlessBox'>
                                <label>Colorless<input onClick={() => this.uncheckColors()} id='colorColorless' type='radio' name='color' value='c'/></label>
                            </div>
                            
                            <div className='cmcCheckboxes'>
                                <label className='cmc'>CMC</label>
                                <div className='cmcOperators'>
                                    <label>&lt;=<input type='radio' name='cmcOperator' value='cmc<='/></label>
                                    <label>=<input type='radio' name='cmcOperator' value='cmc='/></label>
                                    <label>&gt;=<input type='radio' name='cmcOperator' value='cmc>='/></label>
                                </div>
                                <input type='number' className='center' name='cmc' min='0' max='1000001'/>
                            </div>
                        </fieldset>
                        <fieldset className='fieldsetBox'>
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
                            <div className='typeRadioBox'>
                                <label className='radioLabel'>Modal<input type='radio' name='typeOption' value='is:modal+'/></label>
                                <label className='radioLabel'>Historic<input type='radio' name='typeOption' value='is:historic+'/></label>
                                <label className='radioLabel'>Textless Creature<input type='radio' name='typeOption' value='is:vanilla+'/></label>
                            </div>
                        </fieldset>
                        <fieldset className='fieldsetBox'>
                        <label className='searchLabel'>Exact text</label> <span className='tooltip'>you can use ~ inplace of card name</span>
                            <input id='text' type='text' className='selectStyle showTooltip' name='text' onKeyPress={this.keyPressed} placeholder='hexproof'/>
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
                        <fieldset className='fieldsetBox'>
                            <div>
                                <label className='searchLabel'>Power</label>
                                <select name='power' className='selectStyle' defaultValue={'default'}>
                                <option hidden value='default'>Power</option> 
                                    {paramOptions.powTou.map(i => {
                                        return <option id='power' key={i} name='power' value={i}>{i}</option>
                                    })}
                                </select>
                                <div className='typeRadioBox'>
                                    <label>&gt;=<input type='radio' name='powerOperator' value='pow>='/></label>
                                    <label>=<input type='radio' name='powerOperator' value='pow='/></label>
                                    <label>&lt;=<input type='radio' name='powerOperator' value='pow<='/></label>
                                </div>
                            </div>
                            <div>
                                <label className='searchLabel'>Toughness</label>
                                <select name='toughness' className='selectStyle' defaultValue={'default'}>
                                <option hidden value='default'>Toughness</option> 
                                    {paramOptions.powTou.map(i => {
                                        return <option id='toughness' key={i} name='toughness' value={i}>{i}</option>
                                    })}
                                </select>
                                <div className='typeRadioBox'>
                                    <label>&gt;=<input type='radio' name='toughnessOperator' value='tou>='/></label>
                                    <label>=<input type='radio' name='toughnessOperator' value='tou='/></label>
                                    <label>&lt;=<input type='radio' name='toughnessOperator' value='tou<='/></label>
                                </div>
                            </div>
                            <div>
                                <label className='searchLabel'>Combined P and T</label>
                                <input type='number' name='combinedPT'/>
                                <br/>
                                <div className='typeRadioBox'>
                                    <label>&gt;=<input type='radio' name='combinedPTOperator' value='pt>='/></label>
                                    <label>=<input type='radio' name='combinedPTOperator' value='pt='/></label>
                                    <label>&lt;=<input type='radio' name='combinedPTOperator' value='pt<='/></label>
                                </div>
                            </div>
                            <div>
                                <label className='searchLabel'>Loyalty</label>
                                <select name='loyalty' className='selectStyle' defaultValue={'default'}>
                                <option hidden value='default'>Loyalty</option> 
                                    {paramOptions.loyaltyTypes.map(i => {
                                        return <option id='loyalty' key={i} name='loyalty' value={i}>{i}</option>
                                    })}
                                </select>
                                <div className='typeRadioBox'>
                                    <label>&gt;=<input type='radio' name='loyaltyOperator' value='loy>='/></label>
                                    <label>=<input type='radio' name='loyaltyOperator' value='loy='/></label>
                                    <label>&lt;=<input type='radio' name='loyaltyOperator' value='loy<='/></label>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset className='fieldsetBox'>
                        <label htmlFor='rarity' className='searchLabel'>Rarity</label>
                            <select name='rarity' id='rarity' className='selectStyle' defaultValue={'default'}>
                                <option hidden value='default'>Select</option>
                                    {paramOptions.rarity.map(i => {
                                        return <option id='rarity' key={i} name='rarity' value={i}>{i}</option>
                                    })}
                            </select>
                            <div className='typeRadioBox'>
                                <label>&gt;=<input type='radio' name='rarityOperator' value='r>='/></label>
                                <label>=<input type='radio' name='rarityOperator' value='r='/></label>
                                <label>&lt;=<input type='radio' name='rarityOperator' value='r<='/></label>
                            </div>
                        </fieldset>
                        <fieldset className='fieldsetBox'>
                        <label htmlFor='sets' className='searchLabel'>Set</label>
                            <input type='text' list='sets' className='selectStyle' name='sets'/>
                            <datalist id='sets'>
                                {this.state.setOptions.map(set => {
                                    return <option id='setoption' key={set.id} name={set.code} value={set.name}></option>
                                })}
                                </datalist>
                                <br/>
                            <label>Search Block Containing This Set<input type='checkbox' name='blockSearch' value='b:'/></label>
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
                {this.state.thinking ? this.renderThinking() : cardResults}
                </div>
                {this.state.cards.length === 0 ?<div/>: this.moreButon()}
            </div>
        )
    }
}
//&& this.state.count === 1
//