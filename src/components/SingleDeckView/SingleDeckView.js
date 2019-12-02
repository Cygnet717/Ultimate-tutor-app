import React, { Component } from 'react'

export default class SingleDeckView extends Component {
    render() {
        return(
            <section>
            <h2>Example Deck</h2>
            <br/>
            <div className='cardsDisplay'>
            <div className='card'>
                <img alt='alt' src='http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=132072&type=card'/>
                <br/><button>remove</button>
            </div>
            <div className='card'>
                <img alt='alt' src="http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=129459&type=card"/>
                <br/>
                <button>remove</button>
            </div>
            <div className='card'>
                <img alt='alt' src= "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=129913&type=card"/>
                <br/>
                <button>remove</button>
            </div>
            <div className='card'>
                <img alt='alt' src="http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=134753&type=card"/>
                <br/>
                <button>remove</button>
            </div>
            <div className='card'>
                <img alt='alt' src="http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=130550&type=card"/>
                <br/>
                <button>remove</button>
            </div>
            <div className='card'>
                <img alt='alt' src="http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=129465&type=card"/>
                <br/>
                <button>remove</button>
            </div>
        </div>
        </section>
        )
    }
}