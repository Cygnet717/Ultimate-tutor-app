import React, {Component} from 'react'
import './CardResults.css'
//import styled, {keyframes} from 'styled-components'
//import {bounce} from 'react-animations'
//const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;



export default class CardResults extends Component{
    constructor(props){
        super(props);
        this.state = {
            classNames: "modal",
        }
    }
    
    closeUp = () => {
        this.setState({ classNames: 'showmodal'})
    }

    removeCloseUp = () => {
        this.setState({ classNames: 'modal'})
    }
    render(){
        const cardRulings = this.props.rulings.map((ruling, i) =>{
            return <p key={i}> {ruling.date}: {ruling.text} </p>
         })
    return(
        <section>
            
                <div className='card'>
                    <p>{this.props.name}</p>
                    <img alt={this.props.name} src={this.props.imageUrl} onClick={this.closeUp}/><br/>
                    <select>
                        <option type='select' name='deck'>Deck 1</option>
                        <option type='select' name='deck'>Deck 2</option>
                        <option type='select' name='deck'>Deck 3</option>
                        <option type='select' name='deck'>Deck 4</option>
                    </select><br/>
                    
                    <div id="myModal" className={this.state.classNames}>
                        <span className="close" onClick={this.removeCloseUp}>&times;</span>
                        <img className="modal-content" alt={this.props.name} src={this.props.imageUrl}/>
    <div id="caption">Rulings: {cardRulings}</div>
                    </div>
                    
                    <button>Add to deck</button>
                </div>   
            
        </section>
    )
}
}
