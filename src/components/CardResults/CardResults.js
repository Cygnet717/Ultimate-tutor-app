import React from 'react'

import './CardResults.css'

export default function CardResults(props){
    
    return(
        <section>
            
                <div className='card'>
                    <p>{props.name}</p>
                    <img alt={props.name} src={props.imageUrl}/><br/>
                    <select>
                        <option type='select' name='deck'>Deck 1</option>
                        <option type='select' name='deck'>Deck 2</option>
                        <option type='select' name='deck'>Deck 3</option>
                        <option type='select' name='deck'>Deck 4</option>
                    </select><br/>
                    <button>Add to deck</button>
                </div>   
            
        </section>
    )
}
