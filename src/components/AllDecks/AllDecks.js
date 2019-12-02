import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './AllDecks.css'

export default class AllDecks extends Component {
    render(){
        return(
            <>
                <p>My Decks</p>
                <div className='deck'>
                    <Link className='deckLink' to='/deck/:deckId'>Example Deck</Link>
                    <button>Delete deck</button>
                </div>
                <div className='deck'>
                    <Link className='deckLink' to='/deck/:deckId'>Bird Deck</Link>
                    <button>Delete deck</button>
                </div>
                <div className='deck'>
                    <Link className='deckLink' to='/deck/:deckId'>Elf Deck</Link>
                    <button>Delete deck</button>
                </div>
                <div className='deck'>
                    <Link className='deckLink' to='/deck/:deckId'>Treefolk Deck</Link>
                    <button>Delete deck</button>
                </div>
                <div className='deck'>
                    <Link className='deckLink' to='/deck/:deckId'>Goblin Deck</Link>
                    <button>Delete deck</button>
                </div>
            </>
        )
    }
}