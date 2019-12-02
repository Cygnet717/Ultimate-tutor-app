import React, {Component} from 'react'

import './CardResults.css'

export default class CardResults extends Component{
    render(){
    return(
        <section>
                Results:<br/>
                    <div className='cardsDisplay'>
                    <div className='card'>
                        <img alt='alt' src='http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=132072&type=card'/><br/>
                        <select>
                            <option type='select' name='deck'>Deck 1</option>
                            <option type='select' name='deck'>Deck 2</option>
                            <option type='select' name='deck'>Deck 3</option>
                            <option type='select' name='deck'>Deck 4</option>
                        </select><br/>
                        <button>Add to deck</button>
                    </div>
                    <div className='card'>
                        <img alt='alt' src="http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=129459&type=card"/><br/>
                        <select>
                                <option type='select' name='deck'>Deck 1</option>
                                <option type='select' name='deck'>Deck 2</option>
                                <option type='select' name='deck'>Deck 3</option>
                                <option type='select' name='deck'>Deck 4</option>
                            </select><br/>
                            <button>Add to deck</button>
                    </div>
                    <div className='card'>
                        <img alt='alt' src= "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=129913&type=card"/><br/>
                        <select>
                                <option type='select' name='deck'>Deck 1</option>
                                <option type='select' name='deck'>Deck 2</option>
                                <option type='select' name='deck'>Deck 3</option>
                                <option type='select' name='deck'>Deck 4</option>
                            </select><br/>
                            <button>Add to deck</button>
                    </div>
                    <div className='card'>
                        <img alt='alt' src="http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=134753&type=card"/><br/>
                        <select>
                                <option type='select' name='deck'>Deck 1</option>
                                <option type='select' name='deck'>Deck 2</option>
                                <option type='select' name='deck'>Deck 3</option>
                                <option type='select' name='deck'>Deck 4</option>
                            </select><br/>
                            <button>Add to deck</button>
                    </div>
                    <div className='card'>
                        <img alt='alt' src="http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=130550&type=card"/><br/>
                        <select>
                                <option type='select' name='deck'>Deck 1</option>
                                <option type='select' name='deck'>Deck 2</option>
                                <option type='select' name='deck'>Deck 3</option>
                                <option type='select' name='deck'>Deck 4</option>
                            </select><br/>
                            <button>Add to deck</button>
                    </div>
                    <div className='card'>
                        <img alt='alt' src="http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=129465&type=card"/><br/>
                        <select>
                                <option type='select' name='deck'>Deck 1</option>
                                <option type='select' name='deck'>Deck 2</option>
                                <option type='select' name='deck'>Deck 3</option>
                                <option type='select' name='deck'>Deck 4</option>
                            </select><br/>
                            <button>Add to deck</button>
                    </div>
                </div>
        </section>
    )
}
}