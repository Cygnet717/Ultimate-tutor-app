import React, {Component} from 'react'
import CardResults from '../CardResults/CardResults'
import './SearchCards.css'

export default class SearchCards extends Component {
    render(){
        return(
            <div>
                <section>
                    <form>
                        <legend>Search for cards</legend>
                        <label>Card Name</label> 
                            <input type='text' name='name' placeholder='Black Lotus'/>
                        <br/>
                        <label>Color Identity</label> 
                            <input type='checkbox' />Red
                            <input type='checkbox' name='green' />Green
                            <input type='checkbox' name='white' />White
                            <input type='checkbox' name='black'/>Black
                            <input type='checkbox' name='blue' />Blue
                        <br/>
                        <label>Card Type</label> 
                        <select>
                            <option type='select' name='type'>Creature</option>
                            <option type='select' name='type'>Instnat</option>
                            <option type='select' name='type'>Sorcery</option>
                            <option type='select' name='type'>PlanesWalker</option>
                            <option type='select' name='type'>Enchantment</option>
                        </select>
                        <br/>
                        <button>Search</button>
                    </form>
                </section>
                <CardResults/>
            </div>
        )
    }
}